//Make a connection
var socket=io.connect('http://localhost:8000');
//this is the client socket
//Query DOM
console.log("client is connected");
var message= document.getElementById('message');
//var handle= document.getElementById('handle');
var btn= document.getElementById('send');
var output= document.getElementById('output');
// emit event
btn.addEventListener('click',function(){
  //here 'chat' is a route and we are passing an object
  console.log("emitted");
  socket.emit('chat',{
    message: message.value,
    //handle: handle.value
  });

});
//listen for events
//when the server emits a 'chat' event,this is how the client will respond
socket.on('chat',function(data){
  output.innerHTML += '<p><strong>' + data.message
  + '</strong></p>';
});
socket.on('gladys_speaks',function(data){
  output.innerHTML += '<p><strong>' + "Gladys: " + data + '</strong></p>';
})
