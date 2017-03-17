const fs = require('fs');
const thereIsDotEnv = fs.existsSync('.env')
if ( thereIsDotEnv ) require('dotenv').config()

global.__base = __dirname + '/server/';

const app = require('./server/app');
const db = require('./server/db');

const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('./server/sockets')(io)

const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/elecons';
const PORT = process.env.PORT || 3000;

db.open(dbURI);
server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));