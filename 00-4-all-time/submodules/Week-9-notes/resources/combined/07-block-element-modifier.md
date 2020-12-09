# App Academy Open

> Learn to code online with access to App Academy’s entire full-stack course for free

*   ⏱ 10 minutes
    

*   Catalog
*   Js Py Sep 2020 Online
*   Week 9 Sep 2020 Online
*   Bem Guidelines

Ah, CSS: where your code gets a style upgrade. As a developer, you can do a lot with CSS to dress up your code, from using colors and background images to doing fancy animations. It can be fun to play with CSS, using different tricks to get your website content to stand out. However, there’s one aspect of CSS that is a pain point for developers: naming conventions.

Bad, or loose, CSS naming conventions are rampant in the codebases of many software development shops. Without guidelines to follow, engineers create their own, often conflicting, naming standards. One engineer might use `sword-case` for her CSS classes, while another might use `snake_case`. Another person on the same team might, for inexplicable reasons, decide to use `camelCase`. The mismatched standards make for code that isn’t easy to read and can lead to confusion, errors, and extra time spent debugging or hunting for the correct classes. In other words, complete anarchy!

BEM Guidelines
--------------

To solve the problem of loose standards, reputable developers have created guidelines by which all developers can abide. One of the most popular sets of CSS conventions is [BEM](http://getbem.com/), or the **“Block, Element, Modifier”** methodology.

What is a Block?
----------------

According to [BEM](http://getbem.com/naming/), _a **Block** represents “a standalone entity that is meaningful on its own.”_

Rules for Blocks:

*   Blocks can be nested and interact with each other, but they are semantically equal.
*   Holistic entities without DOM representation (such as controllers or models) can be blocks.
*   Block names may consist of Latin letters, digits, and dashes.
*   Any DOM node can be a block if it accepts a class name.

Example Block:

**HTML**

    <div class="”block”"></div>

**CSS**

    .block {
      color: red;
    }

What is an Element?
-------------------

According to [BEM](http://getbem.com/naming/), _an **Element** represents “part of a block and has **no** standalone meaning.”_

Rules for Elements:

*   Any element is semantically tied to its block.
*   Element names may consist of Latin letters, digits, dashes and underscores.
*   The CSS class is formed by using first the block name, plus two underscores, plus the element name: `.block__elem`
*   Any DOM node within a block can be an element. Within a given block, all elements are semantically equal.
*   In CSS, there should be no dependency on other blocks/elements on a page (i.e. the Element class should be used independently).

Example Element:

**HTML**

    <div class="”block”">
      <span class="block__elem"></span>
    </div>

**Good CSS**

    .block__elem {
      color: red;
    }

**Bad CSS (i.e. extraneous use of .block class and div element selector)**

    .block .block__elem {
      color: red;
    }
    div.block__elem {
      color: red;
    }

What is a Modifier?
-------------------

According to [BEM](http://getbem.com/), _a **Modifier** represents “a flag on blocks or elements. Use them to change appearance, behavior or state.”_

Rules for Modifiers:

*   Modifier is an extra class name which you add to a block/element DOM node.(Examples: .button--_active_, .button\__text--\_red_)
*   Add modifier classes only to blocks/elements they modify, and keep the original class (e.g. keep the class _.button_ and add _.button-active_).
*   Modifier names may consist of Latin letters, digits, dashes and underscores.
*   The CSS class is formed as block’s or element’s name plus two dashes: `.block--mod` OR `.block__elem--mod` AND `.block--color-red`. (_Spaces in complicated modifiers are replaced by dash._)

Example Modifier:

**Good HTML (i.e. keep original block class)**

    <div class="nav nav--dark">...</div>
    <div class="nav__list-container nav__list-container--shadow">...</div>

**Bad HTML (i.e. remove original block class)**

    <div class="nav--dark">...</div>

**CSS**

    /* Use modifier class name as selector. */
    .nav--dark {
    }
    
    /* Alter elements based on a block-level modifier. */
    .nav--dark .nav__list-container {
    }
    
    /* Element modifier: */
    .nav__list-container--shadow {
    }

BEM Example
-----------

Here is an example use case for BEM, straight from the [BEM guidelines](http://getbem.com/):

Suppose you have block `form` with modifiers `theme-xmas` and `simple` and with elements `input` and `submit`, and element `submit` has its own modifier `disabled` for not submitting the form while it is not filled:

**HTML**

    <form class="form form--theme-xmas form--simple">
      <input class="form__input" type="text" />
      <input class="form__submit form__submit--disabled" type="submit" />
    </form>

**CSS**

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

What we learned:
----------------

*   Developers use CSS guidelines, like BEM, to make their classes and styles more consistent.
*   BEM stands for "Block, Element, Modifier".
*   The definition of a Block and examples.
*   The definition of an Element and examples.
*   The definition of a Modifier and examples.

Did you find this lesson helpful?


[Source](https://open.appacademy.io/learn/js-py---sep-2020-online/week-9-sep-2020-online/bem-guidelines)