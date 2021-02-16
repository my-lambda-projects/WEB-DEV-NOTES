# Intro to Javascript (Week 1) - Learning Objectives

## Assessment Structure

-    2 hours
-    Mixture of multiple choice and coding problems
     -    Approximately 15-20 of each
-    Standard assesment procedures
     -    You will be in an individual breakout room
     -    Use a single monitor and share your screen
     -    Only have open those resources needed to complete the assessment:
          -    Zoom
          -    Browser with AAO and Progress Tracker (to ask questions)
          -    Approved Resources for this assessment:
               -    MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Expressions and Functions (W1D1) - Learning Objectives

### Expressions

1. Given a working REPL interface, write and execute a statement that will print “hello world” using console.log

-    We can use the `console.log` function to print out statements during code execution. While we are learning introductory material, this may be our end goal. Moving forward, `console.log` will become very valuable not as an end result, but as a tool to aid us in debugging larger and more complex pieces of code.
     js
     console.log("hello world");

2. Identify that strings are a list of characters defined by using double or single quotes

-    In JavaScript, we can define a string using either double or single quotes. Both implementations will be treated the same.
     js
     let validString = "hello";
     let anotherValidString = 'hello';

-    In general, we want to be consistent in our code. If we start out using single quotes, use them throughout!

3. Given an arithmetic expression using +, -, \*, /, %, compute its value

-    We can use the following expressions for mathematical operations in our code:

| Symbol | Meaning        | Example Usage | Expected Output |
| :----: | :------------- | :-----------: | :-------------: |
|   +    | Addition       |     7 + 4     |       11        |
|   -    | Subtraction    |     8 - 3     |        5        |
|   \*   | Multiplication |    3 \* 6     |       18        |
|   /    | Division       |     9 / 3     |        3        |
|   %    | \*Modulo       |     7 % 5     |        2        |

-    If you are unfamiliar with the term, modulo can be though of as the remainder when doing division.

4. Given an expression, predict if its value is NaN

-    In general, any nonsensical arithmetic will result in NaN.
-    Math operations involving `undefined` is perhaps the most common mistake:
     js
     console.log(undefined + 3); // NaN
     console.log("fish" \* 2); // NaN

5. Construct the truth tables for &&, ||, !

-    `&&` means both sides must be true. (AND)
-    `||` means at least one side must be true. (OR)
-    `!` negates a value, flipping true/false. (NOT)
-    The following table could be expanded to many combinations of `&&`, `||`, `!`, and `()` to group those operations:

|  `A`  |  `B`  | `A && B` | `A || B` | `!A`  | `!B`  |
| :---: | :---: | :------: | :------: | :---: | :---: |
| True  | True  |   True   |   True   | False | False |
| True  | False |  False   |   True   | False | True  |
| False | True  |  False   |   True   | True  | False |
| False | False |  False   |  False   | True  | True  |

6. Given an expression consisting of >, >=, ===, <, <=, compute it’s value

| Operator | Meaning                  | Example Usage  | Example Output |
| :------: | :----------------------- | :------------- | :------------: |
|    >     | greater than             | 10 > 4         |      True      |
|    >=    | greater than or equal to | 10 >= (6 + 4)  |      True      |
|   ===    | equal to                 | 10 === (5 + 5) |     False      |
|    <     | less than                | 10 < (12 - 2)  |     False      |
|    <=    | less than or equal to    | 10 <= (12 - 2) |      True      |

7. Apply De Morgan’s law to a boolean expression

-    De Morgan's law explains how to distribute `!` (a negation) across parentheses.
-    If we would like to distribute the negation, we also have to flip the comparison operator between `&&` and `||`:
     -    `!(A || B)` is equivalent to `!A && !B`
          -    In words: "Neither A or B can be true -> Both A and B must be false"
     -    `!(A && B)` is equivalent to `!A || !B`
          -    In words: "A and B cannot both be true -> A is false or B is false"

8. Given an expression that utilizes operator precedence, compute its value

-    Standard mathematical operator precedence takes place in JavaScript (PEMDAS)
     -    2 + 3 \* 4 === 14
     -    4 % 3 + 6 / 2 === 4 (modulo takes place with multiplication/division)

9. Given an expression, use the grouping operator to change it’s evaluation

