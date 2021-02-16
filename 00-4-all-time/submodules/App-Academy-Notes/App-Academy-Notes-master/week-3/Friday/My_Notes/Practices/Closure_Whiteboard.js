/*
WhiteBoarding Problem
    The Question
                Write a function named dynamicDivider(divisor).
                When invoked the dynamicDivider function will intake a number to be used as a divisor and will then return a new function.
                The function returned by dynamicDivider will accept a number - and:
                That number will then be divided by the divisor that was defined when the dynamicDivider was first invoked.

*/


//Examples:

/*
    let halvedbyTwo = dynamicDivider(2); //returns a function
    halvedbyTwo(12); // returns 6
    halvedbyTwo(18); // returns 9

    let halvedbyThree = dynamicDivider(3); // returns a function
    halvedbyThree(12); // returns 4
    halvedbyThree(18); // returns 6
*/


//Answer:
function dynamicDivider(divisor) {
    // here we are returning an inner function that will create a closure by
    // closing over and accessing the above divisor argument to use within the
    // function returned below

    return function (num) {
        return num / divisor;
    };
}
