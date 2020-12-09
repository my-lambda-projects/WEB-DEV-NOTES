# fetch documentation

> This documents the polyfillable parts of the
WHATWG Fetch standard.
See Caveats for notable exceptions.

This documents the polyfillable parts of the [WHATWG Fetch standard](https://fetch.spec.whatwg.org/). See [Caveats](#caveats) for notable exceptions.

Usage synopsis (use the argument links to find out more):

    fetch(url, options).then(function(response) {
      
    }, function(error) {
      
    })

More comprehensive usage example:

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then(function(response) {
      response.status     
      response.statusText 
      response.headers    
      response.url        
    
      return response.text()
    }, function(error) {
      error.message 
    })

Request
-------

Synopsis: `new Request([url](#url), [options](#options))`

Request represents a HTTP request to be performed via `fetch()`. Typically a Request doesn't need to be constructed manually, as it's instantiated internally when `fetch()` is called.

### URL ([Request](#Request) or string)

The URL of the resource which is being fetched. Typically this is an absolute URL without the host component, e.g. `"/path"`. If the URL has the host of another site, the request is performed in accordance to [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

Any non-Request object will be converted to a String, making it possible to pass an instance of [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL), for example.

A request can be initialized using another instance of Request in place of the URL. In that case, the URL and other options are inherited from the provided Request object.

### Options

*   `method` (String) - HTTP request method. Default: `"GET"`
*   `body` (String, [body types](#request-body)) - HTTP request body
*   `headers` (Object, [Headers](#Headers)) - Default: `{}`
*   `credentials` (String) - Authentication credentials mode. Default: `"omit"`
    *   `"omit"` - don't include authentication credentials (e.g. cookies) in the request
    *   `"same-origin"` - include credentials in requests to the same site
    *   `"include"` - include credentials in requests to all sites

### Body types

| Class | Default Content-Type |
| --- | --- |
| String | `text/plain;charset=UTF-8` |
| [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) | `application/x-www-form-urlencoded;charset=UTF-8` |
| [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) | `multipart/form-data` |
| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) | inherited from the `blob.type` property |
| [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBuffer) |  |
| [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) |  |
| [DataView](https://developer.mozilla.org/en-US/docs/Web/API/DataView) |  |

Other data structures need to be encoded beforehand as one of the above types. For instance, `JSON.stringify(data)` can be used to serialize a data structure into a JSON string.

Note that HTTP servers often require that requests that are posted with a body also specify their type via a `Content-Type` request header.

Response
--------

Response represents a HTTP response from the server. Typically a Response is not constructed manually, but is available as argument to the resolved promise callback.

### Properties

*   `status` (number) - HTTP response code in the 100–599 range
*   `statusText` (String) - Status text as reported by the server, e.g. "Unauthorized"
*   `ok` (boolean) - True if `status` is HTTP 2xx
*   `headers` ([Headers](#Headers))
*   `url` (String)

### Body methods

Each of the methods to access the response body returns a Promise that will be resolved when the associated data type is ready.

*   `text()` - yields the response text as String
*   `json()` - yields the result of `JSON.parse(responseText)`
*   `blob()` - yields a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
*   `arrayBuffer()` - yields an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
*   `formData()` - yields [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) that can be forwarded to another request

### Other response methods

*   `clone()`
*   `Response.error()`
*   `Response.redirect()`

Synopsis: `new Headers(hash)`

Headers represents a set of request/response HTTP headers. It allows for case-insensitive lookup of header by name, as well as merging multiple values of a single header.

### Methods

*   `has(name)` (boolean)
*   `get(name)` (String)
*   `set(name, value)`
*   `append(name, value)`
*   `delete(name)`
*   `forEach(function(value, name){ ... }, [thisContext])`

Error
-----

If there is a network error or another reason why the HTTP request couldn't be fulfilled, the `fetch()` promise will be rejected with a reference to that error.

Note that the promise **won't** be rejected in case of HTTP 4xx or 5xx server responses. The promise will be resolved just as it would be for HTTP 2xx. Inspect the `response.status` number within the resolved callback to add conditional handling of server errors to your code.

    
    fetch(...).then(function(response) {
      if (response.ok) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })

Caveats
-------

The [whatwg-fetch polyfill](https://github.com/github/fetch) isn't able nor does it aim to implement the entire WHATWG Fetch standard, since some of the standard features would be non-trivial or otherwise unfeasible to implement. Notable examples include:

*   Inability to [set the redirect mode](https://github.com/github/fetch/issues/137)
*   Inability to [change the cache directive](https://github.com/github/fetch/issues/438#issuecomment-261272466)
*   Inability to [disable same-origin cookies](https://github.com/github/fetch/pull/56#issuecomment-68835992)


[Source](https://github.github.io/fetch/)