# Using the Spread Operator and Rest Parameter Syntax
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Accepting arguments](#accepting-arguments)
  - [Functions with fewer arguments than specified](#functions-with-fewer-arguments-than-specified)
  - [More arguments than specified](#more-arguments-than-specified)
- [Utilizing Rest Parameters](#utilizing-rest-parameters)
- [Utilizing Spread Syntax](#utilizing-spread-syntax)
  - [Spreading elements](#spreading-elements)
  - [Spreading arguments](#spreading-arguments)
- [What you learned](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

When writing functions in JavaScript you gain a certain flexibility that other
programming languages don't allow. As we have previously covered, JavaScript
functions will happily take fewer arguments than specified, or more arguments
than specified. This flexibility can be taken advantage of by using the _spread
operator_ and _rest parameter_ syntax.

When you finish this reading, you should be able to:

1. Use rest parameter syntax to accept an arbitrary number of arguments inside a
   function.
2. Use spread operator syntax with both Objects and Arrays.

## Accepting arguments

Before we jump into talking about using new syntax let's quickly recap on what
we already know about functions.

### Functions with fewer arguments than specified

As we've previously covered, JavaScript functions can take fewer arguments than
expected. If a parameter has been declared when the function itself was defined,
then the default value of that parameter is `undefined`.

Below is an example of a function with a defined parameter both with and without
an argument being passed in:

```javascript
function tester(arg) {
  return arg;
}

console.log(tester(5)); // => prints: 5
console.log(tester()); // => prints: undefined
```

Always keep in mind that a function will still run even if it has been passed no
arguments at all.

### More arguments than specified

JavaScript functions will also accept more arguments than were previously
defined by parameters.

Below is an example of a function with extra arguments being passed in:

```javascript
function adder(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// adder will assign the first two parameters to the passed in arguments
// and ignore the rest
console.log(adder(2, 3, 4)); // => 5
console.log(adder(1, 5, 19, 100, 13)); // => 6
```

## Utilizing Rest Parameters

We know that JavaScript functions can take in extra arguments - but how do we
access those extra arguments? For the above example of the `adder` function: how
could we add all incoming arguments - even the ones we didn't define as
parameters?

**Rest parameter** syntax allows us to capture all of a function's incoming
arguments into an array. Let's take a look at the syntax:

```js
// to use the rest parameter you use ... then the name of the array
// the arguments will be contained within
function tester(...restOfArgs) {
  // ...
}
```

In order to use _rest parameter_ syntax a function's last parameter can be
prefixed with `...` which will then cause all remaining arguments to be placed
within an array. Only the **last parameter** can be a _rest parameter_.

Here is a simple example using _rest parameter_ syntax to capture all incoming
arguments into an array:

```js
function logArguments(...allArguments) {
  console.log(allArguments);
}

logArguments("apple", 15, 3); // prints: ["apple", 15, 3]
```

For a more practical example let's expand on our `adder` function from before
using _rest parameter syntax_:

```javascript
function adder(num1, ...otherNums) {
  console.log("The first number is: " + num1);
  let sum = num1;

  // captures all other arguments into an array and adds them to our sum
  otherNums.forEach(function(num) {
    sum += num;
  });

  console.log("The sum is: " + sum);
}

adder(2, 3, 4);
// prints out:
// The first number is: 2
// The sum is: 9
```

To recap - we can use the _rest parameter_ to capture a function's incoming
arguments into an array.

## Utilizing Spread Syntax

Let's now talk about a very interesting and useful operator in JavaScript. In
essence, the _spread operator_ allows you to break down a data type into the
elements that make it up.

The _spread operator_ has two basic behaviors:

1. Take a data type (i.e. an array, an object) and _spread_ the values of that
   type where **elements** are expected
2. Take an iterable data type (an array or a string) and _spread_ the elements
   of that type where **arguments** are expected.

### Spreading elements

The spread operator is very useful for _spreading_ the values of an array or
object where comma-separated elements are expected.

**Spread operator** syntax is very similar to rest parameter syntax but they do
very different things:

```js
let numArray = [1, 2, 3];

// here we are taking `numArray` and *spreading* it into a new array where
// comma separated elements are expected to be
let moreNums = [...numArray, 4, 5, 6];

> moreNums
// => [1, 2, 3, 4, 5, 6]
```

In the above example you can see we used the spread operator to _spread_ the
values of `numArray` into a new array. Previously we used the `concat` method
for this purpose, but we can now accomplish the same behavior using the _spread
operator_.

We can also _spread_ Objects! Using the spread operator you can _spread_ the
`key`-`value` pairs from one object and into another new object.

Here is an example:

```js
let colors = { red: "scarlet", blue: "aquamarine" };
let newColors = { ...colors };

> newColors
// { red: "scarlet", blue: "aquamarine" };
```

Just like we previously showed with arrays, we can use this spread behavior to
_merge_ objects together:

```js
let colors = { red: "scarlet", blue: "aquamarine" };
let colors2 = { green: "forest", yellow: "sunflower" };

let moreColors = { ...colors, ...colors2 };

> moreColors
// {red: "scarlet", blue: "aquamarine", green: "forest", yellow: "sunflower"}
```

### Spreading arguments

The other scenario in which _spread_ proves useful is _spreading_ an iterable
data type into the passed in arguments of a function. To clarify, when we say
_iterable_ data types we mean arrays and string, **not Objects**.

Here is a common example of spreading an array into a function's arguments:

```javascript
function speak(verb, noun) {
  return "I like to go " + verb + " with " + noun + ".";
}

const words = ["running", "Jet"];

console.log(speak("running", "Jet")); // => I like to go running with Jet.
console.log(speak(...words)); // => I like to go running with Jet.
```

Using _spread_ allowed us to pass in the `words` array, which was then broken
down into the separate parameters of the `speak` function. The spread operator
allows you to pass an array as an argument to a function and the values of that
array be will be _spread_ to fill in the separate parameters.

## What you learned

_Rest parameter_ syntax may look like _spread operator_ syntax but they are
pretty much opposites<sup>[1]</sup>:

1. Spread 'expands' a data type into its elements
2. Rest collects multiple elements and 'condenses' them into a single data type.

[1]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Rest_syntax_(parameters)

What this reading covered:

- JavaScript functions can accept any number of arguments
- Using rest parameter syntax we can capture the arguments of a JavaScript
  function in an array
- Using _spread operator_ syntax to spread iterable data types where arguments
  or values are expected
  - Using the spread operator to spread an array and object into their separate
    elements
