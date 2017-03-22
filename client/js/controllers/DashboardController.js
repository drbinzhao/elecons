(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('DashboardController', DashboardController)
        
          function DashboardController ($scope, $route, $rootScope, DashboardFactory, ApiFactory) {
            $scope.$route = $route
            var vm = this;

            $scope.showStatusDashboard = function (){
              if (2016 < 2017 ) {
                return true
              } else {
                return false
              }
            }
            
            DashboardFactory.getComparison()

        }
})()