angular.module('EleconsApp', [])

.controller('getConsumptionController', function ($scope, $rootScope) {
    var vm = this;
    var socket = io.connect('http://localhost:3000')
    vm.readings = []
    
    socket.on('new read', function(data) {
      vm.readings.push(data.newRead)
      //console.log('Hello World!')
      console.log(vm.readings)
      vm.hola = 'hola'
    })
  })