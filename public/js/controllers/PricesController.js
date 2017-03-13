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
              let aPrices = response.map(function (obj){
                var pricesObj = {
                  hour: obj.datetime.substring(obj.datetime.indexOf('T')+1,obj.datetime.indexOf('.')-3)+ 'h',
                  date: obj.datetime.substring(0,obj.datetime.indexOf('T')),
                  price: +(obj.value /1000).toFixed(3)
                }
                return pricesObj
              })
        
              //console.log(aPrices)
              var sortedPrices = aPrices.sort(function(a,b){
                return a.price - b.price 
              })

              vm.min = sortedPrices[0];
              vm.max = sortedPrices[sortedPrices.length-1]
              //console.log(vm.min)
        

              ///All array of prices
              var aPricesValues = aPrices.map(function(obj){
                  return obj.price
              })

              $rootScope.aPricesValues =  aPricesValues[0]
                //console.log($rootScope.aPricesValues)
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