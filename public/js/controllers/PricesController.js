(function () {
  'use strict'

angular
    
    .module('EleconsApp')
    .controller('PricesController', PricesController)

        function PricesController ($rootScope, PricesFactory){
          var vm = this
            vm.minPrice = {}
            vm.maxPrice = {}

          PricesFactory.getPrices()
            .then(function (response) {
              var sortedPrices = response.sort(function(a,b){
                return a.price - b.price 
              })

              vm.min = sortedPrices[0];
              vm.max = sortedPrices[sortedPrices.length-1]
                 
        })
    }

})();

// let bodyParsed = body.replace(/\n/g,'')
//       let current = bodyParsed.substring(bodyParsed.indexOf('T')+1);
//       let accumulated = bodyParsed.substring(0,bodyParsed.indexOf(':'))

//       let newRead = {
//           date : moment(Date.now()).format('DD/MM/YYYY hh:mm:ss'), 
//           current : +current,
//           accumulated: +accumulated
//         }