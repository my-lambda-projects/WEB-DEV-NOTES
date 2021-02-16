//************************Remove Last Vowel*********************************************** */
/*
Remove Last Vowel
Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
// */
// let removeLastVowel = function (word) {
//     let vowels = 'aeiou';

//     for (let i = word.length - 1; i >= 0; i--) { //loop runs backward to find last vowel rather than first.
//         let char = word[i]; //points to individual letter in word we are currently in the index of
//         if (vowels.includes(char)) {//if the current character is found in the vowel string
//             return word.slice(0, i) + word.slice(i + 1);//start index is inclusive, end index is exclusive...if both given start at start index including the start index and up to but not including the end index
//             //.slice(0,i) is
//         }
//     }

//     return word;
// };

// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'


//****************************Rotate Left****************************************************** */
/*
Rotate Left
Profile
Rotate Left
Write a function rotateLeft(array, num) that takes in an array and a number as args. The function should rotate the elements of the array to the left num times, mutating the original array. The function should return undefined.

Define this function using function expression syntax.
*/
/*
input:
2 args,1 array(should be mutated)
output:
-return undefined, should be mutating array as i Iterate

Strategy:
because mutate: push,pop,shift,unshift
start by: looking at left of input arr
will keep count var to know when to stop rotating
//-condition is when is same as num argument


-concat will not work because it does not modify original arrays...it creates new array
-shift to remove item from front of array
-push to add item to end of array
will stop looping and return undefined after rotated num times



*/

// example: let arr = ['a', 'b', 'c', 'd', 'e'];

// let rotateLeft = function (array, num) {// function expression syntax
//     for (let i = 0; i < num; i++) {// while loop might make more sense because we are not itterating through entire array...we are just countingup to num
//         console.log(i);
//         let el = array.shift();// remove item from front of array
//         array.push(el);//add item to end of array...push returns length of new array... not needed for this
//     }
// };

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateLeft(arr, 2)); // undefined
// console.log(arr); // [ 'c', 'd', 'e', 'a', 'b' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateLeft(animals, 3)); // undefined
// console.log(animals); // [ 'kangaroo', 'wombat', 'koala', 'opossum' ]


//***********Helper Functions**************************************************** */
// let isEven = function (num) {
//     return num % 2 === 0;
// };
// //--------------------write func that takes arr of numbers and returns NEW arr contaning only even numbers


// let extractEvens = function (numsArr) {
//     let evenNums = [];
//     for (let i = 0; i < numsArr.length; i++) {
//         let num = numsArr[i];
//         //if num is even then push it to evenNums arr.
//         if (isEven(num)) { //returns bool true or false...IS EVEN IS HELPER FUNCTION
//             evenNums.push(num);// add num to end of evenNums arr
//         }

//     }

//     return evenNums;

// };
// console.log(extractEvens([1, 2, 3, 4, 5, 6, 7]));//[ 2, 4, 6 ]

// let b = function () {
//     console.log('starting b');
//     console.log('ending b');
// };

// let a = function () {
//     console.log('starting at a');
//     b();
//     console.log('ending at a');

// };
// a();

// // starting at a
// // starting b
// // ending b
// // ending at a
//***********************PickPrimes***************************************** */
//isPrime is helper function to Pick Primes
// function isPrime(number) {
//     if (number < 2) {
//         return false;
//     }
//     let i = 2;
//     while (i < number) {
//         if (number % i === 0) {
//             return false;
//         }
//         i++;
//     }
//     return true;
// }
// let pickPrimes = function (nums) {
//     let primes = [];
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         if (isPrime(num)) {
//             primes.push(num);
//         }
//     }
//     return primes;
// };
// console.log(pickPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));//[ 2, 3, 5, 7 ]
//----------------------------------------------------------------------------------------------------------
//***********************Rot Left converted to using Helper Function******************************************************** */

//example: let arr = ['a', 'b', 'c', 'd', 'e'];
// //



// function rotator(array) {
//     let first = array.shift();
//     array.push(first);

// }



// let rotateLeft = function (array, num) {// function expression syntax
//     for (let i = 0; i < num; i++) {// while loop might make more sense because we are not itterating through entire array...we are just countingup to num
//         console.log(i);

//         //going to replace the next 2 lines:
//         // let el = array.shift();// remove item from front of array
//         // array.push(el);//add item to end of array...push returns length of new array... not needed for this
//         rotator(array);
//     }
//     return undefined;
// };

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateLeft(arr, 2)); // undefined
// console.log(arr); // [ 'c', 'd', 'e', 'a', 'b' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateLeft(animals, 3)); // undefined
// console.log(animals); // [ 'kangaroo', 'wombat', 'koala', 'opossum' ]


// /*
// 0
// 1
// undefined
// [ 'c', 'd', 'e', 'a', 'b' ]
// 0
// 1
// 2
// undefined
// [ 'kangaroo', 'wombat', 'koala', 'opossum' ]


//-------------Any given function should be doing as few things as possible...... if it can be broken down into helper functions than that should be done.

