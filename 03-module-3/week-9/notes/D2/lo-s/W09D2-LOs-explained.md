## Media Queries, Positioning, and Layouts (W09D2) - Learning Objectives

### Media Queries
1. Identify the different types of media that a media query can target: 
- `all` - we are not distinguishing between the following (this is default)
- `print` - i.e. anytime a document is set to print mode, with intention of printing. 
- `screen` - phones, tablets, computers, smart devices, etc. 
- `speech` - for use with speech synthesizers

2. Explain how the media features (and prefixed subfeatures) of "aspect ratio", "height", "orientation", and "width" are applied
- We can specify the media features that we want to trigger our styles being applied. They can be thought of as conditionals that, if true, will apply additional styles (or overwrite previously applied styles).
- To indicate a media feature that we would like to specify, we place it in parentheses after our `@media` keyword. We can combine multiple features and even include the media type by using the `and` operator:
```css
html {
  background-color: white;
  color: #333333;
}

@media screen and (min-width: 301px) and (max-width: 600px) {
  html {
    background-color: #333333;
    color: white;
  }
}
```
- The different features that we can target are:
  - `aspect-ratio`: The ratio of width-to-height of the user's viewport (for example, a window that is 1600 pixels wide and 800 pixels tall will have an aspect ratio of 2). We will most often use this with a `min-` or `max-` prefix instead of setting one specific value.
  - `height`: the height of the viewport, typically in pixels. Most often used with a `min-` or `max-` prefix to set a bounds instead of a specific value.
  - `width`: the width of the viewport, typically in pixels. Most often used with a `min-` or `max-` prefix to set a bounds instead of a specific value.
  - `orientation`: An indicator of whether our viewport is wider than it is tall (`landscape`) or taller than it is wide (`portrait`). Since we are just using these exact values, we do not use any prefixes.

3. Use media queries to change the styles of content in an HTML page to achieve a desired effect
- Be able to set conditions for bounds on your device that will trigger a different style. For example, if our viewport shrinks below a certain height we could remove a menu by setting its `display` property to `none`, or if we have a color background we can change it to white for `print` media, etc.
- A code example: Given the following CSS rule, write a media query that would change the `product-index` container so the items appear in a verticle fashion for a viewport width less than or equal to 300px:
```css
.product-index {
  display: flex;
}

.product-index__item {
  background-color: blue;
}
```
- The media query we could write to accomplish this:
```css
@media screen and (max-width: 300px) {
  .product-index {
    flex-direction: column;
  }
}
``` 


### Layout and the Box Model
1. Describe how:
- padding and margins work in the box model
  - I like to think of padding, borders, margins as a puffy jacket. The content is just me, but when I put on a puffy jacket, I'm adding some space between me and my borders (the outside of my jacket). If the outside of my jacket is the border, the margin is then how far away do I want to be from anything else. Margin is my social distancing :)
  - `padding` - the innermost part of the box model -- creating space around an element's content before its border.
  - `margin` - the space between one html element and another html element
  - One thing to note is that margins will collapse. If I'm comfortable with being 10 pixels away from my neighbor but my neighbor wants to be 15 pixels away from everyone, overall we are going to be 15 pixels away. I don't need an extra 10 pixels for myself, 15 pixels satisfy both of our requests.
  - The `box-sizing` property will also affect how these values are calculated.
    - With a value of `content-box`, setting a width or height on an element is only considering the content itself. Any padding and border that we add on is going to be in addition to this specification.
      - A 100px wide div with padding of 10px and a 5px border means the content will still be 100px wide, 10px padding on each side, and a 5px border on each side, totaling 130px before our margin starts. Increasing padding or border will expand outward instead of eating into the content.
    - With a value of `border-box`, setting a width or height on an element is going to consider the content, padding, and border as part of that width or height calculation.
      - A 100px wide div with padding of 10px and a 5px border means the content will end up being 70px wide, 10px padding on each side, and a 5px border on each side. Increasing padding or border will eat into the content instead of expanding outward.

