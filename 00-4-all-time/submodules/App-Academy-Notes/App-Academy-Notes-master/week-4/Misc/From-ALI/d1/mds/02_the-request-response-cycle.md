# The Request-Response Cycle

Browsing the Web might seem like magic, but it’s really just a series of
**requests** and **responses**. When we search for information or navigate to a
Web page, we are requesting something, and we expect to get a response back.

We can think about the request-response cycle as the communication pattern
between a client, or browser, and a server. Whenever we type a URL into the
address bar of a browser, we are making a _request_ to a server for information
back. The most common of these is an `http request`.

## The request-response cycle diagram

Let’s take a look at this diagram of the request-response cycle from
[O’Reily][1]:

<p>
  <img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-DOM-API/browser-basics/assets/request-response-cycle.png" style="width: 100%; height: auto;">
</p>

On the left is the **client** side, or the browser. On the right is the
**server** side, with a database where data is stored. The internet, in the
middle, is a series of these client requests and server responses. We'll be
going into more depth with servers soon, but for right now we are focusing on
the client side.

## The browser’s role in the request-response cycle

As depicted in the diagram, the browser plays a key role in the request-response
cycle. Besides letting the user make the request to the server, the browser
also:

1. Parses HTML, CSS, and JS
2. Renders that information to the user by constructing and rendering a DOM tree

When we make a successful request to the server, we are able to view a Web page
with content and functionality. Unsuccessful requests prevent the page from
loading and displaying information. You've probably seen a 404 page before!

Understanding the request-response cycle is fundamental to developing for the
Web. If a server is down, or something is wrong with the request, you’ll most
likely see an error on the client side. Learning how to debug these errors and
set up error handling is a common task for Web developers.

You can go to the **Network tab** of your browser’s **Developer Tools** to view
these requests and responses. Open a new tab, open up the Developer Tools in
your browser, and then navigate to `google.com`. Watch the request go through in
your Network tab!

## What we learned:

- Reviewed diagram of request-response cycle
- The client side vs. the server side
- The role of the browser
- Where to view Network requests in the browser

[1]: https://www.oreilly.com/library/view/using-google-app/9780596802462/
