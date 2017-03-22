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

            // ApiFactory.getUsers()
            //   .then(function(response){
            //     let aUsers = response.data.users
            //     let newArrayUsers = aUsers.map(function(obj){
            //       let rObj = {}
            //       let savings = Number(obj.consumption2016) - Number(obj.consumption2017)
            //       rObj['savings'] = savings
            //       rObj['username'] = obj.username
            //       return rObj
            //     })

            //     let oArray = newArrayUsers.sort(function(a,b) {return (a.savings < b.savings) ? 1 : ((b.savings < a.savings) ? -1 : 0);} );
                
            //     let aSavings = oArray.map(function(obj) {
            //         return obj.savings
                    
            //     })

            //     //$rootScope.allSavings = aSavings
            //     //console.log($rootScope.allSavings)

            //     let positionArray = 0
            //     let test = oArray.forEach(function(elem, index) {
            //       if (elem.username == $rootScope.username){
            //         positionArray = index + 1
                  
            //         return positionArray
            //       }
            //     })

            //     $rootScope.neighboursPosition = positionArray 
            //     $rootScope.allSavings = aSavings            
            //     console.log($rootScope.allSavings)

            //   })
            
            NeighboursFactory.getNeighbours()
            NeighboursFactory.getNeighboursPosition()
          }
})()