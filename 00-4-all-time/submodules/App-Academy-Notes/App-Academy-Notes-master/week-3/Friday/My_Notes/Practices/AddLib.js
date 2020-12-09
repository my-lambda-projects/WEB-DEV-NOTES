/*
addLib Problem
Write a function makeAddLib(verb, adj, noun) that accepts three strings.

Use string interpolation to return a new wacky string using the three string args.  See the examples for more information.

*/
function makeAddLib(verb, adj, noun) {
    return `I shall ${verb} to the ${adj} ${noun}?`;
}

console.log(makeAddLib("swim", "sparkly", "rainbow")); // => "I shall swim to the sparkly rainbow?"
console.log(makeAddLib("RUN", "FANCY", "ParK")); // => "I shall RUN to the FANCY ParK?"
