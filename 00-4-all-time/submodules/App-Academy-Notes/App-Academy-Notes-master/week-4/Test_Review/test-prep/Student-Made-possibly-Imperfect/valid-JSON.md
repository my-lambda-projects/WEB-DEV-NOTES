# JSON Syntax Rules

_JSON syntax is derived from JavaScript object notation syntax:_

* Data is in name/value pairs
* Data is separated by commas
* Curly braces hold objects
* Square brackets hold arrays
* JSON Data - A Name and a Value
* JSON data is written as name/value pairs.

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:  **"name":"John"**

## **JSON names require double quotes. JavaScript names don't.**

* ### JSON - Evaluates to JavaScript Objects
* The JSON format is almost identical to JavaScript objects.

**In JSON, keys must be strings, written with double quotes:**

-----------------------------------------------------------------------------------------
JSON:
 <span style="color:blue">_{ "name":"John" }_</span>.


### In JavaScript, keys can be strings, numbers, or identifier names:

JavaScript

 <span style="color:blue">_{ name:"John" }_</span>

-----------------------------------------------------------------------------------------

## JSON Values
- In JSON, values must be one of the following data types:

* a string
* a number
* an object (JSON object)
* an array
* a boolean
* null


<ins>**In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:**
</ins>

* a function
* a date
* undefined

<ins>_**In JSON, string values must be written with double quotes:**_</ins>

<ins></ins>


**JSON**
_{ "name":"John" }_
In JavaScript, you can write string values with double or single quotes:

**JavaScript**
_{ name:'John' }_

- JSON Uses JavaScript Syntax
- Because JSON syntax is derived from JavaScript object notation, very little extra software is needed to work with JSON within JavaScript.

With JavaScript you can create an object and assign data to it, like this:

Example
let person = { name: "John", age: 31, city: "New York" }; 

**JavaScript Arrays as JSON**
The same way JavaScript objects can be used as JSON, JavaScript arrays can also be used as JSON.



**JSON values cannot be one of the following data types:**

* a function
* a date
* undefined
* JSON Strings
* Strings in JSON must be written in double quotes.

Example
<span style="color:blue">_{ "name":"John" }_</span>

**JSON Numbers**


Example

<span style="color:blue">_{ "age":30 }_</span>.


**JSON Objects**
_* Values in JSON can be objects._

Example
 <span style="color:blue">_{"employee":{ "name":"John", "age":30, "city":"New York" }}_</span>.



**JSON Arrays**
Values in JSON can be arrays.

Example
 <span style="color:blue">_{"employees":[ "John", "Anna", "Peter" ]}_</span>



**JSON Booleans**
Values in JSON can be true/false.

Example
 <span style="color:blue">_{ "sale":true }_</span>.




**JSON null**
Values in JSON can be null.

Example
 <span style="color:blue">_{ "middlename":null }_</span>.



**A common use of JSON is to exchange data to/from a web server.**

When receiving data from a web server, the data is always a string.
 # Parse the data with <span style="color:red">*JSON.parse()to convert to a JavaScript object*.</span>.


**Example - Parsing JSON**
Imagine we received this text from a web server:

_'{ "name":"John", "age":30, "city":"New York"}'_
**Use the JavaScript function JSON.parse() to convert text into a JavaScript object:**

**let obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');**

<span style="color:red">*Make sure the text is written in JSON format, or else you will get a syntax error.*.</span>.


**Array as JSON**
_When using the JSON.parse() on a JSON derived from an array, 
the method will return a JavaScript array, instead of a JavaScript object._

- A common use of JSON is to exchange data to/from a web server.

- When sending data to a web server, the data has to be a string.

# *Convert a <span style="color:red">JavaScript object into a string with JSON.stringify().*</span>

**Stringify a JavaScript Object**
Imagine we have this object in JavaScript:


 <span style="color:green">_let obj = { name: "John", age: 30, city: "New York" };_</span>.

**Use the JavaScript function JSON.stringify() to convert it into a string.**

 <span style="color:orange">_let myJSON = JSON.stringify(obj);_</span>.

* The result will be a string following the JSON notation.

* myJSON is now a string, and ready to be sent to a server:

Example
 <span style="color:lime">let obj = { name: "John", age: 30, city: "New York" }; 
let myJSON = JSON.stringify(obj); 
document.getElementById("demo").innerHTML = myJSON; </span>.



**Stringify a JavaScript Array**
_It is also possible to stringify JavaScript arrays:_

Imagine we have this array in JavaScript:

 <span style="color:blue">let arr = [ "John", "Peter", "Sally", "Jane" ]; </span>.

**Use the JavaScript function JSON.stringify() to convert it into a string.**

 <span style="color:blue">let myJSON = JSON.stringify(arr); </span>.

* The result will be a string following the JSON notation.

* myJSON is now a string, and ready to be sent to a server:

**Object Syntax**
Example
 <span style="color:Purple">{ "name":"John", "age":30, "car":null }</span>.

* **JSON objects are surrounded by curly braces {}.**
* **JSON objects are written in key/value pairs.**
* **Keys must be strings, and values must be a valid JSON data type (string, number, object, array, boolean or null).**
* **Keys and values are separated by a colon.**
* **Each key/value pair is separated by a comma.**


**Arrays as JSON Objects**
Example
 <span style="color:blue">[ "Ford", "BMW", "Fiat" ]</span>.

Arrays in JSON are almost the same as arrays in JavaScript.

_In JSON, array values must be of type string, number, object, array, boolean or null._
_In JavaScript, array values can be all of the above,_ 
_plus any other valid JavaScript expression, including functions, dates, and undefined._


**Arrays in JSON Objects**
Arrays can be values of an object property:

Example
 <span style="color:blue">{"name":"John", "age":30, "cars":[ "Ford", "BMW", "Fiat" ]}</span>.

