angular.module('EleconsApp')
  .config( function ($httpProvider) {
      $httpProvider.interceptors.push('AuthInterceptor')
    })
  .config(function($routeProvider){
    $routeProvider
        .when('/',{
          templateUrl: '/templates/home.html',
        })
        .when('/login',{
          templateUrl: '/templates/login.html',
          controller: 'LoginCtrl'
        })
        .when('/register',{
          templateUrl: '/templates/register.html',
          controller: 'RegisterCtrl'
        })
        .when('/dashboard', {
            templateUrl: '/templates/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm',
            activetab: 'dashboard',
            secure: true
        })
        .when('/neighbours', {
            templateUrl: '/templates/neighbours.html',
            controller: 'NeighboursController',
            controllerAs: 'vm',
            activetab: 'neighbours',
            secure: true
        })
        .when('/charts', {
            templateUrl: '/templates/charts.html',
            controller: 'ChartsController',
            controllerAs: 'vm',
            activetab: 'charts',
            secure: true
        })
        .when('/power', {
            templateUrl: '/templates/power.html',
            controller: 'PowerController',
            controllerAs: 'vm',
            activetab: 'power',
            secure: true
        })
        .when('/prices', {
            templateUrl: '/templates/prices.html',
            controller: 'PricesController',
            activetab: 'prices',
            secure: true
        })
        .when('/user', {
            templateUrl: '/templates/user.html',
            controller: 'UserController',
            // controllerAs: 'vm',
            activetab: 'user',
            secure: true
        })
        .otherwise('/home')
    })

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
                $rootScope.firstName = response.data.firstName || "Your firstName"
                $rootScope.lastName = response.data.lastName || "Your lastName"
                $rootScope.email = response.data.email || "Your email"
                $rootScope.maxPower = Number(response.data.maxPower) || 0
                $rootScope.contractedPower = Number(response.data.contractedPower) || 2.3
                $rootScope.energyTariff = response.data.energyTariff || "PVPC"
                
            })
      })
    })