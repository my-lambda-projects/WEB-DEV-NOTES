// //*********Function Expression Syntax************************************************ */
//function decleration syntax:
// function sayHello() {
//     console.log("hello");
// }
// sayHello();
//Expression syntax equivalent-----------------
// let sayHello1 = function () {//variable contains function.... what happens when we try to print out that var.
//     console.log('hello');
// };
// sayHello1();
// console.log(sayHello1);// print out uninvoked variable contaning function....
//[Function: sayHello1]


//----get avg-----
// let getAvg = function (num1, num2) {
//     let sum = num1 + num2;
//     let avg = sum / 2;
//     return avg;

// };
// console.log(getAvg(2, 4));//3
// let name = "Alvin";
// let age = 100;
//functions are first class objects....
//----------------------Demo from EOD Tuesday-------------------------------------------
//func that takes in arr of nums and returns the average...

// let findAvg = function (arr) {
//     let sum = 0;
//     let avg = 0;
//     if (arr.length === 0) {
//         return 0;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let cur = arr[i];
//         sum += cur;
//         avg = sum / arr.length;

//     }

//     return avg;
// };
// c
// console.log(findAvg);//[Function: findAvg] ... bc function is stored in var named findAvg which has not ben invoked w ()
//-------Bonus---use arr.reduce method---------------------------
// let findAvg = function (arr) {

//     if (arr.length === 0) {
//         return null;
//     }

//     let sum = arr.reduce(function (accum, cur) {
//         return accum + cur;

//     }, 0);
//     return sum / arr.length;
// }
// console.log(findAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//***************************************Whisper***************************************
// function whisper(str) {
//     low = str.toLowerCase();
//     wis = "..." + low + "...";
//     return wis




// }

// console.log(whisper("Hey Buddy")); // => "...hey buddy..."
// console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."



//****************Mutability Demo*******************************************************
// let str = 'abc';// strings are immutable
// str[1] = 'x';
// let arr = ['a', 'b', 'c'];//arrays str mutable
// arr[1] = 'x';
// console.log(str);//abc
// console.log(arr);//[ 'a', 'x', 'c' ]
// str += "d";
// console.log(str);//abcd//not changing string data...creating whole new string
// //sometimes we want functions to modify data....
// let replaceFirst = function (array, newVal) {
//     array[0] = newVal;
// };
// let letters = ["a", "b"];
// console.log(letters);//[ 'a', 'b' ]
// replaceFirst(letters, "x");
// console.log(letters);//[ 'x', 'b' ]


//semi colons are supposed to go at the end of an expression....cannot go in an array....cannot....can't go in args to a function.....in for loop(;;;)...semi colons are required
//First Class Object: in js.....arrays,functions,POJO-objects
//Can be passed as arg to func
//stored as variable
//returned from function


//************************Array Push,Pop,Shift,Unshift**************/
/*
Syntax
arr.push([element1[, ...[, elementN]]])
Parameters
elementN
The element(s) to add to the end of the array.
Return value
The new length property of the object upon which the method was called.

Description
The push method appends values to an array.

push is intentionally generic. This method can be used with call() or apply() on objects resembling arrays. The push method relies on a length property to determine where to start inserting the given values. If the length property cannot be converted into a number, the index used is 0. This includes the possibility of length being nonexistent, in which case length will also be created.

Although strings are native, Array-like objects, they are not suitable in applications of this method, as strings are immutable.  Similarly for the native, Array-like object arguments.
*/
/*
MDN Examples:
Examples
Adding elements to an array
The following code creates the sports array containing two elements, then appends two elements to it. The total variable contains the new length of the array.

let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
Merging two arrays
This example uses apply() to push all elements from a second array.

Do not use this method if the second array (moreVegs in the example) is very large because the maximum number of parameters that one function can take is limited in practice. See apply() for more details.

let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVegs)

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

*/

//adds one or more elements to end of array and returns new arr length...does mutate
// let people = ["Rosemary", "Alex", "Josh", "Polina", "David", "Anna"];
// let res = people.push("Kwasi");
// console.log(res);//should be new length of arr
// console.log(people);
// people.push("JJ");
// people.push("Sarah");
// console.log(people);
// let res1 = people.push("Kwasi", "Bakari", "jesse");
// console.log(people);
// console.log(res1);
//results below:
/*
7
[
  'Rosemary', 'Alex',
  'Josh',     'Polina',
  'David',    'Anna',
  'Kwasi'
]
[
  'Rosemary', 'Alex',
  'Josh',     'Polina',
  'David',    'Anna',
  'Kwasi',    'JJ',
  'Sarah'
]
[
  'Rosemary', 'Alex',
  'Josh',     'Polina',
  'David',    'Anna',
  'Kwasi',    'JJ',
  'Sarah',    'Kwasi',
  'Bakari',   'jesse'
]
12
*/


