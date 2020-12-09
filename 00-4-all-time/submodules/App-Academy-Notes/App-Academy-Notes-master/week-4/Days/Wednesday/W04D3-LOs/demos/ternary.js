const fruits = ['apple', 'banana', 'grapes', 'kiwi', 'watermelon'];

const message = fruits.length > 4 ? "That's a lot of fruit!" : 'Running low!';

let ifMessage;
if (fruits.length > 4) {
    ifMessage = "that's a lot of fruit";

} else {
    ifMessage = "running low";
}

console.log(ifMessage);
console.log(message);