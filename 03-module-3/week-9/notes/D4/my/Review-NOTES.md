
# HYPERTEXT TRRNSFER PROTOCALL (HTTP) BASICS


Overview
- http is critical part of world wide web


Hypertext (HT)
- "content with references to other content"
- text, imaages, video, any digital content
- what makes the web the "web"
- html : hypertext markup language
- hyperlinks (links) : erferences betweeen hypertext resources
- ability to link HT is what makes interactivity possible


Transfer Protocall (TP)
- protocall: guidelines surrounding transmission of data
- defines process of exchanging data
- much more on this to come...


HTTP
- defines process of exchanging hypertext between systems
- works betweeen clients aand servers
    - client: data consumer, usually web browser
    - server: dataa provider, often where aapp is running
- typical HTTP exchange: request/response cycle
    - client sends request to server for particular resource(webpage, img, data)
    - server sends back a response containing reseource or explanation of why it failed


Properties of HTTP
1. reliable connections
     - messages passed btwn client & server sacrifice speed for trust
     - can rest assured each message will be confirmed
2. stateless transfer
     - HTTP is stateless protocall, doesnt store any info
     - each req you send acaross HTTP connection should contaian all its own context
     - only need to read single HTTP req to understaand its inteent
     - HTTP supports cookies to keep track of stateful data
3. intermediaries
     - other servers or devices that pass your request along
     - proxies: may modify req so it appears to come from different source
     - gateways: preetend to be the resource server you requested
     - tunnels: simply pass req along
     - when response is sent back, "their router" acts aas proxy, "your router" acts as a gateway
     * single server may act as any of the intermediary types, depending on need of HTTP message its transmitting




# HTTP REQUESTS


Overview
- the web is made up of computers asking each other for things
- you teell your browser which website you want to access
- your browser hands that reequeset off to a server that can get what you asked for



Structure of HTTP request
```

GET / HTTP/1.1
Host: appacademy.io
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9

```



HTTP Verbs
1. `GET`
   - used for direct requests
   - only require server to return resources, like retrieve website
   - never have a body, any data needed must be shared via the URI
2. `POST`
   - used for creating new resources on the server
   - can have body containing data server might need to complete request (username/passwrd)
3. `PUT`
   - used to update a resource on the server
   - contain whole resource you want to update
   - updating name request will contain new name and userId and email, etc
4. `PATCH`
   - similar to `PUT` but dont require whole resource to perform update
5. `DELETE`
   - destroys resources on the server


HTTP Request Structure
1. Request-line and http verbs
2. Header
3. Body


Request-line & HTTP Verbs
- first line, made up of three parts
  1. the method, indicated by an HTTP verb
  2. the URI (uniform resources indicator) that identifies what we've requested
  3. the HTTP version we expect to use (usually HTTP/1.1 OR HTTP/2)
  ex: `GET / HTTP/1.1`


Headers
- key/value pairs that come after request line
- appear on separate lines and define metadata needed to process request
- common request headers:
  * `Host`: root path for our URI, domain we'd like to request resources from (`Host: appacademy.io`)
  * `User Agent`: info about which browser request originated from (`User-Agent: Chrome/76.0.3809.132 Safari/537.36`)
  * `Referer`: defines URL you're coming from
  * `Accept`: indicates what client can accept, commin use is `Accept: application/json` to get response in json
  * `Content-*`: define details about body of request (`Content-Type: application/json` tells format were sending body data in)


Body
- used to send data that doesn't fit in header & is too complex for URI
- comes right after headers and can be formatted multiple ways
- URL encoding: common way to format form data (ex: `name=claire&age=29&iceCream=vanilla`)
- rememeber to set `Content-Type` header so server knows how to interpret body


Sending HTTP Request from command line
- mostly discuss http requests in context of web browser but mnany different http clients you can use
- `netcat` or `nc` is utility that comes with environments like macOS
  * allows us to open direct connection with URL and manually send HTTP requests
- from command line: `nc -v appacademy.io 80`




# HTTP Responses


Structure of a response
- formatted similarly to requests
- status-line (instead of request line)
- headers: provide helpful metadata about response
- response body: representation of requested resources


Status Line
- high level overview of server's intention
- HTTP status codes: 3 digit code representing servers response
  * 100-199: informational
  * 200-299: successful
  * 300-399: redirection (there has been a change)
  * 400-499: client error (issue with request)
  * 500-599: server error ("its not you its me")


