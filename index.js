const fs = require('fs');
const thereIsDotEnv = fs.existsSync('.env')
if ( thereIsDotEnv ) require('dotenv').config()

global.__base = __dirname + '/server/';

const app = require('./server/app');
const db = require('./server/config/db');

const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('./server/sockets')(io)

const dbURI = process.env.DB_URI 
const PORT = process.env.PORT 

db.open(dbURI);
server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));