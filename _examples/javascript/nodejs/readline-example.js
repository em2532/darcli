var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var listSayings = [];

rl.question("What is your name? ", function(answer){
  rl.setPrompt(`What would ${answer} say? `);
  rl.prompt();
  rl.on('line',function(saying){
    rl.setPrompt(`What else would ${answer} say? `);

    if(saying.toLowerCase().trim() === 'exit'){
      rl.close();
    }

    listSayings.push(saying.trim());
    rl.prompt();

  });

});

rl.on('close',function(){
  listSayings.forEach(function(element){
    console.log("They would say ", element);
  });
  process.exit();
});