- the browser positions a fixed positioned element
  - `position: fixed` - always relative to the document, not any particular parent, and are unaffected by scrolling. It will always show up at that exact location on the screen, no matter where the user is scrolled to.

- the browser positions a relatively positioned element
  - `position: relative` - positioned relative to where it would normally be located; i.e. the element is still in the flow of the document, but now left/right/top/bottom/z-index will affect how it is actually displayed.

- the browser positions absolutely positioned elements with and without a relatively positioned parent element
  - `position: absolute` - the element is removed from the flow of the document and other elements will behave as if it’s not even there. If its positioning is affected by a left/right/top/bottom property, it will use its closest `position: relative` parent as the starting point. If no parent is positioned relatively it will use the document in general as its reference.

- the browser positions a static positioned element
  - `position: static` - this is the default positioning, so you won't see it written out that often. Elements are in their normal page flow, one after the other. The positioning properties left/right/top/bottom/z-index do not affect statically positioned elements. If we want to use these properties we would need to change the positioning to one of the previously mentioned values.

2. Identify elements rendered with specific padding and margin settings
- Recognize that padding is the area between content and borders.
  - When `box-sizing` is set to `content-box`, this will extend our overall width/height. When it is set to `border-box`, this will eat into our content area.
  - Stylings such as `background-color` that affect our content area will generally also apply to our padding.
- Recognize that margin is the area between elements' borders.
  - Margins collapse, meaning if two neighboring elements each have a margin set, the smallest value that will satisfy both constraints will be used.
  - If Element A has a margin of 10px and Element B, its neighbor, has a margin of 15px, the space between these elements will be 15px. The 15px space accomodates both the 10px requirement from Element A and the 15px requirement from Element B.

3. Apply padding and margins to HTML elements to achieve a desired layout
- When adding padding and margins we can specify each edge of our box separately, or use some shorthand.
- To define them separately, we can use the `-left`, `-right`, `-top`, and `-bottom` suffixes on `padding` and `margin` to specify that specific side.
  - `margin-right: 5px` will add a 5px margin ONLY to the right side.
- To define them together we can use some shorthand:
  - Providing one value will assign that amount to all four sides
    - `margin: 5px` will add a 5px margin on all sides
  - Providing two values will assign the first value as the top and bottom and the second value as the right and left
    - `margin: 5px 10px` will add a 5px top and bottom margin and a 10px right and left margin.
  - Providing four values will assign them in clockwise order, starting from the top
    - `margin: 5px 10px 15px 10px` will add a 5px top margin, 10px right margin, 15px bottom margin, and 10px left margin.

4. Apply positioning settings to HTML elements (fixed, relative, and absolute) to achieve a desired layout. (Sticky positioning is not supported on some older but still used browsers, so it will not be assessed, but can useful.)
- This is an application of LO #1 from this category.
- Some example knowledge:
  - If we want an element to always show up in the top right corner of the page, know that we should use `position: fixed` with a specific value for `top` and `right` properties to set it in that corner.
  - If we want an element to be 20 pixels to the right of its parent, outside the normal page flow, we should make the parent `position: relative` and have the child `position: absolute` with a `right: 20px` property in order to set it positioned to that relative parent.

5. Identify which HTML elements have a default "inline" display value
- Common elements that default to `inline` include `span`, `a`, `input`, `button`, `img` tags, etc.
- An exhaustive list: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
- `inline` display values will result in the element being displayed next to each other in a single line until it fills up the available space.
- The `width` and `height` properties do not affect how the element is displayed.
- `padding`, `margin`, and `border` can still be used, but will not affect other `inline` elements. For example, setting a margin of 100px will still have the other inline elements display directly next to it, but the block element that comes later on in the document on its own line will still be pushed down.

6. Identify which HTML elements have a default "block" display value
- Common elements that default to `block` include `div`, `p`, headers like `h1`, `ul`, `li` tags, etc.
- An exhaustive list: https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
- `block` display values will result in elements being displayed on a new line.
- The `width` and `height` properties are respected.

