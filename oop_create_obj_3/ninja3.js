// This acts like a factory for construction Ninja's
// The function name is Capitalized (convention to indicate a constructor)
function NinjaConstructor(name,age,prevOccupation) {
	
	if (!(this instanceof NinjaConstructor)) {
		return new NinjaConstructor(name,age,prevOccupation);
	}
	
	// Private Vars
	var privateVar = "This is my private var";
		
	// Object Public Properties
	this.name = name;
	this.age = age;
	this.prevOccupation = prevOccupation;

	// Public Methods
	this.introduce = function() {
		console.log("Hi, my name is " + this.name + ". Prepare to die."); 
		privateMethod();
	}
	
	// Private Methods
	var privateMethod = function() {
		//doop
	}
}

// Test
var dylan = new NinjaConstructor('Dylan', 30, 'Construction Worker');
console.log(this);
var nikki = NinjaConstructor('Nikki', 24, 'Historian');