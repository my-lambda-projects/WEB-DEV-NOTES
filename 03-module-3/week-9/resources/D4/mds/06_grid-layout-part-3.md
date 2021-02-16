# Grid Items Styles
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Spanning Columns/Rows](#spanning-columnsrows)
- [Grid Areas](#grid-areas)
- [Justify/Align Self](#justifyalign-self)
- [Shorthand Item Properties](#shorthand-item-properties)
- [What we learned:](#what-we-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

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

<img src="images/grid-item-span.svg"/>

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