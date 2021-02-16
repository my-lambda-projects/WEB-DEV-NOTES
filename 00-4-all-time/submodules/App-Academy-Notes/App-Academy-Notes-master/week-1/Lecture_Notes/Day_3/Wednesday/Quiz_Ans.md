Intermediate Functions Quiz
let sayHello = function() {
console.log('hello');
};
Which of the following best describes the code above?

function name assignment syntax

function declaration syntax

function expression syntax

recursion

EXPLANATION
Assigning a variable to a function is "function expression" syntax.

When is an object considered mutable?

if it cannot be changed

if it can be changed

EXPLANATION
A mutable object can be changed. An immutable object cannot be changed.

Which of the following methods does not mutate their input?

Array#unshift

Array#slice

Array#splice

Array#push

EXPLANATION
The slice method does not mutate, instead it returns a copy. The remaining methods all mutate their input

Which of the following best describes why objects are considered "first-class" in JavaScript?

can return values

are declared before other objects

can take in arguments

can be stored in variables

EXPLANATION
A first-class object is something that can be stored in a variable.

Which of the following types is mutable?

String

Array

Boolean

Number

EXPLANATION
Arrays are mutable. Booleans, Numbers, and Strings are immutable.

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.slice(1, 3);
console.log(arr);
What will the code snippet above print out?

['a', 'b', 'c', 'd', 'e']

['b', 'c']

['b', 'c', 'd']

['a', 'e']

['a', 'd', 'e']

EXPLANATION
Array#slice does not mutate the input array, so arr is unchaged.

Which of the following best describes the ordered arguments that Array#splice accepts?

targetIndex, removeAmount, insertAmount

targetIndex, removeAmount, insertionItem1, insertionItem2, ...

targetIndex, removeAmount, arrayOfInsertionItems

EXPLANATION
Array#splice accepts a target index, the number of elements to remove starting at that index, and any number of additional arguments to be inserted at that index

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.splice(2, 3);
console.log(arr);
What will the code snippet above print out?

['a', 'b', 'f']

['c', 'd', 'e']

['c', 'd']

['a', 'b', 'c', 'd', 'e', 'f']

EXPLANATION
Array#splice mutates the input array, removing 3 elements starting at index 2.
