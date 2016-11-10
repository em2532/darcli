var exec = require('child_process').exec;

exec("ls", function(err, stdout){
  if(err) throw err;
  console.log(stdout);
});
