var net   =   require('net');
var server=   net.createServer();

var sockets = [];

server.on('connection',function(socket){
  console.log('recevied connection');
  sockets.push(socket);
  socket.on('data',function(data){
      console.log('data received: ', data.toString());
      sockets.forEach(function(otherSocket){
        if(otherSocket !== socket){
          otherSocket.write(data);
        }
      });
  });

  socket.on('close',function(){
    console.log('server closed');
    var index = sockets.indexOf(socket);
    sockets.splice(index,1);
  });

});

server.on('error',function(err){
  console.log('err occured ', err.message);
});



server.listen(4000);
