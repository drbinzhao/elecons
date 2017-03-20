(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('PowerController', PowerController)

        function PowerController ($rootScope, $scope, $route, socketio, ApiFactory) {
            $scope.$route = $route;
            const id = $scope.loggedUser.id
            //var vm = this;

            $rootScope.readings = []

            socketio.on('new read', function(data) {
              $rootScope.readings.push(data)
              console.log($rootScope.readings)
              $rootScope.current = data.current
              $rootScope.date = data.date
              $rootScope.accumulated = data.accumulated

              $rootScope.maxPower = $rootScope.readings.sort(function(a,b) {return (a.current < b.current) ? 1 : ((b.current < a.current) ? -1 : 0);} );
              $rootScope.maxPowerKW = (($rootScope.maxPower[0].current))
              $rootScope.maxPowerDate = $rootScope.maxPower[0].date
              console.log($rootScope.maxPowerKW)
              let maxPower = $rootScope.maxPowerKW
              ApiFactory.maxPower(id, $rootScope.maxPowerKW)

            })

            console.log($rootScope.maxPowerKW)
        
    };
})()