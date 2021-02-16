function exponent(base, power) {
	// Base case ( power === 1)
	if (power === 0) {
		return 1;
	}

	// If we have a negative power, we can do 1 / (base ^ positive power)
	// For each recursive call to exponent, power will now be positive and work towards our base case like normal
	if (power < 0) {
		return 1 / exponent(base, -1 * power);
	}

	// Recursive case (power > 0)
	return base * exponent(base, power - 1); // Recursive step (power - 1)
}

console.log(exponent(2, 4)); // 16

/*
// Tracing the call stack:
exponent(2, 4)
  return 2 * exponent(2, 3)
             return 2 * exponent(2, 2)
                        return 2 * exponent(2, 1)
                                   return 2 * exponent(2, 0)
                                              return 1     // exponent(2, 0) hit our base case (power === 0)
*/
