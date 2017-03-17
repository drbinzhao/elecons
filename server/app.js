const express = require('express')
//const request = require('request');
//const moment = require('moment')
const path = require('path')
const bodyParser = require('body-parser')

//routes here
const routesAuth = require('./routes/auth')
const routesPrivate = require('./routes/private')

const routesApi = require('./routes/api')

const app = express()

//app.set('view engine', 'pug')
app.use(express.static( path.join(__dirname,'../public') ))

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

//app.get('/', (req, res) => res.send(`Hello! The API is at http://localhost:${PORT}/api`) );
app.use('/auth', routesAuth );
app.use('/private', routesPrivate );

app.use('/api', routesApi );

module.exports = app
