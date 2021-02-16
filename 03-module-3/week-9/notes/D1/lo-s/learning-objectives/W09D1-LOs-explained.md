## Basic CSS (W09D1) - Learning Objectives

### Basic CSS

1. How to import other CSS files into your CSS file
- We can use the `@import` tag in order to import other CSS files into our own.
- We often use this syntax when importing CSS hosted at some url like so:
```css
/* The url and name to use for the font-family were found with Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');

h1 {
	font-family: 'Liu Jian Mao Cao', cursive;
}
```
- We can also use it for other CSS files that we have locally:
```css
@import 'other_styles.css';
/* url() also supports relative paths: */
@import url('other_styles.css');
```

2. Explain how CSS rules are applied based on their order and specificity
- `IDs` are intended to be unique, thus are considered highly specific since they should always target one element. 
- Order of calculating the `score specificity` of selectors:
  1. who has the most `IDs`? If no one, then continue evaluating
  2. who has the most `classes`? If no one, then continue evaluating
  3. who has the most `tags`? If no one, then continue evaluating
  4. `last read` in the browser wins.
- Example:
```html
<div id="main-header" class="header large on special otherClass">Some content here<div>
```
```css
#main-header.large.on (1 ID, 2 classes, 0 tags) 
  VS.
div#main-header.header (1 ID, 1 class, 1 tag, last read(lower in the file))
```
  - The first selector is more specific and any conflicting styles would have these styles take precedence.
  - Both selectors have one ID, so we continue evaluating. Since the first selector has more classes, it is considered more specific.

3. Describe and apply element, id, and class selectors
- In order to target elements to apply styles in our css, we can utilize the element tag, id, or class selectors to make our selection as general or as specific as we'd like.
- Element: To select an element by tag name, we can simply use that name before our style:
```css
h1 {
  (styles for all h1 elements)
}
```
- ID: To select an element by ID, we use the `#` before the ID:
```css
#main-header{
  (styles to apply only to the element with the ID of "main-header")
}
```
- Class: To select elements that match a class, we use a `.` before the class name:
```css
.large {
  (styles to apply to all elements with the class "large")
}
```

4. Write "combinators" to create compound selector statements to target specific elements
- _Direct child selector_: the carrot, `>` means a **direct** child. It will not apply to deeply nested descendents, just those at the first nested level.
  - `ul > li`
- _All descendants/children selector_: denotes with a `space` in between selectors. Styles will apply to ALL nested tags that match.
  - `ul li`
- To compare these two categories, take a look at this sample HTML:
```html
<ul>
  <li>First</li>
  <li>Second</li>
  <div>
    <h3>Puppy!</h3>
    <img src="puppy.jpg" />
  </div>
  <div>
    <li>Nested li</li>
    <li>Other nested li</li>
  </div>
</ul>
```
  - Using `ul > li` will apply styles to the li with "First" and "Second", but not the nested lis.
  - Using `ul li` will apply styles to all four lis because it will target all descendents, not just direct children.
- _Multiple items selection_: `comma` deliniated selectors. We can apply the same styles to multiple elements by separating our selectors with commas. 
  - `body, div, .large, #main, p, span, ul, li`

5. Explain and apply pseudo selectors for specific elements in specific states (i.e. :hover)
- Pseudo selectors allow us to provide styling rules conditionally, based on the state of an element.
- The `:hover` selector, for example, will apply the styles if the user's cursor is on top of the element.
- In the below example, by hovering over the link, the color and font changes on the text and a border is applied. When the user moves their cursor off of the link, the `:hover` styles are no longer applied and it goes back to the styling associated with the standard `a` tag.
```html
<a href="https://google.com">Link</a>
```
```css
a {
  color: #000fff;
  text-decoration: none;
}
a:hover {
  font-family: "Roboto Condensed", sans-serif;
  color: #4fc3f7;
  border: 2px solid #4fc3f7;
} 
```

6. Explain and apply the `::before` and `::after` pseudo elements, & Use the content CSS property to define the content of an element:
- The `::before` and `::after` pseudo elements can be used in CSS in order to add content at the very beginning or very end of an element.
- To specify what is going inside of this newly created element, we use the `content` property in the CSS.
- Example
```html
<h1>test</h1>
```
```css
h1::before {
    background-color: rebeccapurple;
    border-right: 1px solid yellow; 
    content: 'This is a...';
    margin-right: 4px;
    margin-left: 4px;
}   
h1::after {
    background-color: lightblue;
    border-right: 1px solid violet; 
    content: '...h1!';
    margin-right: 4px;
    margin-left: 4px;
}   
```
![pseudo-elements](pseudo-elements.png)

