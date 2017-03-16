(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('DashboardController', DashboardController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function DashboardController ($scope, $route, $rootScope, DashboardFactory) {
            $scope.$route = $route

            var vm = this;

            DashboardFactory.getComparison()
          }
})()