# Week 9 Learning Objectives

## Crafting Resume Bullet Points
### Recall the four components of a good resume bullet point
1. Determine a compelling way to express what you want to demonstrate using _powerful verbs_
2. Carefully choose the appropriate _technical keywords_ that apply to the skill to get your resume noticed by keyword searches
3. Mention the _programming concepts_ that you use to demonstrate the skill
4. Use plain English, describe the _benefits_ or _impact_ that your solution created
### Demonstrate that you can write a good resume bullet point using those four components

## CSS Fundamentals
### Demonstrate how to import other CSS files into your CSS file
- import into css: use `@import` tag
- to link to stylesheet from html: `<link rel="stylesheet" href="file.css">`
### Explain how CSS rules are applied based on their order and specificity
- the rule with the most specific selector will be applied (IDs are the most specific because they are unique)
    - `in-line styling > id > pseudo-class selectors > class > tag name`
- for rules with the same level of specificity, the later one will be applied
### Describe and apply element, id, and class selectors
- type selectors:  matches elements by node type (e.g. `div`, `li`, `a`, `p`)
- class selectors: matches elements by class name (class name preceded by a `.`)
- ID selectors: matches elements by ID, (id preceded by a `#`)
```css
/* Type selector */
div {
  background-color: #000000;
}

/* Class selector */
.active {
  color: #ffffff;
}

/* ID selector */
#list-1 {
  border: 1px solid gray;
}

/* Universal selector */
* {
  padding: 10px;
}

/* Attribute selector */
a[title] {
  font-size: 2em;
}
```
### Write "combinators" to create compound selector statements to target specific elements
- use with caution/moderation because reordering the items in your webpage could change the way it looks
- descendent selectors
    - two selectors with just white space in between them (syntax: A(spaces, tabs, line breaks)B)
- direct child selectors
    - the `>` selector selects nodes that are direct children of the first element (syntax: A > B). It will match every element B that is immediately nested inside an element A.
- adjacent sibling selectors
    - the `+` selector selects adjacent siblings (syntax: A + B). This means that the second element (B) directly follows the first (A), and both share the same parent.
### Explain and apply pseudo selectors for specific elements in specific states
- pseudo-class specifies a special state of the selected element(s) rather than to any elements or attributes contained in the DOM
```css
a:hover {
  font-family: "Roboto Condensed", sans-serif;
  color: #4fc3f7;
  text-decoration: none;
  border-bottom: 2px solid #4fc3f7;
}
```
### Explain and apply the `::before` and `::after` pseudo selectors
- create a pseudo-element as a child of the element to which the property applies
### Style content on an HTML page targeting
- Type faces, sizes, styles, and weights
- Text transformation and alignment
- Colors expressed as names, hexadecimal RGB values, and decimal RGB values
- Everything about borders
- Shadows
- Opacity (transparency)
- Covering an element with a background image
### Explain the generic font names "serif", "sans-serif", and "monospace" and correctly identify examples of each
- serif fonts have little extensions coming off the letters. <span style="font-family:serif">serif fonts look like this</span>
- sans serif fonts look like all the regular text on this page
- monospace: equally spaced when you're programming: `looks like this`
### Explain why using Web fonts helps with consistent experience across viewing devices
### Recall and explain the different absolute and relative length units in CSS
- px
- em
- rem
### Demonstrate how to link a stylesheet into an HTML page
```html
<head>
    <link rel="stylesheet" href="/styles/site.css">
</head>
```
### Be able to calculate the specificity of CSS rules and determine which rule override the properties of another
- the more specific the rule, the higher priority has
- for equal specifity rules, the last one will be used
### Use the `content` CSS property to define the content of an element

