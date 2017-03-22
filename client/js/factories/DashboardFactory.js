(function() {
    'use strict'
    angular
        .module('EleconsApp')
        .factory('DashboardFactory', DashboardFactory)

    function DashboardFactory($http, $rootScope, PricesFactory) {

        var service = {
            getComparison: getComparison,
        };

        return service;


        function getComparison() {

            var monthLastYear = 88
            var percMonthLastYear = (monthLastYear / monthLastYear) * 100
            percMonthLastYear = Math.round(percMonthLastYear)

            var monthCurrentYear = 50
            var percMonthCurrentYear = (monthCurrentYear / monthLastYear) * 100
            percMonthCurrentYear = Math.round(percMonthCurrentYear)

            var numDays = new Date().getDate()
            var percDays = (numDays / 31) * 100
            percDays = Math.round(percDays)



            Highcharts.chart('comparison-chart', {
                chart: {
                    //backgroundColor: 'none',
                    type: 'column'
                },
                title: {
                    text: 'Current Month Consumption'
                },
                xAxis: {
                    categories: [
                        'Monthly Consumption'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Electricity Consumption kWh'
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
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: '2016',
                    data: [200]

                }, {
                    name: '2017',
                    data: [100]
                }]
            });
        }


    }
})()