-    Reflecting on order of operations, parentheses (grouping operators) are highest priority. Anything inside is evaluated first.
     -    2 + 3 \* 4 === 14
     -    (2 + 3) \* 4 === 20

10. Given expressions using == and ===, compute their values

-    `===` is used for strict equality, while `==` may coerce a value into another type in order to compare them.
-    This coercion can sometimes be hard to predict, so we generaly try to avoid it, opting for a `===` strict equality check.
     js
     console.log(5 === "5"); // false
     console.log(5 == "5"); // true
     console.log(0 === false); // false
     console.log(0 == false); //true

11. Given a code snippet using postfix ++, postfix --, +=, -=, /=, \*=, predict the value of labeled lines

-    We can use the shorthand in order to perform common mathematical operations and reassignments for a variable.
     js
     let number = 0;
     number++; // equivalent to number = number + 1, currently 1
     number--; // equivalent to number = number - 1, currently 0
     number += 10; // equivalent to number = number + 10, currently 10
     number -= 2; // equivalent to number = number - 2, currently 8
     number /= 4; // equivalent to number = number / 4, currently 2
     number _= 7; // equivalent to number = number _ 7, currently 14
     console.log(number); // 14

12. Create and assign a variable using `let` to a string, integer, and a boolean. Read its value and print to the console.

-    The keyword `let` creates a variable with the given name.
-    We can assign the variable immediately, or later on in our code. If it is not given a value right away, the default value is `undefined`.
-    In JavaScript, a variable can be reassigned to a completely different type without issue, so a variable that previously held an integer can be reassigned to a string, etc.
-    Whenever we want to use the value in our code, we can reference the variable name.
     js
     let num; // num is currently undefined
     num = '5'; // num is given the value of the string '5'
     num = 5; // reassigned to an integer is no issue
     let sum = num + 4; // sum is assigned a value in the same line it is declared. num is also used in the calculation by simply referencing its name.
     console.log(sum); // prints 9 to the console.

### Intro to Functions

1. Define a function using function declaration

-    We can use the keyword `function` to define a function.
-    A function declaration requires three components:
     -    The name of the function
     -    Parameters that the function will utilize, declared within `()`
     -    The code to run when the function is invoked, written within `{}`
          js
          function myFunction(firstParam, secondParam, thirdParam) {
          // code to run when myFunction is invoked
          // In this code block we can use the parameters passed in to the function
          }

2. Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value
   js
   function average(number1, number2) {
   return (number1 + number2) / 2;
   }

let score = average (100, 90);
console.log(score); // 95

3. Identify the difference between parameters vs arguments

-    Parameters are the list of variables that are specified during a function declaration. They are what are referenced in the code that is run when the function is invoked.
-    Arguments are the values that are passed in to the function when it is invoked.
-    In the example above, `number1` and `number2` are the parameters while `100` and `90` are the arguments.

## Control Flow and Arrays (W1D2) - Learning Objectives

### Control Flow and Arrays

1. Define a function that accepts a sentence string and two words as args. The function should return a boolean indicating if the sentence includes either word.
   js
   function includesEitherWord(sentence, word1, word2) {
   let containsWord1 = (sentence.indexOf(word1) !== -1);
   let containsWord2 = (sentence.indexOf(word2) !== -1);
   return (containsWord1 || containsWord2);
   }

2) Identify a pair of mutually exclusive conditions

-    If one condition being true means that the other condition has to be false, the conditions are said to be mutually exclusive.
-    These are important to us because it allows us to use `if/else` statements instead of defining multiple `if` statements unnecessarily:
     js
     // The following conditionals can be rewritten
     if (number <= 100) {
     smallNumberFunction();
     }
     if (number > 100) {
     bigNumberFunction();
     }

// We can use an `else` because we want to run the second block of code in any case where the first condition is not met
if (number <= 100) {
smallNumberFunction();
} else {
bigNumberFunction();
}

3. Given a for loop, translate it into a while loop, and vice-versa

-    A for loop has the following structure:
     js
     for ({initialExpression}; {condition}; {loopEndExpression}) {
     // code to execute for each iteration
     }

// example
// initial expression: setting i to 1
// condition: iterate while i <= 5
// loopEnd expression: at the end of each loop, add one to i
for(let i = 1; i <= 5; i++){
console.log(i);
}