//------------POP---------------------------------
/*
MDN:

Syntax
arrName.pop()
Return value
The removed element from the array; undefined if the array is empty.

Description
The pop method removes the last element from an array and returns that value to the caller.

pop is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.

If you call pop() on an empty array, it returns undefined.

Array.prototype.shift() has similar behavior to pop, but applied to the first element in an array.

Examples
Removing the last element of an array
The following code creates the myFish array containing four elements, then removes its last element.

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

*/
// pop removes last ele of array and returns the pop-ed element
//does mutate array

// let people = ["Rosemary", "Alex", "Josh", "Polina", "David", "Anna"];
// let res = people.pop();
// console.log(res);//Anna
// console.log(people);//[ 'Rosemary', 'Alex', 'Josh', 'Polina', 'David' ]


//*****************************Nested Loops****************************** */

// for (let i = 0; i <= 2; i++) {
//     console.log(i);
//     for (let j = 0; j <= 4; j++) {
//         console.log("       " + j);
//     }
// }
// 0  i
//    j    0
//    j   1
//    j    2
//    j    3
//    j    4
// 1  i
//    j    0
//    j    1
//    j    2
//    j    3
//    j    4
// 2  i
//    j    0
//    j    1
//    j    2
//    j    3
//    j    4

// for (let i = 0; i <= 2; i++) {
//     for (let j = 0; j <= 4; j++) {
//         console.log(i, j);
//     }
// }
// i j
// 0 0
// 0 1
// 0 2
// 0 3
// 0 4
// 1 0
// 1 1
// 1 2
// 1 3
// 1 4
// 2 0
// 2 1
// 2 2
// 2 3
// 2 4


//*****************************Pairs in Arrays******************************** */
//2020 - 08 - 12 - 12 - 51 - 43.png


let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < letters.length; i++) {
    let first = letters[i];
    console.log(first);
    for (let j = 0; j < letters.length; j++) {
        let second = letters[j];
        console.log('       ', second);
        console.log('i>>', first, 'j>>', second);
    }
}
/*
a
        a
i>> a j>> a
        b
i>> a j>> b
        c
i>> a j>> c
        d
i>> a j>> d
        e
i>> a j>> e
        f
i>> a j>> f
b
        a
i>> b j>> a
        b
i>> b j>> b
        c
i>> b j>> c
        d
i>> b j>> d
        e
i>> b j>> e
        f
i>> b j>> f
c
        a
i>> c j>> a
        b
i>> c j>> b
        c
i>> c j>> c
        d
i>> c j>> d
        e
i>> c j>> e
        f
i>> c j>> f
d
        a
i>> d j>> a
        b
i>> d j>> b
        c
i>> d j>> c
        d
i>> d j>> d
        e
i>> d j>> e
        f
i>> d j>> f
e
        a
i>> e j>> a
        b
i>> e j>> b
        c
i>> e j>> c
        d
i>> e j>> d
        e
i>> e j>> e
        f
i>> e j>> f
f
        a
i>> f j>> a
        b
i>> f j>> b
        c
i>> f j>> c
        d
i>> f j>> d
        e
i>> f j>> e
        f
i>> f j>> f
*/
//2020-08-12-12-57-07.png
//2020-08-12-12-58-45.png
//*************************Unique Pairs******************************8 */
//2020-08-12-13-00-21.png


/*
Unique
Write a function unique that accepts an array as an argument. The function should return a new array containing elements of the input array, without duplicates.
*/
// let unique = function (array) {
//     let uniques = [];
//     array.forEach(function (el) {
//         if (!uniques.includes(el)) {
//             uniques.push(el);
//         }
//     });
//     return uniques;
// };

// console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']


//***********Reverse String***************************************** */

/*
Reverse String
Write a function reverseString(str) that takes in a string. The function should return a new string where the order the characters is reversed.
*/
// let reverseString = function (str) {
//     let reversed = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         let char = str[i];
//         reversed += char;
//     }

//     return reversed;
// };

// console.log(reverseString('fish')); // 'hsif'
// console.log(reverseString('marathon')); // 'nohtaram'



//********************************************RevSentence****************** */

/*
Reverse Sentence
Write a function reverseSentence(sentence) that takes in a sentence as an arg. The function should return a new sentence where the order of the words is reversed. Note that you should reverse the order among words, not the order among characters.
*/
let reverseSentence = function (sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        newWords.push(words[i]);
    }

    let newSentence = newWords.join(' ');
    return newSentence;
};

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
