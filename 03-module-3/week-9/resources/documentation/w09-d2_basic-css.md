# WEEK-09 DAY-2<br>*Basic CSS* {ignore=true}
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [CSS Fundamentals Learning Objectives](#css-fundamentals-learning-objectives)
- [Maintainability: Linking to an External Stylesheet](#maintainability-linking-to-an-external-stylesheet)
  - [Link to a stylesheet in an HTML file](#link-to-a-stylesheet-in-an-html-file)
- [CSS Selectors](#css-selectors)
  - [CSS selectors](#css-selectors-1)
  - [Class selectors](#class-selectors)
  - [Compound class selectors](#compound-class-selectors)
  - [One rule, many selectors](#one-rule-many-selectors)
  - [Combinators](#combinators)
- [FFE0B2 background color.](#ffe0b2-background-color)
  - [Pseudo-classes](#pseudo-classes)
  - [Pseudo-selectors](#pseudo-selectors)
  - [Putting it together: CSS rules](#putting-it-together-css-rules)
  - [CSS Rule Specificity](#css-rule-specificity)
  - [What you learned:](#what-you-learned)
- [CSS: Type, Properties And Imports](#css-type-properties-and-imports)
  - [Typography](#typography)
  - [Font-family](#font-family)
  - [Font size](#font-size)
  - [Font style for italics](#font-style-for-italics)
  - [Font weight for bold](#font-weight-for-bold)
  - [Aligning your text](#aligning-your-text)
  - [Decorating your text](#decorating-your-text)
  - [Casing your text](#casing-your-text)
  - [Background images](#background-images)
  - [What you've learned](#what-youve-learned)
- [CSS: Colors, Borders, and Shadows](#css-colors-borders-and-shadows)
  - [Colors](#colors)
  - [Applying colors](#applying-colors)
  - [Borders](#borders)
  - [Shadows](#shadows)
  - [Opacity](#opacity)
  - [What you've learned](#what-youve-learned-1)
- [Modernize Craigslist With CSS Attributes](#modernize-craigslist-with-css-attributes)
  - [Project overview](#project-overview)
  - [Phase 1: Add initial page styles](#phase-1-add-initial-page-styles)
  - [Phase 2: Style hovered-on and visited links](#phase-2-style-hovered-on-and-visited-links)
  - [Phase 3: Style the main page sections](#phase-3-style-the-main-page-sections)
  - [Phase 4: Style the footer list](#phase-4-style-the-footer-list)
  - [Phase 5: Add pseudo-elements](#phase-5-add-pseudo-elements)
  - [Bonus: style the calendar](#bonus-style-the-calendar)
  - [Bonus: use more pseudo-classes](#bonus-use-more-pseudo-classes)
  - [When you're done](#when-youre-done)

<!-- /code_chunk_output -->
________________________________________________________________________________
________________________________________________________________________________
# CSS Fundamentals Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

At the end of the material, you should be able to

* Demonstrate how to import other CSS files into your CSS file
* Explain how CSS rules are applied based on their order and specificity
* Describe and apply element, id, and class selectors
* Write "combinators" to create compound selector statements to target specific
  elements
* Explain and apply pseudo selectors for specific elements in specific states
* Explain and apply the `::before` and `::after` pseudo elements
* Style content on an HTML page targeting
  * Type faces, sizes, styles, and weights
  * Text transformation and alignment
  * Colors expressed as names, hexadecimal RGB values, and decimal RGB values
  * Everything about borders
  * Shadows
  * Opacity (transparency)
  * Covering an element with a background image
* Explain the generic font names "serif", "sans-serif", and "monospace" and
  correctly identify examples of each
* Explain why using Web fonts helps with consistent experience across viewing
  devices
* Recall and explain the different absolute and relative length units in CSS
* Demonstrate how to link a stylesheet into an HTML page
* Be able to calculate the specificity of CSS rules and determine which rule
  override the properties of another
* Use the `content` CSS property to define the content of an element learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

At the end of the material, you should be able to

* Demonstrate how to import other CSS files into your CSS file
* Explain how CSS rules are applied based on their order and specificity
* Describe and apply element, id, and class selectors
* Write "combinators" to create compound selector statements to target specific
  elements
* Explain and apply pseudo selectors for specific elements in specific states
* Explain and apply the `::before` and `::after` pseudo elements
* Style content on an HTML page targeting
  * Type faces, sizes, styles, and weights
  * Text transformation and alignment
  * Colors expressed as names, hexadecimal RGB values, and decimal RGB values
  * Everything about borders
  * Shadows
  * Opacity (transparency)
  * Covering an element with a background image
* Explain the generic font names "serif", "sans-serif", and "monospace" and
  correctly identify examples of each
* Explain why using Web fonts helps with consistent experience across viewing
  devices
* Recall and explain the different absolute and relative length units in CSS
* Demonstrate how to link a stylesheet into an HTML page
* Be able to calculate the specificity of CSS rules and determine which rule
  override the properties of another
* Use the `content` CSS property to define the content of an element

________________________________________________________________________________
# Maintainability: Linking to an External Stylesheet

Linking to an external stylesheet in an HTML file is a basic task all developers
should be able to do. While we could write in-line styles directly in our HTML
file, the common practice is to keep CSS in an external stylesheet linked to in
an HTML file.

CSS files tend to be long, so it's easier to keep track of styles when they're
in an external stylesheet. You will most likely use multiple stylesheets in a
typical Web application: a global stylesheet, styles for different pages, and
styles for different components or features. It's best to keep these separated
from your HTML and link to them.

## Link to a stylesheet in an HTML file

Let's go over how to link to an external stylesheet.

We would start by creating a new HTML file called example.html and setting it up
with the appropriate tags:

```html
<!-- example.html -->
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

Let's add this [link][1] tag to our HTML file in order to import a stylesheet.
This is the CDN link for **Normalize.css**, which is a common external
stylesheet that developers use to make elements render consistently across all
browsers. Our updated HTML file would look like the following:

```html
<!-- example.html -->
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
  </head>
  <body>
  </body>
</html>
```

Now, you can link to an external stylesheet, or even multiple _stylesheets_!
Whenever you want to add an external stylesheet, make sure to add it inside of
the `<head>` tags and use the [`<link>`][2] tag we used above. For example, now
that the styles have been normalized, you would normally want to add the styles
for your specific Web application. To do that, you'd just add another `link`
element with the "href" attribute set to the (normally relative) URL to your
site's stylesheet file.

```html
<!-- example.html -->
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link rel="stylesheet" href="/styles/site.css">
  </head>
  <body>
  </body>
</html>
```

Go forth, and style to your heart’s content!

[1]: https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link

________________________________________________________________________________
# CSS Selectors

HTML without CSS is like TV without color, like a person wearing a potato sack,
or like a Craigslist ad in search of someone’s other half -- extremely sad! HTML
and CSS work closely together to create the magical interfaces a user sees on
the front end, and it’s important to understand how they are interrelated.

In this reading, we’ll go over how to use CSS classes and selectors to style
HTML elements. We will review how to target specific elements via their
attributes by using CSS attribute selectors. Adding CSS attributes to elements
is one of the building blocks of becoming a front-end engineer, so start getting
comfortable using them!

## CSS selectors

A [CSS selector][1] applies styles to a specific DOM element or elements. A
selector can be any of the following basic types:

- **Type selectors** -- matches elements by node name (e.g. `div`, `li`, `a`,
  `p`)
- **Class selectors** -- matches elements by class name (e.g.
  `<button class=“active”>`)
- **ID selectors** -- matches elements by ID name (e.g. `<div id=”list-1”>`)
- **Universal selectors** -- matches elements of any type (e.g. `*`)
- **[Attribute selectors][2]** -- matches elements based on the presence or
  value of a given attribute (e.g. `a[title]` matches all `a` elements with a
  `title` attribute)

The following CSS shows examples of each selector type:

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

See the MDN doc on [CSS Selectors][1] for more examples using different types of
selectors.

## Class selectors

You will probably be using class selectors the most often in your CSS, since
they will apply styles to every element that has a particular class name. Let’s
look at an example of using a class selector to style multiple elements.

We want to style all elements with the **class of "boxy"** to have:

- A `border-radius` of 4px
- A `box-shadow` with a y-offset of 2px
- A `blur` of 2px
- A black `background-color` that is 20% opaque

We could use the following CSS to achieve the above specs:

```css
/* Class selector = class name preceded by a period */
.boxy {
  border-radius: 4px;
  box-shadow: 0 2px gray; /* offset-x | offset-y | color */
  filter: blur(2px);
  background-color: #000000;
  opacity: 0.2; /* 100% = 1 */
}
```

## Compound class selectors

Quite often, you will have elements in your HTML that have more than one class
applied to them. Consider the following example that has three `div` elements
each with two classes.

```html
<div class="box yellow"></div>
<div class="box orange"></div>
<div class="circle orange"></div>
```

The following table shows you what would be selected given single class
selectors:

| Selector  | What gets selected           |
|-----------|------------------------------|
| `.box`    | The first two `div` elements |
| `.orange` | The last two `div` elements  |

Right now, there's no way to have selector that can select _just_ the second
`div` element because if you use `.box` or `.orange`, you always get others. To
solve this, you can specify a selector that is a combination of the two classes
like this.

| Selector         | What gets selected          |
|------------------|-----------------------------|
| `.box.yellow`    | The first `div` element     |
| `.box.orange`    | The middle `div` element    |
| `.circle.orange` | Only the last `div` element |

Notice that there is _no space_ between each of the `.class` portions of the
compound selectors. If you did put a space in there, then that's something
called a _descendant selector_ which you will learn about later in this article.


## One rule, many selectors

What if we wanted to italicize all H1 and H2 elements in the document? We can
conveniently apply the same styles to multiple elements by combining selectors,
separated by a comma. Here is how we would italicize all H1s and H2s:

```css
h1,
h2 {
  font-style: italic;
}
```

Now, what if we wanted to italicize only H1s with the ID "heading" and H2s with
the class name "subheading". We could combine tag selectors with ID or class
selectors by writing the tag name immediately followed by the ID or class
selector. Again, we can apply the same styles to multiple elements by comma
separating the selectors.

```css
h1#heading,
h2.subheading {
  font-style: italic;
}
```

## Combinators

Combinators are a type of CSS selector that _combine_ other selectors into more
complex or targeted selectors. There aren't that many, and they're very
powerful. Please note, though, that using a lot of them in your CSS can quickly
grow the complexity of your CSS such that it becomes incomprehensible and
unmaintainable. Please, use them with moderation.

### Descendant selectors

The descendant selector is represented by two selectors with just white space
in between them (syntax: A(spaces, tabs, line breaks)B). This will select any
element (B) that is a descendant of the first element (A).

Let’s look at an example. We want to style all ABBR elements contained in P
elements so that all the content of the ABBR is uppercase.

We can use the following CSS to achieve the above specs:

```css
p abbr {
  text-transform: uppercase;
}
```

What happens when this style is applied to the following example HTML?

```html
. . .
  <body>
    <p>
      <span>Acronyms:</span>
      <abbr title="HyperText Markup Language">html</abbr>
      <abbr title="Cascading Style Sheets">css</abbr>
    </p>
    <span>More Acronyms:
      <abbr title="National Aeronautics and Space Administration">nasa</abbr>
      <abbr title="Unidentified Flying Object">ufo</abbr>
    </span>
    <p>
      <span>Even More Acronyms:</span>
      <ul>
        <li><abbr title="Graphics Interchange Format">gif</li></abbr>
        <li><abbr title="Technology, Entertainment, Design">ted</li></abbr>
      </ul>
    </p>
  </body>
. . .
```

Given the HTML and CSS above, the uppercase style would be applied to the ABBR
elements containing "html", "css", "gif" and "ted" because they are all
descendants of a P element. The ABBR elements containing "nasa" and "ufo" are
not descendants of a P element and would remain lowercase.

Because the descendant selector just looks at white space between the
different selectors, the following two will work just as well in your browser.
However, _don't do this_! This is bad and unmaintainable code.

```css
/* UNMAINTAINABLE CODE. DO NOT DO THIS. EXAMPLE ONLY. */
p                            abbr {
  text-transform: uppercase;
}

/* UNMAINTAINABLE CODE. DO NOT DO THIS. EXAMPLE ONLY. */
p


             abbr {
  text-transform: uppercase;
}
```

### Direct child selector

The `>` selector selects nodes that are direct children of the first element
(syntax: A > B). It will match every element B that is immediately nested inside
an element A. This is different than the descendant selector because it selects
_only_ the **direct children** of an element.

Let’s look at an example. We want to style all **elements with the "is-active"
class that are direct children of elements with the "menu" class** to have a
#FFE0B2 background color.

We can use the following CSS to achieve the above specs:

```css
.menu > .is-active {
  background-color: #ffe0b2;
}
```

What happens when this style is applied to the following example HTML?

```html
. . .
<body>
  <div class="menu">
    <div class="is-active">
      Belka
    </div>
    <div>
      <div class="is-active">
        Strelka
      </div>
    </div>
  </div>

  <div class="is-active">
    Laika
  </div>
</body>
. . .
```

Given the HTML and CSS above, the background color would be applied to just one
DIV -- the DIV containing "Belka" -- because it's the only DIV with the
"is-active" class that is a direct child of the DIV with the "menu" class.

### Adjacent sibling selectors

The `+` selector selects adjacent siblings (syntax: A + B). This means that the
second element (B) directly follows the first (A), and both share the same
parent.

Let’s look at an example. We want to style all **H2 elements immediately
preceded by H1 elements** to be italic. The style should be applied to H2s only
(not H1s). We can use the following CSS to achieve the above specs:

```css
h1 + h2 {
  font-style: italic;
}
```

If you had that in some CSS applied to the following HTML, the content of the
H2 tags tells you what would happen.

```html
<h1>Big header</h1>
<h2>This one is styled because it is directly adjacent to the H1</h2>
<h2>This one is NOT styled because there is no H1 right before it</h2>
```

## Pseudo-classes

A [pseudo-class][3] specifies a special state of the selected element(s) and
does not refer to any elements or attributes contained in the DOM (hence,
_pseudo_). A pseudo-class is formed by a selector followed by a colon followed
by the pseudo-class name (syntax: A:B).

Let’s look at an example. We want to style all **anchor tags only when the mouse
is over the content of the anchor tag** to have:

- The font Roboto Condensed
- The text color #4FC3F7
- No underline
- A 2px bottom border (without changing layout) with the color #4FC3F7

We can use the following CSS to achieve the above specs:

```css
a:hover {
  font-family: "Roboto Condensed", sans-serif;
  color: #4fc3f7;
  text-decoration: none;
  border-bottom: 2px solid #4fc3f7;
}
```

Hovering over an element is a _state_ related to a user action and not to
anything in the DOM. In the above CSS, we used the `:hover` pseudo-class
selector to apply styles to `<a>` elements only when a user hovers over them.

Check out the MDN doc on [Pseudo-classes][3] for a full list of pseudo-classes
we can use with CSS selectors. Quite often, you will use the following
pseudo-classes in real-world CSS.

* `active`: applies to elements like buttons when activated by a person, like
   when they "push down" on the button
* `checked`: applies to radio inputs, checkbox inputs, and options in drop
   downs when the user has toggled it into an "on" state
* `disabled`: applies to any disabled element, like a disabled button or input
* `first-child`: applies to the first element among a group of sibling elements
* `focus`: applies to elements that have the current focus, like inputs and
   buttons
* `hover`: applies to elements that currently have the pointing device (cursor)
   directly over it (it is problematic on touchscreens because it may never
   match the element because there is no persistent pointing device)
* `invalid`: applies to any form element in an invalid state due to client-side
   form validation
* `last-child`: applies to the last element among a group of sibling elements
* `not(selector)`: represents elements that do not match the provided selector
* `required`: applies to form elements that are required
* `valid`: applies to any form element in a valid state
* `visited`: applies to anchor tags of which the user has already been to the
   URL that the `href` points to

## Pseudo-selectors

Like pseudo-classes, pseudo-selectors select pseudo elements in the DOM. That's
kind of weird, pseudo elements. The two that you will use most often are the
`::after` and the `::before` pseudo-selectors. Both of them _create_ a
pseudo-element as a child of the element to which the property applies. The
`::after` variation creates the child as the _last_ child of the selected
element. The `::before` variation creates the child as the _first_ child of the
selected element. You can do neat things with that. For example, if you wanted
to put happy faces at the beginning of all paragraphs. Then, you could do
something like this

```html
<style>
  p::before {
    background-color: lightblue;
    border-right: 4px solid violet;
    content: ':-) ';
    margin-right: 4px;
    padding-left: 4px;
  }
</style>
<p>This is the first paragraph</p>
<p>This is the second paragraph</p>
<p>This is the third paragraph</p>
```

and get something [like this]! The browser inserts that text and styles it at
the beginning of each paragraph as the first child of the `p` element!

## Putting it together: CSS rules

A **CSS rule** is the collection of single or compound selectors, a curly brace,
zero or more properties and their settings, and a closed curly brace. You've
been seeing them throughout this course and in this reading. Now you finally
have a name for them, _CSS rules_.

```css
/* A CSS Rule that removes padding and margin from the document  */
/*---------------------------------------------------------------*/
/* The selectors are "html" and "body".                          */
/* The properties are "padding" and "margin", each with value 0. */
html, body {
  padding: 0;
  margin: 0;
}
```

## CSS Rule Specificity

It's quite possible that you will have an element in your HTML that are affected
by more than one rule. For example, say you had the following HTML.

```html
<style>
  .box { width: 50px; height: 50px; border: 1px solid black; }
  .orange { background-color: orange; }
  .yellow { background-color: yellow; border: 1px solid purple; }
</style>
<div class="box yellow"></div>
<div class="box orange"></div>
```

The element `.box.orange` has the following styles:

* a height of 50 pixels set by the `.box` class
* a width of 50 pixels set by the `.box` class
* a background color of orange set by the `.orange` class
* a solid black border one pixel in width set by the `.box` class

Whenever two rules apply, the browser will just combine all of the different
properties and apply them all to the targeted element. This is the _cascade_ in
"Cascading Style Sheets". That can lead to problems.

The element `.box.yellow` has the following styles:

* a height of 50 pixels set by the `.box` class
* a width of 50 pixels set by the `.box` class
* a background color of yellow set by the `.yellow` class

However, both rules specify a border. Which value does the `.box.yellow` element
get? This is where the rules of specificity come into play. By the end of this
section, you will know the answer.

### The four number calculation

The four numbers that the specificity calculation are, in _increasing_ order of
importance

* the number of tag selectors in the selector
* the number of class, pseudo-element, and attribute selectors in the selector
* the number of id selectors in the selector
* is this an inline style

Hopefully, you don't put inline styles in your HTML. So, you can ignore that
last one and focus on the first three.

The algorithm to determine the most specific rule goes like this. When comparing
two selectors

1. If one has a greater number of ids, then it wins. If there is a winner,
    STOP.
2. They must have the same number of ids, so the one with the greater number
    of classes, pseudo-classes, and attributes wins. If there is a winner,
    STOP.
3. They must have the same number of ids and the same number of classes, too.
    The rule with the greatest number of tags wins. If there is a winner, STOP.
4. They have the same number of ids, classes, and tags. The rule that the
    browser _read last_ wins.

Here is a variety of CSS selectors and their three-number scores. Assume that
this is the order in which the browser read them from various CSS files.

| Selector                 | # of ids | # of classes/attributes | # of tags |
|--------------------------|:--------:|:-----------------------:|:---------:|
| `.header`                |    0     |            1            |     0     |
| `.nav .current`          |    0     |            2            |     0     |
| `#main-header`           |    1     |            0            |     0     |
| `#main-header.large.on`  |    1     |            2            |     0     |
| `div.header`             |    0     |            1            |     1     |
| `div#main-header.header` |    1     |            1            |     1     |
| `div`                    |    0     |            0            |     1     |
| `ul > li`                |    0     |            0            |     2     |
| `ul li a.current`        |    0     |            1            |     3     |
| `ul li`                  |    0     |            0            |     2     |
| `ul.nav li a.current`    |    0     |            2            |     3     |
| `ul.nav li a`            |    0     |            1            |     3     |

From that table, here are some comparisons to see which would win.

| Selector 1              | Score | Winner | Score | Selector 2               |
|-------------------------|:-----:|:------:|:-----:|--------------------------|
| `.nav .current`         | 0-2-0 | &lt;-  | 0-0-1 | `div`                    |
| `.header`               | 0-1-0 | -&gt;  | 0-1-1 | `div.header`             |
| `ul > li`               | 0-0-2 | -&gt;  | 0-0-2 | `ul li` (last read)      |
| `#main-header.large.on` | 1-2-0 | &lt;-  | 1-1-1 | `div#main-header.header` |

### Back to the example

Here's that original code.

```html
<style>
  .box { width: 50px; height: 50px; border: 1px solid black; }
  .orange { background-color: orange; }
  .yellow { background-color: yellow; border: 1px solid purple; }
</style>
<div class="box yellow"></div>
<div class="box orange"></div>
```

The `.box` rule has a score of 0-1-0. the `.yellow` rule has a score of 0-1-0,
as well. That means last rule wins, so the element `.box.yellow` will have a
solid _purple_ border one pixel in width.

## What you learned:

* The different types of CSS selectors
* Examples of using class and attribute selectors, and others
* How to select elements via their relationship by using combinators
* How to apply styles based on an element’s state with pseudo-classes
* How to create and select pseudo-elements using `::before` and `::after`
* How to calculate the specificity of CSS rules to determine how they apply
* The definition of a "CSS rule"

[1]: https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
[like this]: https://codepen.io/aa-academics/pen/dyoqKyY?editors=1100

________________________________________________________________________________
# CSS: Type, Properties And Imports

There are a lot of different properties of HTML elements that you can set with
Cascading Style Sheets (CSS). This article introduces you to the common
properties used to style text and elements on a page. Further lessons will show
you more properties to do even more fancy things.

There is technically a difference between the term "typeface" and "font". You
may have never even heard the word "typeface" before. The difference between
"typeface" and "font" really only interests those people that design type faces
and those people that really like to correct other people about arcane and silly
things. This course will treat the terms interchangeably.

![type blocks](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-type-blocks.jpg)

All of this terminology goes back to the days of the printing press, when they
used printing presses with "type blocks", wood or lead blocks that had the
reversed image of a letter on it. They'd roll ink onto the raised letters and,
then, press them against paper to get the words on the page. This is why it's
called a "printing press", of course!

## Typography

The World Wide Web is primarily a text-based medium. It is important, then, that
you can use the CSS properties that relate to the text that you see on the
screen. When the browser draws the text on the screen for you to read, it uses a
combination of properties to determine how to render that text. That combination
is literally "the font" that will be used for showing you the text.

In this section, you will learn about the following properties that control how
fonts are selected to use so that text gets rendered to the screen.

* `font-family`
* `font-size`
* `font-style`
* `font-weight`

You'll also learn about a couple of properties that affect how the text is drawn
to the screen.

* `text-align`
* `text-decoration`
* `text-transform`

You will also get introduced to the `@import` statement because that's how you
can include other CSS files. It's particularly important because Google offers
a free service that allows you to select different fonts to include in your
Web page to add some _zing!_ to it.

## Font-family

By default, your browser is going to choose a standard (and probably ugly) font
family for your Web page.

When you use the `font-family` property, you are instructing the browser to use
a specific family of type. For example, you may put something like this into
your CSS for your Web page.

```css
font-family: 'Times New Roman';
```

That means that you would like the browser to use the family of fonts named
_Times New Roman_ as part of figuring out what that should mean. The browser
will then supply defaults for the other aspects of the font (size, weight, etc.)
and show the text affected by the rule.

```css
font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
```

That means that it should apply the font named "Helvetica Neue". If that doesn't
exist on the system (because it's not macOS or doesn't have an Adobe product on
it), then try to use "Helvetica". Most Windows computers have "Helvetica". Now,
if the computer doesn't have "Helvetica Neue" nor does it have "Helvetica", then
it should fall back to the default system "sans-serif" font. "What's that," you
ask....

Besides named fonts like "Times New Roman", "Comic Sans", and "Helvetica", the
most recent CSS specification defines eight generic names that you can use that
will rely on each browser and the OS that it's running on. Here is a table that
contains each of those eight names and the example rendering in Chrome on macOS
for that generic name. (You'll note that the "emoji", "math", and "fangsong"
generic names don't do anything.)

![example generic names](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-generic-font-names.png)

A _serif font_ is a font that has [serifs], those little widenings at the ends
of letters.

A _sans-serif font_ is a font that doesn't have serifs. In Latin _sans_ means
without. The original typesetters in Western Europe who invented this lingo were
all learned in Latin, the smarty-pants language of the day.

A _monospace_ font is one where every letter and symbol has the same width.
These are often called "typewriter fonts", too.

The _cursive_ and _fanatasy_ fonts are novelty fonts that don't get a lot of use
due to the widely different looks between browsers and OSes. Speaking of OSes...

### Fonts across the Internet

It's really important for you to know this following nugget: _not all computers
have the same fonts on them_. That means, if you want to use some fancy font
that you have installed on your computer that other people don't have, then the
folks that don't have that font will see the default _serif_ font instead. This
was especially prevalent a long time ago when Windows and Mac OS had very
different installed fonts. It was nearly impossible to make text look consistent
across browsing experiences. In 1998, the CSS Working Group introduced a new
feature of CSS, the `@font-face` directive that would allow a browser to import
fonts from files hosted on the Internet. But, it wasn't until 2008 that Apple
Safari and Mozilla Firefox actually implemented the feature. All of sudden, Web
designers were free to include stylized fonts on their Web pages that _everyone_
could properly see!

In most cases, you won't use `@font-face` yourself. Instead, you'll use one of
the font-hosting services on the Internet or use the ones that your company has
purchased. That's right, purchased! Many fonts are commercial which means you
buy them for specific types of uses, be it for Web or print, commercial or
personal. But, many people use Google Fonts which are free to use. However,
Google tracks the use of each font across the Internet by putting cookies on
people's devices. If you are privacy-oriented, you will _not_ want to subject
your Web application users to that invasion.

But, let's say you don't care! Let's say you want a fancy hand-written looking
font for your Web page. If you go to [Google Fonts] and search for "liu jian mao
cao". When you click on the search result, you will be taken to its page.

![Google Fonts](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-using-google-font.png)

When you click the "+ Select this style" link, it will show you a review panel.
You can click on the "Embed" header and, then, the "@import" link. That's the
information that you want so you can add it to your Web page. At the top of
your CSS file, you need to put the `@import` line from the example.

```css
@import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');
```

Now you can use it to change the font family for any element on your page by
following the second part of the embedding instructions. Here's an example of
some text that has the ".liu-jian-mao-cao" class applied to its surrounding
element and the CSS property/value to set it to the font.

```css
.liu-jian-mao-cao {
  font-family: 'Liu Jian Mao Cao', cursive;
}
```

![example imported font](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-custom-font-name.png)

## Font size

Now that you can change the family of the font, the next important aspect to
control is the size of the text begin rendered. You do this with the `font-size`
property in CSS. That's the easy part. The hard part is the _unit of
measurement_ you use with the size. CSS has two kinds of units: absolute and
relative.

In either case, the syntax for using these measurements is `(number)(unit of
measure)`. That means if you wanted something to be one centimeter in your Web
page, you would choose what property you want it to apply to and use the value
"1cm". If you want to set the size of your font to one centimeter, you would use
the property value combination like this:

```css
font-size: 1cm;
```

**Please note** that there is _no space_ between the value (1) and the unit of
measure (cm). Putting a space between the value and the unit of measure will
_cause the property to not get applied_! This is a source of many Web
developers' mistakes. Take care when you type your CSS.

### Absolute units

The absolute units are measured in pixels or inches or centimeters, the latter
two making _no sense_ on a Galaxy Note smartphone. You will see two absolute
units most of the time in CSS out in production, one being far more popular than
the other.

| Unit | Name   | Equivalent to           |
|------|--------|-------------------------|
| pt   | Points | 1pt = 1/72nd of an inch |
| px   | Pixels | 1px = 1/96th of an inch |

Back in the 1990s and early 2000s, the "pt" unit was still used quite a bit. By
the mid-2000s, it had fallen out of favor. Most of the time, you will likely
only see "px" which makes sense because pixels are how the dimensions of your
screen that you're looking at are measured.

### Relative units

You will also see only two relative units most of the time in CSS out in
production.

| Unit | Relative to                             |
|------|-----------------------------------------|
| em   | The font size of the containing element |
| rem  | The font size of the root element       |

#### An example of em

Say you had the following HTML.

```html
<style>
  html {
    font-size: 8px;
  }
  div {
    font-size: 1.5em;
  }
</style>
<div id="outer">
  This is some div text
  <div id="nested">
    This is some nested div text
    <div id="doubly-nested">
      This is doubly nested text
    </div>
  </div>
</div>
```

When that renders, the browser gets to the first `div` (that is, `#outer`) and
says to itself, "Hey! This needs to be `1.5em`, that is, 1.5 times the size of
the font that it would normally be. The browser checks and notices that it would
normally be "8px" tall (as specified by the CSS rule for the `html` element).
Therefore, it calculates that the text for that needs to be `1.5 * 8px = 12px`.
The text "This is some div text" gets drawn at 12 pixels tall.

Then, it gets to `#nested` which is a `div`. The browser says, "Hey! this needs
to be `1.5em`, that is, 1.5 times the size of the font that it would normally
be." Right now, the browser is drawing its text at `12px` from the previous
calculation (it's still in `#outer`), so it calculates a new font size of `1.5 *
12px = 18px`. The text "This is some nested div text" gets drawn 18 pixels tall.

Finally, it gets to the inner-most `div`, `#doubly-nested`. It does the same
calculation as before, multiplying 1.5 by the size that it's currently drawing
text. That's 18 pixels, right now. Thus, the text "This is doubly nested text"
gets drawn at `1.5 * 18px = 27px` tall.

![Example of em sizing](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-em-font-size.png)

#### An example of rem

Say you had the same HTML with one vital difference: the `1.5em` from the
previous example is changed to `1.5rem`.

```html
<style>
  html {
    font-size: 8px;
  }
  div {
    /* Here's the change */
    font-size: 1.5rem;
  }
</style>
<div id="outer">
  This is some div text
  <div id="nested">
    This is some nested div text
    <div id="doubly-nested">
      This is doubly nested text
    </div>
  </div>
</div>
```

Now, every time the browser gets to a `div`, it asks itself, "What is 1.5 times
the root element's font size?" That answer is the same, every time, because the
root element's font size doesn't change. It's just `8px` set right there in the
`html` rule. So, it doesn't matter that the `div` elements are nested; all of
the text just gets drawn at `1.5 * 8px = 12px`.

![Example of rem sizing](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-rem-font-size.png)

## Font style for italics

The `font-style` property is the setting that you'll use if you want to have
some of your text in italics. You will see in a lot of HTML that developers will
use the outdated `i` element or the `em` element, which is meant for _emphasis_.
That matters to screen readers. Here's an example of how to use `font-style`.

```html
<style>.book-title { font-style: italic; }</style>
<p>
  There is a funny movie named <span class="book-title">Frequently Asked
  Questions About Time Travel</span> with some good laughs in it.
</p>
```

## Font weight for bold

The `font-weight` property is the setting that you'll use if you want to have
some of your text in bold. You will see in a lot of HTML that developers will
use the outdated `b` element or the `strong` element, which is meant for
**strong text**, another type of emphasis that matters to screen readers.

You can use keyword values for `font-weight`: `normal` and `bold`.

You can use relative values for `font-weight`: `lighter` and `bolder`.

You can use even hundred numeric values from 100 - 900. The value of 400 is
equivalent to `normal` and the value of 700 is equivalent to `bold`.

Here's an example of how to use `font-weight`.

```html
<style>
  .bold { font-weight: bold; }
  .also-bold { font-weight: 700; }
</style>
<p class="bold">This looks bold.</p>
<p class="also-bold">This looks bold.</p>
```

## Aligning your text

There are four ways that you can align your text in an element. If you've ever
used a word processor like [LibreOffice Writer] or Google Docs, then you
probably have used the "left", "center", and "right" alignments available to you
in those programs. You just set them on the element that you want to affect the
layout of the text.

In the following table, all of the `th` and `td` elements have `text-align:
center` set on them.

![example generic names](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-generic-font-names.png)

There's one more, "justify", that makes the words align to the left and right
like you see in some books by adjusting the spaces between the words. The
inconsistent spacing between words created by justified text can be problematic
for people with cognitive concerns such as Dyslexia. The Web Content
Accessibility Guidelines expressly forbid this setting.

## Decorating your text

With the `text-decoration` property, you can put lines above, through, and under
text. The lines can be solid, dashed, or wavy! By default, links on a Web page
have an underline. That underline comes from this property.

```css
/* Default browser setting */
a {
  text-decoration: underline currentcolor;
}
```

Now that you know about it, you could change it, if you want. Read the short
[reference for `text-decoration`] on MDN.

## Casing your text

Sometimes you want some text to be all upper case, lower case, or title case
(that is, with all words capitalized). You can use `text-transform` to do this.

```html
<style>
  .loud { text-transform: uppercase; }
  .soft { text-transform: lowercase; }
  .title { text-transform: capitalize; }
</style>
<p class="loud">THE WIND blows across the sea.</p>
<p class="soft">THE WIND blows across the sea.</p>
<p class="title">THE WIND blows across the sea.</p>
```

![text transform](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-text-transform.png)

You can see that the "uppercase" setting forces all text to be capital letters,
the "lowercase" setting forces all text to be lowercase letters, and the
"capitalize" setting forces the first letter of every word to be capitalized but
leaves the rest alone.

## Background images

One of the fanciest things you can do is set the background image for an
element. The reason that you'd do this rather than including an `img` element in
your page is that you can "clip" the image however you want.

To specify a background image for an element, you set the `background-image`
property to a URL using the CSS `url()` function.

Then, to set the size of the background image so that it "best" covers the
element, you set the `background-size` property to "cover". To put that
together, if you want to see the App Academy logo on a page in a 100 pixel by
100 pixel `div` with an id of "aa-logo", then you would write the following CSS
to do that.

```css
#aa-logo {
  background-color: white;
  background-image: url(https://appacademy.github.io/styleguide/assets/logo/logo-emblem-black-1000.png);
  background-size: cover;
  height: 100px;
  width: 100px;
}
```

Here's the [Background Image of an Element] CodePen for you to play around with
that shows the above CSS. Try changing the width and height of the `#aa-logo` to
see how the "cover" setting behaves with the square App Academy Logo image.

## What you've learned

These are the fundamentals of making readable Web pages! Wow, that's some great
information. With all of that, you can now speak and act confidently about type
faces, sizes, styles, and weights. You know some of the generic names that
browsers support for font families. You can also adjust the alignment of the
text on your Web pages, as well as affect that its capitalization through
transformation. You also learned about how to use Web fonts through the use of
the `@import` statement from a hosting facility like Google Fonts. Finally, you
learned about four kinds of measures for fonts in this: "pt", "px", "em", and
"rem".


[Google Fonts]: https://fonts.google.com
[LibreOffice Writer]: https://www.libreoffice.org/discover/writer/
[serifs]: https://en.wikipedia.org/wiki/Serif
[Background Image of an Element]: https://codepen.io/aa-academics/pen/rNVZJeb?editors=1100
[reference for `text-decoration`]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

________________________________________________________________________________
# CSS: Colors, Borders, and Shadows

A Web page that just has black text on a white background is pretty boring. It
makes sense that some of the earliest features that allowed you to customize
the style of a Web page had to do with colors. Once those were firmly in place,
borders, shadows, and transparency came along pretty quickly. In this article,
you'll learn about how to affect these.

## Colors

In CSS you can specify colors in more than one way. This section shows you how
to do the three most popular ways: by their name, by their hexadecimal RGB
value, and by their decimal RGB value.

### Specifying by name

The least powerful way is to specify a specific [name of a color]. That link
takes you to a table that shows you the colors and the breakdown of each into
the values that you can use with the other ways to specify colors. Here's an
image that shows them all to you, too.

![list of X11 colors](https://upload.wikimedia.org/wikipedia/commons/2/2b/SVG_Recognized_color_keyword_names.svg)

### Specifying by RGB

In color theory, there is the idea of a color wheel. The colors red, green, and
blue comprise three pigments from which other colors can be made by mixing
together different values of red, green, and blue. In the following color wheel,
you can see that using red, blue, and green as the primary colors, then magenta,
yellow, and cyan are the secondary colors, and rose, violet, azure, spring
green, chartreuse green, and orange are tertiary colors.

![RGB color wheel](https://upload.wikimedia.org/wikipedia/commons/a/ab/RBG_color_wheel.svg)

The way that we specify the levels of each of those three colors, red, blue, and
green, are by using the values between 0 and 255 where 0 means _none_ and 255
means _as much as possible_. The following table shows some values for common
colors using the mixture of the three colors. Each column has the decimal value
and its two-digit hexadecimal representation.

| Red value  | Green value | Blue value | Result      |
|------------|-------------|------------|-------------|
| 255   (FF) | 0     (00)  | 0     (00) | Red         |
| 0     (00) | 255   (FF)  | 0     (00) | Green       |
| 0     (00) | 0     (00)  | 255   (FF) | Blue        |
| 255   (FF) | 0     (00)  | 255   (FF) | Magenta     |
| 0     (00) | 255   (FF)  | 255   (FF) | Yellow      |
| 0     (00) | 0     (00)  | 0     (00) | Black       |
| 255   (FF) | 255   (FF)  | 255   (FF) | White       |
| 190   (BE) | 190   (BE)  | 190   (BE) | Gray        |
| 148   (94) | 0     (00)  | 211   (D3) | Dark Violet |

To use these numbers in CSS, you can use these decimal variations with the
`rgb()` function. Or, you can convert them all to hexadecimals, concatenate them
together, and use that. For historical reasons, that is the most popular way,
even though it seems silly.

To specify the color dark violet, you could supply the three decimal color
values like this `rgb(148, 0, 211)` or the concatenated, two-digit hexadecimal
numbers like this, preceded by a hash symbol like this `#9400D3`.

### The alpha channel

You can change the transparency of a color by specifying its _alpha channel_
value. Presently, you can only do this with the `rgba()` function which is just
like the `rgb()` function, but takes a fourth parameter, the alpha channel
value. That value is between 0.0 and 1.0, inclusive. If you specify 0.0, that is
a totally transparent color. If you specify 1.0, that is a totally solid color.
If you specify 0.5, that is a half-transparent color.

## Applying colors

The first two ways that you can apply colors are to _text_ and to the
_background_ of elements. The associated CSS properties for each of those are in
the following table.

| To affect the...               | use the property... |
|--------------------------------|---------------------|
| color of text                  | `color`             |
| background color of an element | `background-color`  |

I know. Why isn't it named "text-color"? «shrug» It sure would be more
consistent. But, that's what is there.

So, to make unreadable text, you might use

```css
/* Try to decode the colors from */
/* the color table above         */
body {
  background-color: rgb(255, 0, 0);
  color: #00FFFF;
}
```

especially if you were a purveyor of substandard hamburgers.

![McDonald's Web 1990s Web site](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-colors-mcdonalds.jpg)

## Borders

To specify a border for an element, you use the `border` property and three
values separated by spaces:

1. The width of the border line (using length units of measurement like `px`)
2. The style of the line, being one of:
   * solid - used almost all of the time
   * dotted - used some times
   * dashed - infrequently used
   * double - infrequently used
   * groove - infrequently used
   * ridge - infrequently used
   * inset - infrequently used
   * outset - infrequently used
3. The color of the border using one of the methods previously discussed

So, to specify a border around an HTML element that is 4px thick, solid, and
green, you would write

```css
.highlighted {
  border: 4px solid green;
}

/* or */
.highlighted {
  border: 4px solid rgb(0, 255, 0);
}

/* or */
.highlighted {
  border: 4px solid #00FF00;
}
```

You also target specific borders of an element by appending a dash and the
location of the border: top, right, bottom, or left. For example, a common way
to make text look underlined is to use

```css
.underlined {
  border-bottom: 1px solid black;
}
```

## Shadows

There are two kinds of shadows in CSS, _box shadows_ and _text shadows_. The
box shadows apply to HTML elements. Text shadows apply to text.

To specify box shadows, you use the `box-shadow` property and specify one of the
following:

* The word "none" if you want no shadow
* Two lengths and a color
* Three lengths and a color
* Four lengths and a color

The first two lengths are the horizontal and vertical offsets of the shadow.

The third length, if provided, is the blur radius of the shadow. The bigger this
number, the bigger the blur, so the bigger the shadow.

The fourth length, if provided, is the spread radius. Positive values make the
shadow expand. Negative values make it shrink.

The color is usually some transparent value of black, like `rgba(0, 0, 0, 0.4)`.

Open up this CodePen that shows you an interactive example of [different
applications of the box-shadow property]. You can play around with the values to
see how they affect the different shadows.

Text shadows work similarly, but the format is more lenient. You can specify the
text shadow using:

* A color, the horizontal offset, and the vertical offset
* A color, the horizontal offset, the vertical offset, and the blur radius
* The horizontal offset, the vertical offset, and a color
* The horizontal offset, the vertical offset, the blur radius, and a color

That applies shadows to text.

## Opacity

You saw that you can affect the transparency of a color by using its alpha
channel. You can do the same thing with entire elements, causing them to be
see-through using the `opacity` property. Just like the alpha channel, it takes
a value from 0.0 to 1.0, inclusive, with 0.0 totally transparent and 1.0 being
completely opaque (solid).

Open up this CodePen that shows you [different applications of the opacity
property]. You can play around with the different values of the `opacity`
property to see how it affects the element.

## What you've learned

In this article you learned all about colors, opacity, borders, and shadows.
You should now be able to style content on an HTML page using colors as names,
hexadecimal RGB values, decimal RGB values, and decimal RGB values with an
alpha channel. You can use those colors, then, to customize borders and shadows.
Finally, you learned how to affect the entire transparency of an element using
its `opacity` property.

[name of a color]: https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart
[different applications of the box-shadow property]: https://codepen.io/aa-academics/pen/GRJXjdZ?editors=0100
[different applications of the opacity property]: https://codepen.io/aa-academics/pen/zYGJKMe?editors=0100

________________________________________________________________________________
# Modernize Craigslist With CSS Attributes

Craigslist is a notoriously under-designed and also very successful website. Its
table-like design, gray panels, and royal blue hyperlinks hearken back to the
early days of the Internet. It might be a blast from the past, but with a few
simple style tweaks we can bring Craigslist into the modern world.

In this project, you will use CSS attributes to update the styles on an example
Craigslist homepage. Use what you’ve learned about HTML attributes and CSS
selectors to apply styles to various DOM elements.

**Note:** In some of the instructions, you will be given the name of a CSS
property that you are to use. You can use the [MDN CSS Reference] to help you
figure out how to use those properties. Once a property has been introduced to
you, following instructions that use it will not refer to the property, again.

To start, clone the repository at
https://github.com/appacademy-starters/css-modernize-craigslist-starter.

## Project overview

The objective of this project is to re-skin the Craigslist homepage to use a
more modern design aesthetic. Visit [craigslist.org][1] to see the most current
version of the site. The following two screenshots show Craigslist’s current
homepage and an updated homepage, respectively.

**Current Craigslist homepage:**

![Craigslist screen shot](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/craigslist-homepage-example.png)

**A more modern Craigslist homepage:**

![Updated Craigslist page](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/craigslist-homepage-updated.png)

We have set up a project folder called _**attributes-project**_ for you to use.
The _**attributes-project.html**_ file contains all the HTML for the example
Craigslist homepage. Write all of your CSS for the page in
_**attributes-project.css**_, which is linked in the HTML file.

## Phase 1: Add initial page styles

Your Craigslist page should be bare-bones HTML at this point. Add the following
initial styles to the page in your _**attributes-project.css**_ file to make it
look better:

Use the **universal selector** to make all elements:

- Use the font "Helvetica Neue", "Helvetica", sans-serif
- Have a background color of Whitesmoke (#F5F5F5)
- Have a text color of Charcoal Gray (#464646)

Use **tag selectors** to:

- Remove the underline text decoration on all anchor tags by using the
  `text-decoration` property
- Give all UL elements 0 padding using the `padding` property

Use a **child combinator selector** to:

- Remove the bullet points on all LI elements that are direct children of UL
  elements using the `list-style` property

## Phase 2: Style hovered-on and visited links

Use **pseudo-classes** on all A links and SPANs that are direct children of A
links to:

- Style links that are hovered on and visited to have the Craigslist purple
  color #800080
- Style links that are hovered on to have a font weight of bold

## Phase 3: Style the main page sections

There are three main sections in the body of the page, represented by the HTML
elements with these IDs: "leftbar", "center" and "rightbar". Style their
container, represented by the element with the class name of "page-container",
as well as the three main sections, according to the specs below.

Use a **class selector** to select the element with the class "page-container"
and:

- Give the container a maximum width of 1200 pixels using the `max-width` property

Use **ID selectors** to style the elements with the IDs "leftbar", "center", and
"rightbar" so that:

- They are all floated left using the `float` property
- They all have top/bottom padding of zero and left/right padding of 30 pixels
  using the `padding` property
- They all have a box sizing of _border box_ using the `box-sizing` property

Use a **tag selector** on the FOOTER element to:

- Make the footer clear the float in both directions using the `clear` property

Use **ID selectors** to select the elements with the IDs "leftbar" and
"rightbar" and:

- Give them a width of 25%

Use an **ID selector** to select the element with the ID "center" and:

- Give it a width of 50%
- Give it a solid one pixel border in the color #464646
- Give it a border radius of ten pixels using the `border-radius` property

Use a **child combinator selector** to style all DIVs that are direct children
of the element with the "center" ID:

- Float them to the left
- Give each of them a width of 33%

Use a **descendant combinator selector** to style the H2 that is a descendant of
the element with the "topban" ID:

- Align the text of the H2 to the center

## Phase 4: Style the footer list

Use a **tag+class selector** to style the UL element with the class name
"clfooter" and:

- Align the text of the UL to the center
- Give it a top border only that is one pixel solid gray
- Give it top/bottom padding of ten pixels and left/right padding of zero pixels

Use a **child combinator selector** to style all LI elements that are direct
children of the UL with the class name "clfooter" and:

- Display all LIs as inline elements using the `display` property
- Give all LIs in the `ul.clfooter` 5px padding on the right side

## Phase 5: Add pseudo-elements

The Craigslist logo is a purple peace sign, which also happens to be a common
emoji these days. What else screams 2010s and beyond better than emojis? So,
let’s add some to the Craigslist homepage!

**Peace Symbol Emoji:**

![Peace emoji](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/peace-symbol-emoji.png)

Create **pseudo-elements** to add the purple peace sign emoji before every H4
element with the class name "ban" using the `::before` [pseudo-element][2].

**Hint**: While pseudo-classes let you style elements based on their state,
[pseudo-elements][2] let you style specific parts of the selected element. The
[::before][3] pseudo-element will create a pseudo-element that is the first
child of the selected element. This pseudo-element will not introduce a new
element into the DOM (hence, pseudo).

**macOS Pro-Tip**: You can use `Control+Command+Spacebar` on a Mac to pull up
the emoji keyboard. Search for the purple peace sign emoji.

## Bonus: style the calendar

Right now, the calendar is looking a little peaked.

* Use the `border-collapse` property to introduce the border back in. Set the
  border on each TD to be a solid 1px with color #333.
* Change all the colors of the text of the links to green.
* Make all of the link texts bold.
* Center-align the content of all the TDs in the calendar.
* Change the color of the text of the days in the calendar that are not links to
  a half-transparent black.
* Use the `cursor` property to indicate that a day without a link is not
  clickable. You'll have to analyze the HTML to figure out how to do that. You
  cannot use CSS selectors to select an element and, then, apply a style to a
  parent element. So, you'll need to figure out a way to select those table data
  elements.
* Highlight the day indicated as "today" (look at the HTML) by setting its
  background color to dark violet and its text color to white.
* When the pointer (cursor) is over one of the table data cells that contains
  the numbers, have the table cell's background color turn lavender.

## Bonus: use more pseudo-classes

In this project, you used pseudo-classes to style elements based on their hover
and visited states. Can you use more pseudo-classes? Use **three more
pseudo-classes** to style elements on the page.

Check out the MDN doc on [pseudo-classes][4] for a full list. Some good ones to
use: `:focus`, `:first-child`, `:last-child`, `:nth-child`

## When you're done

Call in an instructor to have them look at it. Well done!

[1]: https://craigslist.org/
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/::before
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
[5]:
  https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
[MDN CSS Reference]: https://developer.mozilla.org/en-US/docs/Web/CSS
