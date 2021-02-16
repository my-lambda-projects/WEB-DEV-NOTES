function sumArray(array) {
	// If our array is empty, return 0
	if (array.length === 0) {
		// Base case
		return 0;
	}

	// Otherwise, return the first number plus the result of our function with the smaller array (everything after the first number)
	// Recursive case
	return array[0] + sumArray(array.slice(1));
	// The recursive step is slicing our array, making a smaller array the argument to our function. This is working towards our base case of having an array of length 0.
}

console.log(sumArray([ 4, 6, 12, 3 ])); // 25
/*
// Tracing the call stack:
sumArray([4, 6, 12, 3])
  return 4 + sumArray([6, 12, 3])
             return 6 + sumArray([12, 3])
                        return 12 + sumArray([3])
                                    return 3 + sumArray([])
                                               return 0     // sumArray([]) hit our base case (array.length === 0)
*/
