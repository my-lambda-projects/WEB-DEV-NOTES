# App Academy Open


The Steps of AJAX
-----------------



In the previous reading, you learned about what the purpose behind AJAX and what AJAX meant.

In this reading, you'll walk through the specific steps of AJAX using the example from the previous reading.

Specifically, we'll walk through each step of the Goodreads example using this diagram:

![ajax steps](https://assets.aaonline.io/Module-Web/ajax/ajax.svg)

Quick overview of the Fetch API
-------------------------------

As you go through the AJAX example, you'll use an API that you've used in the past: the Fetch API.

At a high level, Fetch is used to make HTTP requests. It uses Promises to handle the asynchronous nature of HTTP requests and responses.

To learn more about Fetch, let's walk through a series of examples using `https://jservice.xyz/`, which is a publicly available API that allows users to create, update, or delete Jeopardy-related resources (ie. games, categories, or clues).

Since the Fetch API is provided by almost all major browsers, feel free to open up a console in Chrome or Firefox and follow along.

### GET request

Let's start with a GET request. As a refresher, GET requests are used to retrieve information from the server. Here's what a GET request might look like using the Fetch API:

    fetch("https://jservice.xyz/api/games")
      .then(function(res) {
        console.log("response: ", res);
        return res.json();
      })
      .then(function(data) {
        console.log("data:", data);
      });

In the code example above, the following happens:

1.  `fetch`'s first argument is the URL that you want to make a request to. The second argument is an optional `options` object that is not necessary for now, but will be used in a later example.
2.  Invoking `fetch` returns a Promise that resolves with a [Fetch Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response). This Response object represents the entire HTTP response, and it holds crucial information like `status` and `url`.
3.  In the first callback, the body of the response is a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream). We won't get into the details of data streams here, but for now just know that the `.json()` method takes that stream and, according to the MDN docs on the [.json()](https://developer.mozilla.org/en-US/docs/Web/API/Body/json) method, _"It returns a promise that resolves with the result of parsing the body text as JSON."_ The `.json()` method is the equivalent of using `JSON.parse()` except that it works on a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) instead of just a string.
4.  In the second callback, you can now access the data found in the body of the response. In this case, a GET request to `https://jservice.xyz/api/games` returns a list of Jeopardy games stored in an object that looks like this:
    
        {
          games: [
            {
              id: 1,
              episodeId: 4596,
              aired: "2004-09-06",
              canon: true
            },
            // More games here
          ]
        }
    

### POST request

Next, let's walk through a POST request. As a reminder, POST requests are used to create data on the server.

    fetch("https://jservice.xyz/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "ACTORS & THEIR FILMS"
      })
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
      });

If you're following along, you probably just got an error response here with a message notifying you that the `category already exists`. Go ahead and update that `title` to be something different until you are able to create a unique category.

Now that it's a POST request, a second `options` argument is passed in to configure this HTTP request. In this example, you specify the request as a POST request, notify the server that you will be sending data in a JSON format, and then also pass along the data in the body.

When the POST request succeeds, the server responds with data about your newly created category.

### Error handling

At this point, something might seem a little off to you. Specifically, in the previous example, the server responded with an error, yet the Promise resolved instead of being rejected.

Since the example did not have a `catch` block to handle errors, you may have expected some sort of `Uncaught (in promise)` error.

It turns out that the Fetch API will not reject on HTTP error status codes (between 400 and 600). It only rejects on errors like network failures. Try turning off your WiFi and then executing that code snippet if you want to confirm this.

Instead, Fetch requires you to check the `ok` key inside of the Response object, and if that key is set to `false`, then you can then properly handle the error. The `ok` property is set to `true` if the `status` code is in the 200s range.

    fetch("https://jservice.xyz/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "ACTORS & THEIR FILMS"
      })
    })
      .then(function(res) {
        console.log(res);
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });

Now, if the server responds with an error, the code throws an error that will be handled by the `catch` block. This `catch` block will also handle any errors that result from network failures.

AJAX broken down
----------------

Now that you've gone over how the Fetch API works, let's begin walking through the AJAX example!

Recall that in the previous example, all you wanted to do was allow the user to click the "Want To Read" button without requiring an entire page reload. Before AJAX, this was not possible because when the user clicked the "Want To Read" button, an HTTP request would be sent to the server to mark that book as "Want To Read", and then the server would send back an entire HTML document (with the book marked as "Want To Read") for the browser to load up.

Now, however, we can allow for that HTTP request to happen asynchronously and then update the DOM when the server returns a response about whether or not that HTTP request was successful.

Let's go step by step into how this works!

### Event listener and Fetch

The "Want to Read" button has a `click` event handler. This handler would then interact with a browser API for making asynchronous call to the server.

