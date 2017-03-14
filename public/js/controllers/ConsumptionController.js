(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('getConsumptionController', ['socketio','$rootScope', function (socketio, $rootScope) {
            //var vm = this;
            //var socket = io.connect()
            $rootScope.readings = []

            socketio.on('new read', function(data) {
              $rootScope.readings.push(data)
              $rootScope.current = data.current
              $rootScope.date = data.date
              $rootScope.accumulated = data.accumulated
              console.log($rootScope.current)
            })
        
    }]);
})()