// Using standard Ninja Constructor style
function NinjaConstructor(name, cohort) {
	this.name = name;
	this.cohorot = cohort;
	this.belt_level = "yellow"; 
	this.levelUp = function() {
		switch(this.belt_level) {
			case "yellow":
				this.belt_level = "red";
				console.log("Belt:", this.belt_level);
				break;
			case "red":
				this.belt_level = "black";
				console.log("Belt:", this.belt_level);
				break;
			default:
				console.log("Highest belt level already acheived.");
			    break;
		} //switch
	};
} //ninja

// using the 'new' keyword on the function invocation creates a 
// new instance of the NinjaConstructor
// var n1 = new NinjaConstructor("Danielsan", "miyage-cohort");
// n1.levelUp();
// n1.levelUp();
// n1.levelUp();

// Using Object.defineProperty function style - not entirely working yet.
function Ninja(name, cohort) {
	Object.defineProperty(this, "name", {
		get: function() {
			return name;
		},
		set: function(newName) {
			name = newName;
		},
		configurable: false
		});	
	Object.defineProperty(this, "cohort", {
		get: function() {
			return cohort;
		},
		set: function(newCohort) {
			cohort = newCohort;
		},
		configurable: false
		});	
	Object.defineProperty(this, "levelUp", {
		function() { switch(belt_level) {
			case "yellow":
				belt_level = "red";
				console.log("Belt:", belt_level);
				break;
			case "red":
				belt_level = "black";
				console.log("Belt:", belt_level);
				break;
			default:
				console.log("Highest belt level already acheived.");
			  break;
			} //switch
		}
	});	
}

var newNinja = new Ninja("Bruce Lee", "Tiger");
console.log(newNinja.name);
newNinja.levelUp;
newNinja.levelUp;


// Person Constructor
function PersonConstructor(name) {
	
	this.name = name;
	this.distance_traveled = 0;
	
	this.say_name = function() { 
		alert("Name: " + this.name); 
		// return this; //chaining
	};
	
	this.say_something = function(str) { 
		alert(str); 
		// return this; 
	};
	
	this.walk = function() { 
		this.distance_traveled += 3;
		alert(this.name + " is walking.");
		// return this;
	};
	
	this.run = function() {
		this.distance_traveled += 10;
		alert(this.name + " is running.");
		// return this;
	};
	this.crawl = function() {
		this.distance_traveled += 1;
		alert(this.name + " is crawling.");
		// return this;
	};
} //person


// var chris = new PersonConstructor("Chris"); 
// chris.walk();
// var bob = new PersonConstructor("Bob");
// bob.run();