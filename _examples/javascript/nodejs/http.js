var http      =   require('http');
var util      =   require('util');
var server    =   http.createServer(function(req,res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('Connection established');
  res.write(util.inspect(req));
  res.end('connection closed');
}).listen(4000);
