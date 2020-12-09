Positioning elements allows us to manipulate where those elements appear on the page. 
Some position properties go with _the page flow_, 
while a couple of properties cause an element to be _removed from the flow_. 
The **flow of a page refers to the relationship of block and inline elements before positioning or other layout changes** occur. 
(_See the MDN doc on [Flow Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout) for more info._)

The [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property accepts any of the following five values:

*   **Static**
*   **Relative**
*   **Absolute**
*   **Fixed**
*   **Sticky**

All properties except for `static` are used in conjunction with the properties
 * `top`, 
 * `right`, 
 * `bottom` 
 * `left` 
 
The `top`, `right`, `left` and `bottom` properties are all optional,
**except in the case of a sticky element**, which `_requires at least one of the four properties to be set_`.
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

Open up the [Positioning Elements](https://codepen.io/aa-academics/pen/dyogoWM?editors=1100) CodePen to follow along with the changes in this article (as well as letting you experiment!).
![picture 1](../../images/0738efca44ae536da8be949ef70a14542e0e930edac13c724ce8a34128c294de.png)  

Static positioning
------------------

**Static** is the **default position value of page elements**. A `static` element is not considered to be _positioned_ on the page, 
since it will appear normally according to the page flow. 

* **The** properties `top`, `right`, `bottom`, `left` and `z-index` do not affect static elements.

You probably won't use this value much, unless you are overriding other values with it, but this is how to set an element to be static.

**CSS:**
```cs
    #pink-box {
      background-color: #ff69b4;
      position: static;
    }
```
Because you're just explicitly setting the value to the value that it already is by default, nothing changes in the way the browser draws it.

![Statically positioned](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/static-pink-box.png)

Relative positioning
--------------------

A relatively positioned element remains in its original position in the page flow (like a static element) 

and can be offset from that position using the `top`, `right`, `bottom` and `left` properties.

The element is positioned _relative to its initial place in the page flow_. 

Relative positioning creates a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) -- overlapping elements whose order can be set by the `z-index` property. (See the MDN doc on [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) for an example.)
![picture 2](../../images/f061e54062cc50ac932f6337e804151820d3ebf59b469a21751ddb26632bce01.png)  


The `top`, `right`, `bottom`, and `left` properties take a length which, as you likely recall, is a value and a unit of measurement (or percentage).

    #pink-box {
      background-color: #ff69b4;
      bottom: 0;
      left: -20px;
      position: relative;
      right: 0;
      top: 0;
    }

![Relatively positioned pink box](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/relative-pink-box.png)

Absolute positioning
--------------------

An absolutely positioned element is removed from the page flow, and other elements around it act like it's not there. The element is positioned in relation to its closest _positioned_ ancestor, or, if one cannot be found, to the `<html>` document. It can be offset from that position using the `top`, `right`, `bottom` and `left` properties. Absolute positioning creates a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) -- overlapping elements whose order can be set by the `z-index` property. (See the MDN doc on [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) for an example.)

### Example of an absolutely positioned element

In the following CSS, you will note that the container element has a position set to "relative". This is so the browser will calculate the position of any absolutely positioned children from its top-left corner.

    .container {
      background-color: #2B2D2F;
      position: relative;
    }
    
    #pink-box {
      position: absolute;
      top: 60px;
    }

![Absolutely positioned pink box](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/absolute-pink-box.png)

Things to note about how the pink box was positioned and laid out.

*   The pink box is positioned absolutely, meaning that it was removed from the flow of the document. The image above shows us that the blue box has filled in the place of pink box because the browser does not consider the pink box to be in the normal left-to-right layout of the content.
*   The pink box is stacked on top of the static blue box (static because that is the default `position` value). When the browser removed the pink box from the flow, it put it in its own virtual layer _above_ the statically positioned elements.
*   Again, it's important to note that the container element has its `position` set to "relative". This is so the browser will position the pink box relative to its parent.

It's important to do that relative thing if you want the absolute positioning of the element to be calculated from the top-left corner of the closest positioned ancestor element, in this case, the container element.

### Example of two absolutely positioned elements

What happens if you chose to absolutely position the pink box _and_ the blue box? What do you think will happen? Try it out in the CodePen.

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

