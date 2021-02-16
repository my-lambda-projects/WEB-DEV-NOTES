# Week 6 Learning Objectives

## HTTP
### The objective of this lesson is for you to get comfortable with the main concepts of HTTP.
- HTTP (Hypertext Transfer Protocol) is the underlying protocol used by the World Wide Web.
    - hypertext: content with references to other content
    - transfer protocol: defines the process of exchanging data
    - HTTP works like a series of distinct questions and answers between clients and servers
        - client requests a resource (webpage, image, application data)
        - server responds with that resource or an explanation of why request failed
        - HTTP is stateless (doesn't store information), but supports cookies (which get sent along with requests)
    ![from: https://open.appacademy.io/](./http-exchange.png)
    - requests may pass through various intermediaries (other servers and devices), e.g. proxies, gateways, tunnels
    ![from: https://open.appacademy.io/](./http-proxy-tunnel-gateway.png)

### identify common HTTP verbs and status codes
- verbs: GET, PUT, PATCH, POST, DELETE
- status codes: (200, 302, 400, 401, 402, 403, 404, 500)
### match the header fields of HTTP with a bank of definitions.
- headers are key/value pairs that define metadata needed to process the request
- request headers:
    - `Host`: root path for uniform resource indicator (typically the domain)
    - `User-Agent`: which browser the request originated from
    - `Referer`: the URL you're coming from (when applicable)
    - `Accept`: indicates what the client can recieve (e.g. setting it to `application/json` to get aresponse in JSON format instead of HTML)
    - `Content-*` content headers define details about the body of the request (only included with requests that have bodies)
- response headers:
    - `Location`: URL the client should redirect to
    - `Content-Type`: format of the body
    - `Expires`: when the response is no longer valid
    - `Content-Disposition`: how to display the response
    - `Set-Cookie`: sends data back to client to set on the cookie
### match HTTP verbs (GET, PUT, PATCH, POST, DELETE) to their common uses.
- `GET`: direct requests (no body)
- `POST`: creating new resources on the server (e.g. form submission)
- `PUT`: updating a resource on the server (contains whole resource to update)
- `PATCH`: update a resource, but contains only the information to update, not the whole resource
- `DELETE`: destroy resources on the server
### match common HTTP status codes (200, 302, 400, 401, 402, 403, 404, 500) to their meanings.
- status codes are a numeric representation of the server's response
- `100-199`: Informational
- `200-299`: Successful
    - `200 OK`: request received and fulfilled (comes with a `body` containing the requested resource)
    - `201 Created`: request received and new record created (e.g. in response to `POST` request)
- `300-399`: Redirection
    - `301 Moved Permanently`
    - `302 Found`: (may indicate a permanent move where old domain is still valid)
        - commonly used for the transition from HTTP to HTTPS
- `400-499`: Client Error
    - `400 Bad Request`: when request is malformed
    - `401 Unauthorized`: client isn't logged in or necessary credentials weren't accepted
    - `403 Forbidden`: client doesn't have correct permissions
    - `404 Not Found`: resource does not exist
- `500-599`: Server Error
    - `500 Internal Server Error` the request was received, but there was a failure to process it (e.g. server-side bug)
    - `504 Gateway Timeout
### send a simple HTTP request to `google.com`
- use `netcat` to open a direct connection with a URL and manually send HTTP requests
```
nc -v google.com 80
GET / HTTP/1.1
Host: google.com
```
### write a very simple HTTP server using ‘http’ in node with paths that will result in the common HTTP status codes.
- require `http` and use `http.createServer()` to create the server
    - pass `createServer` one parameter: a function that will listen for requests and can send responses
        - request listener takes two parameters, request and response
        - use `response.writeHead(<status-code>, {header: value})` to set header fields (e.g. `res.writeHead(200, { 'Content-Type': 'text/plain' }`))
        - use `response.write()` to add body of response as string
        - depending on different properties of the request (e.g. `request.url` or `request.method`), you may want the response to be different
        - `response.end()` must be called on each response once the message is complete
    - use `.listen()` method on a server to tell it where to listen for requests. first parameter is the port, second optional parameter is a function
```javascript
const http = require('http');

http.createServer((request, response) => {
    if (request.url === '/200') {
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.write('<h1>Really great request. Thanks for requesting!!!</h1>')
        response.end();
    } else {
        response.writeHead(404);
        response.end();
    }
}).listen(3000, () => console.log("Listening on port 3000"));
)

```

## Promises Lesson Learning Objectives I

### Instantiate a `Promise` object
- a Promise is basically a commitment: it will resolve to a value or an error in the future
- Promise object takes one parameter: a callback that takes two parameters: a resolve and a reject
    - resolve and reject are both callbacks
- Promises have three states, pending, or rejected
```javascript
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("the promise has fulfilled");
        // reject('the promise is rejected')
    }, 1000)
})
// if i try to console log the Promise here, it will just be pending

// `then` is an instance method on promises
// it lets you specify callback that will run after the promise has resolved,
// with the value that it resolves with
// then takes two args, first callback handles successful resolution ()
// second handles errors ()
myPromise.then(
    (result) => {
        console.log('resolved ',result); // prints "the promise has fulfilled"
    }, //
    (reason) => {
        console.log('rejected ', reason);
    });

