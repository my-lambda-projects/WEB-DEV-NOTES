function factorial(n) {
	// Base case (n < 2)
	if (n < 2) {
		return 1;
	}
	// Recursive case (n >= 2)
	return n * factorial(n - 1); // Recursive step (invoking factorial with n-1)
}

console.log(factorial(5)); // 120

/*
// Tracing the call stack:
factorial(5)
  return 5 * factorial(4)
             return 4 * factorial(3)
                        return 3 * factorial(2)
                                   return 2 * factorial(1)
                                              return 1     // factorial(1) hit our base case (n < 2)
*/
