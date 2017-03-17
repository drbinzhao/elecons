(function () {
  angular
    .module('EleconsApp')
    .factory('ApiFactory', ApiFactory)

  function ApiFactory ($http, $rootScope) {
    
    function getUsers() {
      return $http.get('/api/users')
    }




    return {
      getUsers
    }
  }
})()