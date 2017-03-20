(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('PowerController', PowerController)

        function PowerController ($rootScope, $scope, $route, socketio, ApiFactory) {
            $scope.$route = $route;
            const id = $scope.loggedUser.id
            //var vm = this;

            ApiFactory.maxPower(id, $rootScope.maxPowerKW) 

            socketio.on('new read', function(data) {
              // $rootScope.readings.push(data)
              $rootScope.current = data.current
              $rootScope.date = data.date
              // $rootScope.accumulated = data.accumulated

              //we got the power but not the date
              $rootScope.maxPower = $rootScope.maxPower || 0
              $rootScope.maxPower = (data.current > $rootScope.maxPower) ? data.current : $rootScope.maxPower
              $rootScope.maxPowerKW = ($rootScope.maxPower/1000).toFixed(2)
              console.log($rootScope.maxPowerKW)

              //ApiFactory.maxPower(id, $rootScope.maxPowerKW)   
          })
          
          //ApiFactory.maxPower(id, $rootScope.maxPowerKW)          

      //console.log($rootScope.maxPower)  
    };

})()