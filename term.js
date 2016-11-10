console.log('\n>');

process.stdin.on('data', function(data){
	console.log('Data entered: ', data.toString());
});

process.on('connection', function(){
	console.log('>');
});

process.on('exit', function(){
	console.log('exiting process');
});