-    We can structure a while loop to account for each of these:
     js
     // initial expression
     while({condition}){
     // code to execute for each iteration
     // loopEnd Expression
     }

// example
let i = 1;
while(i <= 5){
console.log(i);
i++;
}

4. Write a function that iterates through a provided string argument

-    We can index into a string to access an individual character. We can also utilize the length of the string to set up our looping condition.
     js
     // with a for loop
     let word = "hello";
     for(let i = 0; i < word.length; i++){
     // do something with the character, word[i]
     console.log(word[i]);
     }

// with a while loop
let word = "hello";
let charIdx = 0;
while(charIdx < word.length){
console.log(word[charIdx]);
charIdx++;
}

5. Given a description of pig latin, write a function that takes in a string argument and utilizes String#slice to translate the string into pig latin.

-    `String#slice` takes in two arguments: the index to start taking characters from, and an optional argument for which index to stop taking characters _before_. For example:
     js
     "hello".slice(1,3); // "el"
     "world".slice(2); // "rld"

-    To implement a pig latin function, we'll have to do a couple of things.

     -    First, we need to see if a word begins with a vowel. If it does, we add "yay" on to the end.
     -    If the word does not start with a vowel, we grab every letter before the first vowel. Our new word should take this first cluster and move it to the end, then add "ay".
          js
          function pigLatinWord(word) {
          // We set up a string that includes all of our vowels.
          // This makes it very easy to check if any specific character is a vowel by using String#includes
          let vowels = "aeiou";

     // When we start with a vowel, we can immediately create and return the pig latinified word.
     if (vowels.includes(word[0])) {
     return word + "yay";
     }

     // Here we iterate through each letter of the word
     for (let i = 0; i < word.length; i++) {
     // We get a reference to the current character
     let char = word[i];
     // If the current character is a vowel...
     if (vowels.includes(char)) {
     // ...take every character that came before this vowel...
     let first_half = word.slice(0, i);
     // ...and every character remaining (including this vowel)...
     let second_half = word.slice(i);
     // and return the reversed order, adding 'ay' to the end.
     return second_half + first_half + "ay";
     }
     }
     };

6. Write a function that takes in an array of words and a string as arguments and returns a boolean indicating whether the string is located inside of the array. The function must use `Array#indexOf`.

-    `Array#indexOf` is a function that takes in an argument and returns the index of where it's located within the array. If it's not found, it will return -1. We can use this default return to our advantage, knowing that any value >=0 means the argument was found.
     js
     function wordWithinArray(array, word) {
     if (array.indexOf(word) >= 0) {
     return true;
     } else {
     return false;
     }
     };

7. Define that an array literal is an ordered list of values defined by using bracket and individual values are read by indexing.

-    This LO simply indicates that the order of our array's values is important and maintained.
-    We can access individual items within our array by indexing in using `[]`, just like getting a character from a string.
-    Just like strings, our indices start at 0.
     js
     let words = ['hello', 'world', 'apple', 'pie'];
     console.log(words[2]); // prints 'apple'

8. Be able to concatenate multiple arrays together.

-    The `+` operator is only used for numbers and strings in JavaScript. In order to combine arrays, we can use the `Array#concat` function, which will return a new array with each element of the argument added in at the end of the original array.
     js
     let arr1 = [1, 2, 3];
     let arr2 = [4, 5, 6];
     console.log(arr1.concat(arr2)); // prints [1, 2, 3, 4, 5, 6]
     console.log(arr1); // prints [1, 2, 3], meaning concat did not modify the original array, just returned a new one.

## Intermediate Functions (W1D3) - Learning Objectives

### Intermediate Functions

1. Identify that strings are immutable and arrays are mutable

-    When something is 'mutable' it can be changed. In JavaScript, the contents of a string are stored in a specific place in memory. When we want to add/remove/change characters, we change what place in memory we are pointing at. This means that we cannot mutate the string itself, only point to new strings:
     js
     let word = 'hello';
     console.log(word); // 'hello'
     word[0] = 'm';
     console.log(word); // 'hello' (we cannot mutate the string)
     word += '!';
     console.log(word); // 'hello!' (the += is reassigning the whole variable `word` to a new string of 'hello' + '!', or 'hello!')
