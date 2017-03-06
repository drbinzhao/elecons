//CLIENT
// connect to a server socket // --> it will send the read 'connection' to the localhost:3000
var socket = io.connect('http://localhost:3000');

socket.on('connect', function(){
      console.log('User is connected!');
      socket
    });

var $chat = $('#chat')

//Listen to event 'new data available'
socket.on('new read', function(data){
  $chat.append(`<div class="well">${data.reading}</div>`)
  console.log(data.reading)
})

    // $messageForm.submit(function(e){
    //   e.preventDefault()
    //   socket.emit('send message', $message.val())
    //   $message.val('')
    // })


