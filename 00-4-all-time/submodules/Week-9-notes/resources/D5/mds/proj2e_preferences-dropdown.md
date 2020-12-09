# Preferences drop down
________________________________________________________________________________

![gear-drop-gif]

In this portion of the exercise, you are provided the HTML and CSS. The
challenge is for you to put this into your existing HTML and use JavaScript to
show and hide it.

When someone clicks the gear icon, it will show the menu. When the preferences
drop down is shown, any click will dismiss it. Create a file in the **scripts/**
directory. Use a `script` element to include that file. This may be the first
time you've written a `script` element in HTML. If you don't remember what it
looks like, go back and look at your previous projects.

After you've included the script file in your HTML file, test out whether it is
being loaded into your browser. Type a simple `console.log("hello")` and open up
your DevTools console to view your log. If your script file has loaded
correctly, you should see "hello" in your DevTools console.

You may also need to remember how to stop event bubbling/propagation, too,
depending on how you code it. This was back in the DOM days, so if you don't
remember, here [the link to the event methods] on MDN.

To make sure your script is loading, you can check the Network tab in your
DevTools (still open?) to make sure that you're getting a 200 and not an error
code.

You can also test it out by writing a `console.log('did this load?');` in the
file. Then, you can look at the output in the Console tab in the DevTools to see
if "did this load?" shows up. If it did, great! Otherwise, here's the [link to
the script tag] from MDN.

This is the HTML for the menu.

```html
<div class="pref pref--hidden">
  <div class="pref__section">
    <div class="pref__section-header">Edition</div>
    <ul>
      <li class="pref__section-link"><a href="#">CSS</a></li>
      <li class="pref__section-link"><a href="#">HTML</a></li>
      <li class="pref__section-link"><a href="#">JavaScript</a></li>
      <li class="pref__section-link"><a href="#">Python</a></li>
    </ul>
  </div>
  <div class="pref__section">
    <div class="pref__section-header">Help</div>
    <ul>
      <li class="pref__section-link"><a href="#">FAQ</a></li>
      <li class="pref__section-link"><a href="#">Contact Us</a></li>
    </ul>
  </div>
</div>
```

The CSS has the preference pane already absolutely positioned. Figure out what
you need to do to make it show up next to cog and if you need to do any
positioning of the ancestors of where you placed the HTML.

```css
/* gear-dropdown.css */
.pref {
  background-color: white;
  border: 1px solid #efefef;
  border-radius: 2px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  font-size: 12px;
  padding: 0.5em;
  position: absolute;
  right: 40px;
  top: 3.5em;
  width: 200px;
}

.pref--hidden {
  display: none;
}

.pref__section {
  border-top: 1px solid #dedede;
}

.pref__section:first-child {
  border-top: none;
}

.pref__section-header {
  font-weight: bold;
  margin: 10px;
  text-transform: uppercase;
}

.pref__section-link {
  margin: .5em;
  padding: .5em;
  text-transform: uppercase;
}

.pref__section-link:hover {
  background-color: #dedede;
}
```

When you get this to work, make sure that it works on different window sizes.
Sometimes, when developers create absolutely positioned elements, the way they
do that prevents it from working on a window size that they didn't try. So,
make it narrower. Make it larger. Make sure that the dropdown shows up when it
should.

[gear-drop-gif]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/gear-drop.gif
[link-to-the-script-tag]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#Examples
[the link to the event methods]: https://developer.mozilla.org/en-US/docs/Web/API/Event#Methods