## AJAX
### Explain what an AJAX request is
- ajax (asynchronous javascript and xml) is a set of web development techniques to allow client side applications to send and retrieve data from the server and update pieces of the page, all without interrupting the client's experience and the page's behavior
### Identifying the advantages of using an AJAX request.
- improved user experience (e.g. user can stay on the same place in the page)
- improved application performance
### Identify what the acronym AJAX means and how it relates to modern Web programming
- ajax stands for asynchronous javascript and xml. the modern web relies on ajax constantly—most major websites require frequent interactions with the server but are expected to have a seamless user experience
### Describe the different steps in an AJAX request/response cycle
![ajax](./ajax-js-call.png)
- event occurs in the user interface (e.g. button click)
- event is handled by javascript code (e.g. `eventListener('click', ...`)
- a request is sent to the server (e.g. using fetch api)
- server responds in the form of XML or (more likely) JSON data
- fetch api recieves response and resolves promise
- response is handled and DOM is updated
### Fully use the `fetch` API to make dynamic Web pages without refreshing the page
```javascript
// example from reading
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
```
## Media Query
### Identify the different types of media that a media query can target
- "all" - all devices which is the default for a media query when the type is not provided
- "print" - the layout of the document when a person intends to print it
- "screen" - the layout of the document when a browser displays it
- "speech" - when a screen reader reads the content
### Explain how the media features (and prefixed subfeatures) of "aspect ratio", "height", "orientation", and "width" are applied
  | Feature      | Applies to                                   | Subfeature prefixes |
  | ---------    | ------------------------------------         | -----------         |
  | aspect ratio | ratio of width to height of the viewport     | max- and min-       |
  | height       | height of the viewport | max- and min-       | max- and min-       |
  | orientation  | if width is larger than height or vice versa |                     |
  | width        | width of the viewport | max- and min-        | max- and min-       |
### Use media queries to change the styles of content in an HTML page to achieve a desired effect
```css
body {
  font-size: 14px;
  display: flex;
}

@media (min-width: 400px) and (max-width: 800px) {
/* only applies when the screen is between 400 and
800 pixels*/
  body {
    font-size: 10px;
  }
}
@media (min-width: 1600px), (max-width: 200px) {
/* only applies when the screen is more than 1600px
or less than 200px*/
  body {
    font-size: 18px;
  }
}

@media (orientation: landscape) {
  flex-direction: row;
}

@media (orientation: portrait) {
  flex-direction: column;
}
```
## Box Model and Positioning
### Describe how:
- padding and margins work in the box model
![standard box model](./standard-box.png)
![border-box model](./border-box.png)
- the browser positions a fixed positioned element
    - element is removed from the page flow and positioned relative to the document itself
- the browser positions a relatively positioned element
    - element remains in original position and can be offset from there
- the browser positions absolutely positioned elements with and without a relatively positioned parent element
    - element is removed from the page flow and positioned relative to its closest positioned ancestor
- the browser positions a static positioned element
    - by default, elements are static (not considered to be positioned)
- the browser positions sticky positioned elements
    - element acts like a relatively positioned element until it reaches a threshold, where it becomes fixed to the page
### Identify elements rendered with specific padding and margin settings
### Apply padding and margins to HTML elements to achieve a desired layout
### Apply positioning settings to elements (fixed, relative, and absolute) to HTML elements to achieve a desired layout
### Identify which HTML elements have a default "inline" display value
### Identify which HTML elements have a default "block" display value
### Describe and use z-index positioning of elements

## Flexible Box Model
### Explain how flexible box layout lays out elements
- flexbox allows you to responsively place elements within a container element
-  a container’s width and height automatically adjust to fit the viewport, and the sizing, alignment, and spacing of the items inside the container are optimized for the available space.
### Use the `flex` property to specify grow, shrink, and basis values.
- `flex-grow` – dictates amount of available spaceinside the flex container the item should take up. Must be an integer. Default is 0.
- `flex-shrink` – Defines the ability for a flex item to shrink if necessary. Must be an integer. Default is 1.
- `flex-basis` – The default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword (e.g. auto, content).
- `flex` – Shorthand for `flex-grow`, `flex-shrink` and `flex-basis`. Default is 0 1 auto.
### Use the `flex-direction` property to direct the layout of the content
- can be `row`, `column`, `row-reverse`, or `column-reverse`
### Use the `flex-wrap` property to affect the wrap of content layout within an element using flexible box layout
-
### Use `align-self`, `justify-content`, and `align-items` to change the way that children elements are laid out in a flexible box layout
- `justify-content` – Defines the alignment of flex items along the main axis and distributes extra container space around/between items.
- `align-items` – Like justify-content for the cross axis (e.g. items aligned on the Y axis, instead of the X axis).
- `align-content` – Redistributes extra space on the cross axis.
### Use the `order` property to change the order in which elements will appear in a flexible box layout
- by default items appear in the order they are added to the dom, however, `order` property can be set on an individual item to make it appear earlier or later (default is 0)

