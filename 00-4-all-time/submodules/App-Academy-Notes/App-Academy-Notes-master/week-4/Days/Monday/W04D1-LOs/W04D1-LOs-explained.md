## Browser Basics
1. Explain the difference between the BOM (browser object model) and the DOM(document object model).
  - The DOM is the collection of nodes that represent the hierarchy of HTML elements that are rendered on the page. The BOM is the hierarchy of the browser objects, such as the window and the navigator of the browser. The DOM is thus a smaller part of the BOM.

2. Given a diagram of all the different parts of the Browser identify each part.
![Browser Parts](browser.png)

3. Use the Window API to change the innerHeight of a user's window.
```js
newWindow = window.open("https://www.google.com", "Google Homepage", "width=100, height=100");
newWindow.resizeTo(400, 200)
```

4. Identify the context of an anonymous function running in the Browser (the window).
  - We can double check by console logging `this` in the browser
```js
let func = () => {
  console.log(this)
}
func();

// OR we can use an IIFE (Immediately Invoked Function Expression)

(() => {
  console.log(this);
})()
```

5. Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when all the elements on the page load (using `DOMContentLoaded`)
```html
<head>
  <script type='text/javascript' src='exampleScript.js'></script>
</head>
```
```js
window.addEventListener('DOMContentLoaded', () => { ...code } )
```

6. Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when the page loads
```html
<head>
  <script type='text/javascript' src='exampleScript.js'></script>
</head>
```
```js
window.onload = () => { ...code }
```

7. Identify three ways to prevent JS code from executing until an entire HTML page is loaded
  - An event listener in the JavaScript file (`window.addEventListener('DOMContentLoaded', callback)` or `window.onload = callback`) <===> This method is most common
  - Have the script tag at the end of the HTML file
  - Use the keywords `async` and/or `defer` in the script tag

8. Label a diagram on the Request/Response cycle.
![Request Response Cycle](request-response-cycle.png)

9. Explain the Browser's main role in the request/response cycle.
  - Parsing HTML,CSS, JS
  - Rendering that information to the user by constructing a DOM tree and rendering it

10. Given several detractors - identify which real-world situations could be implemented with the Web Storage API
  - Shopping cart, form data, user preferences like a night mode

11. Given a website to visit that depends on cookies (like Amazon), students should be able to go to that site add something to their cart and then delete that cookie using the Chrome Developer tools in order to empty their cart.
  - Open Developer tools
  - Go to the Application tab
  - Open the Cookies section and either delete individual cookies or clear all

12. How Browsers work:
 - Request over the network to the server
 - Responds with a collection of content (HTML, CSS, images, etc.)
 - Broswer interprets the response and renders the content on the page
 - User Interface what's presented to the user to interact with (sometimes called the presentation layer)
    - Displays the address bar, back/forward buttons, any other static and dynamic elements that can be interacted with
 - Rendering Engine is responsible for displaying the visual representation of the webpage using computer graphics principles
  - Like a painter working on a blank canvas
  -  Takes in HTML and CSS and displays it's interpretation of both
  - Browser Engine acts as a marshal between the rendering engine and the UI, as well as network traffic
  - Browser has to communicate over the network, asking for the necessary assets (fetch)
  - We rely on JavaScript to give our pages interactivity
  - Browser doesn't understand JavaScript so it is translated by the JavaScript Interpreter (Chakra - Microsoft, SpiderMonkey - Firefox, v8 - Chrome)
  -Data Storage -- cookies, localstorage help retain state even when refreshing page
  -Inconsistencies between browswer are due to differences in rendering engines
