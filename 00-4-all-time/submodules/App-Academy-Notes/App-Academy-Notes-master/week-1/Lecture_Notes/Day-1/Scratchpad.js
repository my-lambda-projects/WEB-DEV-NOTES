
// // //Expression Lesson Learning Objectives
// // //letBelow is a complete list of the terminal learning objectives for this lesson.When you complete this lesson, you should be able to perform each of the following objectives.These objectives capture how you may be evaluated on the assessment for this lesson.

// const { strict } = require("assert");

// // // 1.  Given a working REPL interface, write and execute a statement that will print “hello world” using console.log

// // console.log("hello world");



// // // 2.  Identify that strings are a list of characters defined by using double or single quotes

// // let greeting = "Hey";
// // let salutations = 'Hey';

// // // 3.  Given an arithmetic expression using +, -, *, /, %, compute its value

// // console.log(16 % 5 === 0);// = 1

// //something % 2 === 0 --- even
// //something % 2 === 1 ----odd


// // 4.  Given an expression, predict if its value is NaN

// // let result = 5 + 2 * 2;
// // console.log(result); // 9
// // console.log(10 - 10 / 2); //5
// // console.log((22 * 2) % 2 ** 2); //0    ** is exponent!!!!!

// // //4. Given an expression, predict if its value is NaN

// // console.log(5 + '200'); // coerces 5 into a string  ----- 5200 this is called concatination (addition of 2 strings)
// // let num; //undefined ... result of uninitialized decleration is always undefined
// // console.log(num);
// // console.log(num + 'hey'); //undefinedhay
// // let fruit = 'ba' + 'apple' * 1 + 'a'; //baNaNa
// // console.log(fruit);


// // 5.  Construct the truth tables for &&, ||, !



// // 6.  Given an expression consisting of >, >=, ===, <, <=, compute it’s value




// // 7.  Apply De Morgan’s law to a boolean expression




// // 8.  Given an expression that utilizes operator precedence, compute its value

// let x = 7;
// x++;
// x - 2;
// x *= 3;
// console.log(x);//24

// let i = 4;
// i + 3;
// console.log(i);//4

// let i = 4;
// i += 3;
// console.log(i);//7


// // 9.  Given an expression, use the grouping operator to change it’s evaluation



// // 10. Given expressions using == and ===, compute their values
// 5 == '5' //true


// // 11. Given a code snippet using postfix++, postfix--, +=, -=, /=, *=, predict the value of labeled lines




// // 12. Create and assign a variable using let to a string, integer, and a boolean.Read its value and print to the console.






// // Intro to Functions Lesson Learning Objectives
// // Below is a complete list of the terminal learning objectives for this lesson. When you complete this lesson, you should be able to perform each of the following objectives. These objectives capture how you may be evaluated on the assessment for this lesson.

// // 1.  Define a function using function declaration


// function decleration(a, b) {


// }

// //equivalent expression

// let decleration = function (a, b) {



// };
// let a = decleration(5, 6);

// //2.  Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value






// //3.  Identify the difference between parameters vs arguments
// let a = 'this is a';
// let b = 'this is b';
// let c = a.concat(b);
// console.log(c);// 'this is athis is b'




//number data type:
console.log(1 + 1); //=>2

console.log(3 + 2 * 4);
console.log(3 + (2 * 4));
console.log(22 % 5);// mod % does division and returns the remainder of the division
console.log(23 % 5);
console.log(25 % 5);//no remainder
//lol that happens in live share for reasons no one can explain to anyone
// no worries lol

//useful info:
//test if even: if (somenumber%2 === )


let num = 7;
if (num % 2 === 0) {
    console.log("is even");

} else {
    console.log("is odd");
}

/*
bryan@DESKTOP-BTQ77CQ:/mnt/c/Users/bryan/Documents/APP-ACADEMY_AUG/Weeks/Week1/VS-Code-Notes/Day-1$ node Scratchpad.js
2
11
11
2
3
0
is odd
bryan@DESKTOP-BTQ77CQ:/mnt/c/Users/bryan/Documents/APP-ACADEMY_AUG/Weeks/Week1/VS-Code-Notes/Day-1$
*/
console.log('hello world');
console.log(7 % 10);//7

console.log(14.2 % 7.1);//0
console.log(14.8 % 7.1);//0.6000000000000014

//  / javascript ...no distinction between decimals and whole numbers
console.log(77 % 7.7);//7.699999999999998 ........rounding error...........javascript does not interpret floating point number perfectly

//switched to mid day lecture notes

/*
bryan@DESKTOP-BTQ77CQ:/mnt/c/Users/bryan/Documents/APP-ACADEMY_AUG/Weeks/Week1/VS-Code-Notes/Day-1$ node Scratchpad.js
2
11
11
2
3
0
is odd
bryan@DESKTOP-BTQ77CQ:/mnt/c/Users/bryan/Documents/APP-ACADEMY_AUG/Weeks/Week1/VS-Code-Notes/Day-1$
*/
console.log('hello world');
console.log(7 % 10);//7

console.log(14.2 % 7.1);//0
console.log(14.8 % 7.1);//0.6000000000000014

//  / javascript ...no distinction between decimals and whole numbers
console.log(77 % 7.7);//7.699999999999998 ........rounding error...........javascript does not interpret floating point number perfectly

//switched to mid day lecture notes
