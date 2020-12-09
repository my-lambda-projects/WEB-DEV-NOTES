# Fetch API

> The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used [`XMLHttpRequest`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/XMLHttpRequest), but the new API provides a more powerful and flexible feature set.

Concepts and usage
------------------

Fetch provides a generic definition of [`Request`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request) and [`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response) objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).

It also defines related concepts such as CORS and the HTTP Origin header semantics, supplanting their separate definitions elsewhere.

For making a request and fetching a resource, use the [`WindowOrWorkerGlobalScope.fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) method. It is implemented in multiple interfaces, specifically [`Window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window) and [`WorkerGlobalScope`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WorkerGlobalScope). This makes it available in pretty much any context you might want to fetch resources in.

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a [`Promise`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Promise) that resolves to the [`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response) to that request, whether it is successful or not. You can also optionally pass in an `init` options object as the second argument (see [`Request`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request)).

Once a [`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response) is retrieved, there are a number of methods available to define what the body content is and how it should be handled (see [`Body`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body)).

You can create a request and response directly using the [`Request()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request/Request) and [`Response()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response/Response) constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, [`FetchEvent.respondWith()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/FetchEvent/respondWith) from service workers).

### Differences from jQuery

The `fetch` specification differs from `jQuery.ajax()` in three main ways:

*   The Promise returned from `fetch()` **won’t reject on HTTP error status** even if the response is an HTTP `404` or `500`. Instead, it will resolve normally (with `ok` status set to `false`), and it will only reject on network failure or if anything prevented the request from completing.
*   `fetch()` **~won't~ can receive cross-site cookies;** you ~can’t~ can establish a cross site session using fetch. ~`[Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)` headers from other sites are silently ignored.~
*   `fetch()` **won’t send cookies**, unless you set `credentials: 'same-origin'`.
    *   In [August 2017](https://github.com/whatwg/fetch/pull/585), the spec changed the default credentials policy to `'same-origin'`. The following browsers shipped and outdated native fetch, and were updated in these versions:
        *   Firefox version 61.0b13.
        *   Safari version 12.
        *   Chrome version 68.
    *   If you are targetting older versions of these browsers, be sure to include `credentials: 'same-origin'` [init option](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) on all api requests that may be affected by cookies/user login state.

### Aborting a fetch

Browsers have started to add experimental support for the [`AbortController`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/AbortController) and [`AbortSignal`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/AbortSignal) interfaces (aka The Abort API), which allow operations like Fetch and XHR to be aborted if they have not already completed. See the interface pages for more details.

Fetch Interfaces
----------------

[`WindowOrWorkerGlobalScope.fetch()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

The `fetch()` method used to fetch a resource.

[`Headers`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Headers)

Represents response/request headers, allowing you to query them and take different actions depending on the results.

[`Request`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Request)

Represents a resource request.

[`Response`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Response)

Represents the response to a request.

Fetch mixin
-----------

[`Body`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Body)

Provides methods relating to the body of the response/request, allowing you to declare what its content type is and how it should be handled.

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

*   [Using Fetch](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Fetch_API/Using_Fetch)
*   [ServiceWorker API](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/ServiceWorker_API)
*   [HTTP access control (CORS)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Access_control_CORS)
*   [HTTP](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP)
*   [Fetch polyfill](https://github.com/github/fetch)
*   [Fetch basic concepts](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Fetch_API/Basic_concepts)


[Source](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)