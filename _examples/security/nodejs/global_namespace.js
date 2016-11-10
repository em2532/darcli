var express = require('express');
var app = express();
var views = 0;

app.get('/', function(req,res){
  views++;
  res.send('View counter = ' + views);
});

app.listen(4000);
