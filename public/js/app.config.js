angular.module('EleconsApp')

.config(function($routeProvider){
  $routeProvider
      .when('/home', {
          templateUrl: '/views/home.html'
      })
      .when('/login', {
          templateUrl: '/views/login.html'
      })
      .when('/dashboard', {
          templateUrl: '/views/dashboard.html',
          controller: 'getConsumptionController',
          controllerAs: 'vm'
      })
      .otherwise('/home')
})