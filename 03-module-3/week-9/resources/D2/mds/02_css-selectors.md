# CSS Selectors
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [CSS selectors](#css-selectors-1)
- [Class selectors](#class-selectors)
- [Compound class selectors](#compound-class-selectors)
- [One rule, many selectors](#one-rule-many-selectors)
- [Combinators](#combinators)
  - [Descendant selectors](#descendant-selectors)
  - [Direct child selector](#direct-child-selector)
  - [Adjacent sibling selectors](#adjacent-sibling-selectors)
- [Pseudo-classes](#pseudo-classes)
- [Pseudo-selectors](#pseudo-selectors)
- [Putting it together: CSS rules](#putting-it-together-css-rules)
- [CSS Rule Specificity](#css-rule-specificity)
  - [The four number calculation](#the-four-number-calculation)
  - [Back to the example](#back-to-the-example)
- [What you learned:](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

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
