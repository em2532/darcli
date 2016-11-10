process.stdout.write('\n>');

process.stdin.on('data',function(data){

  process.stdout.write(`Data written: ${data}`);
  process.stdout.write('>');
});
