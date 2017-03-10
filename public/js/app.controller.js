angular.module('EleconsApp')
   
  .controller('getConsumptionController', ['socketio', function (socketio) {
    var vm = this;
    //var socket = io.connect()
    vm.readings = []

    socketio.on('new read', function(data) {
      vm.readings.push(data)
      vm.current = data.current
      vm.date = data.date
      vm.accumulated = data.accumulated
      //console.log(vm.readings)

    })
  

  
    /* Graph */
let myData = [ 'data1'/*, 12, 34, 45 */];
//let myAvg = ['avg']
let myAxis = ['x'/*,'2013/01/01', '2013/01/02', '2013/01/03'*/]
const chart = c3.generate({
  bindto: '#chart',
  data: {
    x: 'x',
    columns: [
      myAxis,
      myData
    ]
  },
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%H:%M:%S'
      }
    }
  }
});


var socket = io.connect()
  socket.on('new read', function(data) {
    //the list
    //const oList = document.getElementById('list')
    //const html = oList.innerHTML
    const value = data.current
    const date = Date.now()
    //oList.innerHTML = html + `<li>${value}</li>`
    myData.push( +value )
    myAxis.push( date )
    //console.log(myData)
    //console.log(myAxis)
    chart.load({ columns: [myAxis, myData] })
  })
}])
