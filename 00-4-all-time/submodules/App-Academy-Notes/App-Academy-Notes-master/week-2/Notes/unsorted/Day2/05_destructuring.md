# Destructuring
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Destructuring data into variables](#destructuring-data-into-variables)
  - [Swapping variables using destructuring](#swapping-variables-using-destructuring)
  - [Destructuring objects into variables](#destructuring-objects-into-variables)
  - [Destructuring and the rest pattern](#destructuring-and-the-rest-pattern)
- [Destructuring parameters](#destructuring-parameters)
- [What you learned](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

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
