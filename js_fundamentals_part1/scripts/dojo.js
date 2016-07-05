// file: dojo.js
// auth: Guy Whorley
// desc: JS Fundamentals part 1 assignment.


// vars
var arr_x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
var more = ["hello", "world", "Javascript is fun"];
var nums = [1,5,90, 25,-3,0];

// Do the work
console.log("*** JS Fundamentals Part 1...");
console.log("*** PRINTING ARR_X...");
console.log(arr_x);

console.log("*** PUSHING INTO ARR_X...");
arr_x.push("Seattle");
console.log(arr_x);
console.log("*** ADDING ARRAYS TOGETHER...");
addArr(arr_x, more);
console.log(arr_x);

console.log("*** SUMMING 1..500");
sumUpTo(500);
console.log("*** FINDING MIN NUMBER...");
findArrMin(nums);
console.log("*** FINDING AVG...");
findArrAvg(nums);

// My functions
function addArr(arr, arrToAdd) {
  for (var i=0; i<arrToAdd.length; i++) {
    arr.push(arrToAdd[i]);
  }
  return arr;
}

function sumUpTo(max) {
  var sum = 0;
  for (var i=0; i<= max; i++) { sum += i; }
  console.log("sum up to: ", max, " is: ", sum);
  return sum;
}

function findArrMin(arr) {
  if (arr.length == 0) { return; } //undefined since 0 would be confusing
  var min = arr[0];
  for (var i=0; i<arr.length; i++) { if (arr[i] < min) { min = arr[i];} }
  console.log("array:",arr," minimum:", min);
  return min;
}

function findArrAvg(arr) {
  if (arr.length == 0) { return; } //undefined since 0 could be confusing
  var sum = 0;
  for (var i=0; i<arr.length; i++) { sum += arr[i]; }
  console.log("array:", arr, " average:", sum/arr.length);
  return sum/arr.length;
}
