# WhiteBoarding Exercise

## The Question

Write a function named `hiddenCounter()`. The `hiddenCounter` function will
start by declaring a variable that will keep track of a count and will be
initially set to 0. Upon first invocation `hiddenCounter` will return a
function. Every subsequent invocation will increment the previously described
count variable.

Explain how the closure you have created affects the scope of both functions.

Examples:

```js
let hidden1 = hiddenCounter(); //returns a function
hidden1(); // returns 1
hidden1(); // returns 2

let hidden2 = hiddenCounter(); // returns a function
hidden2(); // returns 1
```
=
## The Answer

```js
function hiddenCounter() {
  let count = 0;
  // here we are returning an inner function that will create a closure by
  // closing over the above count variable and changing it each time the
  // the inner function is invoked
  return () => (count += 1);
}
```
