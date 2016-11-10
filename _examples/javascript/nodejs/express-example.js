var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.use('/message',function(req,res){
  console.log('Request to message');
  res.send('message');
});

app.listen(3000);
