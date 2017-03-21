const request = require('request');
const moment = require('moment')


var connections = []
let uniqueInterval

function setSocketEvents(io) {

    //it listens a  message 'connection' and  will do the function
    io.sockets.on('connection', function(socket) {
        connections.push(socket);
        console.log(`Connected: ${connections.length} sockets connected`)

        socket.on("send readIndex", function(data) {
                socket.join(data.id)
                socket.url = data.urlCurrentPower
                console.log(socket.url)
                console.log(data.id)


                if (uniqueInterval) clearInterval(uniqueInterval)

                // Emit - send data available
                uniqueInterval = setInterval(() => {
                    request(socket.url, (error, response, body) => {

                        let bodyParsed = body.replace(/\n/g, '')
                        let current = bodyParsed.substring(bodyParsed.indexOf(':') + 1);
                        let accumulated = bodyParsed.substring(0, bodyParsed.indexOf(':'))

                        let newRead = {
                            date: moment(Date.now()).format('DD/MM/YYYY hh:mm:ss'),
                            current: +current,
                            accumulated: +accumulated
                        }

                        //Here comes the magic (but does not work) //.in('http://fran.noip.me:8888/consumo?id=0001')
                        io.to(data.id).emit('new read', newRead)
                    })
                
                }, 1000)

        })
            //Disconnect
        socket.on('disconnect', function(data) {
            clearInterval(uniqueInterval)
            connections.splice(connections.indexOf(socket), 1)
            console.log('Disconnected: %s sockets connected', connections.length)
        })

    })


}

module.exports = setSocketEvents
