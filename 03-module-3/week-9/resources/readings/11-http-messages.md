# HTTP Messages

> HTTP messages are how data is exchanged between a server and a client. There are two types of messages: requests sent by the client to trigger an action on the server, and responses, the answer from the server.

HTTP messages are how data is exchanged between a server and a client. There are two types of messages: _requests_ sent by the client to trigger an action on the server, and _responses_, the answer from the server.

HTTP messages are composed of textual information encoded in ASCII, and span over multiple lines. In HTTP/1.1, and earlier versions of the protocol, these messages were openly sent across the connection. In HTTP/2, the once human-readable message is now divided up into HTTP frames, providing optimization and performance improvements.

Web developers, or webmasters, rarely craft these textual HTTP messages themselves: software, a Web browser, proxy, or Web server, perform this action. They provide HTTP messages through config files (for proxies or servers), APIs (for browsers), or other interfaces.

![From a user-, script-, or server- generated event, an HTTP/1.x msg is generated, and if HTTP/2 is in use, it is binary framed into an HTTP/2 stream, then sent.](https://mdn.mozillademos.org/files/13825/HTTPMsg2.png)

The HTTP/2 binary framing mechanism has been designed to not require any alteration of the APIs or config files applied: it is broadly transparent to the user.

HTTP requests, and responses, share similar structure and are composed of:

1.  A _start-line_ describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.
2.  An optional set of _HTTP headers_ specifying the request, or describing the body included in the message.
3.  A blank line indicating all meta-information for the request has been sent.
4.  An optional _body_ containing data associated with the request (like content of an HTML form), or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

The start-line and HTTP headers of the HTTP message are collectively known as the _head_ of the requests, whereas its payload is known as the _body_.

![Requests and responses share a common structure in HTTP](https://mdn.mozillademos.org/files/13827/HTTPMsgStructure2.png)

HTTP Requests
-------------

### Start line

HTTP requests are messages sent by the client to initiate an action on the server. Their _start-line_ contain three elements:

1.  An _[HTTP method](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Methods)_, a verb (like [`GET`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Methods/GET "The HTTP GET method requests a representation of the specified resource. Requests using GET should only retrieve data."), [`PUT`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Methods/PUT "The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.") or [`POST`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Methods/POST "The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.")) or a noun (like [`HEAD`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Methods/HEAD "The HTTP HEAD method requests the headers that are returned if the specified resource would be requested with an HTTP GET method. Such a request can be done before deciding to download a large resource to save bandwidth, for example.") or [`OPTIONS`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Methods/OPTIONS "The HTTP OPTIONS method is used to describe the communication options for the target resource. The client can specify a URL for the OPTIONS method, or an asterisk (*) to refer to the entire server.")), that describes the action to be performed. For example, `GET` indicates that a resource should be fetched or `POST` means that data is pushed to the server (creating or modifying a resource, or generating a temporary document to send back).
2.  The _request target_, usually a [URL](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/URL), or the absolute path of the protocol, port, and domain are usually characterized by the request context. The format of this request target varies between different HTTP methods. It can be
    *   An absolute path, ultimately followed by a `'?'` and query string. This is the most common form, known as the _origin form_, and is used with `GET`, `POST`, `HEAD`, and `OPTIONS` methods.  
        `POST / HTTP/1.1  
        GET /background.png HTTP/1.0  
        HEAD /test.html?query=alibaba HTTP/1.1  
        OPTIONS /anypage.html HTTP/1.0`
    *   A complete URL, known as the _absolute form_, is mostly used with `GET` when connected to a proxy.  
        `GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1`
    *   The authority component of a URL, consisting of the domain name and optionally the port (prefixed by a `':'`), is called the _authority form_. It is only used with `CONNECT` when setting up an HTTP tunnel.  
        `CONNECT developer.mozilla.org:80 HTTP/1.1`
    *   The _asterisk form_, a simple asterisk (`'*'`) is used with `OPTIONS`, representing the server as a whole.  
        `OPTIONS * HTTP/1.1`
3.  The _HTTP version_, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

[HTTP headers](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers) from a request follow the same basic structure of an HTTP header: a case-insensitive string followed by a colon (`':'`) and a value whose structure depends upon the header. The whole header, including the value, consist of one single line, which can be quite long.

There are numerous request headers available. They can be divided in several groups:

*   _General headers_, like [`Via`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Via "The Via general header is added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers. It is used for tracking message forwards, avoiding request loops, and identifying the protocol capabilities of senders along the request/response chain."), apply to the message as a whole.
*   _Request headers_, like [`User-Agent`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/User-Agent "The User-Agent request header is a characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent."), `Accept-Type`, modify the request by specifying it further (like [`Accept-Language`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Accept-Language "The Accept-Language request HTTP header advertises which languages the client is able to understand, and which locale variant is preferred. (By languages, we mean natural languages, such as English, and not programming languages.) Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Language response header. Browsers set adequate values for this header according to their user interface language and even if a user can change it, this happens rarely (and is frowned upon as it leads to fingerprinting).")), by giving context (like [`Referer`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.")), or by conditionally restricting it (like `If-None`).
*   _Entity headers_, like [`Content-Length`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Content-Length "The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient.") which apply to the body of the request. Obviously, there is no such header transmitted if there is no body in the request.

![Example of headers in an HTTP request](https://mdn.mozillademos.org/files/13821/HTTP_Request_Headers2.png)

### Body

The final part of the request is its body. Not all requests have one: requests fetching resources, like `GET`, `HEAD`, `DELETE`, or `OPTIONS`, usually don't need one. Some requests send data to the server in order to update it: as often the case with `POST` requests (containing HTML form data).

Bodies can be broadly divided into two categories:

*   Single-resource bodies, consisting of one single file, defined by the two headers: [`Content-Type`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Content-Type "The Content-Type entity header is used to indicate the media type of the resource.") and [`Content-Length`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Content-Length "The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient.").
*   [Multiple-resource bodies](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), consisting of a multipart body, each containing a different bit of information. This is typically associated with [HTML Forms](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/Guide/HTML/Forms).

HTTP Responses
--------------

### Status line

The start line of an HTTP response, called the _status line_, contains the following information:

1.  The _protocol version_, usually `HTTP/1.1`.
2.  A _status code_, indicating success or failure of the request. Common status codes are [`200`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Status/200 "The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default."), [`404`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Status/404 "The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot."), or [`302`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Status/302 "The HyperText Transfer Protocol (HTTP) 302 Found redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location header. A browser redirects to this page but search engines don't update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is not sent to the new URL).")
3.  A _status text_. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

A typical status line looks like: `HTTP/1.1 404 Not Found`.

[HTTP headers](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers) for responses follow the same structure as any other header: a case-insensitive string followed by a colon (`':'`) and a value whose structure depends upon the type of the header. The whole header, including its value, presents as a single line.

There are numerous response headers available. These can be divided into several groups:

*   _General headers_, like [`Via`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Via "The Via general header is added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers. It is used for tracking message forwards, avoiding request loops, and identifying the protocol capabilities of senders along the request/response chain."), apply to the whole message.
*   _Response headers_, like [`Vary`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Vary "The Vary HTTP response header determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server. It is used by the server to indicate which headers it used when selecting a representation of a resource in a content negotiation algorithm.") and [`Accept-Ranges`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Accept-Ranges "The Accept-Ranges response HTTP header is a marker used by the server to advertise its support of partial requests. The value of this field indicates the unit that can be used to define a range."), give additional information about the server which doesn't fit in the status line.
*   _Entity headers_, like [`Content-Length`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Content-Length "The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient."), apply to the body of the response. Typically, no such headers are transmitted when there is no body in the response.

![Example of headers in an HTTP response](https://mdn.mozillademos.org/files/13823/HTTP_Response_Headers2.png)

### Body

The last part of a response is the body. Not all responses have one: responses with a status code that sufficiently answers the request without the need for corresponding payload (like [`201`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Status/201 "The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the Location header.") **`Created`** or [`204`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Status/204 "The HTTP 204 No Content success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page. A 204 response is cacheable by default. An ETag header is included in such a response.") **`No Content`**) usually don't.

Bodies can be broadly divided into three categories:

*   Single-resource bodies, consisting of a single file of known length, defined by the two headers: [`Content-Type`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Content-Type "The Content-Type entity header is used to indicate the media type of the resource.") and [`Content-Length`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Content-Length "The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient.").
*   Single-resource bodies, consisting of a single file of unknown length, encoded by chunks with [`Transfer-Encoding`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Headers/Transfer-Encoding "The Transfer-Encoding header specifies the form of encoding used to safely transfer the payload body to the user.") set to `chunked`.
*   [Multiple-resource bodies](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), consisting of a multipart body, each containing a different section of information. These are relatively rare.

HTTP/2 Frames
-------------

HTTP/1.x messages have a few drawbacks for performance:

*   Headers, unlike bodies, are uncompressed.
*   Headers are often very similar from one message to the next one, yet still repeated across connections.
*   No multiplexing can be done. Several connections need opening on the same server: and warm TCP connections are more efficient than cold ones.

HTTP/2 introduces an extra step: it divides HTTP/1.x messages into frames which are embedded in a stream. Data and header frames are separated, this allows header compression. Several streams can be combined together, a process called _multiplexing_, allowing more efficient underlying TCP connections.

![HTTP/2 modify the HTTP message to divide them in frames (part of a single stream), allowing for more optimization.](https://mdn.mozillademos.org/files/13819/Binary_framing2.png)

HTTP frames are now transparent to Web developers. This is an additional step in HTTP/2, between HTTP/1.1 messages and the underlying transport protocol. No changes are needed in the APIs used by Web developers to utilize HTTP frames; when available in both the browser and the server, HTTP/2 is switched on and used.

Conclusion
----------

HTTP messages are the key in using HTTP; their structure is simple, and they are highly extensible. The HTTP/2 framing mechanism adds a new intermediate layer between the HTTP/1.x syntax and the underlying transport protocol, without fundamentally modifying it: building upon proven mechanisms.


[Source](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)