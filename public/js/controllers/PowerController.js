(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('PowerController', PowerController)

        function PowerController ($rootScope, $scope, $route, socketio) {
            $scope.$route = $route;
            //var vm = this;

            $rootScope.readings = []

            socketio.on('new read', function(data) {
              $rootScope.readings.push(data)
              console.log($rootScope.readings)
              $rootScope.current = data.current
              $rootScope.date = data.date
              $rootScope.accumulated = data.accumulated
              $rootScope.maxPower = $rootScope.readings.sort(function(a,b) {return (a.current < b.current) ? 1 : ((b.current < a.current) ? -1 : 0);} );
              $rootScope.maxPowerKW = (($rootScope.maxPower[0].current)/1000).toFixed(2)
              $rootScope.maxPowerDate = $rootScope.maxPower[0].date
              /*ApiFactory.maxPower(id, maxPower) */
            })

            console.log($rootScope.current)
        
    };
})()