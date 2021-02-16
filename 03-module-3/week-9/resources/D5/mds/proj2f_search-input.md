# The Search Modal
________________________________________________________________________________

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
