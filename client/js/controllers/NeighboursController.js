(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('NeighboursController', NeighboursController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function NeighboursController ($scope, $route, $rootScope, NeighboursFactory, ApiFactory) {
            $scope.$route = $route

            var vm = this;

            ApiFactory.getUsers()
              .then(function(response){
                let aUsers = response.data.users
                let newArrayUsers = aUsers.map(function(obj){
                  let rObj = {}
                  let savings = Number(obj.consumption2016) - Number(obj.consumption2017)
                  rObj['savings'] = savings
                  rObj['username'] = obj.username
                  return rObj
                })

                let oArray = newArrayUsers.sort(function(a,b) {return (a.savings < b.savings) ? 1 : ((b.savings < a.savings) ? -1 : 0);} );
                console.log(oArray)
                console.log($rootScope.username)
                
                let positionArray = 0
                let test = oArray.forEach(function(elem, index) {
                  console.log(elem.username, index)
                  if (elem.username == $rootScope.username){
                    positionArray = index + 1
                    console.log(positionArray)
                  
                    return positionArray
                  }
                })

                $rootScope.neighboursPosition = positionArray             
                

              })

            NeighboursFactory.getNeighbours()
          }
})()