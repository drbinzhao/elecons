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
      console.log(vm.readings)

    })
  }])
