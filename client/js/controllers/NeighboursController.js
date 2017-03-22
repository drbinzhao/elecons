(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('NeighboursController', NeighboursController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function NeighboursController ($scope, $route, $rootScope, ApiFactory, NeighboursFactory) {
            $scope.$route = $route

            var vm = this;

            $scope.showStatusNeighbours = function (){
              if ($rootScope.neighboursPosition < 4 ) {
                return true
              } else {
                return false
              }
            }

            NeighboursFactory.getNeighbours()
            NeighboursFactory.getNeighboursPosition()
          }
})()