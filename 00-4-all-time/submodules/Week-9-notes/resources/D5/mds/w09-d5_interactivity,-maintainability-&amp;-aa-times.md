# WEEK-09 DAY-5<br>*Interactivity, Maintainability &amp; AA Times* {ignore=true}
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [Interactivity Objectives](#interactivity-objectives)
- [CSS Maintainability Objectives](#css-maintainability-objectives)
- [CSS Hover Effect And Handling Overflow](#css-hover-effect-and-handling-overflow)
  - [Adding a button effect on hover](#adding-a-button-effect-on-hover)
  - [A note about browser support](#a-note-about-browser-support)
  - [Content overflow](#content-overflow)
  - [What we learned:](#what-we-learned)
- [CSS Transitions](#css-transitions)
  - [Defining transitions](#defining-transitions)
  - [Examples](#examples)
  - [What can you affect with this?](#what-can-you-affect-with-this)
- [Maintainability: Using the BEM Guidelines for CSS](#maintainability-using-the-bem-guidelines-for-css)
  - [BEM Guidelines](#bem-guidelines)
  - [What is a Block?](#what-is-a-block)
  - [What is an Element?](#what-is-an-element)
  - [What is a Modifier?](#what-is-a-modifier)
  - [BEM Example](#bem-example)
  - [What we learned:](#what-we-learned-1)
- [Putting It Together](#putting-it-together)
- [Whack-A-Mole](#whack-a-mole)
  - [Getting started](#getting-started)
  - [Making a mountain out of a mole hill](#making-a-mountain-out-of-a-mole-hill)
  - [Hiding the mole](#hiding-the-mole)
  - [Animating the disappearing mole head](#animating-the-disappearing-mole-head)
  - [Making the playing field](#making-the-playing-field)
  - [The game](#the-game)
  - [Step 1: all moles are hidden at first](#step-1-all-moles-are-hidden-at-first)
  - [Step 2: popping up moles](#step-2-popping-up-moles)
  - [Step 3: whack the mole](#step-3-whack-the-mole)
  - [Step 4: marking a mole whacked](#step-4-marking-a-mole-whacked)
  - [Winning the game](#winning-the-game)
  - [Bonus: fast and furious](#bonus-fast-and-furious)
- [Responsive Design Project - The App Academy Times](#responsive-design-project-the-app-academy-times)
  - [AN IMPORTANT NOTE](#an-important-note)
  - [The starter project](#the-starter-project)
  - [The code files](#the-code-files)
  - [The specifications directory](#the-specifications-directory)
- [The Masthead](#the-masthead)
  - [Strategy: creating Web pages from mockups](#strategy-creating-web-pages-from-mockups)
  - [Pro-tip: using Emmet](#pro-tip-using-emmet)
  - [Three rows, three columns, one masthead](#three-rows-three-columns-one-masthead)
  - [The menu and search icons](#the-menu-and-search-icons)
  - [The action buttons (upper right corner)](#the-action-buttons-upper-right-corner)
  - [Fix the height of the first row](#fix-the-height-of-the-first-row)
  - [The little technology text](#the-little-technology-text)
  - [The last row](#the-last-row)
  - [The cute little borders](#the-cute-little-borders)
- [The Main Navigation](#the-main-navigation)
  - [Some tips from industry](#some-tips-from-industry)
  - [More tips](#more-tips)
- [Interest Links](#interest-links)
- [Preferences drop down](#preferences-drop-down)
- [The Search Modal](#the-search-modal)
- [Main Content](#main-content)
- [Main Page Media Queries](#main-page-media-queries)
  - [Medium screens](#medium-screens)
  - [Small screens](#small-screens)
  - [And that's it!](#and-thats-it)
- [Bonus: Slide-In Sidebar](#bonus-slide-in-sidebar)

<!-- /code_chunk_output -->
________________________________________________________________________________
________________________________________________________________________________
# Interactivity Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

* Use the "hover" pseudo-class to be able to make changes to elements when the
  device pointer is over an element
* Describe and use the `transition` property show animated changes due to class
  and pseudo-class CSS rule application
* Describe and use the `overflow`, `overflow-x`, and `overflow-y` properties to
  effect clipping and scrolling on elementsjectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

* Use the "hover" pseudo-class to be able to make changes to elements when the
  device pointer is over an element
* Describe and use the `transition` property show animated changes due to class
  and pseudo-class CSS rule application
* Describe and use the `overflow`, `overflow-x`, and `overflow-y` properties to
  effect clipping and scrolling on elements

________________________________________________________________________________
# CSS Maintainability Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

When you are done with this, you will be able to

1. Describe what Block means in BEM
2. Describe what Element means in BEM.
3. Describe what Modifier means in BEM.
4. Identify CSS class names that follow the BEM principle.ing objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

When you are done with this, you will be able to

1. Describe what Block means in BEM
2. Describe what Element means in BEM.
3. Describe what Modifier means in BEM.
4. Identify CSS class names that follow the BEM principle.

________________________________________________________________________________
# CSS Hover Effect And Handling Overflow

Styling is a fun part of the Web development process! We can do all sorts of
neat things with CSS to delight the user and also create a professional-looking
app. Beyond color and font styles, we could also add effects to elements that
signal page activity/interactivity to the user or make certain elements stand
out.

Since buttons are typically calls to action on a page, they are often styled to
grab the user’s attention and invite a click. In this reading, we’ll review how
to add a simple button effect on hover, but this can apply to _any_ element.

## Adding a button effect on hover

Before we can add styles, we need a button. So let’s set one up in an HTML file.
We’ll also need to link to a CSS file that we’ll call `button-styles.css`.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="button-styles.css" />
  </head>
  <body>
    <button class="btn btn--active">Hover on me!</button>
  </body>
</html>
```

Now we can style our button using a simple property called **[transform][1]**
with a **translateY** value:

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

Adding `:hover` to the `.btn--active` class allowed us to create a hover effect.
Using `translateY()` moved the button up/down along the Y axis (vertically).
When a user hovers over the button it should move up, and when the user mouses
off the button it should move back down.

Check out this [CSS-Tricks doc on transform][1] to see other transformations we
could do on elements, as well as a list of browsers that support 2D and 3D
transforms.

## A note about browser support

If you open up your HTML file in a browser, right-click on the button and
inspect it, you should see a bunch of `button` styles from _user agent
stylesheet_. These are the default styles your browser has added to the `button`
element.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/browser-default-styles.png" width="50%">

If you don’t want any of these default styles on the button, you’ll have to
write override styles. Check this CSS-Tricks article ["Overriding Default Button
Styles"][2] for more information about default button styles across different
browsers.

It’s also a good idea to use a CSS library like [Normalize.css][3] to make sure
that element styles are rendered consistently across browsers. Once you’re done
styling an element or a page, open it up in different browsers and test for
expected behavior.

## Content overflow

What happens when you size an element to a width and height that can't hold all
of the content? By default, the browser will just show it all to you and, maybe,
mess up the way the page renders. To fix that, you can use the `overflow`
family of properties to specify how you want it to work.

There are four settings that the `overflow` family of properties can take.

| Setting | What it means                                                                               |
|---------|---------------------------------------------------------------------------------------------|
| visible | This is the default. It just lets you see everything, perhaps ruining the look of the page. |
| hidden  | This _clips_ the content. Anything beyond the boundary of the element is not visible.       |
| scroll  | _Always_ show a scroll bar, even if the content doesn't need one.                           |
| auto    | Only show a scroll bar if the content does overflow the available space.                    |

There are three members of the `overflow` family.

* `overflow-x`: Only apply the setting in a horizontal direction.
* `overflow-y`: Only apply the setting in a vertical direction.
* `overflow`:  Apply the setting to both the horizontal and vertical directions.

Check out [Examples of CSS Overflow] on CodePen to see those values in action.

## What we learned:

- How to create a hover effect
- How to use the transform property on elements
- Browser default styles and overriding them
- How the `overflow` family of properties handles overflow of text in an element

[1]: https://css-tricks.com/almanac/properties/t/transform/
[2]: https://css-tricks.com/overriding-default-button-styles/
[3]: https://necolas.github.io/normalize.css/
[Examples of CSS Overflow]: https://codepen.io/aa-academics/pen/jOPeNmp?editors=1100

________________________________________________________________________________
# CSS Transitions

CSS transitions provide a way to control animation speed when changing CSS
properties. Instead of having property changes take effect immediately, you can
cause the changes in a property to take place over a period of time. For
example, if you change the color of an element from white to black, usually the
change is instantaneous. With CSS transitions enabled, changes occur at time
intervals that follow an acceleration curve, all of which can be customized.

Animations that involve transitioning between two states are often called
implicit transitions as the states in between the start and final states are
implicitly defined by the browser.

CSS transitions let you decide which properties to animate (by listing them
explicitly), when the animation will start (by setting a delay), how long the
transition will last (by setting a duration), and how the transition will run
(by defining a timing function, e.g. linearly or quick at the beginning, slow at
the end).

## Defining transitions

CSS Transitions are controlled using the shorthand transition property. This is
the best way to configure transitions, as it makes it easier to avoid out of
sync parameters, which can be very frustrating to have to spend lots of time
debugging in CSS.

You can control the individual components of the transition with the following
sub-properties:

| Sub-property        | Definition                                                                                                                                                                                                                                   |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| transition-property | Specifies the name or names of the CSS properties to which transitions should be applied. Only properties listed here are animated during transitions; changes to all other properties occur instantaneously as usual.                       |
| transition-duration | Specifies the duration over which transitions should occur. You can specify a single duration that applies to all properties during the transition, or multiple values to allow each property to transition over a different period of time. |
| transition-delay    | Defines how long to wait between the time a property is changed and the transition actually begins.                                                                                                                                          |

## Examples

This example performs a four-second font size transition with a two-second delay
between the time the user mouses over the element and the beginning of the
animation effect:

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

When the mouse hovers over it, after a delay of two seconds, a four-second
transition begins which changes the font size of the text from its normal size
to 36px.

![Simple transition example](https://assets.aaonline.io/Module-Solo-Prep-Work/assets/example-css-transition-simple.gif)

In the following, any element with the "box" class will have combined transitions
for: width, height, background-color, transform.

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

When the mouse hovers over a box, it spins due to the rotate transform. Its
width and height change. Its background color changes.

![Multiple transition example](https://assets.aaonline.io/Module-Solo-Prep-Work/assets/example-css-transition-multiple.gif)

You can interact with the hover effects controlled via CSS for both of these
demos by hovering over the text and boxes in the [Transition Examples CodePen].

[Transition Examples CodePen]: https://codepen.io/aa-academics/pen/jOPvzxb?editors=1100

## What can you affect with this?

You can't apply transitions to every CSS property there is. Here is the [list
of animatable CSS properties]. If it's not in that list, then you can't animate
it.

Glaringly absent from that list are any CSS properties that allow you to
position elements on a Web page, properties like `left` or `bottom`. The work
around is to animate the _margin_ of the element.

[list of animatable CSS properties]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties

________________________________________________________________________________
# Maintainability: Using the BEM Guidelines for CSS

Ah, CSS: where your code gets a style upgrade. As a developer, you can do a lot
with CSS to dress up your code, from using colors and background images to doing
fancy animations. It can be fun to play with CSS, using different tricks to get
your website content to stand out. However, there’s one aspect of CSS that is a
pain point for developers: naming conventions.

Bad, or loose, CSS naming conventions are rampant in the codebases of many
software development shops. Without guidelines to follow, engineers create their
own, often conflicting, naming standards. One engineer might use `sword-case`
for her CSS classes, while another might use `snake_case`. Another person on the
same team might, for inexplicable reasons, decide to use `camelCase`. The
mismatched standards make for code that isn’t easy to read and can lead to
confusion, errors, and extra time spent debugging or hunting for the correct
classes. In other words, complete anarchy!

## BEM Guidelines

To solve the problem of loose standards, reputable developers have created
guidelines by which all developers can abide. One of the most popular sets of
CSS conventions is [BEM][1], or the **“Block, Element, Modifier”** methodology.

## What is a Block?

According to [BEM][2], _a **Block** represents “a standalone entity that is
meaningful on its own.”_

Rules for Blocks:

- Blocks can be nested and interact with each other, but they are semantically
  equal.
- Holistic entities without DOM representation (such as controllers or models)
  can be blocks.
- Block names may consist of Latin letters, digits, and dashes.
- Any DOM node can be a block if it accepts a class name.

Example Block:

**HTML**

```html
<div class="”block”"></div>
```

**CSS**

```css
.block {
  color: red;
}
```

## What is an Element?

According to [BEM](http://getbem.com/naming/), _an **Element** represents “part
of a block and has **no** standalone meaning.”_

Rules for Elements:

- Any element is semantically tied to its block.
- Element names may consist of Latin letters, digits, dashes and underscores.
- The CSS class is formed by using first the block name, plus two underscores,
  plus the element name: `.block__elem`
- Any DOM node within a block can be an element. Within a given block, all
  elements are semantically equal.
- In CSS, there should be no dependency on other blocks/elements on a page (i.e.
  the Element class should be used independently).

Example Element:

**HTML**

```html
<div class="”block”">
  <span class="block__elem"></span>
</div>
```

**Good CSS**

```css
.block__elem {
  color: red;
}
```

**Bad CSS (i.e. extraneous use of .block class and div element selector)**

```css
.block .block__elem {
  color: red;
}
div.block__elem {
  color: red;
}
```

## What is a Modifier?

According to [BEM][1], _a **Modifier** represents “a flag on blocks or elements.
Use them to change appearance, behavior or state.”_

Rules for Modifiers:

- Modifier is an extra class name which you add to a block/element DOM
  node.(Examples: .button--_active_, .button\__text--\_red_)
- Add modifier classes only to blocks/elements they modify, and keep the
  original class (e.g. keep the class _.button_ and add _.button-active_).
- Modifier names may consist of Latin letters, digits, dashes and underscores.
- The CSS class is formed as block’s or element’s name plus two dashes:
  `.block--mod` OR `.block__elem--mod` AND `.block--color-red`. (_Spaces in
  complicated modifiers are replaced by dash._)

Example Modifier:

**Good HTML (i.e. keep original block class)**

```html
<div class="nav nav--dark">...</div>
<div class="nav__list-container nav__list-container--shadow">...</div>
```

**Bad HTML (i.e. remove original block class)**

```html
<div class="nav--dark">...</div>
```

**CSS**

```css
/* Use modifier class name as selector. */
.nav--dark {
}

/* Alter elements based on a block-level modifier. */
.nav--dark .nav__list-container {
}

/* Element modifier: */
.nav__list-container--shadow {
}
```

## BEM Example

Here is an example use case for BEM, straight from the [BEM guidelines][1]:

Suppose you have block `form` with modifiers `theme-xmas` and `simple` and with
elements `input` and `submit`, and element `submit` has its own modifier
`disabled` for not submitting the form while it is not filled:

**HTML**

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

**CSS**

```css
/* block selector */
.form {
}

/* block modifier selector */
.form--theme-xmas {
}

/* block modifier selector */
.form--simple {
}

/* element selector */
.form__input {
}

/* element selector */
.form__submit {
}

/* element modifier selector */
.form__submit--disabled {
}
```

## What we learned:

- Developers use CSS guidelines, like BEM, to make their classes and styles more
  consistent.
- BEM stands for "Block, Element, Modifier".
- The definition of a Block and examples.
- The definition of an Element and examples.
- The definition of a Modifier and examples.

[1]: http://getbem.com/
[2]: http://getbem.com/naming/

________________________________________________________________________________
# Putting It Together

Tomorrow, you're going to put together what you've been studying in a less
structured way, where you will be called upon to apply your knowledge in total.
You're not going to learn anything new except, perhaps, some best practices and
pro-tips. Instead, you'll be _synthesizing_ what you've learned up to this
point. Review your work. Do your flash cards. Get some rest. Tomorrow, you have
to get with the cogitation.

________________________________________________________________________________
# Whack-A-Mole

This project ties together the CSS stuff that you've learned, so far this week:
positioning, hover effects, transitions, and overflow. When you're done, you
should have a nice Whack-a-Mole game that you can play and share with your
friends!

![Mole game screenshot]

## Getting started

To get started with this project, clone the starter repository from
https://github.com/appacademy-starters/responsive-design-whack-a-mole.

That starter repository contains the following files:

* **mole-head.png** which contains the image of the mole's head.
* **mole-hill.png** which contains the image of the dirt pile.
* **mole.css** which is the file in which you will write your CSS.
* **mole.html** which is the file in which you will write your HTML.
* **mole.js** which is the file in which you will write your JavaScript.

## Making a mountain out of a mole hill

That's not true. There are no mountains in this game.

The first challenge is to get the layout of an individual mole and its hill
correctly. You can see from the screenshot above that the dirt pile seems to be
_in front of_ the mole image. That means that there needs to be some kind of
_layering_ that needs to occur.

You may remember from the positioning reading, that when you absolutely position
an element, it removes it from the normal flow and puts it in a stack above the
other elements. Here is the screen shot that you previously saw where the pink
and blue boxes are absolutely positioned, taken out of the normal layout flow,
and stacked on top of one another.

![Absolutely positioned pink and blue boxes]

That's what you'd like to do with the mole head and the dirt pile. Here's an
orthogonal view of how the layers would look if you could look at the screen
from the side with the sizes of each of the elements shown.

![Mole head and hill layers]

Similarly to what you experienced in the positioning of the blue and pink boxes,
you want to create some kind of HTML element that contains the head and hill.
The parent element needs to have relative positioning. The elements that have
the head and hill need to be absolutely positioned.

Open up **mole.html** in VS Code. In the body, add a `div` element. Inside the
`div` element, create two image elements, one that uses **mole-head.png** as its
source and the other that uses **mole-hill.png** as its source. The image that
needs to be "on top" has to be the second one, so order matters here: first the
head image, then the hill image. (In case you forgot how to create an image
element, here's the [img documentation].)

Open up the **mole.html** file in your browser. If you did things right, your
page should look like this, right now. Just two images hanging out next to each
other.

![Mole images unstyled]

Now, it's time to get them properly "layered". After that, you will get them
positioned correctly so everything's properly lined up. To do this, you need
some CSS classes.

Following good maintainability standards, you need to come up with a name for
this Block that you're creating. It is meant to represent a whackable game
space. It contains a mole head and a dirt pile. The mole head and the dirt pile
have no standalone meaning, they exist inside this game space for a reason. If
they were outside the game space, then there existence would have another
meaning altogether. That means the mole head and dirt pile are Elements of the
Block. So, using BEM, you could create the following class names to represent
these HTML elements.

| Class name                             | BEM type | Reason for existing                                                   |
|----------------------------------------|----------|-----------------------------------------------------------------------|
| wgs (short for "whackable game space") | Block    | Used to encapsulate all of the things that are needed to whack a mole |
| wgs__mole-head                         | Element  | Used to target the mole head                                          |
| wgs__dirt-pile                         | Element  | Used to target the dirt pile                                          |

Using those (or whatever you dreamed up), add those classes to the appropriate
targets, the `div` and the two `img` elements.

Open up the **mole.css** file. Create three CSS rules, one for each of the
classes that you added to the elements. (Remember that a CSS rule is the
selector , the curly braces, and the properties to set.) Add "height",
"position", and "width" properties to each of the three rules setting them to
the indicated values in that layer diagram from above.

If you got that set up, it should look like this, now.

![Mole images layered]

That's great! There's some real layering going on, here! Now you need to do
some positioning. The following diagram shows you how things should be moved
around to fit properly into the space.

![Mole image dimensions]

It's important to note that when you move absolutely-positioned elements
horizontally within their parent elements, you don't have to specify _both_ the
right and left unless you want to do some weird stretching. The same goes for
vertically. You don't have to specify _both_ the top and the bottom. For the
dirt pile, for example, you can specify `bottom: 0;` which means you want the
image zero pixels away from the bottom _or_ you can specify `top: 262px;`
because you want the top to be 262 pixels from the top of the `wgs` div. Either
works. Once you have the top, left, bottom, _OR_ right values set for the mole
head and the dirt pile, you should end up with it looking like the image above.

![Mole images positioned]

If for some reason your images don't align like that with the numbers provided,
try adjusting the value that you used for the mole head to make it look correct
in your browser.

## Hiding the mole

Now that you have the mole aligned properly, you need to get it so the mole can
go down into its hole to hide from your whacker. In the **mole.html**, copy and
paste the `div` and its images so you have two moles and dirt piles on your Web
page. Because those `div` elements are "block" elements by default, they end up
on top of each other. Just to make it easier _for now_, set the `display`
property of the Block CSS class to "inline-block";

![Game spaces inline block]

You are going to make it so the mole head of the right image is hidden. You want
to hide it by moving it down so that it is visually vertically beneath the pile
of dirt. That is a perfect example of a BEM Modifier. Recall that a Modifier is
used to _change appearance, behavior, or state_. In this case, it changes the
state of the mole head by moving it "down into the ground".

You will want to animate this, eventually, so you can't just set the `top`
property, if you recall. The `top` and other placement specifiers cannot be
animated using CSS. Instead, you'll want to use the `margin-top` property to
"move" the image down by increasing the margin above the element.

Create a new CSS class named `wgs__mole-head--hidden` which indicates that this
is the "hidden state" Modifier for the "mole-head" Element of the "wgs" Block.
Add that class to the second mole head in your HTML. Then, create a CSS rule for
that CSS class. You want to move the top of the mole head all the way to the
bottom of the `div`, visually beneath the dirt pile. To do that, set the
`margin-top` property of the rule for `wgs__mole-head--hidden` to the height of
the Block. Once you do that and refresh your HTML page in the browser, it should
look like this.

![Unclipped mole head]

That looks good. It's now beneath the pile of dirt. But, because the overflow of
HTML elements is visible by default, you need to clip that overflow so that you
will _only_ see the content when its inside the rectangle described by the `div`
and not outside of it. This is where the `overflow` property comes into play.
Add the `overflow` property to your Block CSS class and hide the overflow
content. Once you do that, it should now look like this.

![Clipped mole head]

The mole head is still there. It's just that you've hidden anything outside of
the boundaries of the Block element. Because of that, it is now hidden.

## Animating the disappearing mole head

Now that you have that set up, it's time to add some animation to get that mole
head out of the way with some panache. All you have to do is set the
`transition` property of the Element CSS class for the mole head. Set it to
"margin-top" and give it a transition duration of 0.25 seconds. If you refresh
your screen, nothing will have seemed to change. That's because transitions only
affect when CSS property values _change_.

In previous examples, the values of CSS properties changed because you hovered
over an element or something cool like that. Changes to CSS property values can
also be triggered when JavaScript adds or removes a CSS class from an element.
That's what you'll do to see if everything is working.

To test it, remove the Modifier CSS class from the mole head image in the HTML.
Refresh the browser and make sure you can see both of the mole heads, now. Then
add the following JavaScript block to the **mole.js** file. If you used
different CSS class names in your code, adjust the code below to target the CSS
class names that you used.

```js
window.addEventListener('DOMContentLoaded', () => {

  setInterval(() => {
    const moleHeads = document.querySelectorAll('.wgs__mole-head');
    for (let moleHead of moleHeads) {
      moleHead.classList.toggle('wgs__mole-head--hidden');
    }
  }, 1000);

});
```

If everything worked correctly, you should now see this!

![Moles popping up and down]

When you get tired of looking at that, delete the JavaScript and continue.

## Making the playing field

The original screen shot had eight mole heads in two rows of four. Two rows.
Four columns. That sounds like a job for a specific kind of layout.

The playing field is another Block. Go ahead and put a `div` element _around_
the two `div` elements that you already have. Add a Block CSS class name to that
outer `div` element. (For the sake of this article, the BEM class used for it
will be "pf", short for "playing field".) Then, copy and paste six more of the
`wgs` Blocks in that outer `div`. When you refresh the page, you should now see
eight mole heads and dirt piles. You may have to scroll around to see them
because those images are kind of large.

You can fix that by going into your **mole.css** file and dividing all of the
widths, heights, lefts, bottoms, tops, rights, and margin tops by 2. For
example, the `width` property of the `wgs__dirt-pile` is set to 640 pixels. Just
divide that value by two (640 / 2 = 320), and set the `width` to that value. If
you have an odd number, when you divide it by two, just round it either way and
use that. When you refresh the screen, all of the visuals should just be half as big.

![Eight moles not in a grid]

Even though on your screen it may look like they're in two rows of four columns
each they're not. If you adjust the size of the window, the images will reflow
and end up in different places. Now, use CSS Grid Layout to make it so the eight
game spaces are appropriately laid out.

Set the `display` property of that outer `div` element's Block CSS Class to
"grid". (In this article, the name of that class is `pf`, short for "playing
field".) Because you're not doing any tricky spans in this layout, just define
the Grid Layout to have two rows and four columns.

![Eight moles in a grid]

**Note**: If you're working on a smaller screen and can't see all of the moles,
then cheat a little bit and add this to your CSS file. It'll zoom out the page
and make the moles smaller for you.

```css
/* Only add this if you have a hard time seeing
   all of the moles or you just want to try it
   out. */
body {
  zoom: 0.75;
}
```

## The game

Now that everything seems to be properly positioned and have the ability to
animate, it's time to get the game a working.

## Step 1: all moles are hidden at first

Go through the HTML and add to the mole head `img` elements the Modifier CSS
class that you created earlier.

![Empty playing field]

## Step 2: popping up moles

In the **mole.js** file, create a function named `popUpRandomMole`. It should

* select all of the mole head elements on the page (there should be eight) by
  maybe using `document.querySelectorAll()` or
  `document.getElementsByClassName()` (those return lists of elements)
* calculate a random number between zero and seven, inclusive
* use that random number as the index of the list that you got for the mole head
  elements
* remove the `--hidden` Modifier CSS class from the mole head element
* set a timeout for one second to call another function named `hideMole` with
  the mole head element that you already selected

Now, create a function named `hideMole` that takes one parameter. It should

* add the `--hidden` Modifier CSS class from the element passed in as an
  argument
* set a timeout for one second to call `popUpRandomMole`

Finally, add an event listener for the "DOMContentLoaded" event. In the event
handler, set a timeout zero seconds to call `popUpRandomMole`

Assuming you got that coded correctly, here's what you should now see.

![Moles randomly popping up]:

## Step 3: whack the mole

In the event handler that you have for the "DOMContentLoaded" event, select all
of the mole head elements on the page. For each one, add an event listener for
the "click" event. In that event handler, have it add back the `--hidden`
Modifier CSS class to the event object's target.

In `popUpRandomMole`, change the timeout value to call `hideMole` from one
second to three seconds. this should give you some time to actually "whack" a
mole.

When you refresh the page, the moles should wait around for three seconds before
automatically hiding. You should also be able to click a mole to make it hide
immediately.

## Step 4: marking a mole whacked

CSS classes aren't just for styling. They can also add meaning to an element
that you can then use later in your program. That's what you'll do in this
section.

In the click event handler that you have where you whack a mole, add _another_
class to the event's target. This is another Modifier CSS class to indicate the
state of the mole head as "whacked". Earlier, you created a Modifier class to
indicate that the mole head is hidden. In this article, it is named,
`wgs__mole-head--hidden`. A class to mean "whacked" could then be
`wgs__mole-head--whacked`. If you use that name, great! If you come up with your
own Modifier name, that's great, too! Either way, that's the name of the class
that you want to add to the event target in the "click" event handler.

Now that the whacked moles are marked, the `popUpRandomMole` function should
choose only moles that are _not_ marked with that `--whacked` Modifier class.
You may recall from your readings that there is a `not()` pseudo-selector
available to you. You want `popUpRandomMole` to select elements _with_
`wgs__mole-head` and _without_ `wgs__mole-head--whacked`. That's a compound
selector that looks like this.

```css
.wgs__mole-head:not(.wgs__mole-head--whacked)
```

Change out the simple selector in `popUpRandomMole` with that one.

Because that selector could now return anywhere between zero and eight mole
heads, you have to change the way that you generate your random number that
you'll use for your index. Instead of it being between zero and seven, you need
it to be between zero and the number of unwhacked moles returned in the list
returned by that selector. Once you update that, refresh your page. Whacked
moles stay whacked!

## Winning the game

If you play this, now, you will find that after you whack all eight moles, you
may get a JavaScript error. That's likely because the selector in
`popUpRandomMole` is returning an empty list because all of the moles are
whacked. Put a test after your code selects that list. If the list length is
zero, you won! Have it indicate that in some way and just exit the function.

## Bonus: fast and furious

Instead of "winning" the game by whacking all of the moles, make it score based.

Have the game only popup moles 30 times. You should keep track of the total
number of whacks from the player and display it as the score. With each
successful whack, make the amount of time the mole stays popped up shorter. Have
the moles stop popping up after 30 moles are shown and indicate that the game is
now over. (To do this, you'll have to stop marking the moles as whacked or
change the selector back to selecting all moles.)

Show a countdown of how many moles are left in the game. Show the player's
score. Style it so it doesn't look bad with your CSS super powers.

Align the game spaces in the grid so that they're centered within their own
column.

Here's an example of what that would look like.

![Final game movie]


[Mole game screenshot]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/whack-a-mole-2.png
[Mole head and hill]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-hill-top-down.png
[Mole head and hill layers]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-hill-layers.png
[Absolutely positioned pink and blue boxes]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/absolute-blue-box.png
[img documentation]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img
[Mole images unstyled]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-images-unstyled.png
[Mole images layered]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-images-layered.png
[Mole image dimensions]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-hill-top-down.png
[Mole images positioned]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-images-positioned.png
[Game spaces inline block]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/games-spaces-inline-block.png
[Unclipped mole head]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-head-beneath-dirt-pile-unclipped.png
[Clipped mole head]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-head-beneath-dirt-pile-clipped.png
[Moles popping up and down]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/moles-popping-up-and-down.gif
[Eight moles not in a grid]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-playing-field-of-eight.png
[Eight moles in a grid]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-playing-field-in-grid.png
[Empty playing field]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/mole-game-1.png
[Moles randomly popping up]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/moles-randomly-popping-up.gif
[Final game movie]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/interactivity/assets/moles-bonus-final.gif

________________________________________________________________________________
# Responsive Design Project - The App Academy Times

It's now time to put the responsive design content that you've learned, this
week, together with event handling and selection that you have previously
learned, to make a compelling and pleasing Web page! You're going to get to
build this from the ground up with the same type of input that you'd get in a
real job. On each step, talk with your pair, decide now you want to attack the
problem, and get coding!

When working as a full-stack developer, you'll often collaborate with a
designer. Most likely they will provide you with a sequence of screenshots and
specifications for you to convert into neat, maintainable HTML and CSS.

![aa-times-large][aa-times-large]

They will often provide you screenshots of what the website will look like at
specific sizes as well. For example below is what the website should look like
at 1020px:

![aa-times-medium][aa-times-medium]

Here is a screenshot of an even narrower version of the site for windows less
than 1020px wide:

![aa-times-small][aa-times-small]

This project is similar to that experience, in that you will receive
requirements for each section of the page. Then, it's up to you and your pair to
write the HTML, CSS, and smattering of JavaScript to make it do what you need it
to do. Each step of the way will give you the requirements for the section that
you'll work on. There will also be guidance and suggestions for you so that you
can get some hints, if you need.

Though this is a big project, you'll do it step-by-step. As a developer, that's
what you do: take big projects and break them down into smaller pieces that you
can accomplish piece-by-piece. There will be a lot of advice given during this
project so you can get a feel for how to go about doing each of the steps.

## AN IMPORTANT NOTE

This project is not about reproducing the mockups with each pixel perfectly
matching the screenshots. It should be _in the spirit_ of the specifications.
So, don't stress out if it doesn't exactly match what you see. A little
variation is ok.

## The starter project

Download the starter project from the repository on GitHub at
https://github.com/appacademy-starters/responsive-design-aa-times. The files
that you download look like this. Each directory and file that contains content
is noted in the following tree.

```plaintext
index.html
/images - Contains the images for the project
/scripts
  └── home-page.js - Event handling for the page
/specifications
  └── /text - Contains the text for the Web page
  └── /screenshots - Contains what each step looks like
/stylesheets
  └── global.css - Adds global styles
  └── home-page.css - Layout for the "home page"
  └── main-styles.css - Puts together all the styles
  └── reset.css - Utility to "fix" browsers
  └── components - Separate files for each component
      ├── gear-dropdown.css
      ├── interest-links.css
      ├── main-content.css
      ├── main-nav.css
      ├── masthead.css
      ├── search-modal.css
      ├── sections-nav.css
      └── sections-sidebar.css
```

## The code files

The following sections explain in more detail the purpose of each file.

### The index.html file

This is where you will put the HTML that will define the content and structure
of the Web page. Right now, it's empty. In the first step, you'll start adding
to it.

### The home-page.js file

This file will contain the home-page specific event handling that will drive
some of the interactivity of the Web page. Right now, it's empty. You'll start
adding to it in step 4.

### The home-page.css file

This file will contain the overall structure of the "home page" of the Web site
that you're building, here. Right now, it's empty. In the first step, you'll
use Emmet to add standard HTML 5 structure to this file. Then, you'll add the
most common top-level structural elements, too: `header`, `main`, and `footer`.


### The main-styles.css file

You shouldn't have to make changes to this file.

Inside **main-styles.css**, there are a series of `@import` statements that load
the various CSS files in the project. You do this so that you don't have to go
searching through a file that has thousands of lines of CSS in it. This way,
when you work on a section of content on your team, each person can work in
their own file, if need be, without causing a huge mess.

```css
@import url("reset.css");
@import url("global.css");
@import url("home-page.css");

@import url("components/gear_dropdown.css");
@import url("components/main_content.css");
@import url("components/main_nav.css");
@import url("components/masthead.css");
@import url("components/search_modal.css");
@import url("components/sections_nav.css");
@import url("components/sections_sidebar.css");
@import url("components/interest_links.css");
```

The order of the first three imports is _very_ important. Those affect styles
for the entire Web page and work in conjunction with one another, layering
changes so you can have the correct basic palette with which to work.

You should be able to list the imports from the components subdirectory in any
order that you like. The CSS rules in those files should contain BEM-compliant
CSS class names. Because they use BEM, you won't have to worry about CSS class
names clashing with one another. This is one of the main reasons Web developers
use BEM.

Just as a reminder, BEM is Block, Element, Modifier. Don't forget the double
underscores and dashes when naming your classes.

### The reset.css file

Quite often, you will want to use what's known as a "reset" file to remove all
of the quirky, inconsistent default styles that browsers add to Web pages. If
you performed a search for "CSS reset files", you will find many articles and
versions of them. This project already includes one for you.

Whenever you choose to use a CSS reset file, it is _vitally_ important that you
include it as the first one of your `@import` statements. If you don't do that,
then all of the hard work that you put into making things look better can get
erased by the reset file if it comes after yours in the order of imports.
Remember that CSS specificity will always choose the last rule read for rules
that have the same specificity. So, it's important to have it first so that
_your_ CSS comes after.

## The specifications directory

The **specifications** directory contains files similar to what you would get
from a Web designer. Those files are organized into two subdirectories for you.

The **screenshots** subdirectory contains the screenshots of the entire project
that you saw at the beginning of this page. It also contains the screenshots
that you will use in each of the steps of this project so that you can have
them locally.

The **text** subdirectory contains all of the text that you see on the Web page.
This way, you can just copy and paste it into the HTML as you develop the page.

Also in the **text** directory is a Markdown file named **styles.md**. This file
contains a list of the colors, external resources, font families, global styles,
and measurements that you will use during this project.

**An important note**: You may want to keep your DevTools open and the _Disable
Cache_ checkbox **checked**. This will guarantee that changes to your CSS files
are loaded by the browser every time you refresh it. You can open your Chrome
DevTools on Windows by pressing F12 or Control+Shift+I. You can open Chrome
DevTools on macOS by pressing Command+Option+I. Then, go to the Network pane and
make sure the "Disable cache" checkbox is checked. **Keep your DevTools open!**

![disable cache]

Good luck! It's time to go to step 1!

[aa-times-small]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/1000px-mobile-aa-times.png
[aa-times-medium]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/1020px-aa-times.png
[aa-times-large]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/1230px-full-aa-times.png
[disable cache]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/devtools-enable-cache.png

________________________________________________________________________________
# The Masthead

![masthead][masthead]

In this first step, you will start with the HTML to create the masthead that you
see in the screenshot above. This screenshot is available for you to open and
refer to in **specifications/screenshots/masthead.png**. You may want to open it
and keep it around to refer to while you're working.

## Strategy: creating Web pages from mockups

In general, creating actual HTML from some image, mockup, or sketch, consists of
breaking the content into the rectangles that bound each visible section. Then,
you figure out how you can achieve that layout based on the technology available
to you and what you know.

Because HTML is a top-to-bottom kind of display, normally, it is nice to look
and see if you can spot different rows. Then, once you have the rows figured
out, you split them into columns to determine how to layout the elements. If
they form a nice grid (or grid-ish), then you should use the CSS Grid layout. If
they don't, then you should use block elements that contain sub-sections that
use the CSS Grid layout or the Flexible Box Model (flexbox).

Take a look at the masthead above to see if you can see rows of content. It
seems that there are three or four rows. When in doubt, start with the fewest
number of rows and, if that doesn't work, add more.

![masthead with rows]

Now, looking at each of the columns, it may or may not appear that the columns
are the same. If you can find common places to draw vertical lines across
all rows, then you're in luck and can use CSS Grid Layout which is, usually, the
easiest of the layouts to use.

![masthead with rows and columns]

As you get more and more experience with this type of visual decomposition, this
type of analysis will become second-nature to you. When you're starting out,
though, it really can help to have real-life print-outs of these mockups so that
you can draw the rows and columns as you see fit

To get started making those rows, it's time to open the **index.html** and start
filling it in.

## Pro-tip: using Emmet

Open **index.html** in Visual Studio Code. It's a nice empty file just waiting
for you to put code in it. Visual Studio Code comes with a nice code completion
feature named _Emmet_ that has good built-in templates. Try typing just "html"
in that file (without the quotation marks). You should see a drop down that
suggests different types of completion.

![emmet html5 completion]

Either click the one that reads "html:5" with your mouse, or select "html:5"
from the dropdown using your arrow keys, and press Return (or Enter, whatever
is on your computer). When you do that, it inserts the following code into
your text editor for you!

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

Please change the title of the document to "App Academy Times". Now, you're
ready to figure out that structure.

In the head, link in the **main-styles.css** file. Don't forget to set the "rel"
attribute to "stylesheet", otherwise the browser won't treat the CSS as CSS.
If you don't get the value for the "href" property correct, it won't correctly
load the style sheet and your styles won't show up. Take a moment to make sure
it's loading properly. In your DevTools (they should be open), make sure you
still have the Network tab chosen. Refresh your page. If you see a 200 next to
the entry, then it's loading just fine! Great job!

If you see that you are getting a 404 for **main-styles.css** in the list of
files loaded, then you should know what that means: Not Found. The value for the
"href" property needs to be _relative_ to the current page.

Most Web pages have a page header section, a main section, and a footer section.
It doesn't hurt to always put those in there so that you can structure your
documents so that everyone knows that's what's there. Luckily, HTML gives you
those three tags to use: `header`, `main`, and `footer`. Go ahead and put those
in the body of your document as _siblings_ to one another.

```html
<header></header>
<main></main>
<footer></footer>
```

While an HTML document should ever have one and only one `main` element, the
`header` and `footer` elements can appear elsewhere in the document, usually in
`section` tags where sections have some kind of header or footer. But, when the
`header` and `footer` are direct children of the `body` tag, that implies that
they are the `header` and `footer` for the entire document.

In the **global.css** file, set the maximum width for the `header`, `footer`,
and `main` elements to be 1400 pixels per the measurement in the **styles.md**
file. Also, set `margin` to "auto" so that they center within the body. Finally,
set some horizontal padding of 40px on the left and right.

The `body` element should use "arial, helvetica, sans-serif" as its font family
with a line height of "1em". You can set that latter property using the
`line-height` property. Put those settings in the **global.css** file, too.

## Three rows, three columns, one masthead

The masthead is in the header of the document. That means that structure that
you'll put into place will go in the `header` element. There are nine regions.
Content is in the four corners and the two lower center regions. A nice way to
approach this is to start with the structure that puts things in their right
places. After you get those in place, you can start filling it in with the
correct words and images.

First, structure. In the `header` element, create a `div` element with the BEM
class "masthead." Then, create six child `div` elements inside `.masthead`.
These six elements will contain the content of each of the six regions that have
content. Put some unique text in each of them to figure out which of the blocks
they are with respect to the content you see in the screenshot. Perhaps you
could have something like this:

```html
<div class="masthead">
  <div>menu and search</div>
  <div>action buttons</div>
  <div>little technologies</div>
  <div>date</div>
  <div>logo</div>
  <div>today's paper</div>
</div>
```

If you open your **index.html** in your browser, you should just see six lines
of very plain text.

> Pro tip: When trying to get a layout to look correct when you don't have
> any content to show, you can use a tool like the Chrome extension [pesticide]
> to show you the borders of your elements without interfering with your
> actual layout.

Now, open the **masthead.css** file. In there, create a CSS rule for the
elements with the "masthead" class that sets its display to use CSS grid layout
and declares a grid with three equally-sized columns. Refresh your page. The
six lines of text should now layout as two rows of three equally-sized columns.

If you forgot how to do this, you can use fr(actional units) from the CSS Grid
Layout standard.

![six regions in two rows]

(Ignore any difference in font families at this stage.)

It's now time to get them into three rows and in the correct positions.

Add BEM classes to each of the six child `div` elements of `.masthead`. Each of
these is an Element of the "masthead" Block, so name them accordingly with
double underscores between the Block and Element names. For example, the
solution uses the following class names for the six regions. However, you should
feel empowered to name them to whatever makes sense to you and your pair!

* masthead__menu-and-search
* masthead__actions
* masthead__technologies
* masthead__date
* masthead__logo
* masthead__paper

Once you have those properly labeled, go back to the **masthead.css** file.
Create CSS rules for the six new classes. In each of them, put the correct
`grid-column-start` and `grid-row-start` properties to position them correctly
across the grid.

![six regions in three rows]

Don't forget we are trying to end up with this layout:

![masthead with rows and columns]

Note that these instructions did not tell you to define in the CSS how many rows
are in the grid of the masthead. That's because the CSS Grid Layout will add
rows automatically for you.

With this, you have the masthead layout correct. Now, it's just time to put some
content in there and style it accordingly.

## The menu and search icons

These two icons are from the Font Awesome library. To include that, you need to
add another `link` to the `head` element that will import the Font Awesome
stylesheet. The URL to use is in the **specifications/text/styles.md** file.

It's generally good practice to place the `link` elements that load third-party
resources _before_ the `link` elements that load your own stylesheets. This
prevents some other style from inadvertently overriding yours.

Once you have that linked in there, replace the words "menu and search" of the
div that appears in the upper-left corner with the following HTML.

```html
<div>
  <i class="fa fa-bars"></i>
</div>
<div>
  <i class="fa fa-search"></i>
</div>
```

That will get rid of the words and show the icons.

To style those icons, Font Awesome recommends that you wrap them in your
elements and, then, apply styles to those elements that you wrap them in. That's
why those `div` elements are there. Both of these elements are going to be
clickable icons in your masthead. Because of that, you should come up with a new
CSS class following BEM rules for masthead button icons. Add that class to both
of the `div` elements surrounding the icons. Here are the specifications for
masthead button icons. If you forgot about how to set padding (because there's
at least four ways to do it), here's the [link to padding] on MDN.

| Property                   | Value                                                 |
|----------------------------|-------------------------------------------------------|
| Font size                  | 11 pixels                                             |
| Horizontal padding         | 9 pixels left and right                               |
| Vertical padding           | 7 pixels top and bottom                               |
| **Hover** background color | lightest gray (refer to **styles.md** for this value) |

Once you set those for the new CSS class, your icons should look fancy.

Make sure you note that our background color should only appear when
you hover over the icons.

What you need to do is layout the `div` elements in a row. You can do that by setting
their `display` property to "inline-block" or by setting the parent `div`
element's `display` property to "flex". The solution uses the "flexbox" version.
Since we want the buttons to align in the middle of this div you might consider
using `align-items` to center them vertically if you are using "flexbox".

Finally, add 20 pixels of padding to the left of the `div` element that contains
the icons.

![masthead menu and search icons]

If you're having a hard time with some of that, here's the HTML from the
solution:

```html
<div class="masthead">
  <div class="masthead__menu-and-search">
    <div class="masthead__icon-button">
      <i class="fa fa-bars"></i>
    </div>
    <div class="masthead__icon-button">
      <i class="fa fa-search"></i>
    </div>
  </div>
  <div class="masthead__actions">action buttons</div>
  <div class="masthead__technologies">little technologies</div>
  <div class="masthead__date">date</div>
  <div class="masthead__logo">logo</div>
  <div class="masthead__paper">today's paper</div>
</div>
```

If you're still having a hard time, here's the CSS from the solution for this
stage:

```css
.masthead {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.masthead__actions {
  grid-column-start: 3;
}

.masthead__date {
  grid-row-start: 3;
}

.masthead__icon-button {
  font-size: 11px;
  padding: 7px 9px;
}

.masthead__icon-button:hover {
  background-color: #f7f7f5;
}

.masthead__logo {
  grid-column-start: 2;
  grid-row-start: 3;
}

.masthead__menu-and-search {
  display: flex;
  padding-left: 20px;
}

.masthead__paper {
  grid-column-start: 3;
  grid-row-start: 3;
}

.masthead__technologies {
  grid-column-start: 2;
  grid-row-start: 2;
}
```

## The action buttons (upper right corner)

All buttons on this Web page have a common style. The specification for them is
in the **style.md** file. Create a rule for the `button` selector in the
**global.css** file and make it match the specifications in **style.md**.

The content for the upper right corner is three elements:

* a button with the text "Subscribe Now"
* a button with the text "Log In"
* a masthead icon button with the Font Awesome icon `<i class="fas fa-cog"></i>` (Remember to use the same markup you used for the other icons on the left side of the masthead)

Once you add that, you should be able to refresh the page and see the three
elements!

Use flexbox to get those three elements into a row and aligned right. Remember
that when you "justify content" in a flexbox container, you don't use directions
like "left" and "right"; instead, you use "flex-start" and "flex-end". Also
these icons should be vertically centered too, so you should use the same
`align-items` as you did on the other masthead icons.

![masthead action buttons]

## Fix the height of the first row

When compared to the specification, there is missing padding above and below
the buttons we just added. Setting the height of either `div` element that
contains the buttons should change the height of the entire row. You could also
add padding to one or both of the `div` elements. Because they are part of a grid,
setting the height of one affects the other. Try out different amounts until it
looks right to you and matches the specification.

## The little technology text

In the `div` that's in the center of the grid, put another `div` element that
contains four `span` elements containing the text "CSS", "HTML", "JavaScript",
and "Python." Add some BEM classes to these new elements so that you can make
the text transform to upper case, have a font size of 10 pixels, and have a text
color of dark gray (refer to **styles.md** for the actual hexadecimal value).
Put some margin between the `span` elements to space out the words nicely. Make
sure it's all centered.

You'll come back later to add the fancy little border over the top of the words.

The solution has this code for the HTML in the "little technologies" block:

```html
<div class="masthead__technologies">
  <div class="masthead__technology-list">
    <span class="masthead__technology">CSS</span>
    <span class="masthead__technology">HTML</span>
    <span class="masthead__technology">JavaScript</span>
    <span class="masthead__technology">Python</span>
  </div>
</div>
```

and this CSS for those BEM classes:

```css
.masthead__technologies {
  grid-column-start: 2;
  grid-row-start: 2;
  text-align: center;
}

.masthead__technology {
  margin: 0 4px;
}

.masthead__technology-list {
  color: #6f6f6f;
  font-size: 10px;
  text-transform: uppercase;
}
```

## The last row

Put the logo in the middle of the bottom row with an `img` element. The image is
in the **images/** directory. Use flexbox or `text-align` to center it in the middle.

In the bottom-left corner, put the date in there. You can get the text from the
**specifications/text/01_masthead.txt** file. Or, you can just type it in there.

In the bottom-right corner, put the content `<i class="far fa-newspaper"></i>
Today's Paper`.

The text in the two bottom corners should be 11 pixels high.

The CSS Grid Layout has vertically stretched the `div` elements in the bottom
row. For the two in the bottom corners, set the `display` property to "flex."
Then, use `align-items` to get them to the bottom of the element using the
"flex-end" setting. For the `div` that contains the text "Today's Paper", have
it justify its content to "flex-end." That should do that part.

Finally, it seems that the third row needs some more height to push it away from
the little technology words. Add some padding to the top of the `div` element
that contains the logo.

![masthead nearly finished]

Here's just the CSS from the solution for the elements across the bottom row:

```css
.masthead__date {
  align-items: flex-end;
  display: flex;
  font-size: 11px;
  grid-row-start: 3;
}

.masthead__logo {
  grid-column-start: 2;
  grid-row-start: 3;
  padding-top: 20px;
  text-align: center;
}

.masthead__paper {
  align-items: flex-end;
  display: flex;
  font-size: 11px;
  justify-content: flex-end;
  grid-column-start: 3;
  grid-row-start: 3;
}
```

## The cute little borders

For the three elements that run across the bottom of the grid, add a 1 pixel
border on the bottom of those elements with the light gray color (refer to
**style.md** for the actual hexadecimal value). This step reveals that there
needs to be some padding between the text in the bottom corners and the line. It
also shows that there needs to be a little more padding between the logo and the
line. Add that padding to the correct `div` elements that fill those regions.
The solution applies 11 pixels of padding to the bottom of the `div` elements
along the bottom row.

For those same elements, apply a border to the top of those elements with the
same size, color, and style.

![masthead borders nearly done]

Here's the CSS from the solution for them with the borders, too:

```css
.masthead__date {
  align-items: flex-end;
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  display: flex;
  font-size: 11px;
  grid-row-start: 3;
  padding-bottom: 11px;
}

.masthead__logo {
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  grid-column-start: 2;
  grid-row-start: 3;
  padding-bottom: 11px;
  padding-top: 20px;
  text-align: center;
}

.masthead__paper {
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  align-items: flex-end;
  display: flex;
  font-size: 11px;
  justify-content: flex-end;
  grid-column-start: 3;
  grid-row-start: 3;
  padding-bottom: 11px;
}
```

To the `div` element that contains the four technology words, apply a border
to the top, left, and right of it with the same style that you added in the
previous two steps. Right now, that `div` spans the entire width of its parent
element. On the parent element, apply a flexbox layout and justify the content
to the center.

![masthead border riser nearly done]

This is _so_ very close! In case you don't have that, here's the CSS for it:

```css
.masthead__technologies {
  display: flex;
  grid-column-start: 2;
  grid-row-start: 2;
  justify-content: center;
  text-align: center;
}

.masthead__technology {
  margin: 0 4px;
}

.masthead__technology-list {
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  color: #6f6f6f;
  font-size: 10px;
  text-transform: uppercase;
}
```

All you have to do is nudge that `div` down by one pixel. You can do that with
relative positioning! (You'll also need to set the background color to white so
that it correctly covers the border line beneath it.) And, that's it! Masthead
complete!

![masthead complete]

Now, it's on to the next step!

Below is the solution's HTML and CSS at this stage. Mind you, this is not the
_only_ way to do it. It is just _one way_ to do it. Your BEM naming, structure,
and styles may differ from this. That's great!

One thing to note, though, is the neatness an maintainability of the HTML and CSS.
The HTML is indented consistently. Spacing is applied consistently. The code is
fairly terse.

```html
<div class="masthead">
  <div class="masthead__menu-and-search">
    <div class="masthead__icon-button">
      <i class="fa fa-bars"></i>
    </div>
    <div class="masthead__icon-button">
      <i class="fa fa-search"></i>
    </div>
  </div>
  <div class="masthead__actions">
    <button>Subscribe Now</button>
    <button>Log In</button>
    <div class="masthead__icon-button">
      <i class="fas fa-cog"></i>
    </div>
  </div>
  <div class="masthead__technologies">
    <div class="masthead__technology-list">
      <span class="masthead__technology">CSS</span>
      <span class="masthead__technology">HTML</span>
      <span class="masthead__technology">JavaScript</span>
      <span class="masthead__technology">Python</span>
    </div>
  </div>
  <div class="masthead__date">
    Tuesday, October 31, 2019
  </div>
  <div class="masthead__logo">
    <img src="./images/AA_Times_Logo.png">
  </div>
  <div class="masthead__paper">
    <i class="far fa-newspaper"></i> Today's Paper
  </div>
</div>
```

Here, you see the CSS. Note how it is consistently indented and aligned. Note
that the properties in each of the rules are in alphabetical order. These little
things make huge differences later for maintainability. Try to be neat with your
programming.

```css
.masthead {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.masthead__actions {
  display: flex;
  grid-column-start: 3;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
}

.masthead__date {
  align-items: flex-end;
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  display: flex;
  font-size: 11px;
  grid-row-start: 3;
  padding-bottom: 11px;
}

.masthead__icon-button {
  font-size: 11px;
  padding: 7px 9px;
}

.masthead__icon-button:hover {
  background-color: #f7f7f5;
}

.masthead__logo {
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  grid-column-start: 2;
  grid-row-start: 3;
  padding-bottom: 11px;
  padding-top: 20px;
  text-align: center;
}

.masthead__menu-and-search {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.masthead__paper {
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  align-items: flex-end;
  display: flex;
  font-size: 11px;
  justify-content: flex-end;
  grid-column-start: 3;
  grid-row-start: 3;
  padding-bottom: 11px;
}

.masthead__technologies {
  display: flex;
  grid-column-start: 2;
  grid-row-start: 2;
  justify-content: center;
  text-align: center;
}

.masthead__technology {
  margin: 0 4px;
}

.masthead__technology-list {
  background-color: white;
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  color: #6f6f6f;
  font-size: 10px;
  position: relative;
  text-transform: uppercase;
  top: 1px;
}
```

[masthead]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead.png
[masthead with rows]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-marked-with-rows.png
[masthead with rows and columns]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-marked-with-rows-and-columns.png
[emmet html5 completion]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/visual-studio-code-emmet-html5.png
[six regions in two rows]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/six-regions-in-two-rows.png
[six regions in three rows]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/six-regions-in-three-rows.png
[masthead menu and search icons]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-menu-and-search-icons.png
[masthead action buttons]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-action-buttons.png
[masthead nearly finished]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-nearly-finished.png
[masthead borders nearly done]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-borders-nearly-done.png
[masthead border riser nearly done]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-border-riser-almost-done.png
[masthead complete]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-complete.png
[pesticide]: https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh
[link to padding]: https://developer.mozilla.org/en-US/docs/Web/CSS/padding

________________________________________________________________________________
# The Main Navigation

![masthead-with-sections]

This is just a series of words centered and spaced beneath the masthead that you
just created. This should, hopefully, be something that you can conquer without
too much trouble.

## Some tips from industry

It has become fairly prevalent in the Web-programming world to use `ul` elements
when creating navigation. Say that your Web site has four main navigation links,
"Products", "Services", "About", "Contact Us". Then, you will likely see
something similar to this in the HTML for those links with some CSS to style
it appropriately.

```html
<nav class="main">
  <ul>
    <li><a href="/products">Products</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</nav>
```

Your CSS reset already helps out a lot if you choose to mimic that structure. It
has removed the "bullet points" from `ul` elements. It has removed margin and
padding from the `ul` elements, too. The one thing it does not do is change the
way it gets laid out which, by default, is like a list! It'll look like a list!

```
Products
Services
About
Contact Us
```

What Web programmers will do is add a class to the `ul` element and the `li`
elements. Then, they'll use flexbox (or something) to change the way the `ul`
lays out its contents, in a row rather than in a column.

Since you're using BEM, you'll want to BEM up those `ul`, `li`, and possibly
`a` elements so that you can correctly apply styles to them.

You're encouraged to try to mimic this HTML and CSS so that you can follow best
practices.

## More tips

Here are some tips about how to do it.

* Put all of your styles in the **main-nav.css** file inside
  **stylesheets/components**
* The text for the navigation items is 12 pixels tall
* The text for all of these links is in **02_sections_nav.txt** inside the
  **specifications/text** directory

Whenever you apply a style, make sure you use the BEM naming convention.

![main-nav]

[masthead-with-sections]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-with-sections.png
[main-nav]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/main-nav.png

________________________________________________________________________________
# Interest Links

![interests bar]

This poses an interesting problem, these so-called "interest links". At first
glance, you may see only five columns:

* Dog Programmers
* Cats and Coding
* Plugging stuff in
* Some stock quotes?
* The weather

However, once you start applying the rules of rows and columns, you can go beyond
just five columns. You can see that there are nine columns: image, text, image,
text, image, text, text, image, text!

![interests bar marked up]

So, that's nine columns and one row. This is a candidate for either flexbox or
CSS Grid Layout. When it comes down to it, CSS Grid Layout has a nicer syntax
for declaring column widths. They appear to have the following relative sizes:
1, 2, 1, 2, 1, 2, 2, 1, 0.75. You can use those to define the column widths of
your grid. Or, if you don't like that weird 0.75 hanging out there, change it to
a 1. If you think it looks better, go with your gut!

Now, look deeper into each of the sections. You can see that there is a lot of
similarity between position, layout, and style of the images and words.

![interests bar subclasses shown]

With it highlighted like this, you can see that all of the images essentially
share the same size and position. You can see all of the headlines and teasers
have the same styling and layout. You can see that the fake stock prices all
have similar layouts. You can define a BEM class like
`interests-bar__story-title` and apply it to "Dog Programmers", "Cats and
Coding", and "Plugging stuff in" because they're _all_ title Elements in the
interests bar Block.

Taking all of that analysis, here is the layout without any of the content. The
same colors mean the same BEM class.

![interests bar layout]

The following table lists the BEM class names found in the solution for each of
the colors found in the layout above:

| Color  | BEM name                                                                  |
|--------|---------------------------------------------------------------------------|
| Orange | `interests-bar__image`                                                    |
| Blue   | `interests-bar__headline`                                                 |
| Green  | `interests-bar__story`                                                    |
| Brown  | `interests-bar__stock-price` (which contains both the name and the price) |
| Pink   | n/a (this `span` needs no special treatment)                              |
| Violet | `interests-bar__price`                                                    |
| Yellow | `interests-bar__big-text`                                                 |

Then, the styles for the specific presentation are put in rules that target
those selectors.

Don't forget to put your styles in **interest-links.css**.

![interests bar done]

[interests bar]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interests-bar.png
[interests bar marked up]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interests-bar-marked-up.png
[interests bar subclasses shown]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interests-bar-subclasses-shown.png
[interests bar layout]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interest-bar-layout.svg
[interests bar done]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interests-bar-done.png

________________________________________________________________________________
# Preferences drop down

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

________________________________________________________________________________
# The Search Modal

![search-bar-gif]

This is similar to what you did with the preference pane dropdown. However, you
don't have to do any unusual positioning of these elements.

* When a user clicks the magnifying glass, it toggles the visibility state of
  the search box and button. One click, visible. Two clicks, invisible. Three
  clicks, visible. Four clicks, invisible. And, so on.
* The `input` is of `type` "search" and has a `placeholder` of "Search"
  (`<input type="search" placeholder="Search">`).
* The button is just a normal button.

The **reset.css** style sheet removed all of the styling from the input box.
You won't see it when you put it on the HTML page. Because of that, you have to
style it yourself. In this exercise, that is to add a one pixel border to the
input with a border radius of two pixels.

Remember to put your CSS in the appropriate component stylesheet file.

[search-bar-gif]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/search.gif

________________________________________________________________________________
# Main Content

![main-content-with-opinions]

You've finally made it to the main content! No more messing around in the
`header` element. In this step, you will put your HTML into the `main` element!

Laying out the main content is an exercise in grids, which you have practiced a
couple of times. This just has more variety of content than you've seen before.
Don't worry. It's just the same but with more words.

Here's one way that you could decide to partition the page into its separate
sections:

![marked-up-screen-shot]

Put your CSS rules into **main-content.css**.

To add _back_ the bullet points to a `ul` element like you see in the first
article, use the CSS property `list-type` with the value "disc".

In the real world, when you want to embed a video, usually your video hosting
provider gives you a code snippet for how to embed videos in your page. App
Academy uses Vimeo as its hosting services. You can use the following code to
embed the video into your page:

```html
<iframe src="https://player.vimeo.com/video/380193367" width="480"
  height="280" frameborder="0" allow="autoplay; fullscreen"
  allowfullscreen></iframe>
```

Each of these _things_ is supposedly a news article. HTML has an `article`
element that you can use, here, instead of using `div` elements like you've done
up until now. This makes your HTML _more_ correct. For example, the content in
the lower left corner could have HTML markup like this:

```html
<article class="article">
  <header class="article__header">
    <h1 class="article__title">Where are they now?</h1>
    <h2 class="article__byline">
      By <span class="article__author">App Academy Alumni</span>
    </h2>
  </header>
  <p>
    First hand stories from App Academy graduates about transitioning to
    engineering positions at top tech companies in San Francisco.
  </p>
</article>
```

[main-content-with-opinions]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/main-content-and-opinions.png
[marked-up-screen-shot]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/marked-up-screen-shot.png

________________________________________________________________________________
# Main Page Media Queries

You have made it so that the Web site will render well on large screens. Now
it's time to make it responsive to different device widths.

## Medium screens

When the Web page is less than 1200, you need to hide the secondary column of
news stories and make the primary column fit the width of the page. Add that
media query into **main-content.html**

![aa-times-medium]


## Small screens

When the page is less than 1000 pixels wide, remove the interests bar.

![aa-times-small]

## And that's it!

![final product]

Unless....


[aa-times-small]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/1000px-mobile-aa-times.png
[aa-times-medium]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/1020px-aa-times.png

[final product]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/final-product.png

________________________________________________________________________________
# Bonus: Slide-In Sidebar

![slide-in-gif]

The bonus, here, is to add a slide-in sidebar. This is a two step procedure.
First, get the element to "slide in" when someone clicks the menu button. That's
not an easy thing to do. It should stay over on the left side of the screen even
during screen resizes.

Here's some starter HTML to get the ball rolling. See if you can make it appear
and be styled when someone clicks on the menu icon.

```html
<nav class="sidebar">
  <ul class="sidebar__list">
    <li>World</li>
    <li>
      San Francisco
      <ul class="sidebar__submenu">
        <li>Students</li>
        <li>Teaching Assistants</li>
        <li>Instructors</li>
        <li>Career Advisors</li>
        <li>Cats</li>
      </ul>
    </li>
    <li>New York</li>
  </ul>
</nav>
```

When you have that done, do the hover. First, see if you can just get a submenu
to show-up on a hover. Then, try to style the fancy triangle thing. That's a CSS
trick known as the CSS Arrow. You can make an arrow with a single `div`.

The idea is a box with zero width and height. The actual width and height of the
arrow is determined by the width of the border. In an up arrow, for example, the
bottom border is colored while the left and right are transparent, which forms
the arrow.

```css
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid black;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;

  border-top: 20px solid #f00;
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;

  border-left: 60px solid green;
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right:10px solid blue;
}
```

Check out this CodePen for [CSS Arrows] to play around with how they work.

[slide-in-gif]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/sidebar.gif
[CSS Arrows]: https://codepen.io/aa-academics/pen/NWqOVpa?editors=1100
