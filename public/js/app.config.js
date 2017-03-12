angular.module('EleconsApp')

.config(function($routeProvider){
  $routeProvider
      .when('/home', {
          templateUrl: '/views/home.html'
      })
      .when('/login', {
          templateUrl: '/views/login.html'
      })
      .when('/register', {
          templateUrl: '/views/register.html'
      })
      .when('/dashboard', {
          templateUrl: '/views/dashboard.html',
          controller: 'getConsumptionController',
          controllerAs: 'vm'
      })
      .when('/user', {
          templateUrl: '/views/user.html'
      })
      .otherwise('/home')
})