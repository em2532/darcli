var fs    = require('fs');
var util  = require('util');

//read local directory 
fs.readdir('./',function(err,data){
    console.log(data);
});
