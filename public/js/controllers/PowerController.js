(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('PowerController', PowerController)

        function PowerController ($rootScope, $scope, $route, socketio, ApiFactory) {
            $scope.$route = $route;
            const id = $scope.loggedUser.id
            //var vm = this;

            //ApiFactory.maxPower(id, $rootScope.maxPowerKW) 

            socketio.on('new read', function(data) {
              $rootScope.current = data.current
              $rootScope.currentKW = ($rootScope.current)/1000
              $rootScope.date = data.date

              $rootScope.maxPower = ($rootScope.currentKW > $rootScope.maxPower) ? $rootScope.currentKW : $rootScope.maxPower
              //console.log($rootScope.maxPower)

              ApiFactory.maxPower(id, $rootScope.maxPower)
              
            })
          
    };

})()