7. Describe and use z-index positioning of elements
- The `z-index` can be useful in setting an element on different layers of the page, its third dimension. These different layers are purely visual, they do not affect the layout and positioning of other elements.
- A positive `z-index` means we want that element on top. We can think of it as the line coming straight out of the screen. We want that element closer to the user.
- A negative `z-index` means we want the element behind other elements, pushed away from the user.


### Flexible Box Layout
1. Explain how flexible box layout lays out elements
- Flex box allows for easy responsive design by displaying items in a flexible container, where a `container`'s height/width will adjust to the viewport.
- Flex box is an easy way for us to tell our browser that we want all of the elements in our container laid out in a row or column, and how those elements should be positioned, grow/shrink, and wrap across that axis.

2. Use the `flex` property to specify grow, shrink, and basis values.
- The `flex` property is a combination of three different properties: `flex-grow`, `flex-shrink`, and `flex-basis`.
- `flex-grow`:
  - Determines how much of the extra space within the container the element will take up.
  - The default value is 0, meaning it will not grow at all.
  - Setting a `flex-grow` property to different values for elements within the same container sets up a ratio for how much of the extra space should be alotted to the different elements to grow into.
- `flex-shrink` :
  - Similar to `flex-grow`, this property determines what factor the element should shrink by when the container is not large enough to fit all elements.
  - The default value is 1. A value of 0 means it will not shrink at all.
  - If all elements have the same `flex-shrink` value, they will all shrink at the same rate. Larger values will shrink at a faster rate than smaller values.
- `flex-basis` :
  - The initial main size of the element.
  - The default value is 'auto', meaning it will use the width of the element.
  - We can specify specific absolute lengths, like 20px, percentages, like 25%, or use automatic sizing keywords like `content` to assign the size required to fit all of the element's content.

3. Use the `flex-direction` property to direct the layout of the content
- We can specify if we would like our container to display our content in a row or a column using `flex-direction`.
- The default for flex box containers is `row`, but we can use `column` to display our content vertically.

4. Use the `flex-wrap` property to affect the wrap of content layout within an element using flexible box layout
- Instead of trying to fit all items on one line by shrinking them, we can also wrap elements to a new line by setting `flex-wrap: wrap`.
- `nowrap` is the default value
- `wrap-reverse` will stack our rows or columns in the reverse order (our second row will display on top or our second column will display to the left, for example)

5. Use `align-self`, `justify-content`, and `align-items` to change the way that children elements are laid out in a flexible box layout
- These properties affect how an individual element is laid out across the main axis of a flex-box layout.
- `justify-content` is always concerned with positioning ALONG the main axis.
  - If we are displaying our content in a row, `justify-content` will determine how the elements are positioned horizontally along that row.
  - If we are displaying our content in a column, `justify-content` will determine how the elements are positioned vertically along that column.
- `align-items` is always concerned with positioning ACROSS the main axis.
  - If we are displaying our content in a row, `align-items` will determine how the elements are positioned vertically across that row.
  - If we are displaying our content in a column, `align-items` will determine how the elements are positioned horizontally across that column.
- `align-self` allows us to selectively tell an element that we want it to align itself differently compared to the standard `align-items` rule.
  - If we have all of our items centered vertically along our row but we want one item to be at the top of the container instead, we can apply an `align-self: flex-start`, for example, which would keep all of the other elements in line and just bump this element up to the top of the row.

6. Use the `order` property to change the order in which elements will appear in a flexible box layout
- `order` can be used to rearrange individual elements
- The default value is 0. Higher numbers will push the element to be later in the ordering.
- If we want a specific element to be at the very beginning, we could assign it an `order: -1`. If all of the other elements are left to default (0), it will be the lowest value and be shown first.
- This only affects the visual display of the elements, not how the HTML is constructed, tab orders, speech, etc.

### Grid Layout
1. Explain how grid layout lays out elements
- The grid layout style divides your document into smaller sections that can be organized and customised via the css grid layout properties. The number of rows and columns, and their respective dimensions can be set. 

