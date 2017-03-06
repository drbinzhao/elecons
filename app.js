const express = require('express')
const request = require('request');
const app = express()

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000
const url = 'http://fran.noip.me:8888/consumo?id=0001'

app.use(express.static('public'))

var dataReads = []
var connections = []

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html')
})


// const myInterval = setInterval( () => {
//   request(url,  (error, response, body) => console.log(body) )
// }, 30000)

// setTimeout(() => clearInterval(myInterval), 240000)

// console.log("running interval requests....")


server.listen( PORT, () => console.log(`Listening on ${PORT}...`) )


//it listens a  message 'connection' and  will do the function
io.on('connection', function(socket){
  connections.push(socket);
  console.log(`Connected: ${connections.length} sockets connected`)
  
  // Emit - send data available
  socket.emit('new read', request(url,  (error, response, body) => {
    console.log(body)
    io.sockets.emit('new read', {reading:body})
  }))

  //Disconnect
  socket.on('disconnect', function(data) {
    connections.splice(connections.indexOf(socket),1)
    console.log('Disconnected: %s sockets disconnected', connections.length)
  })

})

// function getData() {
//       const myInterval = setInterval( () => {
//       request(url,  (error, response, body) => console.log(body) )
//       }, 30000)
//       setTimeout(() => clearInterval(myInterval), 240000)
//       })
//     }