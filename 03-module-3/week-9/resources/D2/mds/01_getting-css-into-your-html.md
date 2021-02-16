# Getting CSS Into Your HTML
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Maintainability: Linking to an External Stylesheet](#maintainability-linking-to-an-external-stylesheet)
- [Link to a stylesheet in an HTML file](#link-to-a-stylesheet-in-an-html-file)

<!-- /code_chunk_output -->
________________________________________________________________________________

## Maintainability: Linking to an External Stylesheet

Linking to an external stylesheet in an HTML file is a basic task all developers
should be able to do. While we could write in-line styles directly in our HTML
file, the common practice is to keep CSS in an external stylesheet linked to in
an HTML file.

CSS files tend to be long, so it's easier to keep track of styles when they're
in an external stylesheet. You will most likely use multiple stylesheets in a
typical Web application: a global stylesheet, styles for different pages, and
styles for different components or features. It's best to keep these separated
from your HTML and link to them.

## Link to a stylesheet in an HTML file

Let's go over how to link to an external stylesheet.

We would start by creating a new HTML file called example.html and setting it up
with the appropriate tags:

```html
<!-- example.html -->
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

Let's add this [link][1] tag to our HTML file in order to import a stylesheet.
This is the CDN link for **Normalize.css**, which is a common external
stylesheet that developers use to make elements render consistently across all
browsers. Our updated HTML file would look like the following:

```html
<!-- example.html -->
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
  </head>
  <body>
  </body>
</html>
```

Now, you can link to an external stylesheet, or even multiple _stylesheets_!
Whenever you want to add an external stylesheet, make sure to add it inside of
the `<head>` tags and use the [`<link>`][2] tag we used above. For example, now
that the styles have been normalized, you would normally want to add the styles
for your specific Web application. To do that, you'd just add another `link`
element with the "href" attribute set to the (normally relative) URL to your
site's stylesheet file.

```html
<!-- example.html -->
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link rel="stylesheet" href="/styles/site.css">
  </head>
  <body>
  </body>
</html>
```

Go forth, and style to your heart’s content!

[1]: https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
