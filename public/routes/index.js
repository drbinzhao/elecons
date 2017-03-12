// const express = require('express')
// const router = express.Router()

// const getAll = require('./handlers/getAll')
// const addClient = require('./handlers/addClient')

// router.get('/', getAll)
// router.post('/', addClient )

// module.exports = router

// io.on('connection', function(socket){
//   connections.push(socket);
//   console.log(`Connected: ${connections.length} sockets connected`)
  
//   if (uniqueInterval) clearInterval(uniqueInterval)
//   // Emit - send data available
//   //const myInterval =  
//   uniqueInterval = setInterval( () => {
//     request(url,  (error, response, body) => {

//       let bodyParsed = body.replace(/\n/g,'')
//       let current = bodyParsed.substring(bodyParsed.indexOf(':')+1);
//       let accumulated = bodyParsed.substring(0,bodyParsed.indexOf(':'))

//       let newRead = {
//           date : moment(Date.now()).format('DD/MM/YYYY hh:mm:ss'), 
//           current : +current,
//           accumulated: +accumulated
//         }
//       console.log(newRead)

//     io.sockets.emit('new read', newRead)
//     })
//   }, 5000)

//   //setTimeout(() => clearInterval(myInterval), 240000)

//   //Disconnect
//     socket.on('disconnect', function(data) {
//       clearInterval(uniqueInterval)
//       connections.splice(connections.indexOf(socket),1)
//       console.log('Disconnected: %s sockets connected', connections.length )
//     })
// })
