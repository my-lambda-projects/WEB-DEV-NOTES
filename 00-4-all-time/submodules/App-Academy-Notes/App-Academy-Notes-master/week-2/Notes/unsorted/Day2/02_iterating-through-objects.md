# Iterating Through Objects
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [A new Kind of `for` Loop](#a-new-kind-of-for-loop)
- [Methods vs Functions](#methods-vs-functions)
- [Useful Object Methods](#useful-object-methods)
  - [Iterating through keys using **`Object.keys`**](#iterating-through-keys-using-objectkeys)
  - [Iterating through keys using **`Object.values`**](#iterating-through-keys-using-objectvalues)
  - [Iterating through an Object's keys & values](#iterating-through-an-objects-keys-values)
- [What you learned](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

In the previous reading we mentioned that Objects store _unordered_
`key`-`value` pairs. With Objects we can not rely on indices to access values.
Meaning - we'll have to iterate through objects in new ways to access the keys
and values within.

When you finish this reading, you should be able to:

1. Iterate through Object `keys` and `values` using a `for...in` loop
2. Use the `Object.keys` and the `Object.values` methods to iterate through an
   Object

## A new Kind of `for` Loop

We can use special syntax to iterate through each `key` of an object (in
arbitrary order). This is super useful for looping through **both** the keys and
values of an object.

The general syntax looks like this:

```js
// The current key is assigned to *variable* on each iteration.
for (let variable in object) {
  statement;
}
```

This syntax is best shown by example:

```js
let obj = { name: "Rose", cats: 2 };

// The key we are accessing is assigned to the `currentKey`
// *variable* on each iteration.
for (let currentKey in obj) {
  console.log(currentKey);
}

// prints out:
// name
// cats
```

The example above prints all the keys found in `obj` to the screen. On each
iteration of the loop, the `key` we are currently accessing is assigned to the
`currentKey` variable. Now, keys are nice but what about _values_?

If we want to access values in an object, we would throw some bracket notation
into the mix:

```js
let obj = { name: "Rose", cats: 2 };

for (let key in obj) {
  let value = obj[key];
  console.log(value);
}

// prints out:
// Rose
// 2
```

Here's some food for thought: Why can't we use dot notation to iterate through
an object's values? For example, what if we replaced `obj[key]` with `obj.key` in
the above code snippet? Try it for yourself. As we previously covered - you can
only use variable keys when using bracket notation (`obj[key]`)!

Like all variables, you can name the current key variable whatever you like -
just be descriptive! Here is an example of using a descriptive name for a key
variable:

```js
let employees = {
  manager: "Angela",
  sales: "Gracie",
  service: "Paul"
};

for (let title in employees) {
  let person = employees[title];
  console.log(person);
}

// prints out:
// Angela
// Gracie
// Paul
```

## Methods vs Functions

Before we dive further into iterating with Objects we'll take a moment to talk
about _methods_. A **method** is essentially a function that _belongs to_ an
object. That means that every _method is a function_, but **not** every function
is a method.

- `myFunc` is a function
- `myObject.myFunc` is a _method_ of the object `myObject`
- `myObject["myFunc"]` is a _method_ of the object `myObject`

A method is just a key-value pair where the **key is the function name and the
value is the function definition**! Let's use what we learned earlier to teach
our dog some new tricks:

```js
let dog = {
  name: "Fido"
};

// defining a new key-value pair where the *function name* is the key
// the function itself is the value!
dog.bark = function() {
  console.log("bark bark!");
};

// this is the same thing as above just using Bracket Notation
dog["speak"] = function(string) {
  console.log("WOOF " + string + " WOOF!!!");
};

dog.bark(); // prints `bark bark!`
dog.speak("pizza"); // prints `WOOF pizza WOOF!!!`
```

Additionally, we can give objects methods when we initialize them:

```js
let dog2 = {
  name: "Rover",

  bark: function() {
    console.log("bork bork!");
  },

  speak: function(string) {
    console.log("BORK " + string + " BORK!!!");
  }
};
// Notice that in the object above, we still separate the key-value pairs with commas.
// `bark` and `speak` are just keys with functions as values.

dog2.bark(); // prints `bork bork!`
dog2.speak("burrito"); // prints `BORK burrito BORK!!!`
```

Methods are just plain old functions at heart. They act like the functions we
know and love - define parameters, accept arguments, return data, etc. A method
is just a function that belongs to an object. To invoke, or call, a method we
need to specify **which** object is calling that method. In the code snippet
above the `dog2` object had the `bark` method so to invoke `bark` we had to
specify it was `dog2`'s method: `dog2.bark()`. More generally the pattern goes:
`myObject.methodName()`.

## Useful Object Methods

### Iterating through keys using **`Object.keys`**

The `Object.keys` method accepts an object as the argument and returns an array
of the _keys_ within that Object.

```js
> let dog = {name: "Fido", age: "2"}
undefined

> Object.keys(dog)
['name', 'age']

> let cup = {color: "Red", contents: "coffee", weight: 5}
undefined

> Object.keys(cup)
['color', 'contents', 'weight']

```

The return value of `Object.keys` method is an array of keys - which is useful
for iterating!

### Iterating through keys using **`Object.values`**

The `Object.values` method accepts an object as the argument and returns an
array of the _values_ within that Object.

```js
> let dog = {name: "Fido", age: "2"}
undefined

> Object.values(dog)
['Fido', '2']

> let cup = {color: "Red", contents: "coffee", weight: 5}
undefined

> Object.keys(cup)
['Red', 'coffee', 5]

```

The return value of `Object.values` method is an array of values - which is
useful for iterating!

### Iterating through an Object's keys & values

So we have gone over how `Object.keys` gives you the keys on an object and
`Object.values` gives you the values, but what if you want both the _keys_ and
the _values_ corresponding to each other in an array?

The `Object.entries` method accepts an object as the argument and returns an
array of the `[key, value]` pairs within that Object.

Let's look at a quick demo:

```js
> let cat = {name: "Freyja", color: "orange"}
undefined

> Object.entries(cat)
[ [ 'name', 'Freyja' ], [ 'color', 'orange' ] ]
```

## What you learned

Objects may be an unordered collection of `key`-`value` pairs but that doesn't
mean you can't iterate through them!

In his reading we covered:

- How to define and invoke methods on Objects
- The `Object.keys` and `Object.values` functions
- How to iterate through a Object using a `for...in` loop
