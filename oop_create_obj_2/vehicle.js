// file: cars.js
// auth: Guy Whorley
// desc: Create Vehicles
function VehicleConstructor(name, numberOfWheels, passengerCount,speed) {
	
	// Return new vehicle if caller forget to invoke with the 'new' keyword.	
	if (!(this instanceof VehicleConstructor)) {
		return new VehicleConstructor(name, numberOfWheels, passengerCount,speed);
	}
		
	// Private Vars
	var _this = this; // save ref to self for private methods
	var distance_travelled = 0;
	
	// Public Vars
	this.name = name;
	this.numberOfWheels = numberOfWheels;
	this.passengerCount = passengerCount;
	this.speed = speed;
	
	// Public Methods
	
	this.move = function(speed) {
		updateDistanceTravelled(speed);
		this.makeNoise();
	}
	
	this.checkMiles = function() {
		console.log(distance_travelled);
	}
	
	this.makeNoise = function() {
		console.log("Chuga Chuga...");
	}
	
	this.valueOf = function() {
		return "[name:" + this.name + ", wheels:" + this.numberOfWheels + ", count:" + this.passengerCount + "]";
	}
	
	this.toString = function() {
		return "[name:" + this.name + ", wheels:" + this.numberOfWheels + ", count:" + this.passengerCount + "]";
	}
	
	// Private Methods 
	var updateDistanceTravelled = function(speed) {
		distance_travelled += speed;
	} 	
} //vehicle

// Bike
var bike = new VehicleConstructor("bike", 2, 1);
bike.makeNoise = function() { console.log("Ring Ring!"); }
bike.move(10);
bike.move(30);
bike.checkMiles();
console.log(bike.distance_travelled); // can't access since it's private.
