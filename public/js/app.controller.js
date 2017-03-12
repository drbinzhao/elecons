angular.module('EleconsApp')
   
  .controller('getConsumptionController', ['socketio', function (socketio) {
    var vm = this;
    //var socket = io.connect()
    vm.readings = []

    socketio.on('new read', function(data) {
      vm.readings.push(data)
      vm.current = data.current
      vm.date = data.date
      vm.accumulated = data.accumulated
      //console.log(vm.readings)

    })
  

/// CHART NOW-------------------------------------------------
    $(document).ready(function () {
        
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        //Highcharts.setOptions(Highcharts.theme);

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
                          console.log(data)
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
    })
/// CHART NOW-------------------------------------------------
    $(document).ready(function () {
        
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        //Highcharts.setOptions(Highcharts.theme);

        Highcharts.chart('chart-day', {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        var series = this.series[0]
                        var socket = io.connect()
                        socket.on('new read', function(data) {
                          console.log(data)
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
    })
}]);