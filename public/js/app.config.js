angular.module('EleconsApp')

.config(function($routeProvider){
  $routeProvider
      .when('/home', {
          templateUrl: '/views/home.html'
      })
      .when('/chart', {
          templateUrl: '/views/chart.html'
      })
      .when('/dashboard', {
          templateUrl: '/views/dashboard.html',
          controller: 'getConsumptionController',
          controllerAs: 'vm'
      })
      .otherwise('/home')
})