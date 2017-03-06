//CLIENT
// connect to a server socket // --> it will send the read 'connection' to the localhost:3000
var socket = io.connect();

$(function(){
    // var $messageForm = $('#messageForm')
    // var $message = $('#message')
    var $chat = $('#chat')

    // $messageForm.submit(function(e){
    //   e.preventDefault()
    //   socket.emit('send message', $message.val())
    //   $message.val('')
    // })

   //Listen to event 'new data available'
    socket.on('new read', function(data){
      $chat.append(`<div class="well"> ${data.reading} </div>`)
      console.log(data)
    })
  })