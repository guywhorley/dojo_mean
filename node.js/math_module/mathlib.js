// file: mathlib.js
// auth: Guy Whorley
// desc: math library

// function style
module.exports = function () {
    return {
      // add x, y
      add: function(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') { return; }
        return x + y;
      }, //add

      // multiply x*y
      multiply: function(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') { return; }
        return x * y;
      }, //multiply

      // multiply x*x
      square: function(x) {
        if (typeof x !== 'number') { return; }
        return x * x;
      }, //square

      // return random number from min to max inclusive
      random: function(min,max) {
        if (typeof min !== 'number' || typeof max !== 'number') { return; }
        var diff = Math.abs(max-min);
        return Math.floor(Math.random() * diff + min + 1);
      } //random
    }
}();
