# Different Kinds of Variables
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Declaring variables](#declaring-variables)
  - [The different ways to declare variables](#the-different-ways-to-declare-variables)
- [Hoisting and scoping with variables](#hoisting-and-scoping-with-variables)
  - [Function-scoped variables](#function-scoped-variables)
    - [Hoisting with function-scoped variables](#hoisting-with-function-scoped-variables)
  - [Block-scoped variables](#block-scoped-variables)
    - [Using the keyword `let`](#using-the-keyword-let)
    - [Using the keyword `const`](#using-the-keyword-const)
    - [Hoisting with block-scoped variables](#hoisting-with-block-scoped-variables)
  - [Function scope vs. block scope](#function-scope-vs-block-scope)
- [Global variables](#global-variables)
  - [What you learned](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

**Variables** are used to store information to be referenced and manipulated in
a computer program. A variable's sole purpose is to label and store data in
computer memory. Up to this point we've been using the `let` keyword as our only
way of declaring a JavaScript variable. It's now time to expand your tool set to
learn about the different kinds of JavaScript variables you can use!

When you finish this reading, you should be able to:

- Identify the three keywords used to declare a variable in JavaScript
- Explain the differences between `const`, `let` and `var`
- Identify the difference between function and block-scoped variables
- Paraphrase the concept of hoisting in regards to function and block-scoped
  variables

## Declaring variables

All the code you write in JavaScript is _evaluated_. **A variable always
evaluates to the value it contains no matter how you declare it.**

### The different ways to declare variables

In the beginning there was `var`. The `var` keyword used to be the only way to
declare a JavaScript variable. However, in ECMAScript 2015 JavaScript introduced
two new ways of declaring JavaScript variables: `let` and `const`. Meaning, in
JavaScript there are **three different ways to declare a variable**. Each of
these keywords has advantages and disadvantages and we will now talk about each
keyword at length.

1. `let`: any variables declared with the keyword `let` _allows you to reassign_
   that variable. Variable declared using `let` is scoped within a **block**.
2. `const`: any variables declared with the keyword `const` _will not allow you
   to reassign_ that variable. Variable declared using `const` is scoped within
   a **block**.
3. `var`: A `var` declared variable may or may not be reassigned, and the
   variable is **scoped to a function**.

For this course and for your programming career moving forward we recommend you
**always** use `let` & `const`. These two words allow us to be the most clear
with our intentions for the variable we are creating.

## Hoisting and scoping with variables

A wonderful definition of hoisting by Mabishi Wakio, "Hoisting is a JavaScript
mechanism where variables and function declarations are moved to the top of
their scope before code execution."

What this means is that when you run JavaScript code the variables and function
declarations will be _hoisted_ to the top of their particular scope. This is
important because `const` and `let` are **block-scoped** while `var` is
**function-scoped**.

Let's start by talking more about all `const`, `let`, and `var` before we dive
into why the difference of scopes and hoisting is important.

### Function-scoped variables

When JavaScript was young the only available variable was `var`. The `var`
keyword creates _function-scoped_ variables. That means when you use the `var`
keyword to declare a variable that variable will be confined to the scope of the
current function.

Here is a simple example of declaring a `var` variable within a function:

```js
function test() {
  var a = 10;

  console.log(a); // => 10
}
```

One of the drawbacks of using `var` is that it is a less indicative way of
defining a variable.

#### Hoisting with function-scoped variables

Let's take a look at what hoisting does to a function-scoped variable:

```js
function test() {
  console.log(hoistedVar); // => undefined

  var hoistedVar = 10;
}

test();
```

Huh - that's weird. You'd expect an error from referring to a variable like
`hoistedVar` before it's defined, something like:
`ReferenceError: hoistedVar is not defined`. However this is not the case
because of _hoisting_ in JavaScript!

So essentially hoisting will isolate and, in the computer's memory, will declare
a variable as the top of it's scope. With a function-scoped variable, `var`, the
name of the variable will be hoisted to the top of the function. In the above
snippet, since `hoistedVar` is declared using the `var` keyword the
`hoistedVar`'s scope is the `test` function. To be clear what is being hoisted
is the _declaration_, not the _assignment_ itself.

In JavaScript, all variables defined with the `var` keyword have an initial
value of `undefined`. Here is a translation of how JavaScript would deal with
hoisting in the above `test` function:

```js
function test() {
  // JavaScript will declare the variable *in computer memory* at the top of it's scope
  var hoistedVar;

  // since hoisting declared the variable above we now get
  // the value of 'undefined'
  console.log(hoistedVar); // =>  undefined

  var hoistedVar = 10;
}
```

### Block-scoped variables

When you are declaring a variable with the keyword `let` or `const` you are
declaring a variable that exists within _block scope_. Blocks in JavaScript are
denoted by curly braces(`{}`). The following examples create a block scope: `if`
statements, `while` loops, `switch` statements, and `for` loops.

#### Using the keyword `let`

We can use `let` to declare **re-assignable block-scoped variables**. You are,
of course, very familiar with `let` so let's take a look at how `let` works
within a block scope:

```javascript
function blockScope() {
  let test = "upper scope";
  if (true) {
    let test = "lower scope";
    console.log(test); // "lower scope"
  }
  console.log(test); // "upper scope"
}
```

In the example above we can see that the `test` variable was declared twice
using the keyword `let` but since they were declared within different scopes
they have different values.

JavaScript will raise a `SyntaxError` if you try to declare the same `let`
variable twice in one block.

```js
if (true) {
  let test = "this works!";
  let test = "nope!"; // Identifier 'test' has already been declared
}
```

Whereas if you try the same example with `var`:

```js
var test = "this works!";
var test = "nope!";
console.log(test); // prints "nope!"
```

We can see above that `var` will allow you to redeclare a variable twice which
can lead to some very confusing and frustrating debugging.

Feel free to peruse the [documentation][mdn-let] for the keyword `let` for more
examples.

[mdn-let]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

#### Using the keyword `const`

We use `const` to declare **block-scoped variables** that can **not** be
reassigned. In JavaScript variables that cannot be reassigned are called
**constants**. Constants should be used for values that will not be re-declared
or re-assigned.

Properties of constants:

- They are block-scoped like `let`.
- JavaScript enforces constants by raising an error if you try to reassign them.
- Trying to redeclare a constant with a `var` or `let` by the same name will
  also raise an error.

Let's look at a quick example of what happens when trying to reassign a
constant:

```javascript
> const favFood = "cheeseboard pizza"; // Initializes a constant
undefined

> const favFood = "inferior food"; // Re-initialization raises an error
TypeError: Identifier 'favFood' has already been declared

> let favFood = "other inferior food"; // Re-initialization raises an error
TypeError: Identifier 'favFood' has already been declared

> favFood = "deep-dish pizza"; // Re-assignment raises an error
TypeError: Assignment to constant variable.
```

We cannot reassign a constant, but constants that are assigned to Reference types
are **mutable**. The name binding of a constant is immutable. For example, if we
set a constant equal to an Reference type like an object, we can still modify
that object:

```js
const animals = {};
animals.big = "beluga whale"; // This works!
animals.small = "capybara"; // This works!

animals = { big: "beluga whale" }; // Will error because of the reassignment
```

Constants cannot be reassigned but, just like with `let`, new constants of the
same names can be declared within nested scopes.

Take a look at the following for an example:

```js
const favFood = "cheeseboard pizza";
console.log(favFood);

if (true) {
  // This works! Declaration is scoped to the `if` block
  const favFood = "noodles";
  console.log(favFood); // Prints "noodles"
}

console.log(favFood); // Prints 'cheeseboard pizza'
```

Just like with `let` when you use `const` twice in the same block JavaScript
will raise a `SyntaxError`.

```js
if (true) {
  const test = "this works!";
  const test = "nope!"; // SyntaxError: Identifier 'test' has already been declared
}
```

#### Hoisting with block-scoped variables

When JavaScript ES6 introduced new ways of declaring a variable using `let` and
`const` the idea of block-level hoisting was also introduced. Block scope
hoisting allows developers to avoid previous debugging debacles that naturally
happened from using `var`.

Let's take a look at what hoisting does to a _block-scoped_ variable:

```js
if (true) {
  console.log(str); // => Uncaught ReferenceError: Cannot access 'str' before initialization
  const str = "apple";
}
```

Looking at the above we can see that an explicit error is thrown if you attempt
to use a block-scoped variable before it was declared. This is the typical
behavior in a lot of programming languages - that a variable cannot be referred
to until initialized to a value.

However, JavaScript is still performing hoisting with block-scoped declared
variables. The difference lies is how it _initializes_ them. Meaning that `let`
and `const` variables are **not** initialized to the value of `undefined`.

The time before a `let` or `const` variable is declared, but not used is called
the _Temporal Dead Zone_. A very cool name for a simple idea. Variables declared
using `let` and `const` are not initialized until their definitions are
evaluated. Meaning, you will get an error if you try to reference a `let` or
`const` declared variable before it is evaluated.

Let's look at one more example that should illuminate the presence of the
_Temporal Dead Zone_:

```js
var str = "not apple";

if (true) {
  console.log(str); //Uncaught ReferenceError: Cannot access 'str' before initialization
  let str = "apple";
}
```

In the above example we can see that inside the `if` block the `let` declared
variable, `str`, throws an error. Showing that the error thrown by a `let`
variable in the temporal dead zone takes precedence over any scope chaining that
would attempt to go to the outer scope to find a value for the `str` variable.

### Function scope vs. block scope

Let's now take a deeper look at the comparison of using function vs. block
scoped variables.

Let's start with a simple example:

```js
function partyMachine() {
  var string = "party";
  console.log("this is a " + string);
}
```

Looks good so far but let's take that example a step farther and see some of the
less fun parts of the `var` keyword in terms of scope:

```js
function partyMachine() {
  var string = "party";

  if (true) {
    // since var is not block-scoped and not constant
    // this assignment sticks!
    var string = "bummer";
  }

  console.log("this is a " + string);
}

partyMachine(); // => "this is a bummer"
```

We can see in the above example how the flexibility of `var` can ultimately be a
bad thing. Since `var` is function-scoped _and_ can be reassigned and
re-declared without error it is very easy to overwrite variable values by
accident.

This is the problem that ES6 introduced `let` and `const` to solve. Since `let`
and `const` are block-scoped it's a lot easier to avoid accidentally overwriting
variable values.

Let's take a look at the example function above rewritten using `let` and
`const`:

```js
function partyMachine() {
  const string = "party";

  if (true) {
    // this variable is restricted to the scope of this block
    const string = "bummer";
  }

  console.log("this is a " + string);
}
partyMachine(); // => "this is a party"
```

## Global variables

If you leave off a declaration when initializing a variable, it will become a
global. **Do not do this.** We declare variables using the keywords `var`,
`let`, and `const` to ensure that our variables are declared within a proper
scope. Any variables declared without these keywords will be declared on the
_global scope_.

JavaScript has a single global scope, which means all of the files from your
projects and any libraries you use will **all be sharing the same scope**. Every
time a variable is declared on the global scope, the chance of a name collision
increases. If we are unaware of the global variables in our code, we may
accidentally overwrite variables.

Let's look at a quick example showing why this is a bad idea:

```js
function good() {
  let x = 5;
  let y = "yay";
}

function bad() {
  y = "Expect the unexpected (eg. globals)";
}

function why() {
  console.log(y); // "Expect the unexpected (eg. globals)""
  console.log(x); // Raises an error
}

why();
```

Limiting global variables will help you create code that is much more easily
maintainable. Strive to write your functions so that they are self-contained and
not reliant on outside variables. This will also be a huge help in allowing us
test each function by itself.

One of our jobs as programmers is to write code that can be integrated easily
within a team. In order to do that, we need to limit the number of globally
declared variables in our code as much as possible, to avoid accidental name
collisions.

Sloppy programmers use global variables, and you are not working so hard in
order to be a sloppy programmer!

### What you learned

- Identify the different ways to declare a variable in JavaScript
- Explain the differences between `const`, `let` and `var`
- Identify the difference between function and block-scoped variables
- Paraphrase the concept of hoisting in regards to variables
