(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('NeighboursController', NeighboursController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function NeighboursController ($rootScope, DashboardFactory) {
            var vm = this;

            DashboardFactory.getNeighbours()
          }
})()