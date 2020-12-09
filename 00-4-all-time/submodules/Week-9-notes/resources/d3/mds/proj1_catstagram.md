# Catstagram Project
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [API Endpoints](#api-endpoints)
- [Phase 1: Load the initial cat image](#phase-1-load-the-initial-cat-image)
- [Phase 2: Implement `New Pic` button](#phase-2-implement-new-pic-button)
- [Phase 3: Error Handling](#phase-3-error-handling)
- [Phase 4: Voting](#phase-4-voting)
- [Phase 5: Create Comment](#phase-5-create-comment)
- [Phase 6: Improve error handling](#phase-6-improve-error-handling)
- [Recap](#recap)
- [Bonus: Delete Comments](#bonus-delete-comments)

<!-- /code_chunk_output -->
________________________________________________________________________________

Today you'll be building a project called Catstagram! Here are the features of
Catstagram:

- It shows a random kitten picture from the `https://thecatapi.com/` API.
- Users can vote on the picture.
- Users can comment on the picture.
- Users can delete comments.
- Users can request a new random kitten image to be shown.

You can download the starter project from
https://github.com/appacademy-starters/ajax-project-starter.

The most important feature of Catstagram is that all of the other features
listed above can be performed without requiring a page reload. For example, when
a new comment is created, the comment smoothly gets added to the page without
requiring the website to reload.

In building Catstagram, you will master the fundamentals of AJAX. Specifically,
you will implement multiple AJAX cycles in this project, and you will become
familiar with the nuances of each step.

To start, download the skeleton zip. The skeleton contains an Express server, an
`index.html` page, and an `event.js` JavaScript file. If you need a refresher on
how these different components work together, please review the previous
reading.

Take some time to browse through each file. Start with the `public/index.html`
file and note how the document is structured. Then, review the
`public/index.css` file to see how it's currently styling the HTML page.

You'll be primarily working in the `public/events.js` file today, and at the
current moment, it's blank. In this file, you'll be setting up event listeners
and implementing AJAX requests using the Fetch API.

Finally, check out the `index.js` file. It might seem like there's a lot going
on in this file, but the only piece that you have to edit in this file today is
the `ERROR_RATE`. Otherwise, your primary interaction with this file will
involve looking at the endpoints that you should be making requests to and
seeing how the server handles each client request.

When you're ready, launch the server by running `npm start`, and then go to your
browser and navigate to `localhost:3000`.

## API Endpoints

Here are the API endpoints on the server that you will be using. You should still
read the `index.js` file for how the API endpoints are being created by the server.

**GET /kitten/image**

Fetches an image from an external API, `https://thecatapi.com/`, that returns
information on a random cat image url.

```json
{
  "score": 0,
  "comments": [],
  "src": string (image url)
}
```

If it doesn't succeed, it returns an error message.

```json
{
  "message": string
}
```

**PATCH /kitten/upvote**

Increments the score of the current kitten by 1 and returns the current score.

```json
{
  "score": number
}
```

**PATCH /kitten/downvote**

Decrements the score of the current kitten by 1 and returns the current score.

```json
{
  "score": number
}
```

**POST /kitten/comments**

Creates a new comment for the current kitten. To create a comment, the server expects the request body to look like the JSON below.

```json
{ 
  "comment": string
}
```
    
After sending a request to the server, the API endpoint returns all the comments of the kitten in the order that they were created. The JSON format below is the way the API endpoint returns information.

```json
{
  "comments": [ string ]
}
```

## Phase 1: Load the initial cat image

Let's start with the `index.html` in the `public` directory. Right now this
`html` document is being served by the Express server when the user navigates to
`localhost:3000` and lands on the root route ('/').

`index.html` has an `<img>` element, but the element has an empty `src`
attribute. In this first phase, set up an event listener that waits for the DOM
content to be loaded. When the DOM content is loaded, the client should make a
GET request, using the Fetch API, to the `/kitten/image` route.

When that route is hit, the server makes a request to The Cat API for
a random kitten image. Once that kitten image is returned, it sends data about
the kitten image back to the client.

When the server responds, update the DOM so that it's showing the kitten
picture.

## Phase 2: Implement `New Pic` button

Now that your website loads a kitten picture initially, we want to implement a
feature where the user can request a new kitten picture.

At the moment, the user could simply refresh the website to do that, but let's
instead use AJAX to give the user a smooth experience that does not require a
full page reload.

To do this, in `public/events.js`, add another event listener that now listens
for when anyone clicks the "New Pic" button. When that button is clicked, it
should ask the server for another kitten image and then display that image.

Once you've finished that, go ahead and let the user know when the client is
waiting for the response from the server. We can do this by displaying the text
"Loading..." in the div with the class of "loader" any time we fire off an HTTP
request to the server and then clear that "Loading..." text once the response
arrives.

## Phase 3: Error Handling

Various issues can arise in the HTTP request/response cycle. As developers, it's
your responsibility to handle errors that might come back from the server.

For example, if your server's request for a new image from the The Cat API
failed, then your app should notify your users of the issue.

Let's simulate errors by adjusting the `ERROR_RATE` variable in `index.js`. As
the comment above the `ERROR_RATE` variable in `index.js` file mentions,
`ERROR_RATE` represents the probability that an error will be thrown. So, if
the `ERROR_RATE` is updated to 100 percent, then the `generateRandomError`
function will throw an error every single time it's invoked. If the rate is at
0, then an error will never be thrown.

Go ahead and bump the rate up to 100 as you're implementing error handling. For
now, if the server responds with an error, go ahead and just `alert` the user
with a "Something went wrong! Please try again!" message.

## Phase 4: Voting

Next, let's add the ability to upvote and downvote the kitten picture. As you're
implementing this feature, pay close attention to the HTTP method used to make
this request.

Although the `upvote` and `downvote` endpoints don't have the
`generateRandomError()` function inside, it's still possible for errors to
occur, so be sure to implement error handling here as well.

One more thing, take this time to refactor and DRY up any code that might have
gotten too repetitive. Be sure to continue refactoring throughout whenever
there's an opportunity to make your code more concise and readable.

## Phase 5: Create Comment

To allow users to create comments, set up an event listener for the comment
form's `submit` event.

Check out the [FormData] interface for more info on how to extract the
data from the form.

By default, when a `submit` event happens on a form, an HTTP request is
automatically made based on the form's `action` and `method` attributes. During
this default HTTP request, the page reloads. Because you'll be using AJAX
instead to make an HTTP request without reloading the page, go ahead and call
[event.preventDefault()] on the `submit` event handler's callback function.

If you are struggling with making this HTTP request, be sure to go back to
the previous reading and review the section where it made a similar type of HTTP
request.

When this feature is properly implemented, any time the user submits a comment,
the newly created comment should be appended below all the existing comments.

## Phase 6: Improve error handling

Let's improve our error handling to not use the `alert` function. Instead, let's
display the specific error message that our server is responding with.

If we look at `index.js`, `generateRandomError` will randomly throw one of the
following the following three error messages:

- "No cat for you!"
- "Sad day. No kitten here."
- "Please try again!"

It would be ideal if the user can see the specific error message that's coming
from the server.

Please display the specific error message in the div with the class of "error".
Feel free to adjust the `ERROR_RATE` again in order to make it easier to
implement this feature.

## Recap

At this point, you should have the following features implemented:

- An image should load from the server when a user arrives on Catstagram.
- If users want to fetch a new kitten image, then clicking the 'New Pic' button
  should load up a new image. (Also, when the image is being loaded, the text
  'Loading...' should show up in the `.loader` div. Once the image is done
  loading, that `Loading...` text should disappear.)
- If the server responds with an error, the user should see that specific error
  message in the `.error` div.
- The user can upvote and downvote the kitten image.
- The user can create a comment. When a comment is created, it gets appended
  below all the other existing comments.

Great job on implementing all the core features of Catstagram! Before moving on
to the bonus section, review your `events.js` file one more time to see if
there's any other refactoring you can do to clean up your code.

## Bonus: Delete Comments

Nice work getting to the bonus feature! For the bonus, implement a feature that
would allow users to delete existing comments.

To implement this, you will have to refactor your comment creation feature to
now include a `Delete` button next to the comment.

Then, each button will require event handling so that whenever it is clicked, it
makes a request to the `delete` `/kitten/comments/:id` endpoint.

To properly implement this, you should try to use Event Delegation so that you
don't have to set up an individual click handler on each `Delete` button. If you
need a refresher on Event Delegation, please go back to the Event Delegation
content from earlier in the course. Alternatively, you could also review
JavaScript.Info's [lesson on Event Delegation].

[formdata]: https://developer.mozilla.org/en-US/docs/Web/API/FormData
[lesson on event delegation]: https://javascript.info/event-delegation
[event.preventDefault()]: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
