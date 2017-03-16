(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('UserController', UserController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function UserController ($scope, $route) {
            $scope.$route = $route;
            var vm = this;
            

          }
})()