![Two absolutely positioned elements](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/absolute-blue-box.png)

In this case, both of the pink and blue boxes were taken out of the normal flow. The pink box shows up where it did before. But, now, because the blue box is _layered_, it shows up **on top of** the pink box. This is how you can make interesting and neat UIs that have elements on top of one another.

### Example of an absolutely positioned element using bottom instead of top

Here is an example where you can see how it changes when you don't have a positioned ancestor element. The CSS sets the pink box's `bottom` value to 60 pixels, rather than the `top`. This pushes the element 60 pixels _up_ from the bottom of the parent element's bottom.

    .container {
      background-color: #2b2d2f;
      position: relative;
    }
    
    #pink-box {
      background-color: #ff69b4;
      bottom: 60px;
      position: absolute;
    }

![Relative parent and absolute child shifted up](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/relative-parent-absolute-child.png)

You can see that the browser has shifted the pink box up, so much so, that you can't see the number "2" anymore.

If you had not relative positioned the container element, the browser would try to find the bottom of its nearest positioned ancestor. Since none occurs, the browser assumes you meant that it should be 60 pixels from the _bottom of the document_!

    .container {
      background-color: #2b2d2f;
    }
    
    #pink-box {
      background-color: #ff69b4;
      bottom: 60px;
      position: absolute;
    }

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/static-parent-absolute-child.png)

Fixed positioning
-----------------

A fixed element is removed from the page flow, like an absolutely positioned element. However, unlike an absolutely positioned element, a fixed element's position is relative to the `<html>` document itself and not to an ancestor element. It is positioned using the `top`, `right`, `bottom` and `left` properties. Fixed positioning creates a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) -- overlapping elements whose order can be set by the `z-index` property. (See the MDN doc on [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) for an example.)

A fixed element will remain in the same spot on the page, regardless of the size of the window or whether a user scrolls.

    #pink-box {
      background-color: #ff69b4;
      left: 300px;
      position: fixed;
      top: 15%;
    }

Here it is without any scrolling.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/fixed-element.png)

Here it is with some scrolling.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/fixed-element-scroll.png)

Fixed positioning can be useful for things like nav bars, buttons, links, videos, etc. that we want to keep visible as the user scrolls. Ensure that elements positioned with an absolute or fixed value do not obscure other content when the page is zoomed to increase text size.

Sticky positioning
------------------

A sticky element remains in its original position in the page flow, and it is positioned relative to its closest block-level ancestor and any _scrolling_ ancestors (created when `overflow` is `hidden`, `scroll`, `auto`, or `overlay`). It behaves like a relatively positioned element until the point at which you would normally scroll past it in the viewport. At that scrolling point, the element "sticks" to the page wherever it has been positioned by the `top`, `left`, `bottom` and `right` properties. Sticky positioning creates a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) -- overlapping elements whose order can be set by the `z-index` property. (See the MDN doc on [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) for an example.)

You must set at least one threshold value using `top`, `right`, `bottom` or `left` in order for sticky positioning to work. A sticky element will start off as _relatively_ positioned until you scroll past its original position -- at which point it will be _fixed_ to the position you specified.

    #pink-box {
      background-color: #FF69B4;
      position: sticky;
      top: 60px;
    }

Here is what it looks like without any scrolling.

![Sticky without scrolling](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/sticky-element.png)

Once you scroll, the element will stick in place when it gets where it should not scroll past.

![Sticky with scrolling](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/sticky-element-scroll.png)

A good use case for sticky positioning is for headers in scrollable lists. Here's and example of headers in a list having sticky positioning. They act relative until they get to the top of the scrollable area. At that point, they become fixed until the bottom of their parent element pushes them off of the screen as the parent element scrolls off of the screen.

![sticky section headers](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/css-layout-sticky-positioning.gif)

_**Note:** Like fixed positioning, sticky positioning can be useful for things like nav bars, buttons, links, videos, etc. that we want to keep visible as the user scrolls. One use-case would be keeping a section or menu heading at the top of the page until the user scrolls past that section into a new one. Again, use with caution, and always keep accessibility in mind._