-    Unlike strings, arrays are mutable. Instead of a contents being stored directly in memory, we store pointers to the contents. This means not only can we reassign the whole value of the variable, we can change where those pointers go, mutating the contents of the actual array:

```js
let words = ["hello", "world", "apple", "pie"];
console.log(words); // ['hello', 'world', 'apple', 'pie']
words[0] = "hey";
console.log(words); // ['hey', 'world', 'apple', 'pie']
// we were able to mutate the actual value of our array instead of completely reassigning
```

2. Define a function using both function declaration and function expression syntax

-    We have multiple ways to define a function in JavaScript.

```js
// function declaration
function addTwo(num) {
	return num + 2;
}

// function expression
let addTwo = function (num) {
	return num + 2;
};
```

3. Utilize Array#push, #pop, #shift, #unshift to mutate an array

-    We can add and remove elements from an array using these methods.
     -    push: add an element to the end
     -    pop: take an element off of the end
     -    shift: take an element off of the front
     -    unshift: add an element to the front

```js
let food = ["pizza", "burger"];
food.push("fries"); // ['pizza', 'burger', 'fries]
food.shift(); // ['burger', 'fries]
food.pop(); // ['burger']
food.unshift("hotdog"); // ['hotdog', 'burger']
console.log(food); // ['hotdog', 'burger']
```

4. List the arguments that can be used with `Array#splice`

-    `Array#splice` is a method that allows us to get a reference to a location within an array and then remove a specific number of elements and/or insert new elements at that location. Splice will mutate the array as well as returning any elements that were removed.
-    The method has one required argument and several optional ones.
-    From the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), we see the arguments listed in the following format:
     -    `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
-    The first argument (start) is the index that we want to start changing the array. If we wanted to start removing and/or inserting elements after the first two that we currently have, we would provide 2 as the argument, since the deleted/inserted elements start at index 2. A useful feature for `start` is that we can provide negative numbers to indicate an index starting from the end (a -1 would mean, start right before the last element of the array).
-    The second argument (deleteCount), an optional argument, is the number of elements that we want to remove from the array. If we don't include this value, or if we provide a large value greater than the remaining length, all of the remaining elements will be removed. We don't have to delete anything, so if we just want to insert, we can provide a value of 0, indicating we want to delete no elements.
-    The next arguments (item1, item2, etc.), also optional, are what we want to insert into the array. Providing arguments will insert them as elements at this location. Omitting these arguments will simply not insert anything (most likely because we just wanted to use splice's deleting functionality).
-    Some examples:

```js
let fruit = [
	"apple",
	"banana",
	"grape",
	"kiwi",
	"orange",
	"strawberry",
	"watermelon",
];
let removed = fruit.splice(4);
console.log(removed); // ['orange', 'strawberry', 'watermelon']
console.log(fruit); // ['apple', 'banana', 'grape', 'kiwi']

fruit = [
	"apple",
	"banana",
	"grape",
	"kiwi",
	"orange",
	"strawberry",
	"watermelon",
];
removed = fruit.splice(-2, 1);
console.log(removed); // ['strawberry']
console.log(fruit); // ['apple', 'banana', 'grape', 'kiwi', 'orange', 'watermelon']

fruit = [
	"apple",
	"banana",
	"grape",
	"kiwi",
	"orange",
	"strawberry",
	"watermelon",
];
removed = fruit.splice(5, 0, "starfruit");
console.log(removed); // []
console.log(fruit); // ['apple', 'banana', 'grape', 'kiwi', 'orange', 'starfruit', 'strawberry', 'watermelon']

fruit = [
	"apple",
	"banana",
	"grape",
	"kiwi",
	"orange",
	"strawberry",
	"watermelon",
];
removed = fruit.splice(2, 4, "pizza", "candy");
console.log(removed); // ['grape', 'kiwi', 'orange', 'strawberry']
console.log(fruit); // ['apple', 'banana', 'pizza', 'candy', 'watermelon']
```

-    Splice is a great example of being able to read documentation and apply it to your specific situation. You may not have all aspects of the method memorized, but by parsing the documentation you should be able to understand how to use it.

5. Write a function that sums up elements of an array, given an array of numbers as an argument

-    We want to manipulate a variable on each iteration of looping through our array, so we create this variable before the loop, set a starting value, then do our addition inside.

```js
// for loop version
function sumArrayFor(nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sums += nums[i];
	}
	return sum;
}

