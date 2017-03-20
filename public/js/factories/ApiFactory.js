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

    function updateUser(id, firstName, lastName,email, contractedPower, energyTariff) {
      const data = {id, firstName, lastName,email, contractedPower, energyTariff}
      let userId = $rootScope.loggedUser.id
      var url = `/api/users/${userId}`
        console.log(data)
        return $http.put(url, data)
          
    }

    function maxPower( id, maxPower) {
      let data = { id, maxPower }
      //data = +data.maxPower
      console.log(typeof data)
      console.log(id)
      //let userId = $rootScope.loggedUser.id
      var url = `/api/users/${id}/maxPower`
        console.log(data)
        console.log(url)
        return $http.put(url, data)
    }

    return {
      getUsers,
      getUser,
      updateUser, 
      maxPower
    }
  }
})()