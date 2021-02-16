/*
Cake Maker Problem
Write a function makeCake(str1, str2) that takes in two strings representing ingredients as arguments. Use string interpolation to return a new string using both ingredients. See the examples for more information.

*/
function makeCake(str1, str2) {
    return `I'm making a cake with ${str1} and ${str2}!`;
}

console.log(makeCake("sugar", "spice")); // => "I'm making a cake with sugar and spice!"
console.log(makeCake("eggs", "cream")); // => "I'm making a cake with eggs and cream!"
