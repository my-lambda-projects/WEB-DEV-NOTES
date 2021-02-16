# WEEK-02 DAY-2<br>*POJO* {ignore=true}
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [Plain Old JS Object Lesson Learning Objectives](#plain-old-js-object-lesson-learning-objectives)
- [Pair Programming Lesson Learning Objectives](#pair-programming-lesson-learning-objectives)
- [The Object Type](#the-object-type)
  - [The object of my affections](#the-object-of-my-affections)
  - [Setting keys and values](#setting-keys-and-values)
  - [Using different notations](#using-different-notations)
  - [What you learned](#what-you-learned)
- [Iterating Through Objects](#iterating-through-objects)
  - [A new Kind of `for` Loop](#a-new-kind-of-for-loop)
  - [Methods vs Functions](#methods-vs-functions)
  - [Useful Object Methods](#useful-object-methods)
  - [What you learned](#what-you-learned-1)
- [Reference vs. Primitive Types](#reference-vs-primitive-types)
  - [Primitives vs. Objects](#primitives-vs-objects)
  - [Immutability](#immutability)
  - [What you learned](#what-you-learned-2)
- [Using the Spread Operator and Rest Parameter Syntax](#using-the-spread-operator-and-rest-parameter-syntax)
  - [Accepting arguments](#accepting-arguments)
  - [Utilizing Rest Parameters](#utilizing-rest-parameters)
  - [Utilizing Spread Syntax](#utilizing-spread-syntax)
  - [What you learned](#what-you-learned-3)
- [Destructuring](#destructuring)
  - [Destructuring data into variables](#destructuring-data-into-variables)
  - [Destructuring parameters](#destructuring-parameters)
  - [What you learned](#what-you-learned-4)
- [We're Better Together: Pair Programming](#were-better-together-pair-programming)
  - [Team mentality](#team-mentality)
  - [Pair Programming Roles](#pair-programming-roles)
  - [Why pair up?](#why-pair-up)
  - [What we've learned](#what-weve-learned)
- [The App Academy Pair Programming Approach](#the-app-academy-pair-programming-approach)
  - [Why this way?](#why-this-way)
  - [The rules](#the-rules)
  - [Modifying the routine](#modifying-the-routine)
  - [What we've learned](#what-weve-learned-1)
- [You Are Not Your Code: Empathetic Communication In Engineering](#you-are-not-your-code-empathetic-communication-in-engineering)
  - [Understanding code-centric vs. human-centric language](#understanding-code-centric-vs-human-centric-language)
  - [Why communication matters](#why-communication-matters)
  - [What we've learned](#what-weve-learned-2)
- [Object Problems](#object-problems)

<!-- /code_chunk_output -->
________________________________________________________________________________
________________________________________________________________________________
# Plain Old JS Object Lesson Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Label variables as either Primitive vs. Reference
2. Identify when to use . vs [] when accessing values of an object
3. Use the `obj[key] !== undefined` pattern to check if a given variable that
   contains a key exists in an object
4. Utilize Object.keys and Object.values in a function
5. Iterate through an object using a `for in` loop
6. Define a function that utilizes ...rest syntax to accept an arbitrary number
   of arguments
7. Use ...spread syntax for Object literals and Array literals
8. Destructure an array to reference specific elements
9. Destructure an object to reference specific values
10. Write a function that accepts a array as an argument and returns an object
    representing the count of each character in the arraye terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Label variables as either Primitive vs. Reference
2. Identify when to use . vs [] when accessing values of an object
3. Use the `obj[key] !== undefined` pattern to check if a given variable that
   contains a key exists in an object
4. Utilize Object.keys and Object.values in a function
5. Iterate through an object using a `for in` loop
6. Define a function that utilizes ...rest syntax to accept an arbitrary number
   of arguments
7. Use ...spread syntax for Object literals and Array literals
8. Destructure an array to reference specific elements
9. Destructure an object to reference specific values
10. Write a function that accepts a array as an argument and returns an object
    representing the count of each character in the array

________________________________________________________________________________
# Pair Programming Lesson Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Differentiate between the "Driver" and "Navigator" roles in a pair programming session.
2. Describe at least three benefits of effective pair programming.
3. Demonstrate empathetic communication and be able to explain the meaning of "You are not your code".
4. Identify negative interactions during a pair programming session.
5. Identify the exact steps of a/A's pair programming process.
6. Describe the importance of pair programming competency while interviewing for jobs.erminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Differentiate between the "Driver" and "Navigator" roles in a pair programming session.
2. Describe at least three benefits of effective pair programming.
3. Demonstrate empathetic communication and be able to explain the meaning of "You are not your code".
4. Identify negative interactions during a pair programming session.
5. Identify the exact steps of a/A's pair programming process.
6. Describe the importance of pair programming competency while interviewing for jobs.

________________________________________________________________________________
# The Object Type

Up to this point you've interacted with a lot of different data types in
JavaScript. Now it's time to introduce one of the most diverse and widely used
data types of all: **`Objects`**.

An object is a data structure that stores other data, similar to how an array
stores elements. An object differs in that each `value` stored in an object is
associated with a `key`. `Keys` are almost always strings while `values` can be
any data type: numbers, strings, functions, arrays, other objects, anything at
all!

When you finish this reading, you should be able to:

1. Create objects using correct syntax with a variety of values.
2. Identify that an object is an unordered collection of values.
3. Key into an object to receive a single value using both Bracket and Dot
   notation
4. Use Bracket notation to set a variable as a key in a Object.
5. Implement a check to see if a key already exists within an Object.
6. Understand how object precedence fits in with dot notation for objects.

## The object of my affections

To reiterate, an object is a data structure that stores other data. In other
programming languages similar data structures to the Object type are referred to
as 'dictionaries', 'maps', or 'associative arrays'. Objects are different from
the previous data structures we've talked about (i.e. arrays) in two important
ways:

1.  Instead of accessing values within an object through an index with numbers,
    objects are indexed using `keys`.

    - This allows us to access values quickly and efficiently. We'll be talking
      a more more about this point later on in the course.

2.  Order is **not** guaranteed within an Object. When you iterate through the
    values in an object, they may not be in the same order as when they were
    entered.

Objects are defined by using curly braces: `{}`. See below for an example:

```js
> let car = {};
undefined

// here is our new empty object!
> car
{}
```

**Fun Fact**: Objects are known by the affectionate industry jargon: Plain Old
JavaScript Objects (or POJO for short). Expect to see that short-hand often!

## Setting keys and values

When learning about objects it can be helpful to think about real life objects.
For instance think about a car. A real life car can have a color, a number of
wheels, a number of seats, a weight, etc. So a real life car has a number of
different properties that you wouldn't list in any particular order, though all
those properties define the characteristics of that car.

Thinking of a car - let's create a `car` object to represent that collection of
properties. We can create new `key`-`value` pairs using bracket notation `[]`
and assignment `=`. Notice that the key inside the brackets is represented with
a string:

```js
// here "color" is the key!
> car["color"] = "Blue";
"Blue"

> car["seats"] = 2;
2

// accessing our object at the key of color
> car["color"]
"Blue"

> car["seats"]
2

> car
{color: "Blue", seats: 2}
```

When we enter `car["color"]`, we are using `"color"` as our `key`. You can think
of `keys` and `values` in an object just like a lock and key in real life. The
`"color"` key "unlocks" the corresponding value to give us our `car`'s color,
`"Blue"`!

### Keys without values

What happens if we try to access a key that we have not yet assigned within an
object?

```js
> car
{color: "Blue", seats: 2}

> car["weight"]
undefined
```

**If we try to access a key that is not inside an object we get `undefined`**.
This falls right into place with our understanding of where `undefined` shows up
in JavaScript. It's the common default value of a lot of things. The `undefined`
type is the default for unassigned variables, functions without a `return`,
out-of-array elements, and non-existent object values.

Using this knowledge, we can check if a key exists in an object:

```js
> car
{color: "Blue", seats: 2}

> car["color"]
"Blue"

> car["color"] === undefined;
false

> car["weight"] === undefined;
true
```

While this is a common pattern, in modern JS the preferred method to check if an
object exists in a key is to use the `in` operator:

```js
> car
{color: "Blue", seats: 2}

> "color" in car;
true

> "model" in car;
false
```


### Using variables as keys

So we've talked about assigning string keys within Objects. Additionally, we
know how to create variables that have strings as values. Sooo... you might be
thinking: what happens if we assign a variable with a string value as a `key`
within an `Object`? Glad you asked! Let's look at an example below for setting
keys within `Objects` using `variables`.

Let's keep playing with the `car` we made previously:

```js
> car
{color: "Blue", seats: 2}

> let newVariable = "color";
undefined

> newVariable
"color"

> car[newVariable]
"Blue"

> car["color"]
"Blue"
```

Aha! Of course we can use a variable as our key! A variable _always_ evaluates
to the value we assigned it. So `car[newVariable]` and `car["color"]` are
equivalent! Why is this useful? We know that variables can change; so now the
keys we use for objects can change!

Let's take a look at what happens when we change the variable above:

```js
> car
{color: "Blue", seats: 2}

> newVariable
"color"

> newVariable = "weight";
undefined

> car[newVariable]
undefined

// car doesn't change because we didn't *assign* the new variable key in our object
> car
{color: "Blue", seats: 2}
```

We can now use our newly assigned variable to set a _new key_ in our object:

```js

> car
{color: "Blue", seats: 2}

> newVariable
"weight"

// assigning a key value pair using a variable!
> car[newVariable] = 1000;
1000

> car
{color: "Blue", seats: 2, weight: 1000}
```

## Using different notations

So far we've shown how to access and set values in objects using `object[key]` -
also known as _Bracket Notation_. However, this is only one of two ways to
access values within an object. The second way we can access values within an
object is called _Dot Notation_. We can use `.` to assign and access our
key-value pairs. The easiest to notice difference is when we use _dot notation_,
we don't need to use string quotes as the key:

```js
> let dog = {};
undefined

> dog.bark = "Bowowowo";
"Bowowowowo"

> dog.bark
"Bowowowo"

> dog
{ bark: "Bowowowowo" }
```

### Bracket notation vs Dot notation

Now that we know two ways to access values of an object, you are probably asking
yourself: which one should you use? Here is a quick list of pros for each.

**Dot notation:**

- easier to read
- easier to write because we don't have to deal with using quotation marks
- **cannot** use variables as keys
- keys can't contain numbers as their first character (`object.1key` doesn't
  work!)

**Bracket notation Pros:**

- you can use variables (assigned to string values) as keys!
- It is okay to use variables and Strings that start with numbers as keys
  (use `object['1key']` does work, while `object.1key` does not)

There are tradeoffs and advantages for either notation, so practice using both!
You will learn quickly that there are **a ton** of different ways to write the
same thing in JavaScript. Having both of these options available to you will
allow you to use different tools to solve different problems.

One of the most fun parts of being a programmer is the ability to come up with
different solutions to the same problem. So you should have both types of
notation in your tool-belt to be a versatile programmer!

Let's look at the difference:

```js
let myDog = {};
myDog.name = "Fido";

// let's use a variable as our key and some bracket notation:
let myKey = "name";
console.log(myDog); // prints `{name: "Fido"}`
console.log(myDog[myKey]); // prints `Fido`

// what if we try to use the variable in dot notation:
// the below is interpreted as myDog['myKey']
console.log(myDog.myKey); // prints: undefined
```

When we use dot notation to write `myDog.myKey`, `myKey` will **not be
interpreted by JavaScript as a variable**. The text we write after the `.` will
be used as the **literal** key. Remember that if we try to use a key that does
not exist in an object, we get back the default value of `undefined`.

```js
// continued from above

console.log(myDog.myKey); // prints `undefined`
myDog.myKey = "???";
console.log(myDog); // prints `{name: "Fido", myKey: "???"}`
console.log(myDog.myKey); // prints `???`
// mind === "blown"
```

### Putting it all together

We can also create an entire object in a single statement:

```js
let myDog = {
  name: "Fido",
  type: "Doge",
  age: 2,
  favoriteToys: ["bone", "ball"]
};

console.log(myDog.age); // prints 2
console.log(myDog["favoriteToys"]); // prints ["bone", "ball"]
```

### Operator precedence revisited

Just like with math and logical operators, the concepts of [operator precedence]
also pertain to objects. Associativity determines the order of operation, along
with precedence. There are two types of associativity: right-associativity and
left-associativity.

**Right-associativity** is when code is evaluated right-to-left. Let's take a
closer look at what is happening in the line of code below:

```js
a = b = 1;
```

1. Variable `b` is assigned as `1`.
2. Variable `a` is assigned as `b = 1`.
3. `b = 1` returns the value `1`, so variable `a` is now assigned as `1`.

The assignment of variables takes lowest precedence, which is why we evaluate
the return value of `b = 1` before completing the assignment of variable `a`.

The example below is **left-associativity** is when code is evaluated
left-to-right. It evaluates the `document.getElementById` method before
accessing `value`.

```js
let id = "header";
let element = document.getElementById(id).value;
```

1. We resolve the `document` variable to be the _document object_.
2. We use dot notation to retrieve the `getElementById` function. (The function
   is a property of the _document object_).
3. We attempt to call it, but before the call can proceed we must first evaluate
   the function's arguments.
4. We resolve the `id` variable to be the string `"header"`.
5. The `getELementById` function returns an _HTMLElement object_ and then uses
   dot notation to access `value`.
6. Finally we do assignment which is the LOWEST precedence (that's why
   assignment happens last). Its associativity is right to left, so we take the
   value on the right and assign it to the left.

Now let's dive into the example below. Resolving the variables to their values
happens before the operators.

```js
add(number1, number2) + number3;
```

1. `number3` is resolved to its value.
2. The function is invoked, but its variables need to be resolved.
3. `number1` and `number2` are resolved to their values.
4. The function is invoked so `number1`, `number2`, and `number3` are finally
   added together!

## What you learned

In this reading we covered:

- Objects are un-ordered data structures consisting of key and value pairs.
- Object `keys` are strings, but their `values` can be anything (arrays,
  numbers, strings, functions, etc.)
- Setting key and value pairs using both Bracket and Dot notation
  - Using Bracket notation to set variables as `keys` in Objects
- The default value when accessing a key **not** in an object is `undefined`
  - How to check if a key is already within an object using the `object[key] ===
    undefined` pattern

[operator precedence]:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

________________________________________________________________________________
# Iterating Through Objects

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

#### Iterating through an Object's keys & values

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

________________________________________________________________________________
# Reference vs. Primitive Types

At this point you've worked with many different data types - booleans, numbers,
strings, arrays, objects, etc. It's now time to to go a little more in depth
into the differences between these data types.

When you finish this reading, you should be able to:

- Identify whether a data type is a Primitive type or a Reference type.

## Primitives vs. Objects

JavaScript has many data types, six of which you've encountered so far:

**Five Primitive Types**:

1. `Boolean` - `true` and `false`
2. `Null` - represents the intentional absence of value.
3. `Undefined` - default return value for many things in JavaScript.
4. `Number` - like the numbers we usually use (`15`, `4`, `42`)
5. `String` - ordered collection of characters ('apple')

**One Reference Type**:

1.  `Object` - (an array is also a kind of object)!

You might be wondering about why we separated these data types into two
categories - Reference & Primitive. Let's talk about the one of the main ways
_Reference Types_ and _Primitive Types_ differ:

- _Primitive types_ are **immutable**. Meaning they cannot change.

## Immutability

When we talk about primitive types the first thing we mentioned was
_mutability_. Primitives are **immutable** meaning they can not be directly
changed. Let's look at an example:

```js
let num1 = 5;
// here we assign num2 to point at the value of the number variable
let num2 = num1;

// here we *reassign* the num1 variable
num1 = num1 + 3;

console.log(num1); // 8
console.log(num2); // 5
```

Whoa wait whaaaat? Let's break this down was just happened with some visuals. We
start by assigning `num1`. JavaScript already knows that the number `5` is a
primitive number value. So when we are assigning `num1` to the value of 5 we are
actually telling the `num1` variable to point to the place the number 5 takes up
in our computer's memory:

![num-one](images/assignment-num1.png)

Next we assign `num2` to the **value** of `num1`. What effectively happens when
we do this is we are _copying_ the value of `num1` and then pointing `num2` at
that copy:

![num-two](images/assignment-num2.png)

Now here is where it gets really _interesting_. We cannot change the 5 our
computer has in memory - because it is a **primitive** data type. Meaning if we
want `num1` to equal 8 we need to **reassign** the value of the `num1` variable.
When we are talking about _primitives_ reassignment breaks down into simply
having your variable point somewhere else in memory:

![num-three](images/assignment-num3.png)

All this comes together in `num1` now pointing at a new value in our computer's
memory. Where does this leave `num2`? Well because we never reassigned `num2` it
is still pointing at the value it originally copied from `num1` and pointing to
5 in memory.

So that in essence is **immutability**, you can not change the values in memory
only reassign where your variables are pointing.

Let's do another quick example using booleans:

```js
let first = true;
let second = first;

first = false;

// first and second point to different places in memory
console.log(first); // false
console.log(second); // true
```

### Mutability

Let's now talk about the inverse of immutability: mutability.

Let's take a look at what we call **reference** values which **are** mutable.
When you assign a reference value from one variable to a second variable, the
value stored in the first variable is also copied into the location of the
second variable.

Let's look at an example using objects:

```js
let cat1 = { name: "apples", breed: "tabby" };
let cat2 = cat1;

cat1.name = "Lucy";

console.log(cat1); // => {name: "Lucy", breed: "tabby"}
console.log(cat2); // => {name: "Lucy", breed: "tabby"}
```

Here is a visualization of what happened above. First we create `cat1` then
assign `cat2` to the value of `cat1`. This means that both `cat1` and `cat2` are
pointing to the **same object** in our computer's memory:

![num-five](images/assignment-num5.png)

Now looking at the code above we can see what when we change **either** `cat1`
or `cat2`, since they are both pointing to the same place in memory, **both**
will change:

![num-four](images/assignment-num4.png)

This holds true of arrays as well. Arrays are a kind of object - though
obviously different. We'll go a lot deeper into this when we start talking about
classes - but for now concentrate on the fact that arrays are also a _Reference
Type_.

See below for an example:

```js
let array1 = [14, "potato"];
let array2 = array1;

array1[0] = "banana";

console.log(array1); // => ["banana", "potato"]
console.log(array2); // => ["banana", "potato"]
```

If we change `array1` we also change `array2` because both are pointing to the
same _reference_ in the computer's memory.

## What you learned

- How to work with variables that are both Primitive types and Reference types.

________________________________________________________________________________
# Using the Spread Operator and Rest Parameter Syntax

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

________________________________________________________________________________
# Destructuring

Up to this point we've learned how to collect related values and elements and
store them in lovely data structures. Now it's time to tear those data
structures down to the ground! Just kidding. In this reading we will be talking
about the concept of **destructuring** an array or object in order to more
easily access their individual elements.

When you finish this reading, you should be able to:

1. Destructure an array to reference specific elements
2. Destructure an object to reference specific values
3. Destructure incoming parameters into a function

## Destructuring data into variables

The _destructuring assignment_ syntax allows you to extract parts of an array or
object into distinct variables.

Let's see an example:

```javascript
let numArray = [10, 20];

// here we are "unpacking" the array values into two separate variables
let [firstEl, secondEl] = numArray;

console.log(firstEl); //=> 10
console.log(secondEl); //=> 20
```

As with normal variable assignment you put the name of the variable you are
assigning on the left, and the values you are assigning on the right. The above
code assigns `firstEl` to the value in the first position in `numArray`, and
`secondEl` to the second position in `numArray`.

We can alternatively declare our variables before destructuring as well:

```js
let animalArray = ["tiger", "hippo"];

let animal1, animal2;

// here we are "unpacking" the array values into two separate variables
[animal1, animal2] = animalArray;

console.log(animal1); //=> "tiger"
console.log(animal2); //=> "hippo"
```

### Swapping variables using destructuring

One of the really cool things you can do with destructuring is swapping the
values of two variables:

```js
let num1 = 17;
let num2 = 3;

// this syntax will swap the values of the two variables
[num1, num2] = [num2, num1];

console.log(num1); // 3
console.log(num2); // 17
```

Neat, right? This little syntactic trick can save you a few lines of code.

### Destructuring objects into variables

As you've previously read - objects can contain a lot of varied information
including arrays, functions, and other objects. One of the most useful
applications for destructuring is the ability to take apart and assign little
slices of large objects to variables.

Let's take a look at the basic syntax for destructuring objects when the
extracted variables have the same name as their associated keys:

```js
let obj = { name: "Apples", breed: ["tabby", "short hair"] };
let { name, breed } = obj;

console.log(name); // "Apples"
console.log(breed); // ["tabby", "short hair"]
```

Now this syntax works by matching object `properties`, so we can choose exactly
which keys we want. If we only wanted to save certain properties, we could do
something like this:

```javascript
let { a, c } = { a: 1, b: 2, c: 3 };
a; //=> 1
c; //=> 3
```

Now in all the previous examples we previously examined our variable names
shared the same name as our object's keys. Let's take a quick look at the syntax
we would need to use if the variable we are creating _does not_ have the same
name as our object's keys. This is referred to as _aliased_ object
destructuring:

```js
let obj = { apple: "red", banana: "yellow" };
let { apple: newApple, banana: newBanana } = obj;

console.log(newApple); // "red"
console.log(newBanana); // "yellow"
```

Object deconstructing really becomes useful as you start working with larger and
nested objects. Let's take a look at destructuring with nested objects. In the
below example our goal is to capture the value of the `species` key into a
variable named `species`:

```js
let object = { animal: { name: "Fiona", species: "Hippo" } };

// here we are specifying that within the animal object we want to assign the
// *species* variable to the value held by the *species* key
let {
  animal: { species }
} = object;

console.log(species); // => 'Hippo'
```

Take a look at the example below to see how object destructuring can make your
code more readable in more complex situations. For this example we are trying to
get the `fname` value into a variable:

```javascript
let user = {
  userId: 1,
  favoriteAnimal: "hippo",
  fullName: {
    fname: "Rose",
    lname: "K"
  }
};

// accessing values *with* destructuring
let {
  userId,
  fullName: { fname, lname }
} = user;

console.log(userId, fname, lname); // prints out:
// 1 "Rose" "K"
```

Destructuring allowed us to assign multiple variables to multiple values in our
`user` object all in one line of code!

The whole point of destructuring is to make writing code easier to write and
read. However, destructuring can become harder to read with super nested
objects. A good rule of thumb to keep clarity in your code is to only
destructure values from objects that are two levels deep.

Let's look at a quick example:

```js
// the fname key is nested more than two levels deep
// (within bootcamp.instructor.fullName)
let bootcamp = {
  name: "App Academy",
  color: "red",
  instructor: {
    fullName: {
      fname: "Rose",
      lname: "K"
    }
  }
};

// this is hard to follow:
let {
  instructor: {
    fullName: { fname, lname }
  }
} = bootcamp;
console.log(fname, lname);

// this is much easier to read:
let { fname, lname } = bootcamp.instructor.fullName;
console.log(fname, lname);
```

### Destructuring and the rest pattern

Earlier you saw how the rest parameter syntax allows us to prefix a function's
last parameter with `...` to capture all remaining arguments into an array:

```js
function logArguments(firstArgument, ...restOfArguments) {
  console.log(firstArgument);
  console.log(restOfArguments);
}

logArguments("apple", 15, 3);
// prints out:
// "apple"
// [15, 3]
```

This coding pattern of saying "give me the _rest_ of" can also be used when
destructuring an array by prefixing the last variable with `...`. In this
example, the `otherFoods` variable is prefixed with `...` to initialize the
variable to an array containing the remaining array elements that weren't
explicitly destructured:

```js
let foods = ["pizza", "ramen", "sushi", "kale", "tacos"];

let [firstFood, secondFood, ...otherFoods] = foods;
console.log(firstFood); // => "pizza"
console.log(secondFood); // => "ramen"
console.log(otherFoods); // => ["sushi", "kale", "tacos"]
```

At the time of this writing, the rest pattern is only officially supported by
JavaScript when destructuring arrays, though an [ECMAScript proposal][1] adds
support when destructuring objects. Recent versions of Chrome and Firefox
support this proposed addition to the JavaScript language.

Similar to when using the rest pattern with array destructuring, the last
variable `obj` is prefixed with `...` to initialize it to an object containing
the remaining own enumerable property keys (and their values) that weren't
explicitly destructured:

```js
let { a, c, ...obj } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // => 1
console.log(c); // => 3
console.log(obj); // => { b: 2, d: 4 }
```

## Destructuring parameters

So far we've talked about destructuring things into variables - but the other
main use for destructuring is destructuring **incoming parameters** into a
function. This gets to be really useful when we're passing objects around to
different functions. Each function can the be responsible for pulling the
parameters it needs from an incoming object - making it that much easier to work
with.

Let's look at a simple example of destructuring an object in a function's
parameters:

```javascript
let cat = { name: "Rupert", owner: "Curtis", weight: 10 };

// This unpacks the *owner* key out of any incoming object argument and
// assigns it to a owner parameter(variable)
function ownerName({ owner }) {
  console.log("This cat is owned by " + owner);
}

ownerName(cat);
```

In the above example we destructured any incoming arguments to the `ownerName`
function to assign the value at the key `owner` to the parameter name of
`owner`. This syntax might seem a little much just for getting one parameter but
this syntax can become _invaluable_ with nested objects.

Let's look at one more slightly more complex example to see the power of
destructuring parameters. In the below example we want to find and return an
array of the toys that belong to all cats:

```javascript
let bigCat = {
  name: "Jet",
  owner: { name: "Rose" },
  toys: ["ribbon"],
  siblings: { name: "Freyja", color: "orange", toys: ["mouse", "string"] }
};

// here we use *aliased* object destructuring to create a siblingToys variable
function toyFinder({ toys, siblings: { toys: siblingToys } }) {
  let allToys = toys.concat(siblingToys);
  return allToys;
}

console.log(toyFinder(bigCat)); // => ["ribbon", "mouse", "string"]
```

One thing we'd like to draw your attention to is the parameters of the
`toyFinder` function. As you are all aware, we can't declare the same variable
twice - so in the above `toyFinder` we ran into a situation where two objects
had the same key name: `toy`. We solved this using _aliased_ object
destructuring - we alias the `toys` key within the `siblings` object as
`siblingToys`.

Thanks to object destructuring in parameters, all we had to do when we invoked
`toyFinder` was pass in the whole object! Making our code easier to write and
our object easier to work with.

## What you learned

What this reading covered:

- How to destructure an array to reference specific elements
- How to destructure an object to reference specific elements
- How to destructure incoming parameters into a function

[1]: https://github.com/tc39/proposal-object-rest-spread

________________________________________________________________________________
# We're Better Together: Pair Programming

So far, you've been solving problems and writing code on your own. You'll
certainly spend a lot of time doing this in your future, but why not try a
better way? Let's discuss _pair programming_: an alternative approach that can
boost your output, reduce errors, and improve your mood all at the same time!

We'll cover:

- a brief history of team/pair programming,
- typical roles when pairing up, 
- and benefits of learning this useful skill!

## Team mentality

Despite what "hacker" personalities in movies might have you think, software
development has never been a single-player game. Tracing back to the earliest
days of computing, computer scientists have worked in pairs or teams to solve
the biggest problems. Fred Brooks, in his popular software/project management
guide "The Mythical Man Month" (published in 1975) even advocated for small
["surgical teams"][1] to approach software development! 

Even so, it's easy to get focused on a problem and stop communicating with your
teammates. To prevent this behavior, many teams practice _pair programming_, an
approach in which two developers work together on a single computer. Pairing up
ensures that both developers are engaged with each other and with the problem at
hand, and it helps us share knowledge faster!

Pair programming is by far the most popular approach, but there are other ways
for small groups to collaborate! You may also hear about _mob programming_,
where a group of 3+ individuals gather around a single screen to work through an
issue, or _extreme programming (XP)_, a highly-structured approach to pair
programming where the whole team rotates through projects. We'll refer to all of
these multi-developer approaches as _collaborative programming_.

There are a few common concepts in all these approaches:

- **One shared device for coding:** Keeping your code in sync with someone else
  is a bigger challenge than it's worth, so collaborative programmers have found
  that coding only on one device keeps it simple. You can always share your code
  with each other once you're done working on it.

- **Everyone has a job:** Regardless of how many people you're collaborating
  with, it's important that each person has a role to play. This increases
  engagement and ensures that no one gets bored! If you find yourself in a group
  but without a clearly-defined role, there may be a better use of your time.

- **Everyone gets a turn:** The best way to learn is by doing, so everyone
  should be able to work in all the roles on a collaborative programming team.
  This means developers may rotate into different roles on a timer, or change
  roles with each new session.

- **No one is "too good to pair":** It's important to note that pairing should
  be a **whole team** process. One of the benefits of pair programming is that a
  more senior engineer can share knowledge with a junior engineer, skilling them
  up faster. No truly collaborative programming session excludes certain people
  because they're outliers. It's never too early (or too late!) to start pairing
  up.

## Pair Programming Roles

When we talk about pair programming specifically, there are two well-known
roles: that of the _Driver_ and that of the _Navigator_. Let's break down their
individual responsibilities.

### The Driver

The _Driver_ takes ownership of the keyboard. They'll be in charge of typing
code and asking questions. The driver should focus on the current task and can
let go of the bigger picture for a little while. The Driver might also suggest
ways to improve/refactor the code, as the project continues.

### The Navigator

The _Navigator_ is in charge of what's being typed and maintaining the project's
momentum. They should lead the discussion and direct the driver about what to
type. The navigator won't do any typing themselves. Instead, their goal is to
make it as easy as possible for the driver to create code. While the driver
types, the navigator should be double-checking the code for errors.

### Both roles

If these roles sound limiting to you, good; that's the point! Having a clearly
defined role means you never have to wonder what you should be doing at any
given time. If you're driving, you should be writing code. If you're navigating,
you should be designing what comes next and sharing that with the driver.

These roles provide some structure, but they're not excuses for poor
communication. It's up to **both** programmers to discuss the plan early and
often. As the navigator leads the way, the driver should be constantly
second-guessing the plan. If there's a potential problem, it's okay for the
driver to bring this up! This is one of the strengths of pair programming: both
developers have a voice in service of the final product.

Both the driver and navigator should help keep each other on task as well. If
you find yourself getting quiet or distracted, switch roles! The change of
context should help you get your head back in the game.

## Why pair up?

This all sounds like a lot of work! If you're already capable of coding alone,
why might you want to pair up at all? Let's look at some of the benefits.

First, some statistics. A [study from 2000][2] found that pair programming
results in 15% slower development time. Yikes! That sounds a lot less scary when
you recognize that we would theoretically expect it to result in 50% slower
time, though. After all, we're taking two people who could be working at "full
speed" and assigning them to one task. Somehow, this process only causes them to
move 15% slower - wow!

The same study notes the payback for that loss of velocity: the resulting code
contains 15% fewer errors. If this sounds like an even trade, consider this:
debugging, correcting, and redeploying that erroneous code could take from 15 to
60 times as long as the paltry 15% slowdown caused by pairing up! Spending a
little extra time up front can make a world of difference later on.

Pair programming is also a great way to fulfill your social needs. Coding alone
can be a lonely endeavor, especially when you face new challenges and aren't
sure how to proceed. Instead of getting lost in a search engine, pairing
partners can help each other navigate these challenges and celebrate each
others' successes. 

Lastly, a big motivator for being a practiced pair programmer is the job search.
Many companies include pair programming in their interview process. You may be
asked to code while some of the company's engineers observe, or you might get to
work directly with another engineer on a collaborative project! Practicing this
skill now means you'll be comfortable when the stakes are higher, and more
likely to make a good impression on the interviewing team.

## What we've learned

When it comes to writing code, we are truly better together! Pair programming is
an effective process for writing more code, writing better code, and improving
your development skills at a dramatically increased rate. Starting now, we'll be
encouraging you to pair with other students on App Academy projects.

After reading this lesson, you should feel comfortable:
- defining collaborative programming,
- describing the roles of the Driver and Navigator, 
- and naming a few benefits of pair programming.

[1]: https://en.wikipedia.org/wiki/The_Mythical_Man-Month#The_surgical_team
[2]: http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.26.9064

________________________________________________________________________________
# The App Academy Pair Programming Approach

When it comes to pair programming, every team has their own process. Let's
explore App Academy's specific approach to pairing up!

We'll cover:

- the App Academy path to pair programming success,
- a quick routine for improving your pairing outcomes,
- and modifications you can make for specific situations.

## Why this way?

It might feel unnecessary to have strict rules about working together. After
all, you've been working with other people your whole life, right? Get ready -
software engineering will be different!

Working as a programmer means being faced with frequent distractions. Strict
rules help prevent those distractions so you can focus on what matters most.
Additionally: when problems arise (as they inevitably will), people tend to fall
back on old habits to cope with the stress. A rigid approach should provide us
with at-the-ready coping strategies we can fall back on. When your team shares
the same strategies, it makes it even easier to support each other through
challenges!

Ultimately, we're creating a shared language between teammates. When you move
into your new career, you'll have to adjust to the collaborative process of your
new team. Think of this as an opportunity to build a foundation for that
transition.

## The rules

Let's lay out the steps to a successful pair programming session. This process
will be the same whether you're working together in-person or remotely. 

### Partner up

You can't pair program without a pair of programmers! Your first step should be
partnering up with another student. While it might be more comfortable to have
the same partner each time, try challenging yourself to select a new partner for
every session. This will broaden your perspective and let you share your unique
approaches to software with each other.

### Check-in

Before beginning, it's a good idea to check in with each other. Take a quick
"lay of the land": what will you be pairing on? How long do you expect this
session to last? Do you need to plan breaks for lunch or does one of you have
obligations that will cut the session short? Get these details scheduled with
each other ahead of time to reduce surprises & distractions later on.

This is a great time to assign roles as well. We encourage you to stick with the
_Driver_ and _Navigator_ roles discussed previously. Over time, we've found that
students who are more comfortable with the project being worked on prefer to act
as Navigator first. This lets them establish the direction for the session and
helps support the Driver. Of course, discuss this together before making a
decision: your partner may have a different opinion!

### Get coding!

Once you've chosen initial roles, it's time to dive in! Remember that you & your
partner should be working in a single editor, not two different ones. If you're
together in-person, this means one keyboard, one monitor, and two chairs. If
you're working remotely, this means one person is sharing their editor and the
other is watching & talking only.

To start, let the initial driver set up the development environment and set a
timer for 15 minutes. The navigator should start mapping out the course of the
project, letting the driver type out code and watching out for errors. Both
driver & navigator should be in _constant_ communication: ask each other lots of
questions and double-check each other's ideas as you go! It's okay to use your
time together to search for documentation or help online as well.

If a question comes up that requires a lot of discussion or further research,
pause your timer and talk it out. As you pair program more, you'll find that
these extended discussions become less frequent. It's not that you're talking
less, but that you're comfortable enough with the process to continue coding
while working through bigger problems. 

### Hand off

We follow a 15 minute rule at App Academy. This means you should change roles
after every 15 minutes of progress - no exceptions! Frequent role reversal
ensures you're both getting equal exposure to the whole workflow, and it forces
you to stay engaged and communicate through the transition.

When the timer is up, the driver should pass control to the navigator and begin
navigating themselves. This will feel awkward at first, but remember that you're
building a new skill here: context switching while maintaining communication is
**crucial** for being an effective developer.

Stick to the timer as closely as possible. It can be tempting to finish your
current line of code/task before handing off, but that "last piece" might drag
on for another 15 minutes by itself! If you're communicating effectively, you
should be able to the hand off mid-sentence and have your pair pick up right
where you left off.

### Follow-up

It has been a long, productive day. How should you wrap up your programming
session? Take a little time to reflect! Before officially ending your session,
take a couple minutes to recap. Discuss what you accomplished. Did you meet your
goals? Take a moment to celebrate! Are there tasks left incomplete? Make a few
notes so you can pick these up with someone else next time.

The follow-up, like the check-in, helps commit your progress to memory. It's
also the perfect time to answer any lingering questions and provide/receive
feedback on how the session went. Don't skip this step because it feels
superfluous; it's just as important as the code you've written together!

## Modifying the routine

As you pair up more often, you'll encounter days where the routine just isn't
working. Maybe your partner's having a bad day - or maybe you're having a bad
day yourself! Maybe the day's material hasn't "clicked" for you yet, and you
feel like your partner is speaking a totally different language. Yikes!

The most important thing to remember is that this is **totally normal**. We
provide a strict pair programming routine to keep you on track, but we can't
plan for everything! Here are some things you can do to keep the routine fresh.

- **Step back & discuss:** If you're feeling stuck, or having trouble keeping up
  with your partner, pause your timer and step away from the keyboard. This is a
  good signal that you need to discuss progress so far and make a plan for
  moving forward. You should always feel comfortable doing this if you're unsure
  of something. Don't worry about slowing your partner down; the goal of pair
  programming is that you both progress **together**.

- **Focus on the process during your follow-up:** Understanding and mastering
  the pair programming process is as much a part of our program as JavaScript
  and data structures. If you're struggling with this process, discuss it!
  During your follow-up, take a moment to ask each other how you felt your
  communication went. You should discuss how you're working to improve your own
  performance as both a driver & navigator. By focusing on the process, you're
  taking some of the awkwardness out of the relationship, and helping each other
  feel more comfortable.

- **Remember to reflect regularly:** You may not do it daily, but it is
  important to reflect on your pair programming experiences at regular intervals
  throughout your course. At least once every few weeks, schedule some time to
  chat with a partner about how pair programming is working for you. Share your
  personal experiences and suggest a few things you'd like to do for yourself to
  improve the process. If you've paired with your partner before, this may also
  be an appropriate time to offer compliments and kind criticism.

## What we've learned

We know what pair programming _is_, and now we know _how_ to do it! Practice
following the App Academy process in your own pairing, and don't forget to
discuss your experiences as often as you can. You can't be **too** good at pair
programming; you'll be pairing up for the rest of your new career.

You should now be able to:

- describe each step of App Academy's pair programming process,
- explain why the process is important,
- and suggest some ways to modify/improve the process as necessary.

________________________________________________________________________________
# You Are Not Your Code: Empathetic Communication In Engineering

We've presented a rigid process for pair programming, but we left out a big
part: **communication**! While we've mentioned that communication is important,
we haven't really dug into the value of this skill. Let's discuss some
communication approaches that help you maximize your time when pair programming
- and collaborating in general!  

We'll discuss:
- empathetic communication when working on code,
- how to appropriately critique the work of others,
- and how to receive & respond to criticism of your own work.

## Understanding code-centric vs. human-centric language

The code you write can feel deeply personal. You've put time into it, refactor
after refactor, honing it to be both highly efficient and easily understood.
It's no wonder, then, that criticism of that code can feel personal as well! A
common problem on software teams is the struggle between improving code quality
without offending the programmers who wrote it.

When communicating about software, it can be helpful to use _code-centric_
language. Here's an example:

```js
// Human-centric
"You wrote an infinite loop. 
If you do that again, you will crash the server."

// Code-centric
"The code submitted for issue #3 resulted in an infinite loop. 
This behavior could crash the server. 
What can we do to prevent that in the future?"
```

Notice how the code-centric example focuses on outcomes and looks towards
improvement, instead of focusing on assigning blame and enumerating negative
consequences. It can feel like a nitpick, but depersonalizing discussions of
code quality in this way helps you focus on the bigger picture: your team and
the product you're working on together.

It's important to remember that what we're **not** doing with code-centric
communication is removing responsibility. As a developer, you may write code for
use in critical industries like healthcare, finance, or defense. It's your
responsibility to be constantly learning and growing to ensure that what you
create is safe and correct.

However, unless you are a solo freelance developer working on a solo project,
your team will share your goals and should be focused on uplifting each other.
Having a positive outlook, even in the face of human error, can be the
difference between a successful team and a team destined for failure.

A great practical example of code-centric language in action is [this report by
GitLab][1] after an accidental deletion of data. The company used this as a
learning opportunity, improved their release tooling to prevent accidents in the
future, and shared everything they learned with the community.

### Applying empathy to pair programming

When working directly with a partner, the relationship is close so the stakes
are high. It's important to maintain that relationship, but it's also important
to hold each other to a high standard! We can do both these things with
_empathetic communication_.

Being _empathetic_ means being considerate of the feelings of others. It's not
just about recognizing challenges - it's important to relate those challenges to
your own experiences and respond in a way that acknowledges them appropriately.

A common phrase you'll hear when discussing communication in software
development is **"You are not your code"**. This is a simplification of the
human- vs. code-centric communication styles we discussed. Keeping this
separation between your partner (or yourself!) and the code you're producing
together can help you communicate in a way that improves outcomes for everyone.

Let's look at another example. Imagine you're acting as navigator during a
pairing session and reviewing the code your partner has typed.

```js
// Human-centric
"Why did you you write the function the wrong way?"

// Code-centric
"Is this an alternative syntax for a function?"
```

We're not ignoring what might be a problem, but we are remaining open to a
potential learning opportunity and drawing attention to it if needed. This
difference in approach embodies the spirit of the "You are not your code" motto.

The context of "You are not your code" is helpful when receiving criticism as
well. Remember during pair programming or code review that we're all on the same
team: making better software! It can be tough to have your work critiqued, but
it's the best way to improve. If you find a particular note affects you
personally, try rewriting it for yourself using code-centric language.

### When empathy goes awry

You may sometimes encounter other engineers who use "you are not your code" as a
license to insult. The goal of this phrase is to encourage programmers to act
with empathy. It's **never** an excuse to belittle someone with the caveat of
"You can't be offended - I'm just talking about your code!". Notice that even
that defense uses human-centric, personally challenging language.

Practice using "you are not your code" in a positive context whenever you can,
and encourage others to do the same. Strive to treat the people around you in
the same way you'd like to be treated. Remember that you're working with humans
from many different backgrounds and with unique experiences, and that you should
place respect for those human experiences over code quality, words-per-minute,
or browser preference. That's true empathy.

### Applying empathy to your code

Finally, remember that the code you're writing will likely be read and used by
other developers in the future. Just like practicing empathetic communication
in-person helps build relationships, practicing empathetic coding helps build
good software.

Empathetic coding means thinking of those who will read or improve your code
once you've moved on to other projects. Leaving clear comments and taking time
to keep your code organized is one way to code with empathy. Another is working
to use inclusive language in your test cases, or avoiding hard-to-understand
single letter variable names. 

Anything you can do to make the next developer's life easier is worth the time.
Who knows - it might be **you** coming back to this project many months from
now!

## Why communication matters

So why does this all matter? App Academy is a software development program, not
a public speaking course! Look a little deeper, though, and you'll see a wealth
of benefits from improving your communication.

Selfishly, good communication helps you succeed. Lots of programmers with strong
technical skills will apply, but those who can communicate clearly and
efficiently [will get the job][2]. The relationships you build by being
empathetic with your coworkers will also help you with positive references and
opportunities for promotion!

Thinking more globally, it's important to remember that the tech industry is
growing at a rapid pace. Accusatory communication is just one of many ways of
_gate-keeping_, or making our industry harder to get involved with. This isn't
always intentional, so improving your own communication skills is a great way to
become more aware and ensure you're part of the solution, not part of the
problem.

## What we've learned

When programming, you're not just communicating with your computer! Practicing
empathy in **all** your communication will result in a great return for you,
your co-workers, and the tech community at large.

We hope you're now able to:

- differentiate between human-centric and code-centric language,
- articulate the meaning of "You are not your code", 
- and list the benefits of practicing empathetic communication.

[1]: https://about.gitlab.com/blog/2017/02/10/postmortem-of-database-outage-of-january-31/
[2]: http://blogs.edweek.org/edweek/high_school_and_beyond/2018/08/good_speaking_tops_list_of_skills_employers_want_most.html

________________________________________________________________________________
# Object Problems

It's time to get some practice using Objects! Below we've included a link to
download a `zip` file for a number of problems.

Complete the problems in the order specified. You should have `mocha` installed
and will need to pass all the tests in order to move on.

To run the tests for the above problems you will need to unzip the file you
downloaded and then navigate into the directory for that file. Once there you
can run the command:

```sh
~ mocha
```

The `mocha` command will run all the tests. If you have any trouble with this
don't hesitate to ask a TA for help!
