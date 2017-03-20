/* eslint no-undef: "off" */
(function () {
  angular
  .module('EleconsApp')
  .controller('ApiController', ApiController)

  function ApiController (ApiFactory, $rootScope, $scope, $route, $routeParams) {
    var vm = this
    const id = $routeParams

    ApiFactory.getUsers()
      .then(({data}) => {
        vm.users = data.users
      })

    ApiFactory.getUser()
      .then(({data}) => {
        //console.log(data)
        vm.user = data
      })
  }
})()