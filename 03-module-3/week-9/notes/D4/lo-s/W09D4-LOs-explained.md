## AJAX (Asynchronous JavaScript and XML) (W09D4) - Learning Objectives

### AJAX
1. Explain what an AJAX request is
- An AJAX request is an asynchronous request that we send in order to get a response in the form of data from a server.
- Typically this response is in JSON, but previously was common to work with XML.
- The main difference between this approach and a traditional request is that the server is no longer responsible for updating the HTML and sending the whole page back; it sends the new/requested data and the JavaScript on the front end can change the HTML displayed directly within the browser.
- We shift a lot of the processing on to the individual user.
![ajax](ajax.svg)

2. Identifying the advantages of using an AJAX request.
- We don't have to refresh the entire HTML page.
- It's a smaller amount of data that needs to be transferred.
- We can push the processing and recreation of HTML elements on to the user.
  - This may not have been desired at the beginning of the internet with slow personal machines, but not even smaller connected machines like tablets and phones have plenty of processing power to do these tasks and alleviates the load on the servers.

3. Identify what the acronym AJAX means and how it relates to modern Web programming
- Asynchronous JavaScript and XML
- Asynchronous: We don't lock up the page when we are waiting on a response. We are still able to interact and the response's data will be handled whenever it returns.
- JavaScript: The engine behind AJAX. We use JavaScript to make the request to the server, then we also use it to process the response and make any updates to the DOM that are needed based on this new data.
- XML: The original format of the data that was sent back on the response. Nowadays we will almost always be using JSON as the format.

4. Describe the different steps in an AJAX request/response cycle
- An event listener is set up to wait for an specific action that will trigger a request to our server. Clicking on a button or submitting a form would be a popular example.
- When the event is triggered, we use JavaScript to formulate an appropriate request to a server. In our project we used `fetch` in order to send a request to a specific route on our server, along with an options object to indicate the methods, headers, etc., that differ from the default values, a body with necessary data, etc..
- The request is sent asynchronously to the server. The user is still able to interact with our application since the request is not blocking the call stack.
- The server receives the request and does whatever it needs to do on its end to create/read/update/destroy data related to the request. After it performs the requested action, it creates a response and sends it back to the client. This is almost always going to be in a JSON format.
- The client receives the response and is able to parse the data and do any updates that it needs to do to the DOM. In our project, we used a `.then` on our call to `fetch`, which allowed us to then convert the response's JSON into a usable POJO when the response came back. The data inside of this object is then accessible and used to manipulate the DOM.

5. Fully use the fetch API to make dynamic Web pages without refreshing the page
- Look over the AJAX project Catstagram. Be comfortable with creating many different request types, such as `GET`, `PATCH`, `POST`, and `DELETE`.
- Be comfortable with using both the `.then` promise chains that we used in the project as well as how we could convert them into an async/await format:
```javascript
// Using Promise chains for .then and .catch
document.querySelector('#downvote').addEventListener('click', () => {
	fetch('http://localhost:3000/kitten/downvote', { method: 'PATCH' })
		.then(handleResponse) // handleResponse defined below for reference
    .then(updateImageScore) // updateImageScore defined below for reference
    .catch(handleError); // handleError defined below for reference
});

// Using async/await
document.querySelector('#downvote').addEventListener('click', async () => { // Notice the async keyword on the callback definition!
// We create a standard try/catch block
  try {
    // We await each asynchronous function call
    const resJSON = await fetch('http://localhost:3000/kitten/downvote', { method: 'PATCH' });
    const resObj = await handleResponse(resJSON);
    // updateImageScore is synchronous, so we do not have to await its response
    updateImageScore(resObj);
  } catch (e) {
    handleError(e)
  }
});

// Functions used above, for reference
const handleResponse = (response) => {
	stopLoader();
	clearError();

	if (!response.ok) {
		throw response;
	}
	return response.json();
};

const handleError = (error) => {
	if (error.json) {
		error.json().then((errorJSON) => {
			document.querySelector('.error').innerHTML = `Error occured: ${errorJSON.message}`;
		});
	} else {
		console.error(error);
		alert('Something went wrong. Please try again!');
	}
};

const updateImageScore = (data) => {
	const { score } = data;
	document.querySelector('.score').innerHTML = score;
};
```