Headers
- work identically to those on requests
- pieces of data server/client need to communicate
- common headers
  * `Location`: contain url client should redirect to for redirection responses
  * `Content-type`: tells client what format body is in
  * `Expires`: when response should be considered no longer valid (lets your client cache response)
  * `Set-Cookie`: sends data back to client to set  on the cookie (key/value pairs assoc. with server's domain)


Body
- assuming successful request, contains the resource youve  requested
- format of body dictated by `Content-Type` header
  * if you accidentally configure server to send `application/json` with body containing HTML, HTML wont render correctly


Using custom servers to generate responses
- web server is just a tool to generate HTTP responses




# REQUEST / RESPONSE IN THE BROWSER



letter example
- when you write letter to friend
    - put letter in envelope
    - with return address
    - with recipient address
    - postal service responsible for delivering
- when received, recipient sends letter back



1. client makes a req 
- req line contains http verb, protocal version
- headers so server has data it needs to process request
- body to transmit any additional data that is necessary



2. request transmitted 
- crosses proxies, tunnels gateways
- eventually reaches server



3. server processes request
- uses headers and body
- returns response, similar to reqest you sent
- instead of req line, uses status line
- contains status code, and reason phrase
    - tells client result of req
- contains headers so client can process resp
- any resources requested in body 



HTTP is stateless
- single req returns single res
- see multiple req
    - every webpage is dependent on other resources
    - when page is loaded by browser, browser sends req to fill requirements
    - img, script, styles, etc. are separate http req




# BUILDING SIMPLE SERVER


other frameworks use node http under the hood







# ASYNC / SYNC REVIEW

synchronous
- execution of additional JS code must wait until current command completes (blocking)
- there is an inherent order 


asynchronous
- can continue to execute another command even if current hasnt completed (non blocking)
- may not be guarenteed order 
- ex: fetching from an api, querying database, settimeout, setinterval


JS is single threaded
- handles new events only after current command has completed
- at any instance in program, only one command is executing


Call Stack
- structure used to track current function queues
    - tracks current task in progress
- where JS code is pushed and executed one by one 
- if statement is async, code is forwarded to message queue


Message Queue
- structure used to track handling of events (messages)
    - "waiting line for events" 
    - new items added to back of line (enqueue)
    - items removed from front of line (dequeue)
- add message to queue when event occurs 
    - ex: when setimeout invokes callback
- begin processing events when call stack is empty
- added one by one to callstack


Event Loop
- model of execution JS uses
- consists of call stack and message queue
- continuously adds messages from message queue to stack once stack is empty



asynchronous non-blocking Input/Output model
- JS uses callback mechanism to prevent blocking of main thread on I/O operations
- async operations specify a callback 
    - cb is func to be executed when result of async operation is ready
- callback added to message queue
    - processed when stack is empty 


"JavaScript Callback Hell"
- when result of cb makes another async call, we must nest callbacks
- must also handle errors for each I/O opertaion
- nested error handling and callbacks makes code hard to read

```js

function grindTheBeans(nextTask) {
  setTimeout(() => {
    console.log('done grinding the coffee beans');
    nextTask();
  }, 1000)
}

function heatTheWater(nextTask) {
  setTimeout(() => {
    console.log('done heating the water');
    nextTask();
  }, 500)
}

function addBeansToWater(nextTask) {
  setTimeout(() => {
    console.log('done adding beans to water');
    nextTask();
  }, 1000)
}

// callback craziness

function makeCoffee() {
    grindTheBeans(() => {
        heatTheWater(() => {
            addBeansToWater(() => {
                console.log('coffee is ready, enjoy')
            })
        })
    })
}

makeCoffee()

```


# PROMISES 

Overview 
- introduced in 2015 to encourage writing async code, in a way that appears synch
- issue with async code is it can be hard to figure out when everything is happening



The Problem
- issue with async code is there is no guareenteed order
- what if we want one async task to start only when another async task has completed?


The Callback Solution
- could use callbacks to solve the issue
- pass each step to previous step as a callback
- allows us to specify order asyc funcs are invoked
- issue: nested callbacks become difficult to read


The Promise Solution
- promise: object that may produce a single value some time in the future, either: 
    - resolved value (like reading a file or getting JSON from a Web site) 
    - reason that it's not resolved (i.e file doesn't exist or the Web site is down)
