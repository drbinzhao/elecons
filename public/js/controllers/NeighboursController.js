(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('NeighboursController', NeighboursController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function NeighboursController ($rootScope, NeighboursFactory) {
            var vm = this;

            NeighboursFactory.getNeighbours()
          }
})()