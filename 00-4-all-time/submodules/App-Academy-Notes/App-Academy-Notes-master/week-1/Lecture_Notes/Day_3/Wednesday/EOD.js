EOD3(Intermediate Functions):
// 1. Identify that strings are immutable and arrays are mutable


let arr = [];
console.log(arr);
arr[0] = "mutable";
console.log(arr);

let str = 'immutable';
console.log(str);
str[0] = "m";
console.log(str);


// 2. Define a function using both function declaration and function expression syntax

//Function Declaration
function addTwo(num1, num2) {
    return num1 + num2;
}

// Function Expression
// let addTwo = function(num1, num2){
//     return num1 + num2;
// };


// 3. Utilize Array#push, #pop, #shift, #unshift to mutate an array

let instructors = ["Sergey", "JM", "Bart", "Victoria"]


instructors.push("Alfredo", "Luis");
console.log(instructors);

instructors.pop();
console.log(instructors);


instructors.unshift("Alfredo");
console.log(instructors);

instructors.shift();
console.log(instructors);



// 4. List the arguments that can be used with Array#splice
// Array.splice(startIndex, deleteCount, str1, str2, ...)required startIndex all other parameters optional

let colors = ["red", "green", "yellow", "orange", "pink"]

colors.splice(1, 2, "purple");
console.log(colors);





// 5. Write a function that sums up elements of an array, given an array of numbers as an argument

let sumNums = function (numbersArr) {
    let sum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        sum += numbersArr[i];
    }
    return sum;
}


// sum      i
// 0        0
// 1        1
// 3


console.log(sumNums([1, 2, 3]))



// your code here
function rotateRight(arr, num) {
    let copiedArr = arr.slice();

    for (let count = 0; count < num; count++) {
        let poppedEle = copiedArr.pop();
        copiedArr.unshift(poppedEle);
        console.log(copiedArr)
    }
    return copiedArr;
}


let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
