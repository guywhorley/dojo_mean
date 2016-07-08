// file: app.js
// auth: Guy Whorley
// desc: exploring node module behavior

var my_module = require('./my_module')(); //file 'my_module.js' fx style
// var my_module = require('./my_module'); //file 'my_module.js' OBJ style
my_module.greet();
my_module.add(5,4);
