## Control Flow and Arrays (W1D2) - Learning Objectives

### Control Flow and Arrays

1. Define a function that accepts a sentence string and two words as args. The function should return a boolean indicating if the sentence includes either word.

```js
function includesEitherWord(sentence, word1, word2) {
	let containsWord1 = sentence.indexOf(word1) !== -1;
	let containsWord2 = sentence.indexOf(word2) !== -1;
	return containsWord1 || containsWord2;
}
```

2. Identify a pair of mutually exclusive conditions

- If one condition being true means that the other condition has to be false, the conditions are said to be mutually exclusive.
- These are important to us because it allows us to use `if/else` statements instead of defining multiple `if` statements unnecessarily:

```js
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
```

3. Given a for loop, translate it into a while loop, and vice-versa

- A for loop has the following structure:

```js
for ({ initialExpression }; { condition }; { loopEndExpression }) {
	// code to execute for each iteration
}

// example
// initial expression: setting i to 1
// condition: iterate while i <= 5
// loopEnd expression: at the end of each loop, add one to i
for (let i = 1; i <= 5; i++) {
	console.log(i);
}
```

- We can structure a while loop to account for each of these:

```js
// initial expression
while ({ condition }) {
	// code to execute for each iteration
	// loopEnd Expression
}

// example
let i = 1;
while (i <= 5) {
	console.log(i);
	i++;
}
```

4. Write a function that iterates through a provided string argument

- We can index into a string to access an individual character. We can also utilize the length of the string to set up our looping condition.

```js
// with a for loop
let word = "hello";
for (let i = 0; i < word.length; i++) {
	// do something with the character, word[i]
	console.log(word[i]);
}

// with a while loop
let word = "hello";
let charIdx = 0;
while (charIdx < word.length) {
	console.log(word[charIdx]);
	charIdx++;
}
```

5. Given a description of pig latin, write a function that takes in a string argument and utilizes String#slice to translate the string into pig latin.

- `String#slice` takes in two arguments: the index to start taking characters from, and an optional argument for which index to stop taking characters _before_. For example:

```js
"hello".slice(1, 3); // "el"
"world".slice(2); // "rld"
```

- To implement a pig latin function, we'll have to do a couple of things.
  - First, we need to see if a word begins with a vowel. If it does, we add "yay" on to the end.
  - If the word does not start with a vowel, we grab every letter before the first vowel. Our new word should take this first cluster and move it to the end, then add "ay".

```js
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
}
```

6. Write a function that takes in an array of words and a string as arguments and returns a boolean indicating whether the string is located inside of the array. The function must use `Array#indexOf`.

- `Array#indexOf` is a function that takes in an argument and returns the index of where it's located within the array. If it's not found, it will return -1. We can use this default return to our advantage, knowing that any value >=0 means the argument was found.

```js
function wordWithinArray(array, word) {
	if (array.indexOf(word) >= 0) {
		return true;
	} else {
		return false;
	}
}
```

7. Define that an array literal is an ordered list of values defined by using bracket and individual values are read by indexing.

- This LO simply indicates that the order of our array's values is important and maintained.
- We can access individual items within our array by indexing in using `[]`, just like getting a character from a string.
- Just like strings, our indices start at 0.

```js
let words = ["hello", "world", "apple", "pie"];
console.log(words[2]); // prints 'apple'
```

8. Be able to concatenate multiple arrays together.

- The `+` operator is only used for numbers and strings in JavaScript. In order to combine arrays, we can use the `Array#concat` function, which will return a new array with each element of the argument added in at the end of the original array.

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); // prints [1, 2, 3, 4, 5, 6]
console.log(arr1); // prints [1, 2, 3], meaning concat did not modify the original array, just returned a new one.
```
