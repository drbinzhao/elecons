(function() {
    'use strict'
    angular
        .module('EleconsApp')
        .controller('PricesController', PricesController)

    function PricesController($scope, $route, $rootScope, PricesFactory, ApiFactory) {
        $scope.$route = $route

        var vm = this;
        const id = $scope.loggedUser.id;
        ApiFactory.getUser(id) 
            .then(function(user) {
                vm.user = user.data;
            })

        vm.minPrice = {};
        vm.maxPrice = {};

        PricesFactory.getPrices()
            .then(function(response) {
                var sortedPrices = response.sort(function(a, b) {
                    return a.price - b.price;
                });
                return sortedPrices
            })
            .then (function(response) {
                vm.minPrice = response[0];
                vm.maxPrice = response[response.length - 1];
            });
    }
})();