- can attach callbacks to handle the fulfilled value or the reason for rejection




Promises
- receives callback parameter that accepts two callbacks as arguments:
    1. resolve: invoked when async operaataion waas successful
    2. reject: called whenever an error has occurred
- promises are eager:
    - starts executing code inside as soon as the promise constructor is invoked

```js

let promise = new Promise((resolve, reject) => {
    // some async code would go here
    resolve();
})

```



Promises have 3 states
1. Pending: The Promise obj has not been resolved yet
2. Fulfilled: Whatever operation the Promise represented succeeded and your success handler will get called
3. Rejected: Whatever operation the Promise represented failed and your error handler will get called

Promise objects have the following methods available on them:
1. `then(successHandler, errorHandler)`
2. `catch(errorHandler)`
- ways to handle promise when it leaves pending state
- handle the state change from pending to either fulfilled or rejected

Success Handler: function that has one parameter, the value that a fulfilled Promise has
Error Handler: function that has one parameter, the reason that the Promise failed



```js
const { readFile } = require("fs");

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        // third argument is callback function
        // cb is invoked when file has been read 
        readFile(path, 'utf8', (err, content) => {
            if (err) {
                // if error occurs, promise is rejected
                reject(err)
            } else {
                // if no error, promise resolves with content as value
                resolve(content);
            }
        })
    })
}

// readFilePromise returns a promise so can chain .then
readFilePromise('manifest.txt')
    // if promise is fulfilled, code in .then is executed
    .then(manifest => {
        const fileList = manifest.split('\n');
        console.log('Reading', fileList.length, 'files');
    });

```

above code is okay but still difficult to read...



# Chaining `then`s


- Each Promise has a then method that handles what happens when the Promise transitions out of the pending state

- Each then method returns a Promise that transitions out of its pending state when the then that created it completes

- ability to break apart the two lines of the success handler in the previous example to two one-line functions that do the same thing with less code



```js
// Get a Promise that fulfills when the file is read
// with the value of the content of the file.
const filePromise = readFilePromise("manifest.txt");

// Register a success handler that takes the fulfilled
// value of the filePromise in the parameter named "manifest",
// which is the content of the file, split it on newline
// characters, and return a Promise whose fulfilled value is
// list of lines.
const fileListPromise = filePromise.then(manifest => manifest.split("\n"));

// Register a success handler to the fileListPromise that
// receives the fulfilled value in the "fileList" parameter
// and returns a Promise whose fulfilled value is the length 
// of the fileList array.
const lengthPromise = fileListPromise.then(fileList => fileList.length);

// Register a success handler to the lengthPromise that
// receives the fulfilled value in the "numberOfFiles" parameter
// and uses it to print the number of files to be read.
lengthPromise.then(numberOfFiles =>
  console.log("Reading", numberOfFiles, "files")
);


```

What is happening?
- Each call to then creates a new Promise object
- Each promise resolves to value of output returned from previous success handler



# Handling failure with `then` - Incorrectly

```js
readFilePromise("manifest.txt")
  .then(
        // success handler
        manifest => manifest.split("\n"),
        // error handler
    reason => console.err("Badness happened", reason)
  )
  .then(fileList => fileList.length)
    .then(numberOfFiles => console.log("Reading", numberOfFiles, "files"));
    
```


if error occurs:
1. first Promise object goes into rejected state
2. err reason gets passed to the first `then`
3. err is printed
4. second promise is fulfilled b/c err handler completes w/o any issues
5. promise returned by first then does not get rejected
6. third promise resolves with value returned by `console.err` which is undefined
7. second then relies on obj with length prop => undefined doesnt so exception raised
8. causes promise returned by second then to be rejected
9. b/c promise is rejected, third then will try to run error handler but there isn't one
10. in browser nothing happens, in node `UnhandledPromiseRejectionWarning`


# Handling failure with `then` - Correctly

```js
readFilePromise("manifest.txt")
  .then(manifest => manifest.split("\n"))
  .then(fileList => fileList.length)
  .then(
    numberOfFiles => console.log("Reading", numberOfFiles, "files"),
    reason => console.err("Badness happened", reason)
  );
```

if error occurs:
1. First then: I do not have an error handler. I will pass the error on and not run the success handler.
2. Second then: I do not have an error handler. I will pass the error on and not run the success handler.
3. Third then: I have an error handler and will run it.

