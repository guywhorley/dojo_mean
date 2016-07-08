// file: cars.js
// auth: Guy Whorley
// desc: Create Cars

function VehicleConstructor(name, numberOfWheels, passengerCount) {

	// Return Object
	var o = {}; 
	
	// Private Vars
	
	// Public Vars
	o.name = name;
	o.numberOfWheels = numberOfWheels;
	o.passengerCount = passengerCount;
	
	// Public Methods
	
	o.makeNoise = function() {
		console.log("Chuga Chuga...");
	}
	
	o.valueOf() {
		return "[name:" + o.name + ", wheels:" + o.numberOfWheels + ", count:" + o.passengerCount + "]";
	}
	
	o.toString() {
		return "[name:" + o.name + ", wheels:" + o.numberOfWheels + ", count:" + o.passengerCount + "]";
	}
	
	// Private Methods 
	
	// Return Object
	return o; 	
} //vehicle

// Bike
var bike = new VehicleConstructor("bike", 2, 1);
bike.makeNoise = function() { console.log("Ring Ring!"); }

// Sedan 
var sedan = new VehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function() { console.log("Honk Honk!"); }

// Bus
var bus = new VehicleConstructor("bus", 6, 40); 
bus.addPeople = function(count) { this.passengerCount += count; }


