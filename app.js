const express = require('express')
const request = require('request');
const moment = require('moment')
const path = require('path')
const app = express()

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000
const url = 'http://fran.noip.me:8888/consumo?id=0001'

app.use(express.static( path.join(__dirname,'public') ))

//var dataReads = []
var connections = []
let uniqueInterval

// app.get('/', function(req,res) {
//   res.sendFile(__dirname + '/index.html')
// })

//it listens a  message 'connection' and  will do the function
io.on('connection', function(socket){
  connections.push(socket);
  console.log(`Connected: ${connections.length} sockets connected`)
  
  if (uniqueInterval) clearInterval(uniqueInterval)
  // Emit - send data available
  //const myInterval =  
  uniqueInterval = setInterval( () => {
    request(url,  (error, response, body) => {

      let bodyParsed = body.replace(/\n/g,'')
      let current = bodyParsed.substring(bodyParsed.indexOf(':')+1);
      let accumulated = bodyParsed.substring(0,bodyParsed.indexOf(':'))

      let newRead = {
          date : moment(Date.now()).format('DD/MM/YYYY hh:mm:ss'), 
          current : +current,
          accumulated: +accumulated
        }
      //console.log(newRead)

    io.sockets.emit('new read', newRead)
    })
  }, 5000)

  //setTimeout(() => clearInterval(myInterval), 240000)

  //Disconnect
    socket.on('disconnect', function(data) {
      clearInterval(uniqueInterval)
      connections.splice(connections.indexOf(socket),1)
      console.log('Disconnected: %s sockets connected', connections.length )
    })
  })

 

server.listen( PORT, () => console.log(`Listening on ${PORT}...`) )