7. Style content on an HTML page targeting:
  - Type faces, sizes, styles, and weights
    - `font-size` : size of letters
    - `font-weight` : boldness of letters
    - `font-style` : italicization
    - `font-family` : actualy font
        - Some general font families: [ sans-serif, serif, cursive ]
  - Text transformation and alignment
    - `text-transform` : text casing
    - `text-decoration` : underlining
    - `text-align` : text justification (left, right, etc.)
  - Colors expresssed as names, hexadecimal RGB values, and decimal RGB values
    - The `color` css property changes the color of the _text_. 
    - The `background-color` css property does just what it says
    - We can use some keyword color names as values (blue, green, aqua, rebeccapurple, etc.)
    - We can also use hexadecimal values such as #FFFFFF (white). The hexadecimal values are the rgb values with each group of two digits representing the 0-255 range for red, green, and blue.
    - `rgb(255, 255, 255)` - takes in 3 integer values denoting levels of `red, green and blue`, with ranges of 0-255 each.
    - `rgba()` - Same as above but with additional argument (the 'a', or 'alpha' value) which represents how **transparent** the color will be (on a scale of 0-1, with 0 being completely transparent and 1 being opaque).
  - Everything about borders
    - The `border` property takes in three arguments:
      1. thickness: typically in pixels, how wide should the border be?
      2. line style: possible values include 'solid', 'dotted', 'dashed', etc.
      3. line color: what color the line should be, using any of the notations above
  - Shadows
    - Can be of two types, text or box.
    - The first two required arguments are the horizontal and vertical offset
    - An optional 'blur' argument to specify a radius for fading the shadow
    - An optional 'spread' argument (for box shadows) for adjusting the size of the shadow (positive makes the shadow larger, negative makes it smaller)
    - An optional 'color' argument for changing the color
    - An optional flag to make the shadow 'inset' instead of the default outset
  - Opacity (transparency)
    - Changes the overall transparency of an element.
    - Just like with rgba when defining a color, opacity takes an alpha value from 0 to 1, with 0 being completely transparent (not visible) and 1 (the default) being opaque.
  - Covering an element with a background image
    - We can use the `background-image` property, setting it's value to the url of a desired image.
    - We can point the url to an absolute path, such as an outside resource, or a relative location within our application
    - The `background-size` property will help us tell the browser how we want to scale/crop the image to fill the space.
      - `contain` will scale the image to the bounds of the container, potentially leaving some whitespace either vertically or horizontally so that the full image is seen
      - `cover` will scale the image but will completely fill the container, potentially cropping some portion of the image so that there is no whitespace
      - We can also specify percentages or units such as pixels that we would like the image to take up.
      - MDN has great examples of all of these options: https://developer.mozilla.org/en-US/docs/Web/CSS/background-size 
    ```css
        #picture-here {
          /* absolute path */
          background-image: url(https://appacademy.github.io/styleguide/assets/logo/logo-emblem-black-1000.png); 
          /* relative path */
          background-image: url(ajax.svg); 
          background-size: cover;
          height: 100px;
          width: 100px;
        }
    ```

8. Explain the generic font names "serif", "sans-serif", and "monospace" and correctly identify examples of each
- These generic font names tell the browser and OS what generic category of font should be use without being as specific as one particular font. This can help to ensure that the basic style of the site is maintained across different platforms if we don't need to specify an exact font that we want to use.
- "Serif" fonts have the widenings at the end of the letters. A classic example is Times New Roman.
- "Sans-serif" fonts do not have serifs. The ends of the letters end with straight edges. This could be desirable in computing because small details like serifs could potentially be lost or display differently based on different screen sizes. Helvetica is an example of a sans-serif font.
- "Monospace" fonts have all characters taking up the exact same width. Sometimes referred to as typewriter fonts because each character stamped with a typewriter had to line up exactly (since the page moved a set amount for each character). Courier is an example of a monospaced font.

9. Explain why using Web fonts helps with consistent experience across viewing devices:
- Using web fonts is great because it allows for `browser compatibility`.
- By downloading the font from an external resource and importing it into the styling, you are not relying on the browser to either have or not have the font available.

10. Explain absolute and relative length units in CSS
- There are a very large number of units that we can use in CSS.
- Absolute units are measurements independent of the user's window, other elements, etc. They are based off of real-world measurements.
- Relative units are based off of other objects, like the window (`vh` or `vw`), line height (`lh`), root element (`rem`), etc.
- An exhaustive list: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units
- Some commonly used examples:
  - Relative :
    - `rem` - relative to root 
    - `em` - relative to parent
    - `vh` - viewport height
    - `vw` - viewport width
  - Absolute Measure : 
    - `px` pixel
    - `pt` point
    - `cm` centimeter

11. Demonstrate how to link a stylesheet into an HTML page
- We can link to outside resources such as CSS stylesheets using the HTML `link` tag.
- The `link` element has to have the `rel` (relationship) and `href` (hypertext reference) attributes configured to indicate that this resource is a stylesheet and where it is coming from (a relative or absolute reference):
```html
<link rel="stylesheet" href="file.css">
```

12. Be able to calculate the specificity of CSS rules and determine which rule override the properties of another
- See LO #2: Explain how CSS rules are applied based on their order and specificity
- In general, specificity is determined by comparing the number of selectors associated with each category left to right until no tie exists: IDs, classes, element tags
- If there is still a tie, the last defined rule (lower in the file) is considered the most specific
- Specificity is used to determine which styles take presedence if there is a conflict. If there is no conflict, both styles are applied.

13. Use the `content` CSS property to define the content of an element
- See LO #6: Explain and apply the `::before` and `::after` pseudo elements, & Use the content CSS property to define the content of an element
- `content` lets us inject content into those pseudo elements, but if we wanted to adjust the content of an element that already exists within the HTML, we would want to use JavaScript, such as by changing its innerHTML property.
