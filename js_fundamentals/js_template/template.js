// file: 
// auth:
// desc: 

function WidgetConstructor(arg1, arg2, arg3) {
	
	// Private Variables 
	var someVar1 = 9.99;
	var someVar2 = "_to_Vegas";
    // if returning an object, set it as the last private var 
	var retObj = {}; 
	
	// Public Properties
	// _ signifies a field that is public and should NOT be modified 
	retObj._name = arg3;
	retObj.type = 'some type';
	retObj.sth = [];
	
	// Public Methods 
	retObj.someMethod = function(arg) {
		// do some things
	}
	retObj.showPrivateVars = function() {
		console.log(someVar1);
		console.log(someVar2);
	}
	
	// Private Methods
	function myPrivateFunction() {
		// do something here
	}
	//end private methods
	
	// Run events prior to construction if nec' 
	myPrivateFunction();
	
	// Return the final object
	return retObj;
} //fx
	
}