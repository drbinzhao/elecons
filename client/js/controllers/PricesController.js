(function() {
    'use strict'
    angular
        .module('EleconsApp')
        .controller('PricesController', PricesController)

    function PricesController($scope, $route, $rootScope, PricesFactory) {
        $scope.$route = $route

        var vm = this;
        $rootScope.minPrice = {};
        $rootScope.maxPrice = {};

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

