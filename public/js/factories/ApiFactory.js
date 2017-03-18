(function () {
  angular
    .module('EleconsApp')
    .factory('ApiFactory', ApiFactory)

  function ApiFactory ($http, $rootScope, $routeParams) {
    
    function getUsers() {
      var url = '/api/users'
      return $http.get(url)
    }

    function getUser(id) {
      let userId = $rootScope.loggedUser.id
      var url = `/api/users/${userId}`
      return $http.get(url)
    }
    //josep id: 58cbb0356930d723a88fb1fb

    return {
      getUsers,
      getUser
    }
  }
})()