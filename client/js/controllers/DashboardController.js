(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('DashboardController', DashboardController)
        
          function DashboardController ($scope, $route, $rootScope, DashboardFactory, ApiFactory) {
            $scope.$route = $route
            var vm = this;

            DashboardFactory.getComparison()

          }
})()