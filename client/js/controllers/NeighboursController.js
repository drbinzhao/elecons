(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('NeighboursController', NeighboursController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function NeighboursController ($scope, $route, $rootScope, ApiFactory, NeighboursFactory) {
            $scope.$route = $route

            var vm = this;
            ApiFactory.getUsers()
              .then(function(response){
                let aUsers = response.data.users
                console.log(aUsers.length)

              console.log($rootScope.neighboursPosition)
              console.log(aUsers.length)

            $scope.showStatusNeighbours = function (){
              if ($rootScope.neighboursPosition < (aUsers.length/2)) {
                return true
              } else {
                return false
              }
            }
            })

            NeighboursFactory.getNeighbours()
            NeighboursFactory.getNeighboursPosition()
          }
})()