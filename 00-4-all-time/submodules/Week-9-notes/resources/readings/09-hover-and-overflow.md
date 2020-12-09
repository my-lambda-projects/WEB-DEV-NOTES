# App Academy Open

> Learn to code online with access to App Academy’s entire full-stack course for free

Styling is a fun part of the Web development process! We can do all sorts of neat things with CSS to delight the user and also create a professional-looking app. Beyond color and font styles, we could also add effects to elements that signal page activity/interactivity to the user or make certain elements stand out.

Since buttons are typically calls to action on a page, they are often styled to grab the user’s attention and invite a click. In this reading, we’ll review how to add a simple button effect on hover, but this can apply to _any_ element.

Adding a button effect on hover
-------------------------------

Before we can add styles, we need a button. So let’s set one up in an HTML file. We’ll also need to link to a CSS file that we’ll call `button-styles.css`.

    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="button-styles.css" />
      </head>
      <body>
        <button class="btn btn--active">Hover on me!</button>
      </body>
    </html>

Now we can style our button using a simple property called **[transform](https://css-tricks.com/almanac/properties/t/transform/)** with a **translateY** value:

    .btn {
      background-color: #00bfff;
      color: #ffffff;
      border-radius: 10px;
      padding: 1.5rem;
    }
    .btn--active:hover {
      cursor: pointer;
      transform: translateY(-0.25rem); /* Moves our button up/down on the Y axis */
    }

Adding `:hover` to the `.btn--active` class allowed us to create a hover effect. Using `translateY()` moved the button up/down along the Y axis (vertically). When a user hovers over the button it should move up, and when the user mouses off the button it should move back down.

Check out this [CSS-Tricks doc on transform](https://css-tricks.com/almanac/properties/t/transform/) to see other transformations we could do on elements, as well as a list of browsers that support 2D and 3D transforms.

A note about browser support
----------------------------

If you open up your HTML file in a browser, right-click on the button and inspect it, you should see a bunch of `button` styles from _user agent stylesheet_. These are the default styles your browser has added to the `button` element.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/browser-default-styles.png)

If you don’t want any of these default styles on the button, you’ll have to write override styles. Check this CSS-Tricks article ["Overriding Default Button Styles"](https://css-tricks.com/overriding-default-button-styles/) for more information about default button styles across different browsers.

It’s also a good idea to use a CSS library like [Normalize.css](https://necolas.github.io/normalize.css/) to make sure that element styles are rendered consistently across browsers. Once you’re done styling an element or a page, open it up in different browsers and test for expected behavior.

Content overflow
----------------

What happens when you size an element to a width and height that can't hold all of the content? By default, the browser will just show it all to you and, maybe, mess up the way the page renders. To fix that, you can use the `overflow` family of properties to specify how you want it to work.

There are four settings that the `overflow` family of properties can take.

| Setting | What it means |
| --- | --- |
| visible | This is the default. It just lets you see everything, perhaps ruining the look of the page. |
| hidden | This _clips_ the content. Anything beyond the boundary of the element is not visible. |
| scroll | _Always_ show a scroll bar, even if the content doesn't need one. |
| auto | Only show a scroll bar if the content does overflow the available space. |

There are three members of the `overflow` family.

*   `overflow-x`: Only apply the setting in a horizontal direction.
*   `overflow-y`: Only apply the setting in a vertical direction.
*   `overflow`: Apply the setting to both the horizontal and vertical directions.

Check out [Examples of CSS Overflow](https://codepen.io/aa-academics/pen/jOPeNmp?editors=1100) on CodePen to see those values in action.

What we learned:
----------------

*   How to create a hover effect
*   How to use the transform property on elements
*   Browser default styles and overriding them
*   How the `overflow` family of properties handles overflow of text in an element


[Source](https://open.appacademy.io/learn/js-py---sep-2020-online/week-9-sep-2020-online/hover-and-overflow)