
//method 1 to read json file
var fs      = require('fs');
var util    = require('util');

fs.readFile('./json/userinfo.json', 'utf8', function(err,data){
  console.log(util.inspect(data));
  console.log("First way to reason json file ", data);
  data = JSON.parse(data);
  console.log(data.first_name);
});

//method 2 to read json file
var data = require('./json/userinfo.json');
console.log(util.inspect(data));
console.log("Second way to reason json file ",data);
console.log(data.first_name);
