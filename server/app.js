const express = require('express')
const request = require('request');
const moment = require('moment')
const path = require('path')
const bodyParser = require('body-parser')

//routes here
const routesAuth = require('./routes/auth')
const routesPrivate = require('./routes/private')


const app = express()

const server = require('http').createServer(app);
const io = require('socket.io')(server);

//app.set('view engine', 'pug')
app.use(express.static( path.join(__dirname,'../public') ))

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

//app.get('/', (req, res) => res.send(`Hello! The API is at http://localhost:${PORT}/api`) );
app.use('/api', routesAuth );
app.use('/private', routesPrivate );

///-----------------------Web socket-------------------


//var dataReads = []
var connections = []
let uniqueInterval


//it listens a  message 'connection' and  will do the function
const url = 'http://fran.noip.me:8888/consumo?id=0001'
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

////---------------------End WEb socket ----------------------

 

module.exports = app
