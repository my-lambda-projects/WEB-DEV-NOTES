# Selector (CSS)

> A CSS selector is the part of a CSS rule that describes what elements in a document the rule will match. The matching elements will have the rule's specified style applied to them.

A **CSS selector** is the part of a CSS rule that describes what elements in a document the rule will match. The matching elements will have the rule's specified style applied to them.

Consider this CSS:

    p {
      color: green;
    }
    
    div.warning {
      width: 100%;
      border: 2px solid yellow;
      color: white;
      background-color: darkred;
      padding: 0.8em 0.8em 0.6em;
    }
    
    #customized {
      font: 16px Lucida Grande, Arial, Helvetica, sans-serif;
    }
    

The selectors here are `"p"` (which applies the color green to the text inside any [`<p>`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTML/Element/p "The HTML <p> element represents a paragraph.") element), `"div.warning"` (which makes any [`<div>`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTML/Element/div "The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.") element with the class `"warning"` look like a warning box), and `"#customized"`, which sets the base font of the element with the ID `"customized"` to 16-pixel tall Lucida Grande or one of a few fallback fonts.

We can then apply this CSS to some HTML, such as:

    <p>This is happy text.</p>
    
    <div class="warning">
      Be careful! There are wizards present, and they are quick to anger!
    </div>
    
    <div id="customized">
      <p>This is happy text.</p>
    
      <div class="warning">
        Be careful! There are wizards present, and they are quick to anger!
      </div>
    </div>

The resulting page content is styled like this:


[Source](https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector)