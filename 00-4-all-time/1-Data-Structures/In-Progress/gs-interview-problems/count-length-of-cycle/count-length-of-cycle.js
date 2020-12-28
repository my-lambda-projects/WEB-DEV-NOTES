/**
 * countLengthOfCycle(arr, startIndex)
 *
 * You are given an integer array of size N. 
 * Every element of the array is greater than or equal to 0.
 * Starting from arr[startIndex], follow each element to the index it points to. 
 * Continue to do this until you find a cycle. 
 * Return the length of the cycle. If no cycle is found return -1
 *
 * Examples:
 * countLengthOfCycle([1, 0], 0) == 2
 * countLengthOfCycle([1, 2, 0], 0) == 3
*/
const countLengthOfCycle = function(arr, startIndex) {
  //TODO: Implement Solution
  
  return -1;
}

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
const doTestsPass = () => {
  let testsPassed = true;
  let testCases = [
	[[1, 0], 0, 2],
	[[1, 2, 0], 0,  3]
  ];
  
  _.forEach(testCases, (testCase) =>{
	testsPassed &= 
	  countLengthOfCycle(testCase[0], testCase[1]) === testCase[2];
  })
  
  return testsPassed;
}

/**
 * Main execution entry.
 */
if(doTestsPass())
{
  console.log("All tests pass!");
}
else
{
  console.log("There are test failures.");
}