2. Use the `grid-template-columns`, `grid-template-rows`, and `grid-template` properties to specify the layout of the grid using relative and absolute measures
- `grid-template-columns` allows us to take in any number of arguments to signify the dimensions for the corresponding column. Passing two values means we are creating two columns for our grid, for example.
- `grid-template-rows` allows us to take in any number of arguments to signify the dimensions for the corresponding row. Passing two values means we are creating two rows for our grid, for example.
- `grid-template` is shorthand to allow us to define rows and columns at once. We do so by providing our row values, then a `/` then the column values, such as `grid-template: 100px 1fr / 50px 200px 50px`. We can also provide additional arguments to for area names, with many additional optional syntaxes. Personally I think these can get confusing to parse, but if you're curious, take a look at the MDN docs: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template

3. Use `grid-template-areas` to label areas of a grid and `grid-area` to assign an element to the area
- Areas are a great way for us to lump multiple sections of our grid together into one space.
- With our column and row dimensions defined, we can assign section names using the `grid-template-areas` property on the container.
```css
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
- Using the same name assigns the rows and columns to be grouped into one section.
- Now that those areas are defined, we can use the `grid-area` property on an individual element to add it to that section of the grid:
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
```

4. Use `column-gap`, `row-gap`, and `gap` (previously `grid-column-gap`, `grid-row-gap`, and `grid-gap`) to set the "gutter" areas between elements in a grid layout
- The `gap` properties can be used to define space that we want to maintain between our rows and columns.
- By default, our rows and columns are all directly next to each other, but giving these properties values creates a "gutter" between the sections.

5. Use `grid-column-start`/`grid-column-end` and `grid-row-start`/`grid-row-end` to create spans across multiple columns and rows with positive integers, negative integers, and in conjunction with the "span" operator
- When we are assigning an item to be placed in the grid, we can indicate in our CSS what row/column we want the element to stretch across.
- The `-start` values are the grid lines that we want our element to begin at. The left-most and top-most grid lines (outside borders) begin at 1 and count upwards as we move right and down the grid.
- Similarly, the `-end` values are where the element will stretch to.
- Negative numbers can also be used to indicate counting from bottom/right instead of top/left.
- Instead of providing a specific row/column number, we can use `span` to indicate we want to continue across a certain number of rows/columns. For example, `grid-column-end: span 2` will go across two columns instead of specifying a specific column number.

6. Explain and use the shorthand versions of `grid-column` and `grid-row` to define how an element will span a grid layout
- `grid-column` is a combination of `grid-column-start and grid-column-end`, allowing us to provide both values in one line, separated by `/`.
  - `grid-column: 1 / 3;` will assign this element to stretch from column 1 to 3 (the first two columns of the graph.)
- `grid-row` is a combination of `grid-row-start and grid-row-end`, allowing us to provide both values in one line, separated by `/`.
  - `grid-row: 4 / span 4;` will assign this element to stretch from row 4, spanning the next four rows.

7. Use the `order` property to change the default order in which items are laid out
- Similar to the order used in flex box, we can assign a specific order for elements when they are assigned to a row or column section.
- Look at LO #6 of Flex Box for more specifics, but generally a higher order value will come later in the visual placement.

8. Explain and use the "fr" unit of measure
- `fr` indicates the fraction of available space
- It can be very useful when combined with other measurements. For example, if we have three rows and want our first row to be 50px high, then split the remaining area between two parts to the second row and one part to the third row, we can say `grid-template-rows: 50px 2fr 1fr`. This will always take 50px for the first row, then divide up the rest based on the fractions.

9. Use `justify-items`, `align-items`, `justify-content` and `align-content` to layout items in each grid area
- `justify-items` and `align-items` will position items within the respective section of the grid.
  - `justify-items` will position the items horizontally within the box
  - `align-items` will position the items vertically within the box
  - We can think of these similarly to justifying and aligning with a flex-box that has the default `row` direction.
- `justify-content` and `align-content` will position the grid itself within the container, assuming it does not fill the full container.
  - This can come up when we define specific absolute values for columns/rows that don't add up to the whole container size.
