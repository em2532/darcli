var fs    = require('fs');
var util  = require('util');

//first way to write a json file
var demowrite = '{"name": "John"}'
fs.writeFile('./json/demowrite.json',demowrite);

//second way to write json file
var demowrite2 = {
  name: "John",
  age: "21"
};

fs.writeFile('./json/demowrite2.json',JSON.stringify(demowrite2));
