# WEEK-02 DAY-3<br>*Callbacks* {ignore=true}
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [Callbacks Lesson Learning Objectives](#callbacks-lesson-learning-objectives)
- [Callbacks: Using a Function as an Argument](#callbacks-using-a-function-as-an-argument)
  - [What is a callback?](#what-is-a-callback)
  - [A more interesting example](#a-more-interesting-example)
  - [Refactoring for an optional callback](#refactoring-for-an-optional-callback)
  - [What you've learned](#what-youve-learned)
- [Callback Problems](#callback-problems)

<!-- /code_chunk_output -->
________________________________________________________________________________
________________________________________________________________________________
# Callbacks Lesson Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Given multiple plausible reasons, identify why functions are called “First
   Class Objects” in JavaScript.
2. Given a code snippet containing an anonymous callback, a named callback, and
   multiple `console.log`s, predict what will be printed
3. Write a function that takes in a value and two callbacks. The function should
   return the result of the callback that is greater.
4. Write a function, myMap, that takes in an array and a callback as arguments.
   The function should mimic the behavior of `Array#map`.
5. Write a function, myFilter, that takes in an array and a callback as
   arguments. The function should mimic the behavior of `Array#filter`.
6. Write a function, myEvery, that takes in an array and a callback as
   arguments. The function should mimic the behavior of `Array#every` learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Given multiple plausible reasons, identify why functions are called “First
   Class Objects” in JavaScript.
2. Given a code snippet containing an anonymous callback, a named callback, and
   multiple `console.log`s, predict what will be printed
3. Write a function that takes in a value and two callbacks. The function should
   return the result of the callback that is greater.
4. Write a function, myMap, that takes in an array and a callback as arguments.
   The function should mimic the behavior of `Array#map`.
5. Write a function, myFilter, that takes in an array and a callback as
   arguments. The function should mimic the behavior of `Array#filter`.
6. Write a function, myEvery, that takes in an array and a callback as
   arguments. The function should mimic the behavior of `Array#every`.
________________________________________________________________________________
# Callbacks: Using a Function as an Argument

Previously we explored how functions are first class objects, meaning they can
be stored in variables just like any other value. In particular, we've been
using built-in methods like `Array#forEach` and `Array#map` which accept
(anonymous) functions as arguments. Now it's time to take a look under the hood
and define our _own_ functions that accept other functions as arguments.

When you finish reading this article, you should be able to define functions
that accept callbacks.

## What is a callback?

Defining a function that accepts another function as an argument is as simple as
specifying a regular parameter. We'll name our parameter `callback` but you could
very well name it whatever you please:

```javascript
let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

let sayHello = function() {
  console.log("hello");
};

foobar(sayHello); // prints
// foo
// hello
// bar
```

A callback is always a function. In general, the callback is the function that
is being _passed into_ the other function. In the example above, `sayHello` is a
callback, but `foobar` is not a callback. Notice that when we call
`foobar(sayHello)`, we are not yet calling the `sayHello` function, instead we
are passing the `sayHello` function itself into `foobar`. When execution enters
the `foobar` function, the `callback` arg will refer to `sayHello`. This means
that `callback()` will really evaluate to `sayHello()`.

n the example above we used a named callback, but we can also use a function
expression directly. This is called an _anonymous_ callback:

```javascript
let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

foobar(function() {
  console.log("hello");
}); // prints
// foo
// hello
// bar
```

The advantage of using a named callback is that you can reuse the function many
times, by referring to its name. Opt for an anonymous callback if you need a
single-use.

## A more interesting example

A callback behaves just like any other function, meaning it can accept it's own
arguments and return a value. Let's define an `add` function that also accepts a
callback:

```javascript
let add = function(num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

let double = function(num) {
  return num * 2;
};

let negate = function(num) {
  return num * -1;
};

console.log(add(2, 3, double)); // 10
console.log(add(4, 5, negate)); // -9
```

In the `add` function above, we pass the sum of `num1` and `num2` into the
callback (`cb`) and return the result of the callback. Depending on the callback
function we pass in, we can accomplish a wide range of behavior! This will come
in handy when reusing code. A callback is just like a helper function, except
now we can dynamically pass in _any_ helper function.

To wrap things up, let's pass in some built-in functions and use them as
callbacks. `Math.sqrt` is a function that takes in a number and returns its
square root:

```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8

let add = function(num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

console.log(add(60, 4, Math.sqrt)); // 8
```

## Refactoring for an optional callback

We have been claiming that we can leverage callbacks to write more versatile
functions. However, a skeptic may argue that our previous `add` function is
_not_ so versatile because it can't return the normal sum without a trivial
callback:

```javascript
let add = function(num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

// we just want the normal sum of 2 and 3
add(2, 3, function(n) {
  return n;
});
// this correctly returns the normal sum of 5, but the code is pretty gross
```

Have no fear! We can remedy this to have the best of both worlds, we just need a
quick detour. JavaScript is not strict when it comes to passing too few
arguments to a function. Here is an isolated example of this behavior:

```javascript
let greet = function(firstName, lastName) {
  console.log("Hey " + firstName + "! Your last name is " + lastName + ".");
};

greet("Ada", "Lovelace"); // prints 'Hey Ada! Your last name is Lovelace.'
greet("Grace"); // prints 'Hey Grace! Your last name is undefined.'
```

If we pass too few arguments when calling a function, the parameters that do not
have arguments will contain the value `undefined`. With that in mind, let's
refactor our `add` function to _optionally_ accept a callback:

```javascript
let add = function(num1, num2, cb) {
  if (cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2);
  }
};

console.log(add(9, 40)); // 49
console.log(add(9, 40, Math.sqrt)); // 7
```

Amazing! As its name implies, our `add` function will return the plain old sum
of the two numbers it is given. However, if it also passed a callback function,
then it will utilize the callback too. A function that optionally accepts a
callback is a fairly common pattern in JavaScript, so we'll be seeing this crop
up on occasion.

## What you've learned

- a callback is a function that is passed as an arg into another function
- we can pass named functions, anonymous functions, and even built-in functions
  as callbacks

________________________________________________________________________________
# Callback Problems

It's time to get some practice using callbacks! Below we've included a link to
download a `zip` file for a number of problems.

Complete the problems in the order specified. You should have `mocha` installed
and will need to pass all the tests in order to move on.

To run the tests for the above problems you will need to unzip the file you
downloaded.

To get started, use the following commands:

1. `cd` into the project directory
2. `npm install` to install any dependencies
3. `mocha` to run the test cases

The `mocha` command will run all the tests. If you have any trouble with this
don't hesitate to ask a TA for help!

P.S. You may notice the `package.json`/`package-lock.json` files and
`node_modules` directory. You do not need to edit any of those contents. Those
files are what we use the package the project and create the test cases.
