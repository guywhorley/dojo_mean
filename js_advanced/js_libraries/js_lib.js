var nums = [1,2,3,4];

function reduce (list, iteratee, memo) {
	if (!memo) { memo = 0; }

	for (var i=0; i<list.length; i++) {
		memo = iteratee(list[i],memo);
	}
	return memo;
}

console.log(reduce(nums, function(num,sum) { return num + sum; }, 20))