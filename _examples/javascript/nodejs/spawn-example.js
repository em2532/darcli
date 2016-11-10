var spawn = require('child_process').spawn;

var cp = spawn("node", ["spawn-example.js"]);

cp.on("data",function(data){
  console.log(data);
});

cp.close("close", function(){
  console.log("process ended");
  process.exit();
})