//Helper function should be written in the code above the function that calls it for help.


//...helper functions are like callback functions but they arefor a dedicated purpose whereas callbacks are passed in as parameters and can be used interchangably.



//****************************ForEach***************************************************************8 */
// let parks = ['Zion', 'yellowstone', 'Acadia', 'Yosemite'];
// for (let i = 0; i < parks.length; i++) {
//     let park = parks[i];
//     console.log(park);

// }


//For each represents the common for loop patern above..

// parks.forEach(function (park) {
//     //park is like park in the for loop above... it represent the current array element that our current itteration index corresponds to.
//     console.log(park);

// })
// //----------------------------------------------

// parks.forEach(function (ele, i, array) {//array is almost never used, index issometimes useful. current element is pretty much always the main thing we use
//     console.log(ele, i)

// })

/*
  - Keep in mind that you can name these arguments anything you want!

- **Caveats to Keep in Mind** : forEach can only iterate in order, if you need to reverse iterate or skip around it is better to just default to a regular for loop.
- Note: forEach cannot stop until it has iterated through every element.
- **Remember** forEach does not output any explicit return value.

---
*/
//-----CANNOT end a forEach loop .... it will itterate through every single element of the array!!!!
//******************************Rot Left with forEach***************************************************** */
let arr = [1, 2, 3, 5];
arr.forEach(function inner(param) {
    console.log(param1);

    return 15; //  this will do nothing because forEach invokes the callback ... we never call that function and are unable to acess the return vale...for each will not return anything unless you write a return statment in the callback function... in this case 'inner' often times the cb function is anonymus.

});


//you can nest for each functions.... a good problem to try that out on is 2D Sum Array....
//forEach isn't ideal for mutating an array
//on callbacks:https://www.youtube.com/watch?v=xHneyv38Jro


//**********************map********************************************** */


/*
## **Map**

**Map** : Method that creates a _new array_ populated with the results of calling a provided function on every element in the calling array.

- It is the direct solution for the classic problem of generating a new array from a function.
- When should we use map?
  - Map is good whenever we have to create a new array of the same length as the original array and we need to translate each of the elements.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

---
*/


//*********************************Filter***************************************************** */
// let parks = ['Zion', 'yellowstone', 'Acadia', 'Yosemite'];
// let yParks = [];
// for (let i = 0; i < parks.length; i++) {
//     let park = parks[i];
//     if (park[0] === 'Y') {
//         yParks.push(park);

//     }
//     console.log(yParks);
//  }
// let parks = ['Zion', 'yellowstone', 'Acadia', 'Yosemite'];
// //

// //filter can return an array of different length than the original depending on the result of the |||||(callback function's conditional test)|||||
// let selectedParks = parks.filter(function (park) {
//     return park.includes('o'); //returns true or false....includes or excludes curent element park of parks array in the new array returned from filter method.

// }));


//last vowel using filter******************************************
//convert string to array... bc filter is an array method
//go from left to right collecting the vowels
//add those vowels to vowel array
// find last element in vowel array
//return that element.


// function lastVowel(str) {
//     let srtArray = str.split('')// makes every character of string into array element.
//     let vowels = 'aeiouAEIOU';
//     console.log('individual letters in an array', strArray);
//     let vowelArray = strArray.filter(function inner(curEl, i, arr) {
//         console.log(curEl, vowels.includes(curEl));
//         //return false...loose element, return true ...keep element in new array
//         return vowels.includes(curEl);// this will eval to true or false depending on what happens
//     });
//     console.log('Should be a strArray', vowelArray);
// }

// console.log(lastVowel('bootcamp')); // 'bootcmp'
// console.log(lastVowel('better')); // 'bettr'
// console.log(lastVowel('graph')); // 'grph'
// console.log(lastVowel('thy')); // 'thy'


// //-----------------Jesse's code for same prob above-------------------
// the result array / what filter returns can be variant length
// // input
// // 1 string(immutable)
// // output
// // 1 string character(vowel letter) - case should be preserved
// // strat
// // need to convert our string to a strArray(array)
// // go from left to right in my strArray
// // collecting the vowels I see
// //	add those vowels to a vowelArray
// // find the last element in my vowelArray
// // return that element
// //
// function lastVowel(str) {
//     let strArray = str.split("");
//     // console.log("individ letters in an array", strArray);
//     let vowels = "aeiou"
//     let vowelArray = strArray.filter(function inner(el, i, arr) {
//         // console.log(el)
//         // console.log(el, vowels.includes(el)) // return a boolean
//         return vowels.includes(el.toLowerCase())
//     })
//     // console.log("should be diff as strArray", vowelArray);
//     return vowelArray[vowelArray.length - 1]
// }
// console.log(lastVowel('battery')); // 'e'
// console.log(lastVowel('TUNNEL')); // 'E'
// // console.log(lastVowel('dog')); // 'o'
// // console.log(lastVowel('conventional')); // 'a'
// // console.log(lastVowel('rhythm')); // null
