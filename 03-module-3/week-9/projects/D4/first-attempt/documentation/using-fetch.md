# Using Fetch

> This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.

The [Fetch API](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Fetch_API) provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global [`fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalFetch/fetch) method that provides an easy, logical way to fetch resources asynchronously across the network.

This kind of functionality was previously achieved using [`XMLHttpRequest`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/XMLHttpRequest). Fetch provides a better alternative that can be easily used by other technologies such as [`Service Workers`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/ServiceWorker_API). Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.

The `fetch` specification differs from `jQuery.ajax()` in three main ways:

*   The Promise returned from `fetch()` **won’t reject on HTTP error status** even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with `ok` status set to false), and it will only reject on network failure or if anything prevented the request from completing.
*   `fetch()` **~won't~ can receive cross-site cookies**; you ~can’t~ can establish a cross site session using fetch. ~[`Set-Cookie`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Set-Cookie "The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent, so the user agent can send it back to the server later. To send multiple cookies, multiple Set-Cookie") headers from other sites are silently ignored.~
*   `fetch` **won’t send cookies**, unless you set the _credentials_ [init option](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters). (Since [Aug 25, 2017](https://github.com/whatwg/fetch/pull/585). The spec changed the default credentials policy to `same-origin`. Firefox changed since 61.0b13.)

A basic fetch request is really simple to set up. Have a look at the following code:

    fetch('http://example.com/movies.json')
      .then(response => response.json())
      .then(data => console.log(data));
    

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a [`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response) object).

This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the [`json()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body/json) method (defined on the [`Body`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body) mixin, which is implemented by both the [`Request`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request) and [`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response) objects.)

