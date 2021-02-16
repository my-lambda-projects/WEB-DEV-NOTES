/******************************unctions as first - class objects***********************
JavaScript is well known for being a programming language that treats functions as "first-class objects".
You can treat a function as a "normal" value by storing it in a variable.
-> example that shows the "first-class object" nature of functions:
*/
let calculateAverage = (a, b) => (a + b) / 2;
//as fat arrow function:(aug cohort ignore) let calculateAverage = (a, b) => (a + b) / 2;
console.log(calculateAverage(10, 20)); // 15
/*
 To call the function, we simply refer to the variable name.
We will refer to this way of defining functions as function expression syntax
*/

// function declaration syntax
function myFunctionName(arg1, arg2) { }

/** using document this extension....
 * @description
 * @param {*} arg1
 * @param {*} arg2
 */

let myFunctionName = function (arg1, arg2) {
};


/*In the coming sections, we'll highlight moments when we'll prefer one syntax over the other.For now, get acquainted with the new syntax as it is something you'll be seeing a lot of as a programmer!

We know that when we assign an expression to variable, the expression first evaluates to a single value,
which we then store in the variable name:
*/
let myNum = 4 + 4;//8
console.log(myNum); // prints 8
console.log(myNum * 3); // prints 24
//In the same way we can treat a function definition as an expression that evaluates!

let myFunc = function () {
    console.log("I'm a function");
};

console.log(myFunc); // prints [Function: myFunc]
myFunc(); // prints "I'm a function"


/*
When we print the myFunc variable directly, without calling the function with parentheses, JavaScript simply says the variable contains a function named myFunc ([Function: myFunc]).

The term anonymous function may also be used to describe a function expression before it is assigned to any variable.
Following the example above, we'll use the word anonymous function to describe the function expression before the assignment to the myFunc variable is complete.
Once the assignment is complete, it would be silly to refer to myFunc as an anonymous function because an anonymous function has no name.
*/


//************************************Two Dimensional Arrays******************** */

/*Multidimensional Arrays
When we store arrays as elements of other arrays, we refer to those structures as multidimensional arrays.
If the "depth" of the nested arrays is at exactly 2     (an outer array containing inner arrays),
 then we'll refer to it as a two-dimensional array:
*/
let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

console.log(twoDimensional[1]); // [ 'd', 'e' ]
console.log(twoDimensional[1][0]); // 'd'

let subArr = twoDimensional[1];// subArr = twoDimensional[1] = [d,e];
console.log(subArr[0]); // 'd'

//To gain access to the innermost elements, we simply need to apply another set of indexing brackets!

//If we style our 2D arrays nicely so that each subarray is on a new line,
//we can interpret the double indices as [row][column]:

let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

// get the element in the 0th row, 2nd col:
console.log(twoDimensional[0][2]); // 'c' which is the third element of twoDimensional array (i.e. 'c')


// Iterating through 2D Arrays
// Since a 2D array is just an array of arrays.
//We'll need to use a loop within a loop to iterate through a 2D array:

let array = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

for (let i = 0; i < array.length; i++) { //the i index refers to the current "row" and "
    console.log(subArray);

    for (let j = 0; j < subArray.length; j++) {//the j index refers to the current "column".
        let subArray = array[i];
        console.log(subArray[j]);
    }
}


//Since the inner subArrays have different lengths,
//we'll want to specifically reference the length of that subarray in our inner loop condition j < subArray.length.
//The code above will print:

// ['a', 'b', 'c']
// a
// b
// c
// ['d', 'e']
// d
// e
// ['f', 'g', 'h']
// f
// g
// h
// when you'll find a 2D array useful in your future projects:Imagine how'd you represent a "grid":

// tic - tac - toe(3x3 grid)
// chess(8x8 grid)
// sudoku(9x9 grid)
// excel(a sheet is an arbitrarily sized 2D array)


//***************What is mutability?*************************************** */

/*Something that is mutable can be changed, while something that is immutable is unchanging and permanent.
Both strings and arrays have indices, length, and even share common methods like slice.However, they differ greatly in their mutability:
*/
let myArr = ["b", "e", "a", "m"];
myArr[0] = "s";
console.log(myArr); // 'seam'

let myStr = "beam";
myStr[0] = "s";
console.log(myStr); // 'beam'

//-------------------------------------------------
/*Above we have shown that we can assign a new element to an index of an array, but we cannot assign a new character to an index of a string.
In other words, arrays (and all other reference types) are mutable, but strings (and all other primative types) are immutable.

There are some array methods that will modify an existing array but zero methods that will modify an existing string.
Methods that manipulate string data typically return a new string and never modify an existing one.
A prime example is toUpperCase:
*/
let word = "piñata";
let newWord = word.toUpperCase();
console.log(word); // 'piñata'
console.log(newWord); // 'PIÑATA'
/*Above, notice that the toUpperCase method returns a capitalized version of the string, but does not change the original string.
It's also worth noting that not every array method will mutate.
For example, the slice method does not mutate for both strings and arrays.
*/
//immutable------------reference types
// array
// object(we'll learn these soon)
//functions.... technically a type of object


