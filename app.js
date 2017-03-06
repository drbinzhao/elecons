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



  setInterval( () => {
    request(url,  (error, response, body) => {
      console.log(typeof body) 
      let bodyParsed = body.replace(/\n/g,'')
      let current = bodyParsed.substring(bodyParsed.indexOf(':')+1);
      let accumulated = bodyParsed.substring(0,bodyParsed.indexOf(':'))
      dataReads.push({
          date : Date.now(), 
          current : current,
          accumulated: accumulated
        })
      console.log(dataReads)
    })
  }, 5000)
  //setTimeout(() => clearInterval(myInterval), 240000)




// //it listens a  message 'connection' and  will do the function
// io.on('connection', function(socket){
//   connections.push(socket);
//   console.log(`Connected: ${connections.length} sockets connected`)
  
//   // Emit - send data available
//   socket.emit('new read', function (data) {
//     getData(data)
//     console.log(data)
//   })

//   //console.log(getData())
//     function getData() { 
//       const myInterval = setInterval ( () => {
//         request(url,  (error, response, body) => {
//           console.log(body) } , 3000 )
//       setTimeout(() => clearInterval(myInterval), 240000)
//       //return (body)
//       })
//     } 
//   //io.sockets.emit('new read', {reading:body})
// })

server.listen( PORT, () => console.log(`Listening on ${PORT}...`) )

// function getData() {
//   const myInterval = setInterval( () => {
//   request(url,  (error, response, body) => console.log(body) )
//   }, 30000)
//   setTimeout(() => clearInterval(myInterval), 240000)
// }

// getData()


// const myInterval = setInterval( () => {
//   request(url,  (error, response, body) => console.log(body) )
// }, 30000)

// setTimeout(() => clearInterval(myInterval), 240000)

// console.log("running interval requests....")

