(function () {
  'use strict'

  angular    
      .module('EleconsApp')
      .factory('ChartsFactory', ChartsFactory)

      function ChartsFactory ($rootScope, PricesFactory) {
        //var vm = this
        var service = {
            getChartNow: getChartNow,
            getChartDay: getChartDay,
            getChartMonth: getChartMonth
        };

        return service;

        ///////mehthods from the factory
        
        function getChartNow () {
          /// CHART NOW-------------------------------------------------
          Highcharts.setOptions({
                  global: {
                      useUTC: false
                  }
              });

          Highcharts.chart('chart-now', {
              chart: {
                  type: 'spline',
                  animation: Highcharts.svg, // don't animate in old IE
                  marginRight: 10,
                  events: {
                      load: function () {
                          var series = this.series[0]
                          var socket = io.connect()
                          socket.on('new read', function(data) {
                              var x = (new Date()).getTime(), // current time
                                  y = data.current;
                              series.addPoint([x, y], true, true);
                          });
                      }
                  }
              },

              title: {
                  text: 'Live random data'
              },
              xAxis: {
                  type: 'datetime',
                  tickPixelInterval: 150
              },
              yAxis: {
                  title: {
                      text: 'Value'
                  },
                  plotLines: [{
                      value: 0,
                      width: 1,
                      color: '#808080'
                  }]
              },
              tooltip: {
                  formatter: function () {
                      return '<b>' + this.series.name + '</b><br/>' +
                          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                          Highcharts.numberFormat(this.y, 2);
                  }
              },
              legend: {
                  enabled: false
              },
              exporting: {
                  enabled: false
              },
              series: [{
                  name: 'Random data',
                  data: (function () {
                      // generate an array of random data, fixed
                      var data = [],
                          time = (new Date()).getTime(),
                          i;

                      for (i = -19; i <= 0; i += 1) {
                          data.push({
                              x: time + i * 1000,
                              y: data.current
                          });
                      }
                      return data;
                  }())
              }]
          });
        }

        function getChartDay () {
          
          var pvpcPrices = []
          PricesFactory.getPrices()
           .then(function (response) {
              var aPricesValues = response.map(function(obj){
                  return obj.price
              })
              pvpcPrices = aPricesValues
              
              console.log(pvpcPrices)       

          /// CHART DAY-------------------------------------------------
          Highcharts.chart('chart-month', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Hourly Electricity Consumption and Price'
            },
            subtitle: {
                text: ''
            },
            xAxis: [{
                categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00','06:00', 
                  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00', 
                  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value} €/kWh',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Electricity Price',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Electricity Consumption',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} kWh',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 60,
                verticalAlign: 'top',
                y: 50,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Electricity Consumption',
                type: 'spline',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' kWh'
                }

            }, {
                name: 'Electricity Price',
                type: 'spline',
                data: pvpcPrices,
                tooltip: {
                    valueSuffix: '€/kWh'
                }
            }]
          });
          });
        };

        function getChartMonth () {
          // CHART MONTH
            Highcharts.chart('chart-year', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Monthly Average Rainfall'
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: [
                        'Jan','Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Tokyo',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                }, {
                    name: 'New York',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                }, {
                    name: 'London',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                }, {
                    name: 'Berlin',
                    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

                }]
            });
        }
    }
})()