//---------Immutable---primative types---------------
// number
// string
// boolean
// undefined
// NaN


//A quick way to remember the above list is to identify that the composite types(the types that can contain multiple values) of array and object are mutable.

//The remaining "simpler" types of number, string, and boolean are immutable.

// The skeptical programmer may use this as an argument to show that numbers are mutable:

let myNum = 42;
myNum += 8;
console.log(myNum); // 50
/*
Because the myNum variable now contains 50 where it once contained 42,
it may seem we have mutated the number,
but this is not truly the case.
Recall that myNum += 8 is shorthand for myNum = myNum + 8.
Since the right hand side of the assignment evaluates first, we are simply taking the new number of 50 and reassigning it to the myNum variable.
This reassignment of a variable name is not a mutation of the original number.
*/


//***********Array.splice()**method**********************8*/

/*For clarity in this article and moving forward in the course, we'll be notating methods with # to clarify how they should be called.
Likewise String#toUpperCase refers to the method that should be called on a string, str.toUpperCase() where str is some string variable.

What can Array#splice do?
    That is, Array#splice will modify the existing array and not return a new array.(will mutate original array)

Using splice to remove
The usage of the Array#splice method is easy to mix up because it can be used to remove or insert elements into an array.
We'll begin by only removing elements from an array:
*/
let colors = ["red", "yellow", "blue", "green", "orange", "brown", "gray"];
let returnVal = colors.splice(2, 3);
console.log(colors); // [ 'red', 'yellow', 'brown', 'gray' ]
console.log(returnVal); // [ 'blue', 'green', 'orange' ]
/*
The first two arguments for splice correspond to
1) the target index and
2) how many elements to remove.

i.e.)   The call colors.splice(2, 3), will remove the next three elements beginning at index 2.
This means that the elements at indices 2, 3, and 4 are removed....blue,green,orange

Note that splice returns an array containing the elements that were removed
Has the effect of removing the elements from the original array, mutating it in -place.
*/
// Using splice to insert
// To use the splice method to insert new elements into an array, we can pass in any number of additional arguments representing the values to insert:

let colors = ["red", "yellow", "blue"];
let returnVal = colors.splice(1, 0, "RebeccaPurple", "CornflowerBlue");
console.log(colors); // [ 'red', 'RebeccaPurple', 'CornflowerBlue', 'yellow', 'blue' ]
console.log(returnVal); // []
/*
The method call colors.splice(1, 0, 'RebeccaPurple', 'CornflowerBlue') translates to:
"target index 1, remove the next 0 elements,
then insert 'RebeccaPurple' and 'CornflowerBlue'."

 Say we wanted to target index 2, remove the next 3 elements, then insert 'Gainsboro', 'Ivory', and 'Khaki':
*/
let colors = ["red", "yellow", "blue", "green", "black", "beige"];
let removed = colors.splice(2, 3, "Gainsboro", "Ivory", "Khaki");
console.log(colors); // [ 'red', 'yellow', 'Gainsboro', 'Ivory', 'Khaki', 'beige' ]
console.log(removed); // [ 'blue', 'green', 'black' ]


//**********String#split and Array#join******************************************/

/*String#split
The String#split method is called on a string and accepts a "separator" string as an argument.The method will return an array where the elements are the resulting substrings when we cut at the "separators":
*/
let sentence = "follow the yellow brick road";
let words = sentence.split(" ");// Note that the original string is not mutated, rather a new array is returned.A common pattern is to split a sentence string on a space(' '), but you can split on any separator as you see fit:
console.log(words); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
console.log(sentence); // 'follow the yellow brick road'




let sentence = "follow the yellow brick road";
console.log(sentence.split(" ")); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
console.log(sentence.split("the")); // [ 'follow ', ' yellow brick road' ]
console.log(sentence.split("o")); // [ 'f', 'll', 'w the yell', 'w brick r', 'ad' ]
/*
A pattern you may find useful is that when you split on a separator string, it is guaranteed that that separator will not be in the resulting array, effectively removing it.
*/

//*********************Array#join-------------------------------------------------
/*The Array#join method is called on an array and accepts a "separator" string as an argument.The method will return a string where elements of the array are concatenated together with the "separator" between each element:
*/
let words = ["run", "around", "the", "block"];
let sentence = words.join(" ");
console.log(sentence); // 'run around the block'
console.log(words); // [ 'run', 'around', 'the', 'block' ]

console.log(words.join("_")); // 'run_around_the_block'
console.log(words.join("HI")); // 'runHIaroundHItheHIblock'


//Array#join does not mutate the original array, instead it will return a new string.


//It's pretty evident that String#split and Array#join are "opposite" methods. That is:

// we use split to turn a string into a array
// we use join to turn an array into a string
// By combining these two methods we can accomplish some cool behavior:

let str = "I don't know what I want to eat";
let newStr = str.split("I").join("we");
console.log(newStr); // 'we don't know what we want to eat'
/*
 able to replace every substring "I" with the substring "we".
 We know that the line str.split('I').join('we') evaluates from left to right.
 This means that the split will cut the string wherever there is an 'I',
 leaving a gap where the 'I's were.
 Then, the join will fill those gaps with 'we's. //like find and replace
*/
