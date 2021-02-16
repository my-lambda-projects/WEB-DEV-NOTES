# AJAX Project Preparation
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Overview](#overview)
  - [Project organization](#project-organization)
- [Express](#express)
  - [Middleware](#middleware)
  - [Routes](#routes)
  - [Launching the server](#launching-the-server)
- [What you've learned](#what-youve-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

Now that you've learned the fundamentals of AJAX, it's time to put that
knowledge into practice by building out a project that uses AJAX.

Since AJAX is comprised of multiple technologies, you'll work with multiple
components across the frontend and backend of a web application in this AJAX
project. Specifically, in this project, you'll work with:

- an Express server
- an HTML document
- JavaScript event handling
- Fetch API

This reading will go over how ths project will work, and then also give a high
level over view of the Express framework.

## Overview

At a high level, here's the flow of how your project will work:

1. The user navigates to your web application's root URL. At this point, the
   browser makes a request to the Express server, and the server responds with
   the HTML document for the web application.
2. Then, when different events happen on the DOM, various JavaScript event
   handlers (that you will implement) will trigger requests to the server using
   the Fetch API.
3. The Express server processes those requests and responds with JSON data.
4. The response data is handled and used to manipulate the DOM.

### Project organization

Your project will be organized like this:

```plaintext
AJAX project
│   index.js
|   package.json
└───public
│   │   events.js
│   │   index.html
│   │   index.css
```

The `index.js` file holds the Express server. You'll learn more about the
Express server in the next section.

The `public` directory holds all of the static assets that the Express will
serve up to the client, including the `index.html` , the `index.css` that styles
the `index.html`, and the `events.js` that loads up all of the event listeners
that listen to events being performed on the various elements in the
`index.html` document.

Next, let's go over how the Express server works!

## Express

Express is a Node.js framework for building web applications.

Let's go over some of the core parts of an Express web server by breaking down
the following example:

```js
const express = require("express");
const faker = require("faker");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/names", (req, res) => {
  const randomName = faker.name.findName();
  res.json({ name: randomName });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

In the first line of the example, we require the `express` dependency so that we
can then start an Express server.

### Middleware

This particular Express server uses two middleware: `bodyParser` and `static`.
You'll learn much more about Express and its middleware in a later lesson, but
for now, all you need to know is that middleware sit between the client and the
server and can process and/or transform the HTTP requests or responses that pass
between them.

`app.use(bodyParser.json())` sets up the `bodyParser` middleware to process data
in HTTP requests into a JSON object that can then be used in the routes.

`app.use(express.static('public'))` sets up the `static` middleware. In this
example, this allows the Express server to serve any static assets that are
located in the `public` directory. Some examples of static assets include
images, html documents, or CSS files.

`app.use(morgan('dev'))` sets up the `morgan` middleware. This will show the
method and the url for any request made to the server in the server terminal.

### Routes

This example Express server has two routes: `/` and `/names`. In setting up those
routes, you have to specify the HTTP verb that the client should use in order to
hit those routes.

In this case a GET request to `/` would invoke the callback function with
`res.sendFile(path.join(__dirname + "/public/index.html"));` in it.

When the user lands on the root path of the website, the client is served with
that `index.html` document.

A GET request to `/names` would invoke the callback function that generates a
random name using the `faker` library and then sends back a JSON response with
that newly generated name.

### Launching the server

In the code example above Express starts listening for network requests on port 3000.

To launch the server, you can run `node [NAME_OF_EXPRESS_SERVER_FILE]`. Let's
assume that the code example above lives in an `index.js` file located a the
root of the directory. To launch the server, you would run `node index.js`.

## What you've learned

In this reading, you got a preview and brief breakdown of the project that
you'll be building. You also got a high level overview of the Express framework.

It's okay if you don't feel like you fully understand everything about Express
yet. You'll be learning much more about Express in the following weeks. For now,
make sure you understand the key points of Express outlined in this reading so
that you're able to confidently interact with the Express server while making
AJAX requests in your project.
