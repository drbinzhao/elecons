(function () {
  'use strict'

angular
    
    .module('EleconsApp')
    .controller('PricesController', PricesController)

        function PricesController (PricesFactory){
          var vm = this
          PricesFactory.getPrices()
            .then(function (response) {
              vm.allPrices = response[0];
              console.log(response[0])
        })
    }

})();