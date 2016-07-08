// file: my_module.js
// auth: Guy Whorley
// desc: my custome code.

// returning the module as an OBJECT LITERAL
// module.exports = { // an obj called module.exports
//   greet: function() {
//     console.log("We are now using a module.");
//   },
//   add: function(x,y) {
//     console.log("The sum is:", x +y);
//   },
// } //exports


// returning the module as FUNCTION
// Using an object 'construtor' pattern
module.exports = function() { // fx called module.exports
  return {
    greet: function() {
      console.log("We are now using a module.");
    },
    add: function(x,y) {
      console.log("The sum is:", x +y);
    }
  };
};//exports
