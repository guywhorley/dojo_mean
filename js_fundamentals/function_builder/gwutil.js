// file: gwutil.js 
// auth: Guy Whorley 
// desc: gwutil 'guy whorley util' is a wrapper class providing a namespace for the 'build some functions' assignment in the mean stack.

var gwutil = {
	runningLogger: function() { console.log("I am running"); },
	multplyByTen: function(num) { return num * 10; },
	stringReturnOne: function() { return 'String one'; },
	stringReturnTwo: function() { return 'String two'; },
	caller: function(arg) { if (typeof(arg)=='function') { arg; }},
	myDoubleConsoleLog: function(arg1, arg2) {
		if ( typeof(arg1)=='function') {
			//console.log("arg1 is a function"); 
			var out = arg1();
			console.log("arg1 return:", out);
		}	
		if (typeof(arg2)=='function') {
			//console.log("arg2 is a function");	
			out = arg2();
		    console.log("arg2 return:", out);
		}
	},
	caller2: function(arg) {
		console.log("Starting...");
		if (typeof(arg)=='function') {
		 	setTimeout(arg,2000); 
		}
		console.log("... Ending?");
		return "interesting"
	}
} //obj

//gwutil.runningLogger();
//console.log(gwutil.multplyByTen(5));
//console.log("One:", gwutil.stringReturnOne());
//console.log("Two:", gwutil.stringReturnTwo());
//gwutil.caller(gwutil.runningLogger());
//gwutil.caller2(gwutil.myDoubleConsoleLog(gwutil.stringReturnOne, gwutil.stringReturnTwo));
gwutil.caller2(gwutil.myDoubleConsoleLog(gwutil.stringReturnOne, gwutil.stringReturnTwo));