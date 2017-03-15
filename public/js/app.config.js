angular.module('EleconsApp')

.config(function($routeProvider){
  $routeProvider
      .when('/home', {
          templateUrl: '/templates/home.html'
      })
      .when('/login', {
          templateUrl: '/templates/login.html'
      })
      .when('/register', {
          templateUrl: '/templates/register.html'
      })
      .when('/dashboard', {
          templateUrl: '/templates/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'vm'
      })
      .when('/neighbours', {
          templateUrl: '/templates/neighbours.html',
          controller: 'NeighboursController',
          controllerAs: 'vm'
      })
      .when('/charts', {
          templateUrl: '/templates/charts.html',
          controller: 'ChartsController',
          controllerAs: 'vm'
      })
      .when('/power', {
          templateUrl: '/templates/power.html',
          controller: 'getConsumptionController',
          controllerAs: 'vm'
      })
      .when('/prices', {
          templateUrl: '/templates/prices.html',
          controller: 'PricesController'
      })
      // .when('/dashboard', {
      //     templateUrl: '/templates/dashboard.html',
      //     controller: 'getConsumptionController',
      //     controllerAs: 'vm'
      // })
      .when('/user', {
          templateUrl: '/templates/user.html'
      })
      .otherwise('/home')
})