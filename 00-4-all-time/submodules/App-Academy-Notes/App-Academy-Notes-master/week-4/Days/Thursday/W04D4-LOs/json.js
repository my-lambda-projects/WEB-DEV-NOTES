/* 
This file demonstrates the basic functionality of serializing and deserializing
content with JSON.stringify() and JSON.parse()
Serializing will turn an argument into a JSON-valid string
Deserializing will convert a JSON-valid string into the corresponding data (string, number, object, etc.)
*/

let str = 'hello';
let arr = [ 'hey', 'hi' ];

console.log('typeof str:', typeof str); // string
console.log('str:', str); // 'hello' (when logging a string, node will drop the quotes, so we'll just see the content of the string in the terminal)
console.log('typeof arr:', typeof arr); // object
console.log('arr:', arr); // ['hey', 'hi']

let serializedStr = JSON.stringify(str);
let serializedArr = JSON.stringify(arr);

// Serializing converts everything to strings.
// Elements that were already strings have quotes escaped around them.
console.log('\n');
console.log('typeof serializedStr:', typeof serializedStr); // string
console.log('serializedStr:', serializedStr); // "\"hello\"" (quotes in the terminal now because they are being escaped)?
console.log('typeof serializedArr:', typeof serializedArr); // string
console.log('serializedArr:', serializedArr); // "[\"hey\",\"hi\"]" (quotes are being escaped in the terminal)

let deserializedStr = JSON.parse(serializedStr);
let deserializedArr = JSON.parse(serializedArr);

// Deserializing will give us the exact same output as our original values.
// It reverses the process of serializing.
console.log('\n');
console.log('typeof deserializedStr:', typeof deserializedStr); // string
console.log('deserializedStr:', deserializedStr); // 'hello'
console.log('typeof deserializedArr:', typeof deserializedArr); // object
console.log('deserializedArr:', deserializedArr); // ['hey', 'hi']
