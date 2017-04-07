(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('UserController', UserController);
        
          function UserController ($scope, $route, ApiFactory, $rootScope) {
            $scope.$route = $route;
            var vm = this;
            const id = $scope.loggedUser.id;
            console.log($scope.loggedUser)
            
            ApiFactory.getUser(id) 
                .then(function(user) {
                    vm.user = user.data;
                })

              vm.updateUser = function(e) {
                e.preventDefault()
                let { firstName, lastName, email, contractedPower, energyTariff, updatedAt, urlCurrentPower} = $scope;
            
                ApiFactory.updateUser(id, firstName, lastName, email, contractedPower, energyTariff, updatedAt, urlCurrentPower)
                alert("Your data has been updated correctly!!")
              
                ApiFactory.getUser(id) 
                  .then(function(user) {
                      vm.user = user.data;
                })
            }
        }
})();