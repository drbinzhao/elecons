(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('PowerController', PowerController)

        function PowerController ($rootScope, $scope, $route, $interval, socketio, ApiFactory) {
            $scope.$route = $route;
            const id = $scope.loggedUser.id
            
            //var socket = io.connect('http://localhost:3000')
            $interval(()=> {
              socketio.emit ("send readIndex", {
                id: $rootScope.username,
                urlCurrentPower: $rootScope.urlCurrentPower
                })
            }, 1000)

            socketio.on('new read', function(data) {
              $rootScope.current = data.current
              $rootScope.currentKW = ($rootScope.current)/1000
              $rootScope.date = data.date

              $rootScope.maxPower = ($rootScope.currentKW > $rootScope.maxPower) ? $rootScope.currentKW : $rootScope.maxPower

              ApiFactory.maxPower(id, $rootScope.maxPower)
              
            })
          
    };

})()