code looks better but besides double handler code when passing in two funcs



# Handling failure with `catch`

solution to design issue
- `then` can  handle success and failure
- successHandler is called with value of the operation of the Promise when Promise is fulfilled
- errorHandler is called when error condition occurs, passing along the reason
- if Promise is rejected and no error handler exists, then that `then` is skipped
- if errorHandler is called and does not raise an exception, next Promise is fulfilled and successHandler called



```js
readFilePromise("manifest.txt")
  .then(manifest => manifest.split("\n"))
  .then(fileList => fileList.length)
  .then(numberOfFiles => console.log("Reading", numberOfFiles, "files"))
  .catch(reason => console.err("Badness happened", reason));
```


catch acts like an errorHandler
- if it doesnt throw an exception, then it returns a Promise in fullfilled state
with whatever return value is




# Using `Promise.all` for many future values


Imagine we have 3 files we want to read with `readFilePromise` method
- want to wait until all three are done
- want them to read files simultaniously
- how to manage 3 promises at once?



```js
const values = [
  readFilePromise("file-boop.txt"), // this is a Promise object: pending
  readFilePromise("file-doop.txt"), // this is a Promise object: pending
  readFilePromise("file-goop.txt"), // this is a Promise object: pending
];

const superPromise = Promise.all(values);
```



superPromise is a Promise object in pending state
- inside is an array of Promise objects in pending statese
- if any promise transitioned to rejeceted, then superPromise is rejected immediately
- superPromisee has same reason as inner Promise failed with
- when all 3 Promise objects transition are fulfilled, so will superPromise
- value will be array of all the resolved values of original array



```js
superPromise
  .then(values => console.log(values))
  .catch(reason => console.error(reason));
```



if function successfully reads file
- values passed to `then` come from values inside superPromise
- values = content of file-boop.txt, file-doop.txt, file-goop.txt


if something goes wrong
- `catch` is called with the error reason from Promise obj that first failed


`Promise.all`
- accepts array of values
- returns a new Promise obj in pending state
- converts all non-Promise values into Promise obj that are immed. fulfilled
- if any Promise transitions to rejected, superPromise is rejected with same reason
- if all inner promises fullfilled, superpromise transitions to fulfilled
- value is array populatedk in order, of resolved values of original array





# Flattening Promises


# Error Handling

problems with below code
- an error originating in save() will be caught by handleError
- an error originating in handleSuccess() will be swallowed
- promise returned from .then() will be rejected

```js
  save().then(
    handleSuccess,
    handleError
  );
```


below code is better because
- catch will handle rejections from either save() or handleSucces()


```js
  save()
    .then(handleSuccess)
    .catch(handleError)
  ;
```

what if you want errors to be handled differently?

```js
  save()
    .then(
      handleSuccess,
      handleSaveError
    )
    .catch(handleSuccessError)
  ;
```

best practice to always have a .catch()



# MODERN PROMISES WITH ASYNC/AWAIT


Overview
- designed to allow JS devs to write true synchronous code



```js

// USING .THEN
// - not very clean

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("happy dog");
    }, 1000);
  });
}

function doChores() {
  console.log("before walking the dog");
    walkTheDog()
        .then((res) => {
            console.log(res);
            console.log("after walking the dog");
      });
}

doChores();



```


Function Declaration with `async`
- creates a function that returns an implicit promise containing the result
- allows us to utilize `await` keyword inside


Awaiting Promises with `await`
- used to wait for promise to be fulfilled or rejected
- rest of code in `async` func waits until promise is fulfilled to execute
- can only use inside an `async` function


```js

// USING ASYNC/AWAIT


function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("happy dog");
    }, 1000);
  });
}

async function doChores() {
    console.log("before walking the dog");
    const res = await walkTheDog();
    console.log(res);
    console.log("after walking the dog");
    return res.toUpperCase();
}


// async funcs return a promise
// return value is value promise fulfills with
// passed along to following .thens
doChores()
    .then(res => console.log(res))


```




Error Handling
- `async`/`await` results in synchronous execution
- can use normal `try...catch` block to handle errors if promise rejected


```js

function action() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('uh-oh'); // rejected
    }, 3000);
  });
}

async function handlePromise() {
  try {
    const res = await action();
    console.log('resolved with', res);
  } catch (err) {
    console.log('rejected because of', err);
  }
}

handlePromise();



```


