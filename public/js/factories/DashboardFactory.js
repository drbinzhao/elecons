(function () {
  'use strict'
angular    
      .module('EleconsApp')
      .factory('DashboardFactory', DashboardFactory)

      function DashboardFactory ($rootScope, PricesFactory) {
        //var vm = this
        var service = {
            getComparison: getComparison,
            getNeighbours: getNeighbours
        };

        return service;

                function getComparison(){

                var monthLastYear = 88
                var percMonthLastYear = (monthLastYear/monthLastYear)*100
                percMonthLastYear = Math.round(percMonthLastYear)
                
                var monthCurrentYear = 50
                var percMonthCurrentYear = (monthCurrentYear/monthLastYear)*100
                percMonthCurrentYear = Math.round(percMonthCurrentYear)

                var numDays = new Date().getDate()
                var percDays = (numDays/31)*100
                percDays = Math.round(percDays)
                console.log(typeof days)


             Highcharts.chart('comparison-chart', {

    chart: {
        type: 'solidgauge',
        backgroundColor: 'none',
        marginTop: 1
    },

    title: {
        text: '',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'grey',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: 200 - labelWidth / 2,
                y: 180
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Current Year
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
            borderWidth: 0
        }, { // Track for Last Year
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.3).get(),
            borderWidth: 0
        }, { // Track for Day of Month
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },
    exporting: {
            enabled: false
    },
    series: [{
        name: `${monthCurrentYear} kWh in 2017`,
        borderColor: Highcharts.getOptions().colors[0],
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: percMonthCurrentYear
        }]
    }, {
        name: `${numDays} days out of 31`,
        borderColor: Highcharts.getOptions().colors[3],
        data: [{
            color: Highcharts.getOptions().colors[3],
            radius: '87%',
            innerRadius: '63%',
            y: percDays
        }]
    }, {
        name: `${monthLastYear} kWh in 2016`,
        borderColor: Highcharts.getOptions().colors[2],
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: percMonthLastYear
        }]
    }]
},

/**
 * In the chart load callback, add icons on top of the circular shapes
 */
function callback() {

    // Move icon
    this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
        .attr({
            'stroke': '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 26)
        //.add(this.series[2].group);

    // Exercise icon
    this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8])
        .attr({
            'stroke': '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 61)
        //.add(this.series[2].group);

    // Stand icon
    this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
        .attr({
            'stroke': '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 96)
        //.add(this.series[2].group);
});

        }


        function getNeighbours(){

             $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-v.json&callback=?', function (data) {

    // create the chart
            Highcharts.stockChart('neighbours-chart', {
                chart: {
                    alignTicks: false
                },

                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: 'AAPL Stock Volume'
                },

                series: [{
                    type: 'column',
                    name: 'AAPL Stock Volume',
                    data: data,
                    dataGrouping: {
                        units: [[
                            'week', // unit name
                            [1] // allowed multiples
                        ], [
                            'month',
                            [1, 2, 3, 4, 6]
                        ]]
                    }
                }]
            });
        });

        }

    }
})()