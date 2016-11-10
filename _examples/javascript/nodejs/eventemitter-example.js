var events = require('events');
var emitter =  new events.EventEmitter();
emitter.on('customEvent',function(message, status){
  console.log(status,message);
});

emitter.emit('customEvent', "emit", 200);

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person,EventEmitter); //add EventEmitter and functionality to person
var john = new Person('John Doe');

john.on('speak', function(said){
  console.log(`${this.name} said ${said}\n`);
});


john.emit('speak', "Hello World");
