// my namespace 
var gcw = {
	sumNumbersFromTo: function(x,y) {
		var sum = 0;
		for (var i=x; i<=y; i++) {
			sum += i;
		}
		console.log(sum);
	},
	getMinValue: function(arr) {
		if (arr.length == 0) { return; } 
		var min = arr[0];
		for (var i=0; i<arr.length; i++) {
			if (arr[i] < min) { min = arr[i]; }
		}
		return min;
	},
	getAvgValue: function(arr) {
		if (arr.length == 0) { return; } 
		var sum = 0;
		for (var i=0; i<arr.length; i++) {
			sum += arr[i];
		}
		return sum/arr.length;
	},
} 

// Person
var person = {
	name: 'Chris',
	distance_traveled: 0,
	say_name: function() { 
		alert("Name: " + this.name); 
		return this; //chaining
	},
	say_something: function(str) { 
		alert(str); 
		return this; 
	},
	walk: function() { 
		this.distance_traveled += 3;
		alert(this.name + " is walking.");
		return this;
	},
	run: function() {
		this.distance_traveled += 10;
		alert(this.name + " is running.");
		return this;
	},
	crawl: function() {
		this.distance_traveled += 1;
		alert(this.name + " is crawling.");
		return this;
	},
} //person

person.say_something("Hello").walk().run().crawl();
// person.say_name();
// person.walk();
// person.run();
// person.crawl();


// var nums = [5,2,-5,10,26];
// gcw.sumNumbersFromTo(1,5);
// console.log(gcw.getMinValue(nums));
// console.log(gcw.getAvgValue(nums));