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
              .then(function(response){
                var pvpc = response.data.indicator.values
                console.log(pvpc)
                return pvpc
            })
          }
        }
    })()    

