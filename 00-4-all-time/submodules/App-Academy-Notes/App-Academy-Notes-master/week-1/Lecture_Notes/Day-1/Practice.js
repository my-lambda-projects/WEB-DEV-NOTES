// 1. Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
// let greeting = 'hello world';

// console.log(greeting);

// let x = 7; // 7
// x++; // 8
// x + 2;
// console.log(x - 2);
// x *= 3; // 24
// console.log(x);

// function doSomething(name) {
//     return name;
// }

// let name = doSomething('Bart');
// console.log(name);

// 2. Identify that strings are a list of characters defined by using double or single quotes
// let language = 'JavaScipt';
// language = 'JavaScript2';

// console.log(language[2]);
// console.log(language + ' is pretty cool');

// 3. Given an arithmetic expression using +, -, *, /, %, compute its value
// let result = 5 + 2 * 2;
// console.log(result); //
// console.log(10 - 10 / 2);
// console.log((22 * 2) % 2 ** 2);
// 4. Given an expression, predict if its value is NaN
// console.log(5 + '200'); //
//let num;
// console.log(num);
// console.log(num + 'hey');
// let fruit = 'ba' + 'apple' * 1 + 'a';
// console.log(fruit);






// 5. Construct the truth tables for &&, ||, !
// true || (true && false)
// false && (true || false)



/*



*/






// 6. Given an expression consisting of >, >=, ===, <, <=, compute it’s value
// console.log(1 > 4); // false
// console.log(1 < 4); // true
// console.log(4 >= 4); // true
// console.log(4 <= 4); // true
// console.log(4 === '4'); // false
// console.log(4 == '4'); // true
// console.log((1 + 3) % 3 === 2 - 6 / 3 + 1);

// 7. Apply De Morgan’s law to a boolean expression
// console.log(!(true || false));
// console.log(!true && !false);

// 8. Given an expression that utilizes operator precedence, compute its value
// console.log(1 + 2 * 3 + 4); // 11 (multiplication is performed first, then addition)
// console.log(1 + 2 * 3 % 4); // 3 (multiplication and modulo are performed first, then addition)

// 9. Given an expression, use the grouping operator to change it’s evaluation
//console.log((2 + 4) * 3);
// console.log((22 - 2) % 5)
// 10. Given expressions using == and ===, compute their values

// 11. Given a code snippet using postfix ++, postfix --, +=, -=, /=, *=, predict the value of labeled lines

// let age = 5;
// console.log(age); // 5
// age + 5;
// console.log(age); // 5 (age was not reassigned above)
// age += 5;
// console.log(age); // 10 (+= is shorthand for age = age + 5, so age is reassigned)
// age *= 5;
// console.log(age); // 50
// age -= 5;
// console.log(age); // 45
// age /= 5;
// console.log(age); // 9
// age++;
// console.log(age); // 10 (++ is shorthand for age = age + 1, so age is reassigned)
// age--;
// console.log(age); // 9

// 12. Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.
// let variable = 'This is a string';
// console.log(variable); // This is a string (The value of the variable is what is printed, not the name.)
// variable = 8;
// console.log(variable); // 8 (The variable can be reassigned from a string to an integer.)
// variable = true;
// console.log(variable); // true (Reassignment to a boolean works, too!)

// function learning objectives

// 1. Define a function using function declaration
//   - We use the `function` keyword to declare our intent to create a function.
//function someFunction(str1, str2) {
//    return str1 + str2;
//}
//   - We give our function a name (myNewFunction).
//   - We capture any parameters that are passed in and assign them names (parameter1 and parameter2).
//   - We open up a block with curly braces to house our function's code.
//   - We do any functionality that we want our function to perform.
//   - We use the `return` keyword to return a value from our function (otherwise we return `undefined`).

//function myNewFunction(parameter1, parameter2) {
//    console.log(parameter1);
//    console.log(parameter2);
//    return parameter1 + parameter2;
//}

// 2. Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value

// 3. Identify the difference between parameters vs arguments
// - Parameters are in the function definition. They capture the values passed in to the function (arguments) as variable names and allow us to use those values in our function.
// - Arguments are in the function invocation. They are the values that are passed in to the function.
// - In [Objective 2](#functions-objective-2) above, `num1` and `num2` are the parameters while `3` and `7` are the arguments.
