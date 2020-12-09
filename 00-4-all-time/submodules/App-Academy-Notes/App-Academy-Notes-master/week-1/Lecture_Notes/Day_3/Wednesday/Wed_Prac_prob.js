/*
Write a function reverseString(str) that takes in a string. The function should return a new string where the order the characters is reversed.
*/



let reverseString = function (str) {//annonymus func
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        let temp = str[i];
        rev += temp;

    }
    return rev;
};

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'


//***********************Range************* */

//Write a function range(min, max) that takes in two numbers.
//The function should return an array containing all numbers from min to max inclusive.

//Define this function using function expression syntax.
//**********************Log Between Stepper Recall */

/*Write a function logBetweenStepper(min, max, step)
that takes in 3 _numbers__ as parameters.
 The function should print out numbers between min and max at step intervals.

Hint: this function only needs to print using console.log it does not need to return.
*/


//Reverse Sentence:
//Write a function reverseSentence(sentence) that takes in a sentence as an arg.
//The function should return a new sentence where the order of the words is reversed.
//Note that you should reverse the order among words, not the order among characters.!!!

//****************Reverse String*************/
// let reverseSentence = function (sentence) {
//     let words = sentence.split(' ');
//     let newWords = [];

//     for (let i = words.length - 1; i >= 0; i--) {
//         newWords.push(words[i]);
//     }

//     let newSentence = newWords.join(' ');
//     return newSentence;
// };

// console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'


/*************My Includes**************** */
//Write a function myIncludes(arr, target) that accepts an array and an target value as args.
//The function should return a boolean indicating whether the target is found in the array.
//Solve this without Array#includes or Array#indexOf.
