# WEEK-09 DAY-4<br>*All The Layouts* {ignore=true}
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [Media Query Objectives](#media-query-objectives)
- [Layout Lesson Learning Objectives](#layout-lesson-learning-objectives)
- [Flexible Box Layout Learning Objectives](#flexible-box-layout-learning-objectives)
- [Grid Layout Lesson Learning Objectives](#grid-layout-lesson-learning-objectives)
- [Layout: The Box Model](#layout-the-box-model)
  - [The Box Model](#the-box-model)
  - [Padding](#padding)
  - [Border](#border)
  - [Margin](#margin)
  - [What you learned:](#what-you-learned)
- [Layout: Positioning](#layout-positioning)
  - [Static positioning](#static-positioning)
  - [Relative positioning](#relative-positioning)
  - [Absolute positioning](#absolute-positioning)
  - [Fixed positioning](#fixed-positioning)
  - [Sticky positioning](#sticky-positioning)
  - [What we learned:](#what-we-learned)
- [Flexbox Layout](#flexbox-layout)
  - [Pre-flexbox float](#pre-flexbox-float)
  - [Using flexbox](#using-flexbox)
  - [Flexbox froggy](#flexbox-froggy)
- [CSS Grid](#css-grid)
  - [Bootstrap vs. CSS Grid](#bootstrap-vs-css-grid)
  - [Using CSS Grid](#using-css-grid)
  - [What we learned:](#what-we-learned-2)
- [Grid Container Styles](#grid-container-styles)
  - [Columns and Rows](#columns-and-rows)
  - [Repeating Columns and Rows](#repeating-columns-and-rows)
  - [Fractions](#fractions)
  - [Grid Template Areas](#grid-template-areas)
  - [Grid Gaps](#grid-gaps)
  - [Justify/Align Items](#justifyalign-items)
  - [Justify/Align Content](#justifyalign-content)
  - [Implicit Grids and Auto Rows/Columns/Flow](#implicit-grids-and-auto-rowscolumnsflow)
  - [Shorthand Container Properties](#shorthand-container-properties)
  - [What we learned:](#what-we-learned-3)
- [Grid Items Styles](#grid-items-styles)
  - [Spanning Columns/Rows](#spanning-columnsrows)
  - [Grid Areas](#grid-areas)
  - [Justify/Align Self](#justifyalign-self)
  - [Shorthand Item Properties](#shorthand-item-properties)
  - [What we learned:](#what-we-learned-4)
- [Grid Items Styles](#grid-items-styles-1)
  - [Spanning Columns/Rows](#spanning-columnsrows-1)
  - [Grid Areas](#grid-areas-1)
  - [Justify/Align Self](#justifyalign-self-1)
  - [Shorthand Item Properties](#shorthand-item-properties-1)
  - [What we learned:](#what-we-learned-5)
- [Flexible Box Games](#flexible-box-games)
- [Grid Layout Game](#grid-layout-game)
- [Recreate A Trello Dashboard With Flexbox](#recreate-a-trello-dashboard-with-flexbox)
  - [Project overview](#project-overview)
  - [Phase 1: Use flexbox to create the header nav bar](#phase-1-use-flexbox-to-create-the-header-nav-bar)
  - [Phase 2: Use flexbox to layout the "My Team" section](#phase-2-use-flexbox-to-layout-the-my-team-section)
  - [Phase 3: Use flexbox to create the tabbed nav bar](#phase-3-use-flexbox-to-create-the-tabbed-nav-bar)
  - [Phase 4: Use flexbox to create the boards](#phase-4-use-flexbox-to-create-the-boards)
- [Gridding Up A Page: Overview](#gridding-up-a-page-overview)
- [Gridding Up A Page: Phase One](#gridding-up-a-page-phase-one)
- [Gridding Up A Page: Phase Two](#gridding-up-a-page-phase-two)
- [Gridding Up A Page: Phase Three](#gridding-up-a-page-phase-three)
  - [Section 2](#section-2)
  - [Section 3](#section-3)
- [Gridding Up A Page: Phase Four](#gridding-up-a-page-phase-four)
  - [For Section 4 ("Other News")](#for-section-4-other-news)
  - [For Section 5 ("Smarter Living")](#for-section-5-smarter-living)
  - [For Section 6 ("Features")](#for-section-6-features)
  - [For Section 7 ("Discovery")](#for-section-7-discovery)
  - [For Section 8 ("Most Popular")](#for-section-8-most-popular)
  - [For Section 9 ("News")](#for-section-9-news)
  - [For Section 10 ("Footer")](#for-section-10-footer)
  - [What you've done](#what-youve-done)

<!-- /code_chunk_output -->
________________________________________________________________________________
________________________________________________________________________________
# Media Query Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Identify the different types of media that a media query can target
2. Explain how the media features (and prefixed subfeatures) of "aspect ratio",
   "height", "orientation", and "width" are applied
3. Use media queries to change the styles of content in an HTML page to achieve
   a desired effectctives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Identify the different types of media that a media query can target
2. Explain how the media features (and prefixed subfeatures) of "aspect ratio",
   "height", "orientation", and "width" are applied
3. Use media queries to change the styles of content in an HTML page to achieve
   a desired effect

________________________________________________________________________________
# Layout Lesson Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Describe how:
   * padding and margins work in the box model
   * the browser positions a fixed positioned element
   * the browser positions a relatively positioned element
   * the browser positions absolutely positioned elements with and without a
     relatively positioned parent element
   * the browser positions a static positioned element
2. Identify elements rendered with specific padding and margin settings
3. Apply padding and margins to HTML elements to achieve a desired layout
4. Apply positioning settings to elements (fixed, relative, and absolute) to
   HTML elements to achieve a desired layout
5. Identify which HTML elements have a default "inline" display value
6. Identify which HTML elements have a default "block" display value
7. Describe and use z-index positioning of elements

*Note:* You will learn about _sticky_ positioning. Because it's not supported on
old but still used browsers, you will not be assessed on it. However, feel free
to learn about it and use it in your code unless otherwise specifically
instructed to do otherwise.arning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Describe how:
   * padding and margins work in the box model
   * the browser positions a fixed positioned element
   * the browser positions a relatively positioned element
   * the browser positions absolutely positioned elements with and without a
     relatively positioned parent element
   * the browser positions a static positioned element
2. Identify elements rendered with specific padding and margin settings
3. Apply padding and margins to HTML elements to achieve a desired layout
4. Apply positioning settings to elements (fixed, relative, and absolute) to
   HTML elements to achieve a desired layout
5. Identify which HTML elements have a default "inline" display value
6. Identify which HTML elements have a default "block" display value
7. Describe and use z-index positioning of elements

*Note:* You will learn about _sticky_ positioning. Because it's not supported on
old but still used browsers, you will not be assessed on it. However, feel free
to learn about it and use it in your code unless otherwise specifically
instructed to do otherwise.

________________________________________________________________________________
# Flexible Box Layout Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Explain how flexible box layout lays out elements
2. Use the `flex` property to specify grow, shrink, and basis values.
3. Use the `flex-direction` property to direct the layout of the content
4. Use the `flex-wrap` property to affect the wrap of content layout within an
   element using flexible box layout
5. Use `align-self`, `justify-content`, and `align-items` to change the way that
   children elements are laid out in a flexible box layout
6. Use the `order` property to change the order in which elements will appear
   in a flexible box layoutnal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Explain how flexible box layout lays out elements
2. Use the `flex` property to specify grow, shrink, and basis values.
3. Use the `flex-direction` property to direct the layout of the content
4. Use the `flex-wrap` property to affect the wrap of content layout within an
   element using flexible box layout
5. Use `align-self`, `justify-content`, and `align-items` to change the way that
   children elements are laid out in a flexible box layout
6. Use the `order` property to change the order in which elements will appear
   in a flexible box layout

________________________________________________________________________________
# Grid Layout Lesson Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Explain how grid layout lays out elements
2. Use the `grid-template-columns`, `grid-template-rows`, and `grid-template`
   properties to specify the layout of the grid using relative and absolute
   measures
3. Use `grid-template-areas` to label areas of a grid and `grid-area` to assign
   an element to the area
4. Use `grid-column-gap`, `grid-row-gap`, and `grid-gap` to set the "gutter"
   areas between elements in a grid layout
5. Use `grid-column-start`/`grid-column-end` and `grid-row-start`/`grid-row-end`
   to create spans across multiple columns and rows with positive integers,
   negative integers, and in conjunction with the "span" operator
6. Explain and use the shorthand versions of `grid-column` and `grid-row` to
   define how an element will span a grid layout
7. Use the `order` property to change the default order in which items are laid
   out
8. Explain and use the "fr" unit of measure
9. Use `justify-items`, `align-items`, `justify-content` and `align-content` to
   layout items in each grid areaal learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

1. Explain how grid layout lays out elements
2. Use the `grid-template-columns`, `grid-template-rows`, and `grid-template`
   properties to specify the layout of the grid using relative and absolute
   measures
3. Use `grid-template-areas` to label areas of a grid and `grid-area` to assign
   an element to the area
4. Use `grid-column-gap`, `grid-row-gap`, and `grid-gap` to set the "gutter"
   areas between elements in a grid layout
5. Use `grid-column-start`/`grid-column-end` and `grid-row-start`/`grid-row-end`
   to create spans across multiple columns and rows with positive integers,
   negative integers, and in conjunction with the "span" operator
6. Explain and use the shorthand versions of `grid-column` and `grid-row` to
   define how an element will span a grid layout
7. Use the `order` property to change the default order in which items are laid
   out
8. Explain and use the "fr" unit of measure
9. Use `justify-items`, `align-items`, `justify-content` and `align-content` to
   layout items in each grid area

________________________________________________________________________________
# Layout: The Box Model

Understanding how to utilize margin, border, and padding around page elements
is an essential part of designing/developing for the Web.

In this reading, we’ll go over “The Box Model” and how to use the CSS
properties `margin`, `border` and `padding` on elements to create/enhance the
page layout.

## The Box Model

The CSS Box Model is a concept that basically boils down to every DOM element
has a box around it. The diagram below shows The Box Model with content in the
innermost layer, padding wrapped around it, a border wrapped around the padding,
and margin as the outermost layer.

![Box model](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/the-box-model.svg)

You can think of each box as a gift wrapped inside a few different layers.
Consider receiving a shiny new computer as a gift. Inside the box is the actual
computer (the _content_), which is wrapped in protective foam (the _padding_).
Outside of the foam is the cardboard box (the _border_), and outside of the box
is a fancy wrapping paper with glittery gold pineapples on it (the _margin_) cuz
_festive_!

We can change the size of the content with the CSS `width` and `height`
properties. We can add or remove padding with the `padding` property, set the
border with the `border` property, and add or remove the margin with the
`margin` property.

### Default box settings

According to [MDN][1], we know certain things about each box based on whether
the boxed element is displayed as a block or inline.

With elements (boxes) that have a `display` value of "block", either because it
is the default value for that kind of element (i.e., `div` elements, headers,
and `p` elements) or it is specifically overridden in the CSS, the browser
follows these rules to layout the element:

* The box fills available container space, and in most cases it fills up 100%
of the available space, becoming as wide as its container.
* Each new box appears on a new line/row.
* The CSS properties `width` and `height` are respected.
* The `padding`, `margin` and `border` of the box will push other elements
farther away from the box.

With elements (boxes) that have a `display` value of "inline", either because it
is the default value for that kind of element (i.e., `span`, `a`, and `img`
elements) or it is specifically overridden in the CSS, the browser follows these
rules to layout the element:

* Each box appears next to each other in a single line until it fills up the
available space.
* The CSS properties `width` and `height` don’t apply.
* The `padding`, `margin` and `border` of a box are applied, but they don’t
push other inline boxes away from the box.

The knowledge of which elements are inline and which are block, by default, is
important knowledge as you craft appealing and maintainable Web pages. As such,
you should refer to [MDN's list of inline elements][5] and [MDN's list of block
elements][6] to know which does what.

### Standard Box Model vs. border-box

In the standard Box Model, the `width` and `height` of an element set with CSS
refers to the width and height of the box’s _content_. Any `padding`,
`border` and `margin` added to the element will get added to the total size of
actual box. If `padding`, `border` or `margin` are removed from a box, the box
size decreases, but the `width` and `height` of the content stays the same.

```css
.box {
  border:  10px solid black; /* Applies to all four sides. */
  height:  100px; /* Content's height */
  margin:  50px;  /* Applies to all four sides. */
  padding: 25px;  /* Applies to all four sides. */
  width:   250px; /* Content's width */
}
```

![Standard content box layout](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/standard-box.svg)

This way of calculating width and height bothered many programmers. They wanted
to set the width and height of an element to _include_ the padding and border
because that just makes more sense than the other way. In CSS version 3, the
`box-sizing` property was added to the CSS specification which allows you to set
it to the values "content-box" (which is how it is by default) or "border-box",
which does what most Web developers want. Setting the `box-sizing` property to
`border-box` includes the width of the left border, right border, left padding,
and right padding in the overall `width`, and the top border, bottom border, top
padding, and bottom padding in the overall calculation of the `height`.

```css
.box {
  border:  10px solid black; /* Applies to all four sides. */
  box-sizing: border-box;
  height:  100px; /* Sum of content + top/bottom padding + top/bottom border */
  margin:  50px;  /* Applies to all four sides. */
  padding: 25px;  /* Applies to all four sides. */
  width:   250px; /* Sum of content + left/right padding + left/right border */
}
```

![Border box layout](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/border-box.svg)

### Inline + block = inline-block

For a long time, you had to choose between "inline" and "block" layout. What you
couldn't do was get block elements to be next to each other horizontally like
this.

![Statically positioned](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/static-pink-box.png)

Instead, you had to hack around it using the `float` property and hope that it
worked properly.

When the CSS version 2 came out, it introduced a new display property value of
"inline-block". This combined the best of both the "inline" and "block"
settings:

* Elements would still get laid out left to right
* The layout would take into account their specified width and height properties

With "inline-block", you could finally get what looked like columns without
having to resort to the `float` hack.

## Padding

[Padding][2] is a CSS property that applies padding on every side of a box.
This property is a shorthand for `padding-top`, `padding-right`,
`padding-bottom`, and `padding-left` (in clockwise order).

Padding values can be a length (i.e. px, em, rem) or a percentage (%). Here are
some examples:

```css
.box-1 {
  /* One value applies to all four sides. */
  padding: 3em;
}

.box-2 {
  /* Two values: top & bottom | left & right */
  padding: 20% 5%;
}

.box-3 {
  /* Three values: top | left & right | bottom. */
  padding: 15px 10px 20px;
}

.box-4 {
  /* Four values:  top | right | bottom | left*/
  padding: 0 10px 2em 1em;
}

.box-5 {
  /* Global values */
  padding: inherit;  /* OR initial OR unset */
}
```

As previously stated, `padding` is a shorthand value. Thus, the definition above
for the "box-4" class could be declared like this, too.

```css
.box-4 {
  padding-top: 0;
  padding-right: 10px;
  padding-bottom: 2em;
  padding-left: 1em;
}
```

The `initial` or default padding values of most elements are 0.

An element can `inherit` padding from its container, or you can use `unset`
to clear the previously set padding.

Padding is wrapped around content and closely tied to it. If you set an
element’s `background-color` or `background-image` in CSS, that color or image
will be applied to the area that includes both content and padding.

To illustrate the last point, compare an element without padding to one with
padding. This CSS below will result in the following image:

``` css
.box-parent {
  background-color: #000000;  /* Black */
  width: 300px;
  height: 300px;
}

.box-child {
  background-color: #ffff00;  /* Yellow */
  width: 100px;
  height: 280px;
}
```

![Elements without padding](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/element-no-padding.png)

The above image shows a parent element with a height of `300px` and a child
element with a height of `280px`. Because the yellow child element is shorter
and narrower than the parent element, you can see the black background of the
parent element to the right and beneath the yellow of the child element. But,
what would happen if you added `10px` of padding around the yellow element?

``` css
.box-parent {
  background-color: #000000;  /* Black */
  width: 300px;
  height: 300px;
}

.box-child {
  background-color: #ffff00;  /* Yellow */
  width: 100px;
  height: 280px;
  padding: 10px; /* Applies to all four sides. */
}
```

![Child element with padding](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/element-with-padding.png)

The yellow child element now has `10px` of padding all the way around it,
resulting in a larger yellow rectangle, increasing in an element that has a
calculated height of `280px + 10px + 10px = 300px`. Because background colors
are applied to the content _and_ the padding, the rectangle now fills 300px of
the vertical space covering the entire parent element's height.

## Border

[Border][3] is a shorthand CSS property that sets an element's border on all
sides. It sets the values of `border-width`, `border-style`, and `border-color`
(in that order).

Here is an example of setting an element’s `border` in CSS:

```css
.box {
  border: 3px solid #000000;
  /* border-width | border-style | border-color */
}
```

The above shorthand is equivalent to the following:

```css
.box {
  border-width: 3px;
  border-style: solid;
  border-color: #000000;
}
```

As part of the Box Model, the 3px `border-width` above gets factored into the
total box size, along with the content, padding and margin. The default
`border-width` is `medium`. The default `border-style` is `none`. The default
`border-color` is the `currentcolor` which will take the value of the color of
the current text, if that color has been explicitly set. Which, is weird. You
probably don't ever want to use that.

### Properties within the shorthand

You can break down each of the three border properties above into further
sub-properties:

* `border-width`:
  * `border-top-width`
  * `border-right-width`
  * `border-bottom-width`
  * `border-left-width`

* `border-style`:
  * `border-top-style`
  * `border-right-style`
  * `border-bottom-style`
  * `border-left-style`

* `border-color`:
  * `border-top-color`
  * `border-right-color`
  * `border-bottom-color`
  * `border-left-color`

Check the MDN document on the [border][3] property for more information about
its properties.

## Margin

[Margin][4] is a shorthand CSS property that sets the margins on every side of
an element. It encompasses `margin-top`, `margin-right`, `margin-bottom`, and
`margin-left`.

Like padding, margin values can be a length (i.e. px, em, rem) or a percentage
(%). It can also take a value of `auto`, which we’ll explain below. Here are
some examples:

```css
.box-1 {
  /* One value applies to all four sides. */
  margin: 10%;
}

.box-2 {
  /* Two values: top & bottom | left & right */
  margin: 0 2em;
}

.box-3 {
  /* Three values: top | left & right | bottom. */
  margin: 30px 0 15px;
}

.box-4 {
  /* Four values:  top | right | bottom | left*/
  margin: 10% 20px 10px 5%;
}

.box-5 {
  /* Global values */
  margin: inherit;  /* OR initial OR unset */
```

### Centering an element with margin

In addition to the margin values above, we can also use a margin value of
`auto`. With the `auto` value, the browser sets the margin for an element. We
can apply this property to horizontally center an element inside its parent
container. The following example CSS will result in a yellow element
horizontally centered inside its container:

``` css
.box-parent {
  background-color: #000000;  /* Black */
  width: 300px;
  height: 300px;
}

.box-child {
  background-color: #ffff00;  /* Yellow */
  width: 100px;
  height: 280px;
  padding: 10px;
  margin: 0 auto;  /* Centers element horizontally. */
}
```

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/element-margin-auto.png)

Prior to flexbox and its container property `justify-content`, using `margin: 0
auto` to center elements inside a container was standard practice, and it’s
still used for centering elements on browsers that do not support flexbox (like
older versions of IE).

## What you learned:

* The Box Model and parts of a standard box
* What `box-sizing: border-box` does
* The `padding` property and its sub-properties
* The `border` property and its sub-properties
* The `margin` property and its sub-properties
* Centering elements using the margin value `auto`

[1]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/padding
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/border
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/margin
[5]: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements
[6]: https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements

________________________________________________________________________________
# Layout: Positioning

The CSS property `position` allows us to set the position of elements on a page
and is an integral part of creating a Web page layout.

In this reading, we’ll review the different types of CSS positions we can apply
to elements and how they affect the layout of the page. If you _stick_ with it,
when you’re finished you should be _relatively_ well-versed in CSS positioning
properties and _absolutely_ able to create professional page layouts!

Positioning elements allows us to manipulate where those elements appear on the
page. Some position properties go with _the page flow_, while a couple of
properties cause an element to be _removed from the flow_. The flow of a page
refers to the relationship of block and inline elements before positioning or
other layout changes occur. (_See the MDN doc on [Flow Layout][1] for more
info._)

The [position][2] property accepts any of the following five values:

- Static
- Relative
- Absolute
- Fixed
- Sticky

All properties except for `static` are used in conjunction with the properties
`top`, `right`, `bottom` and `left` to ultimately determine an element’s
position on the page. The `top`, `right`, `left` and `bottom` properties are all
optional, except in the case of a sticky element, which requires at least one of
the four properties to be set.

For the rest of this article, the examples use the following HTML and base CSS.

```html
<div class="container">
  <div class="element" id="yellow-box">1</div>
  <div class="element" id="pink-box">2</div>
  <div class="element" id="blue-box">3</div>
</div>
```

```css
.container {
  background-color: #2b2d2f;
}

.element {
  box-sizing: border-box;
  display: inline-block;
  width: 100px;
  height: 280px;
  font-size: 36px;
}

#yellow-box {
  background-color: #ffff00;
}

#pink-box {
  background-color: #ff69b4;
}

#blue-box {
  background-color: #00eeee;
}
```

That HTML and CSS results in this layout.

![Statically positioned](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/static-pink-box.png)

Open up the [Positioning Elements] CodePen to follow along with the changes in
this article (as well as letting you experiment!).

## Static positioning

Static is the default position value of page elements. A `static` element is not
considered to be _positioned_ on the page, since it will appear normally
according to the page flow. The properties `top`, `right`, `bottom`, `left` and
`z-index` do not affect static elements.

You probably won’t use this value much, unless you are overriding other values
with it, but this is how to set an element to be static.

**CSS:**

```css
#pink-box {
  background-color: #ff69b4;
  position: static;
}
```

Because you're just explicitly setting the value to the value that it already is
by default, nothing changes in the way the browser draws it.

![Statically positioned](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/static-pink-box.png)

## Relative positioning

A relatively positioned element remains in its original position in the page
flow (like a static element) and can be offset from that position using the
`top`, `right`, `bottom` and `left` properties. The element is positioned
_relative to its initial place in the page flow_. Relative positioning creates a
[stacking context][3] -- overlapping elements whose order can be set by the
`z-index` property. (See the MDN doc on [z-index][4] for an example.)

The `top`, `right`, `bottom`, and `left` properties take a length which, as you
likely recall, is a value and a unit of measurement (or percentage).

```css
#pink-box {
  background-color: #ff69b4;
  bottom: 0;
  left: -20px;
  position: relative;
  right: 0;
  top: 0;
}
```

![Relatively positioned pink box](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/relative-pink-box.png)


## Absolute positioning

An absolutely positioned element is removed from the page flow, and other
elements around it act like it’s not there. The element is positioned in
relation to its closest _positioned_ ancestor, or, if one cannot be found,
to the `<html>` document. It can be offset from that position using the `top`,
`right`, `bottom` and `left` properties. Absolute positioning creates a
[stacking context][3] -- overlapping elements whose order can be set by the
`z-index` property. (See the MDN doc on [z-index][4] for an example.)

### Example of an absolutely positioned element

In the following CSS, you will note that the container element has a position
set to "relative". This is so the browser will calculate the position of any
absolutely positioned children from its top-left corner.

```css
.container {
  background-color: #2B2D2F;
  position: relative;
}

#pink-box {
  position: absolute;
  top: 60px;
}
```

![Absolutely positioned pink box](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/absolute-pink-box.png)

Things to note about how the pink box was positioned and laid out.

* The pink box is positioned absolutely, meaning that it was removed from the
  flow of the document. The image above shows us that the blue box has filled in
  the place of pink box because the browser does not consider the pink box to be
  in the normal left-to-right layout of the content.
* The pink box is stacked on top of the static blue box (static because that is
  the default `position` value). When the browser removed the pink box from the
  flow, it put it in its own virtual layer _above_ the statically positioned
  elements.
* Again, it's important to note that the container element has its `position`
  set to "relative". This is so the browser will position the pink box relative
  to its parent.

It's important to do that relative thing if you want the absolute positioning of
the element to be calculated from the top-left corner of the closest positioned
ancestor element, in this case, the container element.

### Example of two absolutely positioned elements

What happens if you chose to absolutely position the pink box _and_ the blue
box? What do you think will happen? Try it out in the CodePen.

```css
.container {
  background-color: #2B2D2F;
  position: relative;
}

#pink-box {
  position: absolute;
  top: 60px;
}

#blue-box {
  position: absolute;
}
```

![Two absolutely positioned elements](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/absolute-blue-box.png)

In this case, both of the pink and blue boxes were taken out of the normal flow.
The pink box shows up where it did before. But, now, because the blue box is
_layered_, it shows up **on top of** the pink box. This is how you can make
interesting and neat UIs that have elements on top of one another.

### Example of an absolutely positioned element using bottom instead of top

Here is an example where you can see how it changes when you don't have a
positioned ancestor element. The CSS sets the pink box's `bottom` value to 60
pixels, rather than the `top`. This pushes the element 60 pixels _up_ from the
bottom of the parent element's bottom.

```css
.container {
  background-color: #2b2d2f;
  position: relative;
}

#pink-box {
  background-color: #ff69b4;
  bottom: 60px;
  position: absolute;
}
```

![Relative parent and absolute child shifted up](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/relative-parent-absolute-child.png)

You can see that the browser has shifted the pink box up, so much so, that you
can't see the number "2" anymore.

If you had not relative positioned the container element, the browser would try
to find the bottom of its nearest positioned ancestor. Since none occurs, the
browser assumes you meant that it should be 60 pixels from the _bottom of the
document_!

```css
.container {
  background-color: #2b2d2f;
}

#pink-box {
  background-color: #ff69b4;
  bottom: 60px;
  position: absolute;
}
```

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/static-parent-absolute-child.png)

## Fixed positioning

A fixed element is removed from the page flow, like an absolutely positioned
element. However, unlike an absolutely positioned element, a fixed element’s
position is relative to the `<html>` document itself and not to an ancestor
element. It is positioned using the `top`, `right`, `bottom` and `left`
properties. Fixed positioning creates a [stacking context][3] -- overlapping
elements whose order can be set by the `z-index` property. (See the MDN doc on
[z-index][4] for an example.)

A fixed element will remain in the same spot on the page, regardless of the
size of the window or whether a user scrolls.

```css
#pink-box {
  background-color: #ff69b4;
  left: 300px;
  position: fixed;
  top: 15%;
}
```

Here it is without any scrolling.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/fixed-element.png)

Here it is with some scrolling.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/fixed-element-scroll.png)

Fixed positioning can be useful for things like nav bars, buttons, links,
videos, etc. that we want to keep visible as the user scrolls. Ensure that
elements positioned with an absolute or fixed value do not obscure other content
when the page is zoomed to increase text size.

## Sticky positioning

A sticky element remains in its original position in the page flow, and it is
positioned relative to its closest block-level ancestor and any _scrolling_
ancestors (created when `overflow` is `hidden`, `scroll`, `auto`, or `overlay`).
It behaves like a relatively positioned element until the point at which you
would normally scroll past it in the viewport. At that scrolling point, the
element “sticks” to the page wherever it has been positioned by the `top`,
`left`, `bottom` and `right` properties. Sticky positioning creates a [stacking
context][3] -- overlapping elements whose order can be set by the `z-index`
property. (See the MDN doc on [z-index][4] for an example.)

You must set at least one threshold value using `top`, `right`, `bottom` or
`left` in order for sticky positioning to work. A sticky element will start off
as _relatively_ positioned until you scroll past its original position -- at
which point it will be _fixed_ to the position you specified.

```css
#pink-box {
  background-color: #FF69B4;
  position: sticky;
  top: 60px;
}
```

Here is what it looks like without any scrolling.

![Sticky without scrolling](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/sticky-element.png)

Once you scroll, the element will stick in place when it gets where it should
not scroll past.

![Sticky with scrolling](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/sticky-element-scroll.png)

A good use case for sticky positioning is for headers in scrollable lists.
Here's and example of headers in a list having sticky positioning. They act
relative until they get to the top of the scrollable area. At that point, they
become fixed until the bottom of their parent element pushes them off of the
screen as the parent element scrolls off of the screen.

![sticky section headers](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/css-layout-sticky-positioning.gif)

_**Note:** Like fixed positioning, sticky positioning can be useful for things
like nav bars, buttons, links, videos, etc. that we want to keep visible as the
user scrolls. One use-case would be keeping a section or menu heading at the top
of the page until the user scrolls past that section into a new one. Again, use
with caution, and always keep accessibility in mind._

## What we learned:

- The types of element positions
- Static position definition and application
- Relative position definition and application
- Absolute position definition and application
- Fixed position definition and application
- Sticky position definition and application

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
[Positioning Elements]: https://codepen.io/aa-academics/pen/dyogoWM?editors=1100

________________________________________________________________________________
# Flexbox Layout

Flexbox is a CSS module that provides a convenient way for us to display items
inside a _flexible_ container so that the layout is responsive.

With flexbox, a container’s width and height automatically adjust to fit the
viewport, and the sizing, alignment, and spacing of the items inside the
container are optimized for the available space.

## Pre-flexbox float

Back in ye olden pre-flexbox days, developers used a few different CSS
techniques to display/position elements in a container, the most common of
which is [float][1].

Born from the print layout notion of text wrapping around images, the float
property has been widely used to create Web page layouts. The basic idea behind
floated elements is that, like images in a print layout, they are considered
part of the _flow_ of the page. Other elements, like text that wraps, will
_reflow_ around the floated elements.

A tricky and inconvenient issue related to float is the necessity of
_clearing_ the float. This is what happens when floated elements have not been
cleared:

![Float not cleared](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/float-not-cleared.png)

Because other non-floated elements take up the available space around a floated
element, we need to `clear` the float by setting up an empty DIV (i.e. block
element) after it, or by setting up a `.clearfix:after` pseudo selector in CSS.
(Read more about this in this CSS-Tricks doc about [float][1]).

![Float cleared](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/float-cleared.png)

By resizing elements in the container, or parent element, and redistributing
space evenly around elements, flexbox takes care of such issues for us.

## Using flexbox

With flexbox, a container element is automatically resized to fit the viewport
size without needing to use breakpoints. Elements within the container are
resized and distributed to best fill the available space. See the image
below for an example of how elements in a container would be laid out using
flexbox:

![Flexbox](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/flexbox-elements.png)

The [flexbox layout][2] consists of CSS styles applied to:

* A parent element (i.e. _**flex container**_)
* Its children (i.e. _**flex items**_)

### Flex container styles

To set a parent element to be a flex container, we simply need to apply
`display: flex` to a CSS class selector, like so:

```css
.container {
  display: flex;  /* OR inline-flex */
}
```

By default, flex items will try to fit onto one line. To get elements within
the container to wrap to a new line, we need to add the `flex-wrap` property to
the container:

```css
.container {
  display: flex;
  flex-wrap: wrap;  /* OR nowrap OR wrap-reverse. */
}
```

![Wrapped flex items](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/flex-wrap.png)

We can also set the direction of the main axis using `flex-direction`. This
allows us to create either _rows_ or _columns_ of elements:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;  /* OR row-reverse OR column OR column-reverse */
}
```

![Flex direction](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/flex-direction.png)

We can combine both `flex-direction` and `flex-wrap` with a single property
called `flex-flow`:

```css
.container {
  display: flex;
  flex-flow: row wrap;  /* Use the flex-direction first, followed by the flex-wrap. */
}
```

Additional properties we can set on the flexbox container include:

* `justify-content` -- Defines the alignment of flex items along the main axis
  and distributes extra container space around/between items.
* `align-items` -- Like justify-content for the cross axis (e.g. items aligned
on the Y axis, instead of the X axis).
* `align-content` -- Redistributes extra space on the cross axis.

### Flex items styles

We are not required to put styles on the flex items, but we may choose to do so
for additional customization.

By default, flex items appear in the order they are added to the DOM (i.e. the
order they are listed in an HTML file). However, we can use the `order`
property to change their order in the flex container.

```css
.item-1 {
  order: 1;  /* Must be an integer. Default is 0. */
}
.item-2 {
  order: 2;  /* Must be an integer. Default is 0. */
}
.item-3 {
  order: 3;  /* Must be an integer. Default is 0. */
}
```

Additional properties we can set on flex items include:

* `flex-grow` -- Dictates amount of available space inside the flex container
the item should take up. Must be an integer. Default is 0.
* `flex-shrink` -- Defines the ability for a flex item to shrink if necessary.
Must be an integer. Default is 1.
* `flex-basis` -- The default size of an element before the remaining space is
distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword (e.g. auto,
content).
* `flex` -- Shorthand for `flex-grow`, `flex-shrink` and `flex-basis`. Default
is 0 1 auto.
* `align-self` -- Overrides default alignment set by the `align-items` property
on the container.

Check out the CSS-Tricks article [A Complete Guide to Flexbox][2] for more
information about setting properties on the flex container and flex items.

## Flexbox froggy

Play a fun interactive game to learn flexbox! Visit [flexboxfroggy.com][3] and
learn how to use flexbox while moving some cute croakers around.

### What we learned:

* Review of using float for page layouts
* Flexbox background and concepts
* Styles for the flex container and flex items
* Flexbox froggy game is a fun way to learn flexbox!

[1]: https://css-tricks.com/all-about-floats/
[2]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[3]: https://flexboxfroggy.com/

________________________________________________________________________________
# CSS Grid

[CSS Grid][1] is a two-dimensional layout system that lets us create a grid with
columns and rows purely using vanilla CSS.

Unlike flexbox, which is one-dimensional and meant for individual container
elements, a grid layout gives us the ability to control and customize an entire
page layout.

Here is a diagram depicting a grid layout:

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/grid-layout.svg"/>

## Bootstrap vs. CSS Grid

Prior to CSS Grid, developers used various tools to achieve a grid layout, the
earliest of these being the HTML `<table>`. We then progressed into using CSS
libraries for a responsive grid layout, the most ubiquitous being
[Bootstrap][2], a front-end library with pre-built grid classes and also jQuery
plugins.

While many developers and dev shops still use Bootstrap for convenience, it
does come with some caveats: A Bootstrap grid is 12 columns, and this cannot be
changed. Bootstrap automatically adds padding around columns (known as “gutters”
) that you may or may not want to override. There are a number of HTML classes
to use for the container, row, and columns at responsive breakpoints -- meaning
more stuff to add to your HTML file. That said, Bootstrap is a common
out-of-the-box solution that’s worth knowing about.

In comparison, [CSS Grid][1] provides greater flexibility and control over the
grid layout. You can add as many columns and rows as you want. There are no
HTML classes to use, only CSS properties. You can customize anything in the
grid you want -- including the sizes of rows and columns, the alignment of grid
items, the position of grid items, the gutters/spacing, etc. You can also make
grid items easily span multiple rows and/or columns. No external libraries are
required, meaning no code bloat. CSS Grid is pretty powerful! That said, there
is a learning curve, and not all [browsers support][3] CSS Grid (especially
newer features).

## Using CSS Grid

CSS Grid can be used to create an entire page layout or for a specific
container element. Just like with flexbox, a grid layout consists of CSS styles
applied to:

* A grid container (parent element)
* Grid items (children elements)

In the next two readings, we'll go over all of the styles related to the
grid container and the grid items -- there's a lot of them! If you learn better
by doing than reading, you might want to check out the game below to start
learning CSS grid. You can always come back to these readings afterwards.

## What we learned:

* Comparison of flexbox and grid layout
* Comparison of CSS libraries like Bootstrap vs. CSS Grid

[1]: https://css-tricks.com/snippets/css/complete-guide-grid/
[2]: https://getbootstrap.com/
[3]: https://caniuse.com/#search=css%20grid

________________________________________________________________________________
# Grid Container Styles

A grid layout consists of CSS styles applied to:

* A grid container (parent element)
* Grid items (children elements)

In this reading, we're covering all the styles related to the grid container.
To set a parent element to be a grid container, we simply need to apply
`display: grid` to a CSS class selector, like so:

```css
.grid-container {
  display: grid;  /* OR inline-grid */
}
```

## Columns and Rows

We can set the number of columns and rows in a grid, as well as their track
sizes, by using the `grid-template-rows` and `grid-template-columns` properties.

```css
.grid-container {
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```

The `<track-size>` refers to the size of either the rows or columns. It can be
pixels, a percentage, a fraction of space left (using `fr`), or set to `auto`
(which expands or shrinks depending on the items within it).

Grid lines mark the start/end of rows and columns. You can call a `<line-name>`
anything you choose (and also give a line multiple names), or you can leave it
blank, which defaults to positive or negative numbers.

Here’s an example 5x4 grid with unnamed/default grid lines. Each space between
the sizes in `grid-template-columns` and `grid-template-rows` represents a line
number (1, 2, 3, 4, etc.):

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 25% 25% 25% auto;
}
```

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/5x4-grid-num-lines.svg"/>

Here’s an example 5x4 grid with named grid lines:

```css
.grid-container {
  grid-template-columns: [start] 100px [line2] 100px [line3] 100px [line4] 100px [line5] 100px [end];
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end row3-start] 25% [row3-end row4-start] auto [rows-end];
}
```

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/5x4-grid-named-lines.svg"/>

## Repeating Columns and Rows

You can easily repeat columns and rows of the same size. Let’s refactor our
first example above using `repeat()`:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 100px [col-start]);
  grid-template-rows: repeat(4, 25% [row-start]);
}
```

Just like in the first example, the grid will be five columns of 100px each.
We’ve named each grid line separating the columns `col-start`. The grid will
also have four columns of 25% each, and the grid lines separating rows are
named `row-start`.

## Fractions

We’ve used percentages, pixels and `auto` for the track size so far, but we
could also use fractions. The `fr` unit specifies the fraction of available
space to be filled up by a row or column. The following two examples are
equivalent, and each example will create a grid with four rows that each take
up one-quarter of the available space.

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(1fr 1fr 1fr 1fr);
}
```

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(25% 25% 25% 25%);
}
```

If we wanted to, we could create any combination of percentages, pixels or
fractions, like the following:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(12% 200px auto 400px);
  grid-template-rows: repeat(50px 2fr 2fr 1fr);
}
```

The `fr` units are flexibly calculated after all other exact measurements (like
percentages or pixels). Again, `auto` will expand or shrink based on what’s
contained within that column or row.

## Grid Template Areas

CSS Grid gives us a handy way to map out and visualize areas of the grid
layout. We can combine the grid container property `grid-template-areas` with
the grid items property `grid-areas` to define areas of a template and how much
space they should take. Let’s look at an example:

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

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/grid-template-areas.svg"/>

In this example, we’ve created a 3x3 grid. The `header` area takes up the
entire first row / all three columns across. In the second row, the first
column is filled by `main` area, the second column is blank (represented by a
period), and the third column is filled by the `sidebar` area. We used the `fr`
unit for the columns, so they should flexibly fill the available space, and the
rows will `auto` resize to fit their items.

## Grid Gaps

Grid gaps refer to the spaces between rows or between columns. They are
basically “gutters”. These properties allow us to set the spacing between rows
or columns:

* `grid-column-gap` - accepts a size value
* `grid-row-gap` - accepts a size value

```css
.grid-container {
  ...
  grid-column-gap: 20px;
  grid-row-gap: 30px;
}
```

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/grid-gaps.svg"/>

We could also use the shorthand property `grid-gap` to include both
`grid-column-gap` and `grid-row-gap`. The first value is the `grid-row-gap` and
the second value is the `grid-column-gap`.

```css
.grid-container {
  ...
  grid-gap: 30px 20px;
  /* <grid-row-gap> | <grid-column-gap>. */
}
```

## Justify/Align Items

We can position items inside their respective rows or columns. These container
properties can be used to set the alignment of all items within a grid
container:

* `justify-items` - aligns items on the row (horizontally)
    - start - aligns items with the start line of their cell (left side)
    - end - aligns items with the end line of their cell (right side)
    - center - aligns items in the center of their cell (center)
    - stretch - fills the whole width of the cell (the default value)

* `align-items` - aligns items on the column (vertically)
    - start - aligns items with the start line of their cell (top of cell)
    - end - aligns items with the end line of their cell (bottom of cell)
    - center - aligns items in the center of their cell (center)
    - stretch - fills the whole height of the cell (the default value)

```css
.grid-container {
  justify-items: stretch;  /* OR start | end | center */
  align-items: stretch;  /* OR start | end | center */
}
```

## Justify/Align Content

In some instances, like when grid items are sized with non-flexible units like
pixels, your grid might be smaller than its container and there is extra space.
In that case, you might want to set the position of the grid inside its
container.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/grid-justify-content.svg"/>

These container properties can be used to set the alignment of the
entire grid inside its container:

* `justify-content` - aligns items on the row (horizontally)
    - start - aligns the grid with the start of the grid container (left side)
    - end - aligns the grid with the end of the grid container (right side)
    - center - aligns the grid in the center of the grid container (center)
    - stretch - resizes the grid items so that the grid fills the **full width**
of the grid container
    - space-around - equal spaces between grid items, with half-sized spaces at
the start / end
    - space-between - equal spaces between grid items, with no space at the
      start / end
    - space-evenly - equal spaces between grid items, including at the start / end

* `align-content` - aligns items on the column (vertically)
    - start - aligns the grid with the start of the grid container (top of
container)
    - end - aligns the grid with the end of the grid container (bottom of container)
    - center - aligns the grid in the center of the grid container (center)
    - stretch - resizes the grid items so that the grid fills the **full
      height** of the grid container
    - space-around - equal spaces between grid items, with half-sized spaces at
the start / end
    - space-between - equal spaces between grid items, with no space at the
      start / end
    - space-evenly - equal spaces between grid items, including at the start / end

```css
.grid-container {
  justify-content: stretch;  
    /* start | end | center | space-around | space-between | space-evenly */
  align-content: stretch;  
    /* start | end | center | space-around | space-between | space-evenly */
}
```

## Implicit Grids and Auto Rows/Columns/Flow

Up until now, we have set properties for an _**explicit grid**_. Using the
properties `grid-template-rows`, `grid-template-columns` and/or
`grid-template-areas`, we have _explicity_ set the number of rows and columns
in the grid.

However, sometimes an _**implicit grid**_ gets created. This happens when there
are more grid items than cells in the grid, or when a grid item is placed
outside of the explicit grid (we’ll talk more about placing grid items in the
next section). The grid container automatically adds new lines to the grid,
creating implicit grid tracks. The explicit grid plus these implicit grid
tracks create an implicit grid.  

(_See this CSS-Tricks doc on [The Difference Between Explicit and Implicit
Grids][1] for more info._)

We can specify the size of any auto-generated grid tracks (i.e. implicit grid
tracks) using these properties:

* `grid-auto-columns` - accepts a track-size value (a length, % or `fr`)
* `grid-auto-rows` - accepts a track-size value (a length, % or `fr`)

You might want to set the auto-generated tracks the be the same size as your
explicit rows and columns. For example, if you had a grid with columns that are
100px and rows that are 50px, then you will most likely want to use those
values for the auto-generated tracks.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 50px 50px 50px;
  grid-auto-columns: 100px;
  grid-auto-rows: 50px;
}
```

Any grid items that aren’t explicitly placed on the grid are automatically
placed, or _re-flowed_. We can set the flow of grid items on implicit grid
tracks by using:

* `grid-auto-flow` - accepts any of the following placement values
    - row - fills in each row in order, adding new rows as necessary (the
      default value)
    - column - fills in each column in order, adding new columns as necessary
    - dense - fills in spaces earlier in the grid if smaller items come up later
(beware: might make grid items appear out of order)

## Shorthand Container Properties

We can combine grid container properties by using shorthand properties. However,
you may want to familiarize yourself with the properties we discussed above
before using these.

* `grid-template` - shorthand property for `grid-template-rows`,
`grid-template-columns` and `grid-template-areas`
* `grid-gap` - shorthand property for `grid-column-gap` and `grid-row-gap`
* `place-items` - shorthand property for `justify-items` and `align-items`
* `place-content` - shorthand property for `justify-content` and `align-content`
* `grid` - shorthand property for `grid-template`, `grid-auto-columns`,
`grid-auto-rows` and `grid-auto-flow` (you can create the entire grid with this
one property)

_Check out the MDN doc on [CSS Grid Layout][2] for a full list of grid container
properties, their definitions and examples._

## What we learned:

* Setting up a basic grid with columns and rows
* Easily repeating columns and rows
* Using the `fr` unit for fractions
* Setting up a whole grid with `grid-template-areas` and `grid-area`
* Creating grid gaps between columns and rows
* Setting the alignment of an item in its cell
* Setting the alignment of a grid inside its container
* What happens when an implicit grid is created
* Shorthand properties that combine container properties

[1]: https://css-tricks.com/difference-explicit-implicit-grids/
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
________________________________________________________________________________
# Grid Items Styles

A grid layout consists of CSS styles applied to:

* A grid container (parent element)
* Grid items (children elements)

In the last reading, we covered all the styles related to the grid container.
In this reading, we're covering all the styles related to the grid items.

## Spanning Columns/Rows

We can set a grid item to take up a specified number of columns and/or rows
with the following properties:

* `grid-column-start` - the column where the item starts
* `grid-column-end` - the column where the item ends
* `grid-row-start` - the row where the item starts
* `grid-row-end` - the row where the item ends

These four properties can take any of the following values:

* `<line>` - the number or the name of a grid line
* `span <number>` - the item will span the provided number of grid tracks
* `span <name>` - the item will span and stop at the given line name
* `auto` - indicates auto-placement, an automatic span, or a default span of one

Example CSS using a mix of acceptable values:

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

<img src="grid-item-span.svg"/>

## Grid Areas

We can use the grid item property `grid-area` in conjunction with the grid
container property `grid-template-item` to define sections of the layout. Here
is the same example from earlier:

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

In the above example, we gave the `grid-area` property name values: header,
main, sidebar, and footer. We could also use this property as a shorthand for
`grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end`.

```css
.item {
  grid-area: row1-start / col4-start / 5 / 3;
  /* Starts at line named “row1-start” / Starts at line named “col4-start” / Ends at row line 5 / Ends at column line 3 */
}
```

## Justify/Align Self

We can use the grid container properties `justify-items` and `align-items` to
align all grid items at once, but we might want to change the alignment of the
single grid item. In that case, we could use these properties on the item:

* `justify-self`- aligns self on the row (horizontally)
    - `start` - aligns items with the start line of their cell (left side)
    - `end` - aligns items with the end line of their cell (right side)
    - `center` - aligns items in the center of their cell (center)
    - `stretch` - fills the whole width of the cell (the default value)

* `align-self` - aligns self on the column (vertically)
    - `start` - aligns items with the start line of their cell (top of cell)
    - `end` - aligns items with the end line of their cell (bottom of cell)
    - `center` - aligns items in the center of their cell (center)
    - `stretch` - fills the whole height of the cell (the default value)

```css
.item-3 {
  align-self: stretch; /* OR start | end | center */
}
```

## Shorthand Item Properties

We can combine grid item properties by using shorthand properties. However, you
may want to familiarize yourself with the properties we discussed above before
using these.

* `grid-column` - shorthand property for `grid-column-start` + `grid-column-end`
* `grid-row` - shorthand property for `grid-row-start` + `grid-row-end`
* `place-self` -  shorthand property for `justify-self` + `align-self`

_Check out the MDN doc on [CSS Grid Layout][1] for a full list of grid items
properties, their definitions and examples._

## What we learned:

* Spanning grid columns and rows with a grid item
* Using grid line numbers or names vs. using `span`
* Using the item property `grid-area` with the container property
  `grid-template-areas`
* Aligning a single grid item in its cell
* Shorthand properties that combine grid item properties

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
________________________________________________________________________________
# Grid Items Styles

A grid layout consists of CSS styles applied to:

* A grid container (parent element)
* Grid items (children elements)

In the last reading, we covered all the styles related to the grid container.
In this reading, we're covering all the styles related to the grid items.

## Spanning Columns/Rows

We can set a grid item to take up a specified number of columns and/or rows
with the following properties:

* `grid-column-start` - the column where the item starts
* `grid-column-end` - the column where the item ends
* `grid-row-start` - the row where the item starts
* `grid-row-end` - the row where the item ends

These four properties can take any of the following values:

* `<line>` - the number or the name of a grid line
* `span <number>` - the item will span the provided number of grid tracks
* `span <name>` - the item will span and stop at the given line name
* `auto` - indicates auto-placement, an automatic span, or a default span of one

Example CSS using a mix of acceptable values:

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

<img src="grid-item-span.svg"/>

## Grid Areas

We can use the grid item property `grid-area` in conjunction with the grid
container property `grid-template-item` to define sections of the layout. Here
is the same example from earlier:

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

In the above example, we gave the `grid-area` property name values: header,
main, sidebar, and footer. We could also use this property as a shorthand for
`grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end`.

```css
.item {
  grid-area: row1-start / col4-start / 5 / 3;
  /* Starts at line named “row1-start” / Starts at line named “col4-start” / Ends at row line 5 / Ends at column line 3 */
}
```

## Justify/Align Self

We can use the grid container properties `justify-items` and `align-items` to
align all grid items at once, but we might want to change the alignment of the
single grid item. In that case, we could use these properties on the item:

* `justify-self`- aligns self on the row (horizontally)
    - `start` - aligns items with the start line of their cell (left side)
    - `end` - aligns items with the end line of their cell (right side)
    - `center` - aligns items in the center of their cell (center)
    - `stretch` - fills the whole width of the cell (the default value)

* `align-self` - aligns self on the column (vertically)
    - `start` - aligns items with the start line of their cell (top of cell)
    - `end` - aligns items with the end line of their cell (bottom of cell)
    - `center` - aligns items in the center of their cell (center)
    - `stretch` - fills the whole height of the cell (the default value)

```css
.item-3 {
  align-self: stretch; /* OR start | end | center */
}
```

## Shorthand Item Properties

We can combine grid item properties by using shorthand properties. However, you
may want to familiarize yourself with the properties we discussed above before
using these.

* `grid-column` - shorthand property for `grid-column-start` + `grid-column-end`
* `grid-row` - shorthand property for `grid-row-start` + `grid-row-end`
* `place-self` -  shorthand property for `justify-self` + `align-self`

_Check out the MDN doc on [CSS Grid Layout][1] for a full list of grid items
properties, their definitions and examples._

## What we learned:

* Spanning grid columns and rows with a grid item
* Using grid line numbers or names vs. using `span`
* Using the item property `grid-area` with the container property
  `grid-template-areas`
* Aligning a single grid item in its cell
* Shorthand properties that combine grid item properties

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
________________________________________________________________________________
# Flexible Box Games

Your project, here, is to complete both Flexbox Froggy and Flexbox Defense to
learn the aspects of flexible box layout.

If you have, in the past, done these already, please do them, again. They're
good practice.

* [Flexbox Froggy](https://flexboxfroggy.com/) - complete all 24 levels!
* [Flexbox Defense](http://www.flexboxdefense.com/) - finish all 12 waves!

________________________________________________________________________________
# Grid Layout Game

Your project, here, is to complete the CSS Grid Garden.

If you have, in the past, done this already, please do it, again. It's probably
been a while and is good practice.

[CSS Grid Garden](http://cssgridgarden.com/) - finish all 28 levels!

________________________________________________________________________________
# Recreate A Trello Dashboard With Flexbox

Flexbox makes designing and coding responsive websites a breeze. In the reading,
we went over how to use [flexbox][1] properties on parent and children elements.
Now that you’re a pro at using flexbox, go on and _flex_ your CSS skills!
(Please pardon the pun).

In this project, you’ll use flexbox to recreate the Trello dashboard so that
it’s responsive to different screen sizes. Please clone the repository from
https://github.com/appacademy-starters/css-flexbox-trello.

## Project overview

[Trello][2] is a Web application that many professionals use to manage projects.
In this project, you will use flexbox to recreate the Trello dashboard page
depicted in the following screenshots.

Screenshot of page in large screen (desktop) format:

![Trello on a wide screen](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/trello-large-screen.png)

Screenshot of page in medium screen (desktop/tablet) format:

![Trello on a medium screen](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/trello-medium-screen.png)

Screenshot of page in small screen (mobile) format:

![Trello on a small screen](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/trello-small-screen.png)

All of the elements needed for the page are contained in the
`flexbox-project.html` file. In addition to linking to `flexbox-project.css`,
where you’ll add your styles, the page also includes a CDN link to Font Awesome,
a font that contains nice icons you can use for the header. To use an icon from
Font Awesome, you just need to include an `i` element with the classes
"fa«indicator»" and "fa-«icon name»". For example, to include the solid "home"
icon which looks like a house, you would add this HTML to your source code.

```html
<i class="fas fa-home"></i>
```

The "fas" means "Font Awesome Solid!" So easy! Here's a link to the [Font
Awesome free icon search page] so you can have it open if you want to include
more icons.

## Phase 1: Use flexbox to create the header nav bar

Use flexbox to recreate the blue header nav bar at the top of the page.
Try to replicate the header so it's as close to what's on the site/screenshots
as possible. We have included icons, which are similar to the original icons,
for you to use in your project folder.

![Trello header nav bar](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/trello-header-navbar.png)

Start off by setting the page-wide style on the `body` element. Set the
following properties for it.

| Property    | Value                                                                                     |
|-------------|-------------------------------------------------------------------------------------------|
| Font family | `'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif` |
| Font size   | 14 pixels                                                                                 |
| Margin is   | 0 pixels                                                                                  |

Style the `.header-nav__container` with the following properties. The third
entry in the table, "Line height", use MDN to figure out what that CSS property
is for that setting.

| Property         | Value     |
|------------------|-----------|
| Background color | #026AA7   |
| Font size        | 16 pixels |
| Line height      | 20 pixels |
| Padding          | 4 pixels  |
| Text color       | white     |


Now, you'll need to use `display: flex` on the `header-nav__container` to put
the three sections in the right place. You want all three elements to span the
same widths in the nav bar.

Then, in the left `.header-nav__group`, use flexbox to layout each
`.header-nav__link`. You'll want to manipulate the margin and padding to get the
different elements spaced apart from one another.

In the middle `.header-nav__group`, center the Trello logo.

In the right `.header-nav__group`, have the buttons align right with the same
spacing between them as you set between the elements in the first
`.header-nav__group`. The alert button should have a background color of
"#CF513D".


Once you have that, add a media query "breakpoint" to hide the search input
field and the "Boards" text on screens with widths less than or equal to 730
pixels.

```css
@media screen and (max-width: 730px) {
  /* Hide the header search input field. */
  /* Hide the "Boards" text, but leave the boards icon. */
}
```

## Phase 2: Use flexbox to layout the "My Team" section

Use flexbox to recreate the "My Team" section under the header nav bar.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/trello-my-team.png)

Set the following properties to the indicated values for `.team__container`:

| Property         | Value     |
|------------------|-----------|
| Background color | #f4f5f7   |
| Padding          | 32 pixels |

Set the following properties to the indicated values for `.team__info`:

| Property       | Value      |
|----------------|------------|
| Flex direction | column     |
| Margin         | 0 auto     |
| Max width      | 650 pixels |
| Text alignment | center     |

Set the following properties to the indicated values for H1 elements that are a
direct child of `.team__info`:

| Property    | Value     |
|-------------|-----------|
| Margin      | 0 0 12px  |
| Font size   | 24 pixels |
| Font weight | 600       |
| Line height | 28 pixels |

Set the following properties to the indicated values for A elements that are
descendants of `.team__info`:

| Property    | Value                  |
|-------------|------------------------|
| Text color  | #172b4d                |
| Line height | 20 pixels              |
| Font weight | The normal font weight |

## Phase 3: Use flexbox to create the tabbed nav bar

Use flexbox to recreate the tabbed nav bar above the boards, which contains
four links -- Boards, Members, Settings, Business Class.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/trello-tabbed-navbar.png)


Set the following properties to the indicated values for
`.tabbed-nav__container`:

| Property         | Value   |
|------------------|---------|
| Background color | #f4f5f7 |

Set the following properties to the indicated values for `.tabbed-nav__group`:

| Property        | Value             |
|-----------------|-------------------|
| Bottom border   | 1px solid #dfe1e6 |
| Display         | flex              |
| Justify content | center            |

Set the following properties to the indicated values for `.tabbed-nav__link`:

| Property         | Value             |
|------------------|-------------------|
| Background color | white             |
| Border           | 1px solid #dfe1e6 |
| Border bottom    | 0                 |
| Border radius    | 2 pixels          |
| Font weight      | Bold weight       |
| Line height      | 20 pixels         |
| Padding          | 10 pixels         |
| Margin           | 0 5px             |
| Text color       | #172b4d           |

Add a media query that applies to screens with widths _greater than_ 500 pixels.
Use flexbox to handle the layout of the children of `.tabbed-nav__group`. Make
sure they're aligned and centered.

Now, for the screens _less than or equal to_ 500 pixels wide, add a media query
that applies to that subfeature. In that media query, set the `display` of the
`.tabbed-nav__group` and any `.tabbed-nav__link` to "block". This will make the
tabs look stacked on small screens rather than horizontal on screens wider than
500 pixels.

## Phase 4: Use flexbox to create the boards

For the boards, there is a collection of ten images in the **board-backgrounds**
directory of the project. You can set the background image of each element
individually since each has a unique class on it. It will look something similar
to the following, though the images will differ.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/flexbox/assets/trello-boards.png)

Set the following properties to the indicated values for the
`.boards__container`:

| Property      | Value       |
|---------------|-------------|
| Margin        | 0 auto      |
| Padding       | 32 pixels   |
| Maximum width | 1400 pixels |

The `.boards__container` should use flexbox, so set the `display` appropriately.
It should also have a horizontal flex direction and have wrapping enabled.

Set the following properties to the indicated values for the `.boards__sidebar`:

| Property         | Value            |
|------------------|------------------|
| Background color | #6C547B          |
| Border radius    | 3 pixels         |
| Margin           | 0 32px 32px 0    |
| Padding          | 0 20px 32px 20px |
| Maximum height   | 130 pixels       |
| Maximum width    | 180 pixels       |
| Width            | 20%              |

The `.boards__sidebar`, as a child in a flexbox layout, should indicate that it
should not grow or shrink. It should have a basis of 220 pixels.

The `.title` and `a` elements that are descendants of `.boards__sidebar-content`
should have white text color.

The `.description` elements that are descendants of  `.boards__sidebar-content`
should have light blue text color. (There is a named color for light blue.)

The `.boards__group` should also be a flexbox container that allows its child
elements to wrap. It should have a width of 80%.

Set the following properties to the indicated values for the `.boards__board`:

| Property         | Value      |
|------------------|------------|
| Background color | black      |
| Border radius    | 3 pixels   |
| Box sizing       | border box |
| Font weight      | bold font  |
| Height           | 100 pixels |
| Margin           | 0 8px 16px |
| Maximum width    | 250 pixels |
| Padding          | 4px 8px    |
| Position         | relative   |
| Text color       | white      |
| Width            | 25%        |

The `.boards__board` should also be a flexbox container with vertical layout. It
should justify its content to distribute leftover space between the children.


For medium- and large-sized screens, you want the `.boards__board` elements to
layout out with many of them in a row. Create a media query breakpoint for
screen sizes with widths greater than 750 pixels and less than or equal to 1280
pixels. For that break point, give each `.boards__board` a width of 33%.

For small-sized screens, you want the `.boards__board` elements to stack on top
of each other. To do that, create a media query breakpoint for screens less than
or equal to 750 pixels in width. For that break point, set the width of the
`.boards__board` elements to 100% and unset the maximum width setting.

[1]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[2]: https://trello.com
[3]: https://css-tricks.com/almanac/properties/o/opacity/
[4]: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
[Font Awesome free icon search page]: https://fontawesome.com/icons?d=gallery&m=free

________________________________________________________________________________
# Gridding Up A Page: Overview

CSS Grid is a powerful tool that gives us a lot of control over the layout of a
Web page. With the Grid, we no longer have to import external CSS libraries or
frameworks for layout. We can set up and fully customize a grid layout with
vanilla CSS.

There’s no better way to practice page layout than by going back to where it all
began -- the newspaper! Printed papers have been painstakingly laid out with
considerations of both limited space and limited attention spans. Some of these
layout and design principles have persisted from print to the Web -- for
examples, the term “above-the-fold” (above the literal page fold in print, and
the visible part of the screen before scrolling down online) and the concept of
CSS floats from text-wrapped images.

In this project, you’ll use CSS Grid to re-create THE LAYOUT ONLY of the columns
and rows of the overall structure, and then the layout inside each of the
sections of the layout. We’ve chosen to emulate the layout of the _The New York
Times_ for this project because the homepage is a complex series of rows and
columns, and it’s a prime use-case for a grid layout.

The project is broken up into three phases.

* In Phase 1, you'll create the main grid with 10 key sections of the page.
* In Phase 2, you'll use flexbox inside Section 1.
* In Phase 3, you'll create nested grids in Section 2 and Section 3.
* In Phase 4, you'll create the grids in the remainder of the Sections.

Clone the starter project found at
https://github.com/appacademy-starters/css-grid-nytimes. Inside that project,
you will find the following files.

* **grid-project.html** which contains the HTML that you will style using Grid
  layout
* **grid-project.css** which contains some basic CSS for the page and in which
  you will write your CSS
* **nyt-logo.svg** which contains the New York Times' logo.

Refer to your reading and resources like [“CSS Grid Layout”][1] (MDN Docs) or [
“A Complete Guide to Grid”][2] (CSS-Tricks) for guidance on setting up the grid
for your project.

When you are done, you will have a Web page similar to what you see in this
rather large screenshot.

![Full screenshot of solution](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-solution-screenshot.png)

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
[2]: https://css-tricks.com/snippets/css/complete-guide-grid/

________________________________________________________________________________
# Gridding Up A Page: Phase One

Based on the large screenshot from before, you will need to set up a grid with
10 sections, i.e. “areas”, which you’ll can refer to these labels in order of
appearance.

* **header** (Section 1)
* **main** (Section 2)
* **sidebar** (Section 3)
* **other-news** (Section 4)
* **smarter-living** (Section 5)
* **features** (Section 6)
* **discovery** (Section 7)
* **most-popular** (Section 8)
* **news** (Section 9)
* **footer** (Section 10)

The grid that you want to set up will have this layout

![Grid layout mockup](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/grid-project-mockup.svg)

Recall that you can set up grid areas by using the `grid-template-areas` and
`grid-area` properties. Now that we've set up the grid areas, let's add
`grid-template-areas` to the `grid__container` class.

```css
/* Main Grid Styles */

.grid__container {
  display: grid;
  grid-template-columns: /* Make the first column 2x wide as the second. */ ;
  grid-template-rows: auto;
  grid-template-areas:
    /* Fill in the appropriate grid areas here. */ ;
}

.grid__section {
  border: 1px solid #333333;
}

.grid__section-1 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-2 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-3 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-4 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-5 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-6 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-7 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-8 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-9 {
  grid-area: /* Fill this in. */ ;
}

.grid__section-10 {
  grid-area: /* Fill this in. */ ;
}
```

________________________________________________________________________________
# Gridding Up A Page: Phase Two

Did you know that you can combine CSS Grid with flexbox? Take a look at the
`header` (Section 1) in the grid. The items in that section appear as a row,
making it a good candidate for a one-dimensional flexbox container. We recommend
right-clicking the following image and viewing it in a new tab to take a closer
look.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-1.png)

In your HTML file, you can find an element with the class name
`flex-container-1` in the `grid__section-1` DIV, as well as five children
`flex-items`.

```html
<div class="grid grid__container">
  <div class="grid__section grid__section-1 flex-container-1">
    <div class="flex__item flex__item-1">Flex 1</div>
    <div class="flex__item flex__item-2">Flex 2</div>
    <div class="flex__item flex__item-3">Flex 3</div>
    <div class="flex__item flex__item-4">Flex 4</div>
    <div class="flex__item flex__item-5">Flex 5</div>
  </div>
  ...
</div>
```

In your CSS file, style the div with the class `flex-container-1` so that it’s
an actual flex container and give it a height of `85px`. Style each `flex__item`
so that they appear inline. You want all five `flex__item` elements to fit into
a single row. To do that, you can use the `flex-grow` setting to set the
relative sizes so that they do that. The first three flex items,
`.flex__item-1`, `.flex__item-2`, and `.flex__item-3`, should be twice as
wide as the last two flex items, `.flex__item-4` and `.flex__item-5`.

```css
.flex-container-1 {
  display: /* Fill this in. */ ;
  height: 85px;
}

.flex__item {
  display: /* Fill this in. */ ;
  height: inherit;
}

.flex__item-1,
.flex__item-2,
.flex__item-3 {
  flex-grow: /* Fill this in to be twice as wide as the others */;
}

.flex__item-4,
.flex__item-5 {
  flex-grow: /* Fill this in to be half as wide as the others */;
}
```

________________________________________________________________________________
# Gridding Up A Page: Phase Three

Just like we can nest flexbox containers, we can also nest grid containers. Any
grid item can itself become a grid container with `display: grid`. You're going
to use this fact to layout the **main** and the **sidebar** areas of the HTML.

## Section 2

Make the **main** area (Section 2) of the grid a grid container. Make each one of
the nine items in the **main** area its own grid area.

We've added nine items in the `grid__section-2` DIV in your HTML file:

```html
<div class="grid grid__container">
  ...
  <div class="grid__section grid__section-2">
    <div class="grid__item grid__item-2-1">G2-1</div>
    <div class="grid__item grid__item-2-2">G2-2</div>
    <div class="grid__item grid__item-2-3">G2-3</div>
    <div class="grid__item grid__item-2-4">G2-4</div>
    <div class="grid__item grid__item-2-5">G2-5</div>
    <div class="grid__item grid__item-2-6">G2-6</div>
    <div class="grid__item grid__item-2-7">G2-7</div>
    <div class="grid__item grid__item-2-8">G2-8</div>
    <div class="grid__item grid__item-2-9">G2-9</div>
  </div>
  ...
</div>
```

You're going to make them look like this.

![Section 2 Full](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/grid-project-section-2-full-layout.png)

Set up the grid areas in your CSS file using the following naming convention.
Make sure to set up all nine of them.

```css
.grid__item-2-1 {
  grid-area: g2-1;
}

.grid__item-2-2 {
  grid-area: g2-2;
}

.grid__item-2-3 {
  grid-area: g2-3;
}

/* Set up the rest of the nine grid items. */
```

Set up your grid container for `grid__section-2` with _**five columns and seven
rows**_. This might be a good place to play with fractions by using the `fr`
unit.

Each grid item takes up a full row with a couple of exceptions: `grid__item-2`
shares a row with `grid__item-3`, and `grid__item-7` shares a row with
`grid__item-8`.

Create five columns of equal width. Set up `grid__item-2` and `grid__item-8` to
take up 2 / 5 of their row, and set up `grid__item-3` and `grid__item-7` to take
up the remaining 3 / 5 of the row.

```css
.grid__section-2 {
  display:  /* Fill this in. */ ;
  grid-template-columns: /* Make five columns of equal widths. */ ;
  grid-template-rows: /* Fill this in. */ ;
  grid-template-areas:
   /* Fill in the appropriate grid areas here. */ ;
}
```

There should be seven rows in your new grid. You may want to add background
colors to these so they are easier to see on the page.

Add heights to the grid items so that they approximate the heights on the NYT
homepage seen in the screenshots. Use these heights:

| Element           | Height     |
|-------------------|------------|
| `.grid__item-2-1` | 480 pixels |
| `.grid__item-2-2` | 200 pixels |
| `.grid__item-2-3` | 200 pixels |
| `.grid__item-2-4` | 150 pixels |
| `.grid__item-2-5` | 350 pixels |
| `.grid__item-2-6` | 480 pixels |
| `.grid__item-2-7` | 200 pixels |
| `.grid__item-2-8` | 200 pixels |
| `.grid__item-2-9` | 200 pixels |

At this point, add some border lines to help you see where the grid items start
and end.

```css
.flex__item,
.grid__item {
  border: 1px solid #333333;
}
```

## Section 3

Now, it's time to handle the **sidebar**. There are also seven items in the
`grid__section-3` DIV in your HTML file:

```html
<div class="grid__section grid__section-3">
  <div class="grid__item grid__item-3-1">G3-1</div>
  <div class="grid__item grid__item-3-2">G3-2</div>
  <div class="grid__item grid__item-3-3">G3-3</div>
  <div class="grid__item grid__item-3-4">G3-4</div>
  <div class="grid__item grid__item-3-5">G3-5</div>
  <div class="grid__item grid__item-3-6">G3-6</div>
  <div class="grid__item grid__item-3-7">G3-7</div>
</div>
```

You're going to make them look like this.

![Section 3 Layout](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/grid-project-section-3-full-layout.png)

Repeat the same process used above for `grid__section-2` to create another grid
inside `grid__section-3`. In the following grid, create two columns of equal
width. `.grid__item-3-3` will share a row with `.grid__item-3-4` and have equal
heights, while the other five grid items will take up one row each.

```css
/* Grid Section 3 Styles */

.grid__item-3-1 {
  grid-area: g3-1;
}

.grid__item-3-2 {
  grid-area: g3-2;
}

.grid__item-3-3 {
  grid-area: g3-3;
}

/* Set up the rest of the seven grid items. */

.grid__section-3 {
  display:  /* Fill this in. */ ;
  grid-template-columns: /* Make two columns of equal widths. */ ;
  grid-template-rows: /* Fill this in. */ ;
  grid-template-areas:
   /* Fill in the appropriate grid areas here. */ ;
}
```

Add heights to the grid items so that they approximate the heights on the NYT
homepage seen in the screenshots. Use these heights:

| Element           | Height     |
|-------------------|------------|
| `.grid__item-3-1` | 200 pixels |
| `.grid__item-3-2` | 290 pixels |
| `.grid__item-3-3` | 760 pixels |
| `.grid__item-3-4` | 760 pixels |
| `.grid__item-3-5` | 330 pixels |
| `.grid__item-3-6` | 240 pixels |
| `.grid__item-3-7` | 240 pixels |

________________________________________________________________________________
# Gridding Up A Page: Phase Four

Use your knowledge of both flexbox and CSS Grid, you can finish the layout for
all 10 areas of the main grid. Each section below contains the specifications
for you to finish it. You should be pretty familiar with the content of the
HTML file, now. For each of the sections below, you will be dealing with the
CSS class `.grid__section-«number»` where «number» is 4, 5, 6, etc.

## For Section 4 ("Other News")

- Set this section's height to 590px.
- Create a grid with 5 columns of equal width and 6 rows of equal width.
- Place the 9 grid items in the correct locations (see screenshot below).

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-3.png)

## For Section 5 ("Smarter Living")

- Set this section's height to 273px.
- Create a flex container that contains a row of items.
- Set the 5 items to be equal width so that they appear on the row, according to
  the screenshot (see screenshot below).

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-3.png)

## For Section 6 ("Features")

- Set this section's height to 712px.
- Create a grid with 6 columns of equal width and 2 rows of equal width.
- Place the 5 grid items in the correct locations (see screenshot below).

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-4.png)

## For Section 7 ("Discovery")

- Set this section's height to 400px.
- Create a grid with 7 columns of equal width and 2 rows of equal width.
- Place the 4 grid items in the correct locations (see screenshot below).

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-5.png)

## For Section 8 ("Most Popular")

- Set this section's height to 360px.
- Create a grid with 5 columns of equal width and 3 rows of equal width.
- Place the 6 grid items in the correct locations (see screenshot below).

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-5.png)

## For Section 9 ("News")

- Create a flex container that contains rows of items and allows items that
  don't fit to wrap to a new row.
- Set each one of the 17 items to have a height of 360px and width of 20%.
- The items in this section should flexibly fill their container, like in the
  screenshot below.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-6.png)

## For Section 10 ("Footer")

- Set this section's height to 404px.
- Create a grid with 6 columns. The first 5 columns should be equal width, and
  the last column should be 213px wide. The grid should also be 3 rows of equal
  width.
- Place the 7 grid items in the correct locations (see screenshot below).

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/grid/assets/nyt-home-7.png)


## What you've done

You have just had a lot of practice figuring out how to make the Flexible Box
Model and Grid Layouts work. That is really a credit to you. Here's a link to
the solution file, if you want to take a look at it.
