// This acts like a factory for construction Ninja's
// The function name is Capitalized (convention to indicate a constructor)
function NinjaConstructor(name,age,prevOccupation) {
	
	// Return Object
	var ninja = {}; 
	
	// Object Properties
	ninja.name = name;
	ninja.age = age;
	ninja.prevOccupation = prevOccupation;

	// Object Methods
	ninja.introduce = function() {
		console.log("Hi, my name is " + ninja.name + ". Prepare to die."); 
	}

	// Return the Object
	return ninja;
}

var n1 = new NinjaConstructor("Raphael", "15", "pet store turtle");
