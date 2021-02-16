

//* string literal to json string
/*
'this is "text"'             <====>              "this is \"text\""

! The new lines are replaced with "\n".
She woke him up with
her Ramones ringtone "I Want   <====>  She woke him up with\nher Ramones ringtone \"I Want\nto be Sedated\"
to be Sedated"


[1, 2, 3]                    <====>         "[1, 2, 3]"


{ person: true, name: "Roberta" }          <====>           "{ \"person\": true, \"name\": \"Roberta\" }"

 */

/*
In modern JavaScript interpreters, there is a JSON object that has two methods on it that allows you to convert JSON-formatted strings into JavaScript objects and JavaScript object into JSON-formatted strings. They are:

JSON.stringify(value) will turn the value passed into it into a string.
JSON.parse(str) will turn a JSON-formatted string into a JavaScript object.
*/
const array = [1, 'hello, "world"', 3.14, { id: 17 }];
console.log(JSON.stringify(array)); //-         [1,"hello, \"world\"",3.14,{"id":17}]


const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
console.log(JSON.parse(str));//[ 1, 'hello, "world"', 3.14, { id: 17 } ]



/*
!Parse some JSON
In the code sample, replace the five "YOUR VALUE HERE"s with JavaScript literals,
that should result in using JSON.parse on the corresponding string in the json key.
*/
//These each should print true.
// report({ json: "null", value: "YOUR VALUE HERE" });
// report({ json: "false", value: "YOUR VALUE HERE" });
// report({ json: "[1, 2]", value: "YOUR VALUE HERE" });
// report({ json: "{\"key\": 9}", value: "YOUR VALUE HERE" });
// report({ json: "3.7", value: "YOUR VALUE HERE" });
// 
// function report(o) {
    // console.log(compare(o));
// }
// 
// function compare({ value, json }) {
    // const o = JSON.parse(json);
    // if (Array.isArray(o)) {
        // if (o.length !== value.length) return false;
        // for (let i = 0; i < o.length; i += 1) {
            // if (o[i] !== value[i]) return false;
        // }
        // return true;
    // }
    // if (o instanceof Object) {
        // const keys = Object.keys(o);
        // for (let key of keys) {
            // if (o[key] !== value[key]) {
                // return false;
            // }
        // }
        // return true;
    // }
    // return value === o;
// }
// 
//! ANSWER:
//These each should print true.
// report({ json: "null",         value: null     });
// report({ json: "false",        value: false    });
// report({ json: "[1, 2]",       value: [1, 2]   });
// report({ json: "{\"key\": 9}", value: {key: 9} });
// report({ json: "3.7",          value: 3.7      });
// 
// function report(o) {
//   console.log(compare(o));
// }
// 
// function compare({value, json}) {
//   const o = JSON.parse(json);
//   if (Array.isArray(o)) {
    // if (o.length !== value.length) return false;
    // for (let i = 0; i < o.length; i += 1) {
    //   if (o[i] !== value[i]) return false;
    // }
    // return true;
//   }
//   if (o instanceof Object) {
    // const keys = Object.keys(o);
    // for (let key of keys) {
    //   if (o[key] !== value[key]) {
        // return false;
    //   }
    // }
    // return true;
//   }
//   return value === o;
// }
// 