// while loop version
function sumArrayWhile(nums) {
	let sum = 0;
	let i = 0;
	while (i < nums.length) {
		sum += nums[i];
		i++;
	}
	return sum;
}
```

6. Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array

-    We need to access the elements inside of our inner arrays. To accomplish this we need to nest our loops.
-    The first loop iterates over the elements in our outer array. Each of these elements is itself an array (the inner arrays that make this 2D).
-    The element that we reference on this loop is the inner array. For each of these, we need to iterate over the elements inside, adding them to our total.

```js
function sum2DArray(array) {
	let sum = 0;

	for (let outerIdx = 0; outerIdx < array.length; outerIdx++) {
		let innerArray = array[outerIdx];
		for (let innerIdx = 0; innerIdx < innerArray.length; innerIdx++) {
			let num = innerArray[innerIdx];
			sum += num;
		}
	}

	return sum;
}
```

7. Define a function that takes in an array of elements and returns a 2d array where the subarrays represent unique pairs of elements

-    To create unique pairs, we need to create every combination of indices for our array. For example, with an array of 4 elements, we need [[ele1, ele2], [ele1, ele3], [ele1, ele4], [ele2, ele3], [ele2, ele4], [ele3, ele4]].
-    We can accomplish this pattern by creating a nested loop.
     -    Our outer loop goes through each index that will be used for the first element.
     -    Out inner loop now must create a pair for each second element that represents a valid pair.
     -    In order for the pair to be unique, we don't want to repeat indices we've already used. Instead of starting at 0 for the inner loop, we can start at the index after our outer loop, ensuring an index combination that hasn't been used yet.

```js
function createPairs(arr) {
  let pairs = [];

  // We start at 0 in order to use the first element of the array as the starting element
  for (let i = 0; i < arr.length; i++) {
    // The inner loop starts at i + 1 because we want to start at the next element in the array, ensuring no pair repetition
    for (let j = i + 1; j < arr.length; j++) {
      // Now that we have the indices for our pair, we can get the elements and create an array with them
      let pair = [ arr[i], arr[j] ];
      // We push our pair array, representing a unique pair, into our overall pairs array that we are tracking across iterations
      pairs.push(pair);
    }
  }
  // When our outer loop completes, we've iterated over every possible combination and can return our 2d pairs
  return pairs;
};


8. Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null
- We set up a base case/default. In this scenario, if we don't have any numbers in our array, we return `null`, so this is the default value we use in the variable that will track our minimum value.
- In order to check for the smallest value, we iterate over each element.
- If the current element is smaller than the smallest that we've found (or if it's the first that we are looking at), we overwrite what our smallest value is with the current one and continue looping.
- After all of our iterations, whatever is stored in our variable has to be the smallest value in the whole array.
 js
function minValue(nums) {
  // We set our base value for min, ie, what we want to return if our array is empty
  let min = null;

  // For each element in the array...
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // ...if the number is either the first we've seen or smaller than our minimum...
    if (min === null || num < min) {
      // ...reassign our minimum to be this new, smaller number.
      min = num;
    }
  }

  // After checking every number, return the smallest one we found.
  return min;
};



## Advanced Array Methods and Helper Functions (W1D4) - Learning Objectives

### Advanced Array Methods
1. Utilize Array#forEach to iterate through every element in an array
- `forEach` takes in a callback function as an argument. This function should take in the element that we are currently looking at as its argument, as well as optional arguments to capture the index and the array as a whole. The callback then performs whatever action we need to do with these elements/indices/array.
 js
let nums = [3, 5, 4, 2];

// print out each element
nums.forEach(function(element){
  console.log(element);
})

// print the element n times, where n is the index of the element
nums.forEach(function(element, index){
  for(let i = 0; i < index; i++){
    console.log(element);
  }
})

// assign each element to be the product of itself and its index
// print the array after the iterations have completed
nums.forEach(function(element, index, array){
  array[index] = element * index;
})
console.log(nums)


2. Utilize Array#map to return a new array with elements based off of the original
- Similar to `forEach`, `map` takes in a callback function as an argument that itself takes in the current element, with optional index and array arguments.
- The difference here is that the callback should return a value, which will be used as the element for that index in the new array that is returned.
 js
