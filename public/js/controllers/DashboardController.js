(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('DashboardController', DashboardController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function DashboardController ($rootScope, DashboardFactory) {
            var vm = this;

            DashboardFactory.getComparison()
            DashboardFactory.getNeighbours()
          }
})()