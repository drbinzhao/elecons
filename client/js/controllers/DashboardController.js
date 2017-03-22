(function () {
  'use strict'
    angular
        
        .module('EleconsApp')
        .controller('DashboardController', DashboardController)
        
          function DashboardController ($scope, $route, $rootScope, DashboardFactory, ApiFactory) {
            $scope.$route = $route
            var vm = this;
            var monthNames = ["January", "February", "March", "April", "May", "June",
                              "July", "August", "September", "October", "November", "December"
                            ];
            let currentDate = new Date
            vm.currentYear = currentDate.getFullYear()
            vm.lastYear = vm.currentYear - 1
            vm.currentMonth = monthNames[currentDate.getMonth()]
            console.log(vm.currentYear, vm.lastYear, vm.currentMonth)

            $scope.showStatusDashboard = function (){
              if ($rootScope.consumption2016 > $rootScope.consumption2017 ) {
                return true
              } else {
                return false
              }
            }
            
            // ApiFactory.getUser()
            //   .then(function(response){
            //     let electricPrice = 0.11
            //     $rootScope.consumption2016 = response.data.consumption2016
            //     $rootScope.consumption2017 = response.data.consumption2017
            //     console.log($rootScope.consumption2017)
            //     $rootScope.savingsKWH = $rootScope.consumption2016 - $rootScope.consumption2017
            //     $rootScope.savingsEuro = $rootScope.savingsKWH * electricPrice
            //   })
            DashboardFactory.getMonthData()
            DashboardFactory.getComparison()
        }
})()