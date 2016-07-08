
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
	var vin;
	
	// Public Vars
	this.name = name;
	this.numberOfWheels = numberOfWheels;
	this.passengerCount = passengerCount;
	this.speed = speed;
    this.vin = "vin-" + Math.floor(Math.random() *999999);
	
	VehicleConstructor.prototype.getVin = function() {
		return this.vin; 
	}
	
	// Public Methods
	VehicleConstructor.prototype.move = function(speed) {
		updateDistanceTravelled(speed);
		this.makeNoise();
		return this;
	}
	
	VehicleConstructor.prototype.checkMiles = function() {
		console.log(distance_travelled);
		return this;
	}
	
	VehicleConstructor.prototype.makeNoise = function() {
		console.log("Chuga Chuga...");
		return this;
	}
	
	VehicleConstructor.prototype.valueOf = function() {
		return "[name:" + this.name + ", wheels:" + this.numberOfWheels + ", count:" + this.passengerCount + "]";
	}
	
	VehicleConstructor.prototype.toString = function() {
		return "[name:" + this.name + ", wheels:" + this.numberOfWheels + ", count:" + this.passengerCount + "]";
	}
	
	// Private Methods 
	var updateDistanceTravelled = function(speed) {
		distance_travelled += speed;
	}

} //vehicle

// Bike
var bike = new VehicleConstructor("bike", 2, 1);
console.log(bike.getVin());
bike.makeNoise = function() { console.log("Ring Ring!"); }
bike.move(10).move(30);
bike.move(30);
bike.checkMiles();
console.log(bike.getVin());
