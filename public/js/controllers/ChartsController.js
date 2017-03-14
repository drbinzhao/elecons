(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('ChartsController', ChartsController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function ChartsController ($rootScope, ChartsFactory) {
            var vm = this;

            ChartsFactory.getChartNow()
            ChartsFactory.getChartHourly()
            ChartsFactory.getChartDaily()

          }
})()