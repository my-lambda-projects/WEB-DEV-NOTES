# Hello, World DOMination: Adding a CSS Class After DOM Load Event

In our previous JS examples, we used `window.onload` to run a function after the
window has loaded the page, which ensures that all of the objects are in the
DOM, including images, scripts, links, and subframes. However, we don't need to
wait for stylesheets, images, and subframes to finish loading before our
JavaScript runs because JS isn't dependent on them. And, some images may be so
large that waiting on them to load before the JS runs would make the user
experience feel slow and clunky. There is a better method to use in this case:
`DOMContentLoaded`.

According to
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event),
"the DOMContentLoaded event fires when the initial HTML document has been
completely loaded and parsed, without waiting for stylesheets, images, and
subframes to finish loading."

We'll use DOMContentLoaded to add CSS classes to page elements immediately after
they are loaded. Let's add the CSS class "i-got-loaded" to the `body` element
when the window fires the DOMContentLoaded event. We can do this in the script
block or in an external JS file, as we did in the examples above.

**Javascript**

```js
window.addEventListener("DOMContentLoaded", event => {
  document.body.className = "i-got-loaded";
});
```

After adding the Javascript above, refresh the HTML in your browser, inspect the
page, and notice that the `body` element now has a class of "i-got-loaded".
