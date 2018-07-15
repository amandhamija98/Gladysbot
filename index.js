var request=require('request');
var fs = require('fs');
var express = require('express');
var socket=require('socket.io');
var app=express();
var answer=require('./action.js');
var info;
app.use(express.static('public'));
var server=app.listen(8000,function(){
  console.log('listening to 8000');
});

var io= socket(server);
io.on('connection',function(socket){
  console.log("made socket connection");
  //this is the specific socket that has been passed in the function
  //basically when the socket sends a 'chat' route
  socket.on('chat',function(data){
//io.sockets means all the sockets that were made by the welcoming socket
//emit means contacting the other end i.e clients
  info=data.message;
  var output;
   request({
          method: 'POST',
          uri: 'http://localhost:5000/parse',
          json: true,
          body: {
              'model': "nlu_model",
              'q': info
          }
        },
        function(error,response,body)
        {
          output = answer(body);
          console.log(output);
socket.emit('gladys_speaks',output);

        }
      );
      //.pipe(fs.createWriteStream('response.txt'));
      //fs.createWriteStream('response.txt',parser.parse(output));
        //answer(JSON.parse(output.body));

    socket.emit('chat',data);
  //  socket.emit('gladys_speaks',output);

  });
  });