**Note**: The Body mixin also has similar methods to extract other types of body content; see the [Body](#Body) section for more.

Fetch requests are controlled by the `connect-src` directive of [Content Security Policy](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Security/CSP/CSP_policy_directives) rather than the directive of the resources it's retrieving.

### Supplying request options

The `fetch()` method can optionally accept a second parameter, an `init` object that allows you to control a number of different settings:

See [`fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalFetch/fetch) for the full options available, and more details.

    
    async function postData(url = '', data = {}) {
      
      const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
          
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
      });
      return response.json(); 
    }
    
    postData('https://example.com/answer', { answer: 42 })
      .then(data => {
        console.log(data); 
      });
    

Note that `mode: "no-cors"` only allows a limited set of headers in the request:

*   `Accept`
*   `Accept-Language`
*   `Content-Language`
*   `Content-Type` with a value of `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`

### Sending a request with credentials included

To cause browsers to send a request with credentials included, even for a cross-origin call, add `credentials: 'include'` to the `init` object you pass to the `fetch()` method.

**Note**: `Access-Control-Allow-Origin` is prohibited from using a wildcard for requests with `credentials: 'include'`. In such cases, the exact origin must be provided; even if you are using a CORS unblocker extension, the requests will still fail.

    fetch('https://example.com', {
      credentials: 'include'
    });
    

If you only want to send credentials if the request URL is on the same origin as the calling script, add `credentials: 'same-origin'`.

    
    
    fetch('https://example.com', {
      credentials: 'same-origin'
    });
    

To instead ensure browsers don’t include credentials in the request, use `credentials: 'omit'`.

    fetch('https://example.com', {
      credentials: 'omit'
    })
    

### Uploading JSON data

Use [`fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalFetch/fetch) to POST JSON-encoded data.

    const data = { username: 'example' };
    
    fetch('https://example.com/profile', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    

### Uploading a file

Files can be uploaded using an HTML `<input type="file" />` input element, [`FormData()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/FormData/FormData) and [`fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch).

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    
    formData.append('username', 'abc123');
    formData.append('avatar', fileField.files[0]);
    
    fetch('https://example.com/profile/avatar', {
      method: 'PUT',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    

### Uploading multiple files

Files can be uploaded using an HTML `<input type="file" multiple />` input element, [`FormData()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/FormData/FormData) and [`fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalFetch/fetch).

    const formData = new FormData();
    const photos = document.querySelector('input[type="file"][multiple]');
    
    formData.append('title', 'My Vegas Vacation');
    for (let i = 0; i < photos.files.length; i++) {
      formData.append('photos', photos.files[i]);
    }
    
    fetch('https://example.com/posts', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    

### Processing a text file line by line

The chunks that are read from a response are not broken neatly at line boundaries and are Uint8Arrays, not strings. If you want to fetch a text file and process it line by line, it is up to you to handle these complications. The following example shows one way to do this by creating a line iterator (for simplicity, it assumes the text is UTF-8, and doesn't handle fetch errors).

    async function* makeTextFileLineIterator(fileURL) {
      const utf8Decoder = new TextDecoder('utf-8');
      const response = await fetch(fileURL);
      const reader = response.body.getReader();
      let { value: chunk, done: readerDone } = await reader.read();
      chunk = chunk ? utf8Decoder.decode(chunk) : '';
    
      const re = /\n|\r|\r\n/gm;
      let startIndex = 0;
      let result;
    
      for (;;) {
        let result = re.exec(chunk);
        if (!result) {
          if (readerDone) {
            break;
          }
          let remainder = chunk.substr(startIndex);
          ({ value: chunk, done: readerDone } = await reader.read());
          chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
          startIndex = re.lastIndex = 0;
          continue;
        }
        yield chunk.substring(startIndex, result.index);
        startIndex = re.lastIndex;
      }
      if (startIndex < chunk.length) {
        
        yield chunk.substr(startIndex);
      }
    }
    
    async function run() {
      for await (let line of makeTextFileLineIterator(urlOfFile)) {
        processLine(line);
      }
    }
    
    run();
    

### Checking that the fetch was successful

A [`fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalFetch/fetch) promise will reject with a [`TypeError`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) when a network error is encountered or CORS is misconfigured on the server-side, although this usually means permission issues or similar — a 404 does not constitute a network error, for example. An accurate check for a successful `fetch()` would include checking that the promise resolved, then checking that the [`Response.ok`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/ok) property has a value of true. The code would look something like this:

    fetch('flowers.jpg')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(myBlob => {
        myImage.src = URL.createObjectURL(myBlob);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
    

### Supplying your own request object

Instead of passing a path to the resource you want to request into the `fetch()` call, you can create a request object using the [`Request()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request/Request) constructor, and pass that in as a `fetch()` method argument:

    const myHeaders = new Headers();
    
    const myRequest = new Request('flowers.jpg', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    });
    
    fetch(myRequest)
      .then(response => response.blob())
      .then(myBlob => {
        myImage.src = URL.createObjectURL(myBlob);
      });
    

`Request()` accepts exactly the same parameters as the `fetch()` method. You can even pass in an existing request object to create a copy of it:

    const anotherRequest = new Request(myRequest, myInit);
    

This is pretty useful, as request and response bodies are one use only. Making a copy like this allows you to make use of the request/response again while varying the `init` options if desired. The copy must be made before the body is read, and reading the body in the copy will also mark it as read in the original request.

**Note**: There is also a [`clone()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request/clone) method that creates a copy. Both methods of creating a copy will fail if the body of the original request or response has already been read, but reading the body of a cloned response or request will not cause it to be marked as read in the original.

The [`Headers`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Headers) interface allows you to create your own headers object via the [`Headers()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Headers/Headers) constructor. A headers object is a simple multi-map of names to values:

    const content = 'Hello World';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/plain');
    myHeaders.append('Content-Length', content.length.toString());
    myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
    

The same can be achieved by passing an array of arrays or an object literal to the constructor:

    const myHeaders = new Headers({
      'Content-Type': 'text/plain',
      'Content-Length': content.length.toString(),
      'X-Custom-Header': 'ProcessThisImmediately'
    });
    

The contents can be queried and retrieved:

    console.log(myHeaders.has('Content-Type')); 
    console.log(myHeaders.has('Set-Cookie')); 
    myHeaders.set('Content-Type', 'text/html');
    myHeaders.append('X-Custom-Header', 'AnotherValue');
    
    console.log(myHeaders.get('Content-Length')); 
    console.log(myHeaders.get('X-Custom-Header')); 
    
    myHeaders.delete('X-Custom-Header');
    console.log(myHeaders.get('X-Custom-Header')); 
    

Some of these operations are only useful in [`ServiceWorkers`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/ServiceWorker_API), but they provide a much nicer API for manipulating headers.

All of the Headers methods throw a `TypeError` if a header name is used that is not a valid HTTP Header name. The mutation operations will throw a `TypeError` if there is an immutable guard (see below). Otherwise, they fail silently. For example:

    const myResponse = Response.error();
    try {
      myResponse.headers.set('Origin', 'http://mybank.com');
    } catch (e) {
      console.log('Cannot pretend to be a bank!');
    }
    

A good use case for headers is checking whether the content type is correct before you process it further. For example:

    fetch(myRequest)
      .then(response => {
         const contentType = response.headers.get('content-type');
         if (!contentType || !contentType.includes('application/json')) {
           throw new TypeError("Oops, we haven't got JSON!");
         }
         return response.json();
      })
      .then(data => {
          
      })
      .catch(error => console.error(error));
    

### Guard

Since headers can be sent in requests and received in responses, and have various limitations about what information can and should be mutable, headers objects have a guard property. This is not exposed to the Web, but it affects which mutation operations are allowed on the headers object.

Possible guard values are:

*   `none`: default.
*   `request`: guard for a headers object obtained from a request ([`Request.headers`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request/headers)).
*   `request-no-cors`: guard for a headers object obtained from a request created with [`Request.mode`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request/mode) `no-cors`.
*   `response`: guard for a Headers obtained from a response ([`Response.headers`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/headers)).
*   `immutable`: Mostly used for ServiceWorkers; renders a headers object read-only.

**Note**: You may not append or set a `request` guarded Headers’ `Content-Length` header. Similarly, inserting `Set-Cookie` into a response header is not allowed: ServiceWorkers are not allowed to set cookies via synthesized responses.

Response objects
----------------

As you have seen above, [`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response) instances are returned when `fetch()` promises are resolved.

The most common response properties you'll use are:

*   [`Response.status`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/status) — An integer (default value 200) containing the response status code.
*   [`Response.statusText`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/statusText) — A string (default value "OK"), which corresponds to the HTTP status code message.
*   [`Response.ok`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/ok) — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a [`Boolean`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Boolean).

They can also be created programmatically via JavaScript, but this is only really useful in [`ServiceWorkers`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/ServiceWorker_API), when you are providing a custom response to a received request using a [`respondWith()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/FetchEvent/respondWith) method:

    const myBody = new Blob();
    
    addEventListener('fetch', function(event) {
      
      event.respondWith(
        new Response(myBody, {
          headers: { 'Content-Type': 'text/plain' }
        })
      );
    });
    

The [`Response()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/Response) constructor takes two optional arguments — a body for the response, and an init object (similar to the one that [`Request()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request/Request) accepts.)

**Note**: The static method [`error()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/error) simply returns an error response. Similarly, [`redirect()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/redirect) returns a response resulting in a redirect to a specified URL. These are also only relevant to Service Workers.

Body
----

Both requests and responses may contain body data. A body is an instance of any of the following types:

*   [`ArrayBuffer`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/ArrayBuffer)
*   [`ArrayBufferView`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/ArrayBufferView) (Uint8Array and friends)
*   [`Blob`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Blob)/File
*   string
*   [`URLSearchParams`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/URLSearchParams)
*   [`FormData`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/FormData)

The [`Body`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body) mixin defines the following methods to extract a body (implemented by both [`Request`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request) and [`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response)). These all return a promise that is eventually resolved with the actual content.

*   [`arrayBuffer()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body/arrayBuffer)
*   [`blob()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body/blob)
*   [`json()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body/json)
*   [`text()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body/text)
*   [`formData()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body/formData)

This makes usage of non-textual data much easier than it was with XHR.

Request bodies can be set by passing body parameters:

    const form = new FormData(document.getElementById('login-form'));
    fetch('/login', {
      method: 'POST',
      body: form
    });
    

Both request and response (and by extension the `fetch()` function), will try to intelligently determine the content type. A request will also automatically set a `Content-Type` header if none is set in the dictionary.

Feature detection
-----------------

Fetch API support can be detected by checking for the existence of [`Headers`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Headers), [`Request`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request), [`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response) or [`fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalFetch/fetch) on the [`Window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window) or [`Worker`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Worker) scope. For example:

    if (window.fetch) {
      
    } else {
      
    }
    

Polyfill
--------

To use Fetch in unsupported browsers, there is a [Fetch Polyfill](https://github.com/github/fetch) available that recreates the functionality for non-supporting browsers.

Specifications
--------------

| Specification | Status | Comment |
| --- | --- | --- |
| [Fetch](https://fetch.spec.whatwg.org/ "The 'Fetch' specification") | Living Standard | Initial definition |

Browser compatibility
---------------------

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|  | Desktop | Mobile |
| --- | --- | --- |
|  | Chrome | Edge | Firefox | Internet Explorer | Opera | Safari | Android webview | Chrome for Android | Firefox for Android | Opera for Android | Safari on iOS | Samsung Internet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [`fetch`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
Experimental

 | Chrome Full support 42 | Edge Full support 14 | Firefox Full support 39

Full support 39

Full support 34

Disabled

Disabled From version 34: this feature is behind the `dom.fetch.enable` preference. To change preferences in Firefox, visit about:config.

Full support 52

Notes

Notes `fetch()` now defined on `[WindowOrWorkerGlobalScope](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope)` mixin.





 | IE No support No | Opera Full support 29

Full support 29

Full support 28

Disabled

Disabled From version 28: this feature is behind the `Experimental Web Platform Features` preference.





 | Safari Full support 10.1 | WebView Android Full support 42 | Chrome Android Full support 42 | Firefox Android Full support 39

Full support 39

Full support 34

Disabled

Disabled From version 34: this feature is behind the `dom.fetch.enable` preference. To change preferences in Firefox, visit about:config.

Full support 52

Notes

Notes `fetch()` now defined on `[WindowOrWorkerGlobalScope](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope)` mixin.





 | Opera Android Full support 29

Full support 29

Full support 28

Disabled

Disabled From version 28: this feature is behind the `Experimental Web Platform Features` preference.





 | Safari iOS Full support 10.3 | Samsung Internet Android Full support 4.0 |
| Support for blob: and data:

Experimental

 | Chrome Full support 48 | Edge Full support 79 | Firefox ? | IE No support No | Opera ? | Safari ? | WebView Android Full support 43 | Chrome Android Full support 48 | Firefox Android ? | Opera Android ? | Safari iOS ? | Samsung Internet Android Full support 5.0 |
| referrerPolicy | Chrome Full support 52 | Edge Full support 79 | Firefox Full support 52 | IE No support No | Opera Full support 39 | Safari Full support 11.1 | WebView Android Full support 52 | Chrome Android Full support 52 | Firefox Android Full support 52 | Opera Android Full support 41 | Safari iOS No support No | Samsung Internet Android Full support 6.0 |
| signal

Experimental

 | Chrome Full support 66 | Edge Full support 16 | Firefox Full support 57 | IE No support No | Opera Full support 53 | Safari Full support 11.1 | WebView Android Full support 66 | Chrome Android Full support 66 | Firefox Android Full support 57 | Opera Android Full support 47 | Safari iOS Full support 11.3 | Samsung Internet Android Full support 9.0 |
| Streaming response body

Experimental

 | Chrome Full support 43 | Edge Full support 14 | Firefox Full support Yes

Disabled

Full support Yes

Disabled

Disabled This feature is behind the `dom.streams.enabled` preference and the `javascript.options.streams` preference. To change preferences in Firefox, visit about:config.





 | IE No support No | Opera Full support 29 | Safari Full support 10.1 | WebView Android Full support 43 | Chrome Android Full support 43 | Firefox Android No support No | Opera Android No support No | Safari iOS Full support 10.3 | Samsung Internet Android Full support 4.0 |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1,000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error:Sorry, we can’t seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support 

Full support

No support 

No support

Compatibility unknown 

Compatibility unknown

Experimental. Expect behavior to change in the future.

Experimental. Expect behavior to change in the future.

See implementation notes.

See implementation notes.

User must explicitly enable this feature.

User must explicitly enable this feature.

See also
--------

*   [ServiceWorker API](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/ServiceWorker_API)
*   [HTTP access control (CORS)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/CORS)
*   [HTTP](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP)
*   [Fetch polyfill](https://github.com/github/fetch)
*   [Fetch examples on Github](https://github.com/mdn/fetch-examples/)


[Source](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)