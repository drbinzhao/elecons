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
            secure: true
        })
        .when('/neighbours', {
            templateUrl: '/templates/neighbours.html',
            controller: 'NeighboursController',
            controllerAs: 'vm',
            secure: true
        })
        .when('/charts', {
            templateUrl: '/templates/charts.html',
            controller: 'ChartsController',
            controllerAs: 'vm',
            secure: true
        })
        .when('/power', {
            templateUrl: '/templates/power.html',
            controller: 'PowerController',
            controllerAs: 'vm',
            secure: true
        })
        .when('/prices', {
            templateUrl: '/templates/prices.html',
            controller: 'PricesController',
            secure: true
        })
        .when('/user', {
            templateUrl: '/templates/user.html'
        })
        .otherwise('/home')
    })

.run(function($rootScope, $location, StorageFactory, AuthFactory){

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
    })