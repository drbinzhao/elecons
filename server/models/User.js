const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({
  createdAt: {type: Number, default: 
    Date.now},
  firstName: {type: String},
  lastName:{type: String},
  email: {type: String},
  contractedPower: String,
  energyTariff: String,
  updatedAt: {type: Number},
  maxPower: {type: String},
  urlCurrentPower: {type: String},
  consumption2016: {type: Number},
  consumption2017: {type: Number}
});

User.plugin( passportLocalMongoose );

module.exports = mongoose.model('User', User);


  // //DASHBOARD !! see comments
  // monthConsumptionCurrentYear: {type: Number, default: Math.random},
  // monthConsumptionLastYear: {type: Number, default: Math.random},
  // savingsCurrentMonth: {type: Number}, //this is clear to be a factory/service
  // statusSavings: {type: Boolean},
  // /* monthly consumption to be an array int he DB, and  use getMonth() to select the postition of an array 
  // in the factory or controller to filter the array. Array could be random generated" here?
  // */

  // //NEIGHBOURS !! see comments
  // totalPosition: Number, //--> it will be the getAllUsers().length in the factory or controller
  // statusNeighbours: {type: Boolean},
  // //neighboursGauge: % ranges,
  
  // //CHARTS !! see comments
  // dailyConsumption: [{date: Date, dayConsumption: Number}],
  // hourConsumption: [{date: Date, hourConsumption: Number}]

  // //REALTIME
  // totalPosition: Number, //--> it will be the getAllUsers().length in the factory or controller
  // statusNeighbours: {type: Boolean},
  // //neighboursGauge: % ranges,
  
  

  // /* monthly consumption to be an array int he DB, and  use getMonth() to select the postition of an array 
  // in the factory or controller to filter the --> we need 2
  // we need []
  // */
  

