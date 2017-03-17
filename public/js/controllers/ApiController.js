/* eslint no-undef: "off" */
(function () {
  angular
  .module('EleconsApp')
  .controller('ApiController', ApiController)

  function ApiController (ApiFactory, $rootScope, $scope, $route) {
    var vm = this

    ApiFactory.getUsers()
      .then(({data}) => {
        vm.users = data.users
        console.log(vm.users)
      })
  }
})()