/* Graph */
let myData = [ 'data1', 12, 34 ];
const chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [myData],
    labels: true
  }
});


var socket = io.connect()
  socket.on('new read', function(data) {
    const oList = document.getElementById('list')
    const html = oList.innerHTML
    const value = data.current
    console.log(value)
    oList.innerHTML = html + `<li>${value}</li>`
    myData.push( +value )
    console.log(myData)
    chart.load({ columns: [ myData ] })
  })