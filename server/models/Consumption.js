const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const Consumption = new Schema({
  // hourlyConsumption:[{
  //   date: {type: Date, default: Date.now}, 
    consumption: {type: Number}
  //}]
});

Consumption.plugin( passportLocalMongoose );

module.exports = mongoose.model('Consumption', Consumption);

