(function () {
  'use strict'

  angular    
      .module('EleconsApp')
      .factory('PricesFactory', PricesFactory)
    
        function PricesFactory ($http) {
    
          var servicePrices = {
            getPrices: getPrices
          }
    
          return servicePrices
    
          /// methods from the factory
    
          function getPrices() {
    
            var req = {
            method: 'GET',
            url: 'https://api.esios.ree.es/indicators/10229', 
            headers: {
              "Accept": "application/json; application/vnd.esios-api-v1+json",
              "Content-Type" : "application/json",
              "Authorization": 'Token token="defb553f1d21b9541a83aad9642d8396bb10a939d4c0ed10fabab5d7d925fea1"',
            },
            dataType: 'json',
            }
          
            return $http(req)
              .then(getPvpc)
              .then(filterPvpc)
          }

          // ///All array of prices
          //     var aPricesValues = aPrices.map(function(obj){
          //         return obj.price
          //     })
          //     console.log(aPricesValues)

          //     $rootScope.aPricesValues =  aPricesValues[0]
          //       console.log($rootScope.aPricesValues)
        }


        //Helper functions
        function getPvpc (response) {
            return response.data.indicator.values
        }

        function filterPvpc (response) {
            let aPrices = response.map(function (obj){
              var pricesObj = {
                hour: obj.datetime.substring(obj.datetime.indexOf('T')+1,obj.datetime.indexOf('.')-3)+ 'h',
                date: obj.datetime.substring(0,obj.datetime.indexOf('T')),
                price: +(obj.value /1000).toFixed(3)
              }
              return pricesObj
            })
          return aPrices
        }

    })()    

