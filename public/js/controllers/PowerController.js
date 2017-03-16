(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('PowerController', PowerController)

        function PowerController ($rootScope, $scope, $route, socket) {
            $scope.$route = $route
            //var vm = this;
            //var socket = io.connect()

            $rootScope.readings = []

            socket.on('new read', function(data) {
              $rootScope.readings.push(data)
              $rootScope.current = data.current
              $rootScope.date = data.date
              $rootScope.accumulated = data.accumulated
              
            })

            $scope.$route = $route;
        
    };
})()