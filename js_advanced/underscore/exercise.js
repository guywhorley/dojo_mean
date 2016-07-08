// my simple underscore js library
var _ = {
	map: function(arr, cb) {
		if (typeof(cb)==='function') {
			for (var i=0; i<arr.length; i++) {
				arr[i] = cb(arr[i])
			}
			return arr;
		}
	},
	reduce: function(arr, cb, memo) {
		if (typeof(cb)==='function') {
			if (!memo) { memo = 0; }
			var sum = memo;
			for (var i=0; i<arr.length; i++) {
				sum = cb(arr[i], sum);
			}
 			return sum;
		}
	},
	find: function(arr, cb) {
		if (typeof(cb)==='function') {
			var val;
			for (var i=0; i<arr.length; i++) {
				val = cb(arr[i]);
				if (val) { return val;} // found a match
			}
			return val; // no match; return undefined
		}
	},
	filter: function(arr, cb) {
		if (typeof(cb)==='function') {
			var rarr = []; // return array
			var match = false;
			for (var i=0; i<arr.length; i++) {
				match = cb(arr[i]);
				if (match) { rarr.push(arr[i]); }
			}
			return rarr;
		}
	}, 
	reject: function(arr, cb) {
		if (typeof(cb)==='function') {
			var rarr = []; 
			var match = false;
			for (var i=0; i<arr.length; i++) {
				match = cb(arr[i]);
				if (!match) { rarr.push(arr[i]); }
			}
			return rarr;
		}
	},
}