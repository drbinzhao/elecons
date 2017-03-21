const request = require('request');
const moment = require('moment')


//url depends on user id

//let url = 'http://fran.noip.me:8888/consumo?id=0001'
// const url2 = 'http://fran.noip.me:8888/consumo?id=0002'
// const url3 = 'http://fran.noip.me:8888/consumo?id=0003'
// const url4 = 'http://fran.noip.me:8888/consumo?id=0004'
// const url5 = 'http://fran.noip.me:8888/consumo?id=0005'


//var dataReads = []
var connections = []
let uniqueInterval

function setSocketEvents(io) {

  //it listens a  message 'connection' and  will do the function
  io.on('connection', function(socket){
    connections.push(socket);
    console.log(`Connected: ${connections.length} sockets connected`)

    socket.on("send readIndex", function(data){
      socket.url = data.urlCurrentPower
      console.log(socket.url)
    

    if (uniqueInterval) clearInterval(uniqueInterval)

    // Emit - send data available
    uniqueInterval = setInterval( () => {
      request(socket.url,  (error, response, body) => {

        let bodyParsed = body.replace(/\n/g,'')
        let current = bodyParsed.substring(bodyParsed.indexOf(':')+1);
        let accumulated = bodyParsed.substring(0,bodyParsed.indexOf(':'))

        let newRead = {
            date : moment(Date.now()).format('DD/MM/YYYY hh:mm:ss'),
            current : +current,
            accumulated: +accumulated
          }

      io.sockets.emit('new read', newRead)
      })
    }, 1000)

})
    //Disconnect
    socket.on('disconnect', function(data) {
      clearInterval(uniqueInterval)
      connections.splice(connections.indexOf(socket),1)
      console.log('Disconnected: %s sockets connected', connections.length )
    })

  })


}

module.exports = setSocketEvents
