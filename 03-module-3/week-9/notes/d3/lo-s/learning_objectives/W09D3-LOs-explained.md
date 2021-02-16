## Interactivity and BEM (W09D3) - Learning Objectives

### Interactivity
1. Use the "hover" pseudo-class to be able to make changes to elements when the device pointer is over an element
- The browser will automatically add the `:hover` pseudo-class to an element when the user's pointer is on it.
- This can be useful to provide visual clues that the element is interactable like a button or link or even for providing functionality, like changing the display value of a child from `none` to `block` to make a drop-down menu appear.

2. Describe and use the `transition` property to show animated changes due to class and pseudo-class CSS rule application
- `transition-property`
  - The name or names of properties to which transitions should apply
  - Default value: `all`, meaning every difference in style will be affected by these transition rules.
- `transition-duration`
  - The duration over which transition occurs
  - Default value: 0s, meanine the transition will occur instantly. This may be useful if you only want a delay and then the changes to all happen at once.
- `transition-timing-function`
  - Determines how the intermediate values for a transition are calculated.
  - Default value: `ease`, which shows a slow transition at the beginning, speeds up in the middle, then slows down at the end.
  - Other popular values are `linear`, `ease-in`, and `ease-out`. These can become more complicated if you use a custom function with `cubic-bezier` or `steps`.
- `transition-delay`
  - How long to wait between when the property's assigned value has changed (either through CSS like a :hover or JavaScript) and when the transition begins
- `transition` is shorthand for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`
  - If any of the properties are omitted, their default values will be used.
  - We can define transitions on multiple properties by separating their definitions with commas. In the following example we define a transition on background-color with a duration of 2s and a transition on color with a duration of 1s and delay of 1s:
  ```css
  .nav__button--active:hover {
    transition: background-color 2s, color 1s 1s;
  }
  ```

3. Describe and use the `overflow`, `overflow-x`, and `overflow-y` properties to effect clipping and scrolling on elements
- The `overflow` property will account for any extended content, horizontal or vertical. If we'd like to distinguish, we can use `overflow-x` and `overflow-y`.
- `overflow: auto` - hides any content that exceeds the container size, adding a scroll bar if needed to show that content.  
- `overflow: scroll` - always adds a scroll bar, even if  it would not be needed with the content.
- `overflow: hidden` - clips any content that exceeds the container size. No scroll is added, so the user will not to see anything that extends beyond the container.
- `overflow: visible` - the content is allowed to extend beyond the container without clipping or scrolling, potentially spilling into other elements.


### Block, Element, Modifier (BEM)
1. Describe what Block means in BEM.
- “A standalone entity that is meaningful on its own.”
- Typically this means a group of elements that form some sort of unit/feature together, but could also be applied to a single element if it has enough significance and stand-alone meaning.

2. Describe what Element means in BEM.
- “Part of a block and has no standalone meaning.”
- If a component wouldn't mean anything or its meaning would be lost/changed if it was moved to another location, it generally means that it is an element of some larger block.

3. Describe what Modifier means in BEM.
- “A flag on blocks or elements. Use them to change appearance, behavior or state.”
- These classes are typically added in our JavaScript in order to modify the standard styling.
- If the user clicks on a "Dark Mode" button and we want to change the background color of an element, we could have a `.block__elem--dark-mode` class that is added in response to that click that alters the color.
- If we are only allowed to have eight elements in our bag, we can have a `.bag__add-btn--disabled` class that gets added to our button on the eighth addition that sets our cursor property to `not-allowed`, helping the user understand they should not click the button any more.

4. Identify CSS class names that follow the BEM principle.
- In general, each section of the BEM naming convention should only use letters, numbers, dashes, or underscores.
- For longer/more complicated names, we typically replace spaces that we would use in English with a dash.
- We use two underscores to separate the block from the element name and two dashes to separate the modifier from the block or element that it is modifying.
```css
/* Here we have a block called "nav" that we have associated with a "dark" modifier */
/* Use modifier class name as selector. */
.nav--dark {
}

/* We are selecting the nested "list-container" element when our "nav" block has the "dark" modifier */
/* Alter elements based on a block-level modifier. */
.nav--dark .nav__list-container {
}

/* We are selecting the "list-container" element of the "nav" block when this element has been given the "shadow" modifier */
/* Element modifier: */
.nav__list-container--shadow {
}
```
- It's important to note that we are creating whole new classes when we are talking about these modifiers. `.nav__list-container--shadow` is all one class that we created in order to make styles specifically for adding a shadow on the list container.