## Grid Layout
### Explain how grid layout lays out elements
### Use the `grid-template-columns`, `grid-template-rows`, and `grid-template` properties to specify the layout of the grid using relative and absolute measures
```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 100px 300px;
}


```
### Use `grid-template-areas` to label areas of a grid and `grid-area` to assign an element to the area
```css
.item-1 {
  grid-area: header;
}
.item-2 {
  grid-area: main;
}
.item-3 {
  grid-area: sidebar;
}
.item-4 {
  grid-area: footer;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header"
    "main . sidebar"
    "footer footer footer";
}
```
### Use `grid-column-gap`, `grid-row-gap`, and `grid-gap` to set the "gutter" areas between elements in a grid layout
```css
.grid-container {
  ...
  grid-column-gap: 20px;
  grid-row-gap: 30px;
}
.grid-container {
  ...
  grid-gap: 30px 20px;
  /* <grid-row-gap> | <grid-column-gap>. */
}
```
### Use `grid-column-start`/`grid-column-end` and `grid-row-start`/`grid-row-end` to create spans across multiple columns and rows with positive integers, negative integers, and in conjunction with the "span" operator
```css
.item-1 {
  grid-row-start: row2-start;  /* Item starts at row line named “row2-start” */
  grid-row-end: 5;  /* Item ends at row line 5 */
  grid-column-start: 1;  /* Item starts at column line 1 */
  grid-column-end: three;  /* Item ends at column line named “three” */
}

.item-2 {
  grid-row-start: 1;  /* Item starts at row line 1 */
  grid-row-end: span 2;  /* Item spans two rows and ends at row line 3 */
  grid-column-start: 3;  /* Item starts at column line 3 */
  grid-column-end: span col5-start;  /* Item spans and ends at line named “col5-start” */
}
```
### Explain and use the shorthand versions of `grid-column` and `grid-row` to define how an element will span a grid layout
### Use the `order` property to change the default order in which items are laid out
### Explain and use the "fr" unit of measure
```css
.grid-container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 3fr;
}
```
### Use `justify-items`, `align-items`, `justify-content` and `align-content` to layout items in each grid area

## Interactivity
### Use the "hover" pseudo-class to be able to make changes to elements when the device pointer is over an element
```css
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
```
### Describe and use the `transition` property show animated changes due to class and pseudo-class CSS rule application
- `transition-property` (which css property to apply the transition to), `transition-duration` (how long the animation takes), `transition-delay` (how long to wait before beginning the animation), or use `transition` to set all three subproperties at once
- note that most position properties cannot be animated—can animate `margin` or `transform`
```css
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}
```
### Describe and use the `overflow`, `overflow-x`, and `overflow-y` properties to effect clipping and scrolling on elements
- `overflow` can be set to:
  - visible (default) – extra content just spills out
  - hidden - extra content is clipped
  - scroll - a scrollbar is always present, and one can scroll to access content that doesn't fit
  - auto - scrollbar appears only if the content overflows
- can also set `overflow-x` and `overflow-y` to specify horizontal and vertical setttings separately

## CSS Maintainability
### Describe what Block means in BEM
- "a standalone entity that is meaningful on its own"
- Block names may consist of Latin letters, digits, and dashes. e.g. `.block`
### Describe what Element means in BEM.
- "part of a block and has no standalone meaning."
- The CSS class is formed by using first the block name, plus two underscores, plus the element name: e.g. `.block__elem`
### Describe what Modifier means in BEM.
- “a flag on blocks or elements. Use them to change appearance, behavior or state.”
- The CSS class is formed as block’s or element’s name plus two dashes. e.g. `.block--mod` OR `.block__elem--mod` AND `.block--color-red.` (Spaces in complicated modifiers are replaced by dash.)
### Identify CSS class names that follow the BEM principle.
