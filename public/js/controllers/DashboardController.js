(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('DashboardController', DashboardController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function DashboardController ($scope, $route, $rootScope, DashboardFactory, ApiFactory) {
            $scope.$route = $route

            var vm = this;

            DashboardFactory.getComparison()


            // vm.users = [{"asa":"1"},{"bds":"2"},{"cd":"3"}]

          }
})()