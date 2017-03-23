angular.module('EleconsApp')
  .run(function($rootScope, $location, StorageFactory, AuthFactory, ApiFactory){

      if ( AuthFactory.isLoggedIn() ) {
        const token = StorageFactory.readToken()
        AuthFactory.setCredentials(token)
      }

      $rootScope.$on( "$routeChangeStart", function(event, next, current) {

        if (next && next.secure) {
          if ( !AuthFactory.isLoggedIn() ) {
            $location.path("/login");
          }
        }
      
      })
      
      $rootScope.$on( "userLogged", function(event, id) {
        ApiFactory.getUser(id)
            .then( response => {
                $rootScope.username = response.data.username
                $rootScope.firstName = response.data.firstName || "Your firstName"
                $rootScope.lastName = response.data.lastName || "Your lastName"
                $rootScope.email = response.data.email || "Your email"
                $rootScope.maxPower = Number(response.data.maxPower) || 0
                $rootScope.contractedPower = Number(response.data.contractedPower) || 2.3
                $rootScope.energyTariff = response.data.energyTariff || "PVPC"
                $rootScope.updatedAt = response.data.updatedAt 
                $rootScope.urlCurrentPower = response.data.urlCurrentPower || "http://fran.noip.me:8888/consumo?id=0001"                
            })
          // ApiFactory.getData() 
          //   .then (response => {
          //       $rootScope.consumption2016 = Number(response.data.monthly[0])
          //       $rootScope.consumption2017 = Number(response.data.monthly[1])
          //       $rootScope.savingsKWH = Number(response.data.monthly[0]- response.data.monthly[1])
          //       $rootScope.savingsEuro = $rootScope.savingsEuro  || ($rootScope.savingsKWH * 0.11)
          //     })
      })
  })