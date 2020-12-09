function fib(n) {
	// Base cases (n < 3)
	if (n < 1) {
		return null;
	}
	if (n < 3) {
		return 1;
	}

	// Recursive case (n >= 3)
	return fib(n - 2) + fib(n - 1); // Recursive step (invoking fib with n-1 and n-2)
}

console.log(fib(4)); // 3

/*
// Tracing the call stack:
fib(4)
  return fib(2) + fib(3)
          (return 1) + (return fib(1) + fib(2))         // Reached base case for fib(2), continuing with fib(3)
                                (return 1) + (return 1) // Reached base case for fib(1) and fib(2)
*/