// create an array that is the product of each element and its index
// (this is different from the forEach example because it does not mutate the original array)
let nums = [3, 5, 4, 2];
let newNums = nums.map(function(num, idx){
  return num * idx;
})
console.log(nums);    // [3, 5, 4, 2]
console.log(newNums); // [0, 5, 8, 6]


// create an array that adds exclamation points to each word
let boring = ['hello', 'world'];
let exciting = boring.map(function(word){
  return word + '!!'
})
console.log(boring);   // ['hello', 'world']
console.log(exciting); // ['hello!!', 'world!!']


3. Utilize Array#filter to filter return a filtered array based on a callback function
- Like above, `filter` takes in a callback function that itself takes arguments for the element, and optional arguments for the index and the array.
- The callback should return `true` if the element should be included in the new array that is returned, or `false` if it should not be included.
 js
// only include words with length > 6
let words = ['apple', 'grape', 'pineapple', 'watermelon'];
let longWords = words.filter(function(word){
  return word.length > 6;
})
console.log(longWords); // ['pineapple', 'watermelon']

// only include numbers that are less than or equal to their original index
let nums = [3, -1, 2, 6];
let filteredNums = nums.filter(function(num, idx){
  return num <= idx;
})
console.log(filteredNums); // [-1, 2]


4. Utilize Array#reduce to return a value computed based on elements of an array
- `reduce` is useful if we want to use every value in an array to compute some final value (a sum or product are simple examples).
- The arguments to `reduce` are slightly different in that the function that it takes in as an argument itself takes in an accumulator as the first argument (the value that will be reassigned with each iteration's return statement), the current element as the second argument, as well as the usual optional index and array reference arguments.
- In addition to this callback, `reduce` can also take in an optional second argument, the initial value to start our calculations with. If no value is supplied, we use the first value of the array as the initial value.
 js
// Find the product of all numbers in an array
let nums = [3, -1, 2, 6];
// No initial value is given, so we use the first element of the array as our first accumulator
// With each iteration, we multiply our accumulator by our next number
// The result becomes the new value of the accumulator (-3 after the first round), and we continue our calculations
// In this example, our accumulator starts out as 3, then becomes -3, -6, then finally -36, which is returned as our final product.
let product = nums.reduce(function(accumulator, num){
  return accumulator * num;
})
console.log(product); // -36


// Calculate the final score, taking our starting score and subtracting each penalty
let startingScore = 100;
let penalties = [5, 5, 15, 10];
let finalScore = penalties.reduce(function(currentScore, penalty){
  return currentScore - penalty;
}, startingScore); // This part can be tricky! startingScore is the second argument to reduce, being passed in after the function, which is the first argument
console.log(finalScore); // 65


### Helper Functions
1. Be able to call a custom helper function within your own function. For example, define a function that takes in an array of numbers and returns a new array containing only the primes.
- In order to accomplish complex tasks, it can be helpful to break down the functionality into smaller tasks.
- In this example, we want to filter an array based on whether the element is a prime number.
- It can be more legible for someone reading your code (and for you building out the functionality), to first create the function that determines if an input is prime, then utilize this new function in your filtering process.
 js
// This helper function is constructed separately, allowing us to test our results before building a function that expects this functionality to work.
function isPrime(num){
  // A prime is a number greater than 1 that is only divisible by 1 and itself
  if(num < 2){
    return false;
  }
  // Starting at 2, check each number to see if our original number is divisible by this potential factor
  for(let factor = 2; factor < num; factor++){
    // If our number mod the potential factor is 0, it is divisible, meaning we do not have a prime and can return false
    if (num % factor === 0){
      return false;
    }
  }
  // If we've made it out of the loop without returning false, we've found a prime and return true
  return true;
}

console.log(isPrime(4)) // false
console.log(isPrime(5)) // true
console.log(isPrime(30)) // false
console.log(isPrime(31)) // true
// We tested our helper function and know that it works
// Now we can confidently and cleanly implement a filter based on its results
let nums = [4, 5, 30, 31]
let primes = nums.filter(function(num){
  return isPrime(num);
});
console.log(primes); // [5, 31]


## Data Types and Structured Exception Handling (W1D5) - Learning Objectives

### Data Types
1. Use the `typeof` operator to determine test types of values
- We occasionally need to determine what type of data we are actually working with.
- The `typeof` operator can be applied to whatever we are testing, with the result being a string that indicates the type.
- Most commonly, we'll see results of 'boolean', 'number', 'string', or 'function'. There are other possibilities as well, which we can see the full list of in the MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 js
let s = 'This is a string';
console.log(typeof s);    // 'string'

let n = 6.28;
console.log(typeof n);    // 'number'

let sum = function (a, b) {
  return a + b;
}
console.log(typeof sum);  // 'function'

- We can see that this can become useful when we want to make sure we are performing our actions on the correct input, handling any potential errors before they occur.
 js
if (typeof n === 'number') {
  // It is a number. Do some maths!
} else {
  console.log('I really wanted a number. :-(');
}


2. Use `Array.isArray` function to determine if an object is an array
- You may have noticed that 'array' is notably missing from that list of possible results from typeof.
- Because `typeof` cannot determine if something is an array, we have access to a function on the Array class itself, called `isArray`.
- `isArray` is called on Array itself, passing in what we are trying to test. `isArray` then returns a boolean to indicate whether the item tested is an array.
 js
let a = [1, 2, 3];
Array.isArray(a);  // true

let n = 6.28;
Array.isArray(n);  // false

let f = function () {}
Array.isArray(f);  // false


3. Explain the difference between `null` and `undefined`
- At first, `null` and `undefined` seem to be the same, but they have slightly different meanings/intentions.
- `null` is used to indicate an absence of value or an unknown value. We'll often see it used if we want to indicate that our function does not have an appropriate return value for the inputs. Anywhere that the result is 'none' or 'that question/calculation doesn't make sense', it may be appropriate to have `null` be the result.
- `undefined`, on the other hand, is generally a default. If we declare a variable without initializing a value, it will evaluate to `undefined`. If a function does not return anything specific, or doesn't even have a return statement, it will return `undefined`.

4. Use equality operators to determine if a value is `null` or `undefined`
- Both `null` and `undefined` are values that can be checked for with an equality operator.
 js
// Test if a value is null
if (value === null) {
  // do a thing
}

// Test if a value is undefined
if (value === undefined) {
  // do a thing
}


### Structured Exception Handling
1. Briefly explain what structured exception handling is.
- Structured Exception Handling is the process of creating code to intercept errors that may occur in our programs and respond to them in some way other than just crashing our application. The try-catch-finally blocks are a way to intercept these errors.

2. Use try-catch-finally blocks to catch errors.
- The try block surround the code that we want to be able to catch potential errors in. This is where we put anything that would have the potential to cause our program to crash, such as the wrong data type being passed in as an argument.
- The catch block runs if an error is thrown within the try block.  This block can be used to prompt for different input or gracefully explain what was expected vs. received and continue running code.
- The finally block is run no matter what, whether an error occurred or the try block completed successfully. Sometimes there are operations that we need to make sure happen, such as releasing access to a file that we opened. If an error occurred while we are in the middle of reading a file in our try block, we want to make sure we still close that file so that other programs may have access to it. Because of this, it makes sense to put it in our finally block so that it is always closed out.
 js
function printArray(array) {
  try{
    for (let i = 0; i < array.length; i++){
      console.log(i, array[i]);
    }
  } catch (e) {
    console.log('error: an error occurred:', e.message);
  } finally {
    console.log('I always run.');
  }
}


3. Create a custom error with the `throw` keyword.
- Not only can we catch standard errors that would occur in our code's evaluation, we can throw our own custom errors.
- If a function that we are writing should only be performed on numbers between 0 and 100, for example, the code that we write most likely won't result in an error if we pass in 101. We're probably doing some math or performing some action a certain number of times, so 101 won't break our code, we just don't want to allow it to happen. We can `throw` our own error to indicate the number is outside of our desired range.
 js
function performAction(input){
  if(input > 100 || input < 0){
    throw Error("OutOfBounds (must be between 0 and 100)");
  }
  // do something with input
  console.log(input)
}

try {
  performAction(10) // makes it to the console.log in performAction
  performAction(90) // makes it to the console.log in performAction
  performAction(101) // the custom error is thrown
  performAction(80) // code is never run because the error above was caught
} catch (e) {
  console.log('error: an error occurred:', e.message);
} finally {
  console.log('I always run.');
}
```
