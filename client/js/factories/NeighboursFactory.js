(function() {
    'use strict'
    angular
        .module('EleconsApp')
        .factory('NeighboursFactory', NeighboursFactory)

    function NeighboursFactory($rootScope, ApiFactory) {
        //var vm = this
        //console.log($rootScope.allSavings)
        
        var service = {
            getNeighbours: getNeighbours,
            getNeighboursPosition: getNeighboursPosition
        };

        return service;

        function getNeighboursPosition(){
            ApiFactory.getData()
              .then(function(response){
                let aUsers = response.data.users
                let newArrayUsers = aUsers.map(function(obj){
                  let rObj = {}
                  let savings = Number(obj.consumption2016) - Number(obj.consumption2017)
                  rObj['savings'] = savings
                  rObj['username'] = obj.username
                  return rObj
                })

                let oArray = newArrayUsers.sort(function(a,b) {return (a.savings < b.savings) ? 1 : ((b.savings < a.savings) ? -1 : 0);} );
                
                let aSavings = oArray.map(function(obj) {
                    return obj.savings  
                })
             
                let positionArray = 0
                let test = oArray.forEach(function(elem, index) {
                  if (elem.username == $rootScope.username){
                    positionArray = index + 1
                  
                    return positionArray
                  }
                })

                $rootScope.neighboursPosition = positionArray 
                $rootScope.allSavings = aSavings 

              })
        }

        console.log($rootScope.allSavings)
        
        function getNeighbours() {
            let aSavings = []

            ApiFactory.getUsers()
              .then(function(response){
                let aUsers = response.data.users
                let newArrayUsers = aUsers.map(function(obj){
                  let rObj = {}
                  let savings = Number(obj.consumption2016) - Number(obj.consumption2017)
                  rObj['savings'] = savings
                  rObj['username'] = obj.username
                  return rObj
                })

                let oArray = newArrayUsers.sort(function(a,b) {return (a.savings < b.savings) ? 1 : ((b.savings < a.savings) ? -1 : 0);} );
                
                aSavings = oArray.map(function(obj) {
                    return obj.savings  
                })
            
                $rootScope.allSavings = aSavings 
                console.log($rootScope.allSavings)
            
            
            Highcharts.chart('neighbours-chart', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: "Neighbours' Savings"
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Savings (kWh)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} kWh</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Users',
                    data: $rootScope.allSavings
                }]
            });

            // Highcharts.chart('neighbours-chart', {
            //     chart: {
            //         type: 'column'
            //     },
            //     title: {
            //         text: 'Monthly Average Rainfall'
            //     },
            //     subtitle: {
            //         text: 'Source: WorldClimate.com'
            //     },
            //     xAxis: {
            //         categories: [
                        
            //         ],
            //         crosshair: true
            //     },
            //     yAxis: {
            //         min: 0,
            //         title: {
            //             text: 'Rainfall (mm)'
            //         }
            //     },
            //     tooltip: {
            //         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            //         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            //             '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            //         footerFormat: '</table>',
            //         shared: true,
            //         useHTML: true
            //     },
            //     plotOptions: {
            //         column: {
            //             pointPadding: 0.2,
            //             borderWidth: 0
            //         }
            //     },
            //     series: [{
            //         name: 'User',
            //         data: $rootScope.allSavings

            //     }]
            // });
        
        }); 
        }
    }
})()
