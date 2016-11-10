var fs = require('fs');

var stream = fs.createReadStream('./node_modules/accepts/HISTORY.md', 'UTF-8');

var data = "" ;

stream.once('data', function(){
    console.log("Starting to read file\n");
});

stream.on("data", function(chunk){
  console.log(`Chunk size is ${chunk.length} and chunk is: \n${chunk}`);
  data += chunk;
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n\n");
});

stream.on("end", function(){
  console.log("Finished reading file");
});

console.log(data);
