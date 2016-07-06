// This acts like a factory for construction Ninja's
// The function name is Capitalized (convention to indicate a constructor)
function NinjaConstructor(name,age,prevOccupation) {
	
	if (!(this instanceof NinjaConstructor)) {
		return new NinjaConstructor(name,age,prevOccupation);
	}
	
	// Object Public Properties
	this.name = name;
	this.age = age;
	this.prevOccupation = prevOccupation;
	this.distance_traveled = 0; 
	
	NinjaConstructor.prototype.walk = function() {
		console.log(this.name + ' is walking');
		this.distance_traveled += 1;
		return this;      // have this method return its own object
	};
	
	// creating an instance method
	Ninja.prototype.run = function() {
		console.log(this.name + ' is running');
		this.distance_traveled += 5;
		this.displayDistanceTraveled();
		return this;      // have this method return its own object
	};
	//another instance method
	Ninja.prototype.displayDistanceTraveled = function() {
		console.log('distance traveled: ', this.distance_traveled);
	}
}

// Test
var dylan = new NinjaConstructor('Dylan', 30, 'Construction Worker');
console.log(this);
var nikki = NinjaConstructor('Nikki', 24, 'Historian');