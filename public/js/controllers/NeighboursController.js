(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('NeighboursController', NeighboursController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function NeighboursController ($scope, $route, $rootScope, NeighboursFactory) {
            $scope.$route = $route

            var vm = this;

            NeighboursFactory.getNeighbours()
          }
})()