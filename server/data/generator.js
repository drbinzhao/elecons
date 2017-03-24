// generate the random data to each new registered user

const fs = require('fs')
// const mkdirp = require('mkdirp');

function getDate(index) {
    const startDate = new Date(2015, 0, 1)
    const dayOffset = 24 * 60 * 60 * 1000 * index + 1
    return +new Date(startDate.getTime() + dayOffset)
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = function(id) {

const dataUser = {
    hourly: Array(24).fill(0).map(elem => +(Math.random() * 3).toFixed(2)),
    monthly: Array(2).fill(0).map(elem => +(getRandomInt(100, 200)).toFixed(2)),
    yearly: Array(810).fill(0).map((elem, i) => [getDate(i), +(Math.random() * 10).toFixed(2)])
}

const jsonToWrite = JSON.stringify(dataUser, null, 4)

  
  const folderPath = __dirname + '/users/';
  fs.writeFileSync(folderPath + id + ".json", jsonToWrite)
  console.log(`data.json was created at ${folderPath}!`);

    return dataUser
  // mkdirp(folderPath, function(err) {
      // if (err) throw err
      // console.log(`folder ${folderPath} created!!`) 
      
      // , function(err) {
          // if (err) throw err
  
      // });

} 
