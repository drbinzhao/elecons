(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('UserController', UserController)
        //.controller('chartsController', ['socketio','$rootScope', function (socketio, $rootScope) {
        
          function UserController ($scope, $route, ApiFactory) {
            $scope.$route = $route;
            //var vm = this;
            const id = $scope.loggedUser.id
            console.log(id)

              $scope.list = [];
              $scope.text = '';

              $scope.updateUser = function(e) {
                e.preventDefault()
                const { firstName, lastName, email, contractedPower, energyTariff } = $scope
                $scope.testing = this.testing
                console.log(firstName, lastName, email, contractedPower, energyTariff)
                console.log(this.testing)

                ApiFactory.updateUser(id, firstName, lastName,email, contractedPower, energyTariff)
                  .then(function(user) {
                    $scope.user = user
                  })

                alert("Your data has been updated correctly!!")

              };
        }
})()
