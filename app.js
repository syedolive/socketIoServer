var io = require('socket.io')(9000);

io.on('connection', function (socket) {
  console.log(socket.id);
  socket.emit('id',socket.id);

    socket.emit('ponka',{ponka :' m a ponka mesage'});
  socket.on('message', function (data) {
    console.log(data);
   });
  socket.on('disconnect', function () { });
  socket.on('msg',function(msg){
    console.log(msg);

    if(msg.id == socket.id){
      io.emit('chat',{name : 'YOU', message : msg.message});
    }else{
         io.emit('chat',msg);
    }
 
  
});

socket.on('typing',function(data){
 socket.emit('typing',data);
})
});