The code for this might look like:

    <button class="want-to-read">Want to Read</button>
    
    <script>
      document.querySelector(".want-to-read").addEventListener("click", function() {
        fetch(`https://api.goodreads.com/books/${BOOK_ID}/update-status`, {
          method: "PATCH", // PATCH since we'll just be modifying the book's status
          body: JSON.stringify({
            status: "Want to Read"
          })
        });
        // HANDLING THE SERVER RESPONSE WILL GO HERE AND WILL BE COVERED
        // IN A LATER STEP.
      });
    </script>

In the diagram, this is the step where the user interface makes a "javascript call" to the "AJAX engine":

![ajax-js-call](https://assets.aaonline.io/Module-Web/ajax/ajax-js-call.png)

To be clear, there is no actual formal "AJAX engine" that lives in the browser. Rather, in this example, the "AJAX engine" is really just the JavaScript code (ie. the click event handler, invocations of the Fetch API, and any sort of DOM manipulation).

### PATCH request is made to web server

During this step, the PATCH request is made asynchronously to the server:

![ajax-patch-request](https://assets.aaonline.io/Module-Web/ajax/ajax-patch-request.png)

At this step, the JavaScript code (in this case the `click` event handler) calls the Fetch API and delegates all of the logic of making the PATCH request to the Fetch API. Meanwhile, the rest of the JavaScript can continue working without being blocked. For example, if there was another click handler for another element on the page, it **does not** have to wait for this "Want To Read" status update PATCH request to be finished.

If you need a refresher on how JavaScript works asynchronously, please refer back to the previous lesson on asynchronous JavaScript from earlier in the course.

The PATCH request is then made to the server, and the server updates the status of that specific book.

### Server sends back a response

Once the server is done updating the status of the book, it sends a response back to the client:

![ajax-server-response](https://assets.aaonline.io/Module-Web/ajax/ajax-server-response.png)

As the previous reading mentioned, when AJAX was first introduced, the data was often sent back in the XML format (hence the XML in ajaX). Nowadays, JSON is the most common format for server responses due to its smaller payload size, readability, and ease in interacting with JavaScript.

Here's an example of what that JSON response might look like:

    {
      "book": {
        "id": 29633913,
        "status": "Want to Read"
      }
    }

### Fetch API receives the response and resolves the promise

Once the response is received, your JavaScript code can properly handle the response:

    <button class="want-to-read">Want to Read</button>
    
    <script>
      document.querySelector(".want-to-read").addEventListener("click", function() {
        fetch(`https://api.goodreads.com/books/${BOOK_ID}/update-status`, {
          method: "PATCH", // using PATCH since we'll just be modifying the book's status
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: "Want to Read"
          })
        })
          .then(function(res) {
            if (!res.ok) {
              throw Error(res.statusText); // handle any potential server errors
            }
            return res.json(); // extract JSON from the response
          })
          .then(function(data) {
            // handle the response data here
          })
          .catch(function(error) {
            // handle errors here
          });
      });
    </script>

### Response is handled and DOM is updated

You're now in the last step of the AJAX flow:

![ajax-dom-update](https://assets.aaonline.io/Module-Web/ajax/ajax-dom-update.png)

In this step, you can update the DOM based on the data that was returned:

    <button class="want-to-read">Want to Read</button>
    
    <script>
      document.querySelector(".want-to-read").addEventListener("click", function() {
        fetch(`https://api.goodreads.com/books/${BOOK_ID}/update-status`, {
          method: "PATCH", // using PATCH since we'll just be modifying the book's status
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: "Want to Read"
          })
        })
          .then(function(res) {
            if (!res.ok) {
              throw Error(res.statusText); // handle any potential server errors
            }
            return res.json(); // extract JSON from the response
          })
          .then(function(data) {
            document.querySelector(".want-to-read").innerHTML = "✓ Want To Read";
          })
          .catch(function(error) {
            const errorMessage = document.createElement("p");
            errorMessage.appendChild(
              document.createTextNode("Something went wrong. Please try again!")
            );
    
            // This example appends an error message to the body for simplicity's sake.
            // Please do not copy this kind of DOM manipulation in your own projects:
            document.querySelector("body").appendChild(errorMessage);
          });
      });
    </script>

In the example above, since there was a successful response from the server, then the button is updated to include a check mark to show that the book has been successfully marked as "Want To Read".

Recall from the section on the Fetch API that even if the server responds with an error, the response is still resolved. Because of that, it's important to check whether or not the response was successful in the response's `ok` and/or `status` code and then handle errors accordingly.

In the `catch` block, we ensure that if an error were to have happened, then the website would show an error message to the user.

What you've learned
-------------------

You've now learned each step of a typical AJAX flow. As a recap, it usually starts with an event on the client side that triggers an HTTP request to the server. In this case, we used the Fetch API to asynchronously interact with the server. When the server sent its response, the Fetch API resolved the promise, and the DOM was then updated to reflect the updated data.

More importantly, using AJAX, the web page can be updated without requiring a full page reload.

Now that you've learned about each step of AJAX, it's time to try it out yourself!

Did you find this lesson helpful?


[Source](https://open.appacademy.io/learn/js-py---sep-2020-online/week-9-sep-2020-online/the-steps-of-ajax)
