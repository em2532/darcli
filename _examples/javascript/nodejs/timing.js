var waitTime = 3000;
var currentTime = 0 ;
var waitInterval = 10;
var percentWaiting = 0;


function writePercent(p){
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting ... ${p}%`);
}


var interval = setInterval(function(){
  currentTime += waitInterval;
  writePercent(Math.floor(currentTime/waitTime *100));
  //console.log(`waiting ${currentTime/1000}`);
},waitInterval);



setTimeout(function(){
  clearInterval(interval);
  writePercent(100);
  console.log('\nProcess is done');

}, waitTime);


//writePercent(percentWaiting);
