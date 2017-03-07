angular.module('EleconsApp')
   
  .controller('getConsumptionController', function ($scope, $rootScope) {
  var vm = this;
  var socket = io.connect('http://localhost:3000')

    socket.on('new read', function() {
      console.log('Hello World!')
    })
  })