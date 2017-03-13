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
          controller: 'getConsumptionController',
          controllerAs: 'vm'
      })
      .when('/user', {
          templateUrl: '/templates/user.html'
      })
      .otherwise('/home')
})