// alternate syntax, use `catch` after the then (or even a string of `then`s)
// so that you don't have to use both arguments inside then: makes code more
// legible (`catch` is also a method on a promise)
myPromise
    .then((result) => result.length)
    .then((result) => result * 2)
    .catch((reason) => console.log('rejected', reason));
// thens are actually promises, too! you can chain them, with the result
// returned from one serving as the input for the next. you only need one
// `catch` at the end
```
### Use `Promises` to write more maintainable asynchronous code
- promises (and chaining them using `then`) will make code more legible
    - method chaining allows you to keep a much more legible indentation
- if you return a Promise from a success or error handler, the next handler isn't called until that Promise completes.
### Use the `fetch` API to make `Promise`-based API calls
- fetch takes 2 parameters: url and an object with options for the request
- returns a promise
```javascript
const fetch = require('node-fetch');

const MOVIE_API_KEY = "some-api-key";

const url = `https://omdbapi.com/?apikey=${MOVE_API_KEY}&t=fight+club`

fetch(url)
    .then(res => res.json())
    .then(json => console.log(json.Actors))
    .catch(reason => console.log('rejected because', reason))
```

## Promises Lesson Learning Objectives II

### Use `async`/`await` with promise-based functions to write asynchronous code that behaves synchronously.
- a function marked with the `async` keyword will return a promise
- use the `await` keyword within an `async` function to use the resolved value of the promise
    - `await` can only be used inside an `async` function
- errors can be handled with regular try/catch blocks

```javascript
// e.g. the following promise-style code....
function wrapper() {
  promise1
    .then(res1 => {
      console.log(res1);
      return promise2;
    })
    .then(res2 => {
      console.log(res2);
      return promise3;
    })
    .then(res3 => {
      console.log(res3);
    });
}
// ... can be refactored to this:
async function wrapper() {
  console.log(await promise1);
  console.log(await promise2);
  console.log(await promise3);
  console.log(await promise4);
}
```


## HTML Learning Objectives
### The objective of this lesson is for you to know how to effectively use HTML5 to build semantically and structurally correct Web pages.
HTML is the language that renders the cross-platform human-computer interfaces that made the World Wide Web accessible by the world! You'll be able to create structurally and semantically valid HTML5 pages using the following elements:
- html
- head
- title
- link
- script
- The six header tags
- p
- article
- section
- main
- nav
- header
- footer
- Itemized list tags
    - ul
    - ol
    - li
    - a
- img
- Tabular-data tags
    - table
    - thead
    - tbody
    - tfoot
    - tr
    - th
    - td

## Testing
### Explain the "red-green-refactor" loop of test-driven development.
- test driven development means writing the test first—so you have to think about what you want your code to do and what it would mean for the code to be successful before you start writing it.
- red phase: plan what code should do when successful and write the test to check that
    - when you run the test it fails (cause the code isn't written yet—you don't want false positives), so the message is <span style="color:red">red</span>
- green phase: implement code to make the test pass
    - when you run tests and they pass, the message is <span style="color:green">green</span>
- refactor phase: continue improving code: as long as tests continue to pass, you can be sure that your changes don't break your code or any of your collaborators
### Identify the definitions of SyntaxError, ReferenceError, and TypeError
- `SyntaxError` represents an error in the syntax of the code
- `ReferenceError` represents an error thrown when an invalid reference is made (the variable doesn't exist yet)
- `TypeError` represents an error when a variable or parameter is not of a valid type
### Create, modify, and get to pass a suite of Mocha tests
- mocha is a test framework, not an assertion library. it works with multiple assertion libraries
    - test frameworks: run tests and present results
    - assertion libraries: used to actually write tests
        - node has a built in assertion library called `Assert`
        - `Chai` is another assertion library
            - the chainable functions available will often read like English.
- file structure should include a `problems` directory and a `test` directory that both live in same project directory
- import the `assert` module and the
- use `describe`, `context`, and `it` blocks
    - `describe`
        - `describe` is an organizational function. takes two parameters: descriptive string and a callback
        - the callback passed to describe is where we insert the actual tests
    - `it`
        - it goes inside the callback passed to `describe`
        - accepts a descriptive string and a callback to set up our test
    - `context`
        - an alias for the `describe` function
        - denotes that we are setting up the context for a particular set of tests
```javascript
const assert = require("assert");
const reverseString = require("../problems/reverse-string.js");


describe("reverseString()", function() {
  context("given a string argument", function() {
    it("should reverse the given string", function() {
      let test = reverseString("hello");
      let result = "olleh";

      assert.strictEqual(test, result);
    });

    it("should reverse the given string and output the same capitalization", function() {
      let test = reverseString("Apple");
      let result = "elppA";
      // assert.strictEqual compares return value of function
      assert.strictEqual(test, result);
    });
  });

  context("given an argument that is not a string", function() {
      it("should throw a TypeError when given an argument that is not a string", function () {
          // assert.throws accepts a function as the first argument,
          // then the error that should be thrown as the second argument
          assert.throws(() => {reverseString(3)}, TypeError);
      })
  });
});
```
### Use Chai to structure your tests using behavior-driven development principles.
- to set up chai and chai spies
```javascript
// first npm install chai and chai-spies
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
```
### Use the pre- and post-test hooks provided by Mocha
- `Mocha Hooks` are a way to set up before running the individual tests
    - `before` happens once before all tests
    - `beforeEach` happens before each test
    - `after` happens once at the end
    - `afterEach` happens after each test
