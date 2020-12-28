#Solving Problems Using Stacks


STACK: an ordered collection of items that follows the LIFO (last in first out) principle. The addition or removal of items or the removal of existing items takes place at the same end.
The END of the stack is known as the TOP,
and the OPPOSITE SIDE is known as the BASE.
The newest elements are near the TOP
the oldest elements are near the base

A stack is used by compilers in programming languages, and by computer memory to store variables and method calls.

Stacks (and queues) have some similarities to arrays, but they give us more control over the addition and removal of elements.

Stacks have a variety of applications in real-world problems. For example, they can be used for backtracking problems to remember tasks or paths visited, and to undo actions. The Java and C# programming languages use stacks to store variables and method calls and there is a STACK OVERFLOW exception that can be thrown especially when working with recursive algorithms.

Before going on to writing the Decimal to Binary Conversion Algorithm, we have to create a Stack. We create a class to represent the stack (I will not be using ES6 class syntax here, rather ES5).

```javascript
function Stack() {
    let items = [];
```

need to declare methods available for stack

this adds a new item(or items) to the top of the stack, which means the end of it. As we are using an array to store the elements of the stack, we can use the push method.

```javascript
    this.push = function(element) {
        items.push(element);
    };
```
removes the top item from the stack. It also returns the removed element. As the stack uses the LIFO principle, the last item that we add is the one that is first removed. **

```javascript
    this.pop = function() {
        return items.pop();
    };
```

returns an element from the top of the stack. the stack is not modified. it does not remove the element. it only returns the element for information purposes. we use this method if we would like to know what was the last item added to the stack.

```javascript
    this.peek = function() {

        ** can obtain the last item from an array using length - 1 **

        return items[items.length - 1];
    };
```

returns true if the stack does not contain any elements, and false if it does: if the size of the stack is bigger than 0.

```javascript
    this.isEmpty = function() {
        return items.length === 0;
    };
```
returns the number of elements that the stack contains. similar to the length property of an array. for collections, we use the term size instead of length. again, since we are using an array to store things internally, we can simply return its length.

```javascript
    this.size = function() {
        return items.length;
    };
```

removes all the elements of the stack. an alternative method is calling the pop() method until the stack is empty. less efficient, however!

```javascript
    this.clear = function() {
        items = [];
    };
```

print() is a helper method. it outputs the content of the stack to the console.

```javascript
    this.print = function() {
        console.log(items.toString());
    };
}
```

The first of the three most famous algorithm examples of using a stack is the **DECIMAL TO BINARY ALGORITHM**.

**Decimal to Binary Conversion Algorithm**, also known as **DivideBy2 Algorithm**:

All of us are probably already familiar with the decimal base regarding numbers. That refers to the number system 0 - 9, which consists of 10 numbers. However, the binary representation is very important in Computer Science. Everything in a computer is represented by binary digits (0 and 1). Without the ability to convert back and forth between decimal and binary numbers, it would be difficult to communicate with a computer.

To convert a **DECIMAL NUMBER to a BINARY REPRESENTATION**, we can divide the number by 2 (binary is a base 2 number system) until the division result is 0. Conversion is one the first thing you learn in a Computer Science class in college, for example.

```javascript
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';

    while(decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));
```

```javascript
divideBy2(233)

233/2 === 116 rem === 1
116/2 === 58 rem === 0
58/2 === 29 rem === 0
29/2 === 14 rem === 1
14/2 === 7 rem === 0
7/2 === 3 rem === 1
3/2 === 1 rem === 1
1/2 === 0 rem === 1

10010111 -> 11101001
```

Why the reversal of binaries above? The remainders are first pushed into the end of the RemStack array. At the finish, the first remainder in would be the first number in the remStack Array at index 0. However, when the remainder-binary is popped out of the remStack array and concatenated to the binaryString, it ends up at the end again (right to left), resulting in the reverse order of the rems.

```javascript
divideBy2(10)

10/2 === 5 rem === 0
5/2 === 2 rem === 1
2/2 === 1 rem === 0
1/2 === 0 rem === 1

0101 -> 1010

divideBy2(1000):

1000/2 === 500 rem === 0
500/2 === 250 rem === 0
250/2 === 125 rem === 0
125/2 === 62 rem === 1
62/2 === 31 rem === 0
31/2 === 15 rem === 1
15/2 === 7 rem === 1
7/2 === 3 rem === 1
3/2 === 1 rem === 1
1/2 === 0 rem === 1

0001011111 -> 1111101000
```
