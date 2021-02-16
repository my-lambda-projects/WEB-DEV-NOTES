# Make It Pretty Practice
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [What Recruiters Are Looking For](#what-recruiters-are-looking-for)
- [Attributes of Great Looking Websites](#attributes-of-great-looking-websites)
- [Additional requirements](#additional-requirements)
- [Avoid these things](#avoid-these-things)
- [Exercise](#exercise)

<!-- /code_chunk_output -->
________________________________________________________________________________

Your portfolio projects are the first impression that a company has of you.
Imagine you are a non-technical person looking to hire a developer to build your
website. What would you think if you reviewed a site that looked unfinished, or
poorly styled, even if the functionality worked perfectly? Would you have the
perspective to tell the difference from a poorly implemented site and one that
is robust, but not visually polished?

Non-technical people will be looking at your projects before engineers, and they
can't see the amount of work it takes to get a backend up and running. All they
see is the visual appearance, so unless you take care of your frontend you'll
never even get the chance to talk about the backend work you did.

This material should make it so that you can

* Evaluate your site against industry-standard visual styles
* Identify the attributes of current trends in website presentation
* Identify gaps that can cause a website to be perceived as incomplete

## What Recruiters Are Looking For

Recruiters expect professionalism and good design (we'll discuss more about what
good design means below). A good litmus test is: if you were to stumble upon
your portfolio sight unexpectedly, would you be able to tell that this wasn't
done by a professional dev? In other words, does your website look on par with
the millions of other production sites that exist on the internet?

In response to what recruiters and interviewers might ask about how you choose
different styles for your Web applications, review TopTal's [12 Essential Web
Interview Questions].

## Attributes of Great Looking Websites

Unless you know exactly what you are doing when deciding on a visual approach,
you should select and follow a modern design framework, or use a template.

The first thing to pay attention to is padding and margin. Every element should
have padding so that its inner contents are not butting up against its edges and
margin so that the element itself is not butting up against any other elements.
In general sibling elements should NOT touch or overlap.  A good way to estimate
the correct amount is to imagine a lower-case `a` in the same size and font of
nearby text.  You should be able to fit this `a` in both the padding and the
margin such that it just barely touches the edge/text on each side.

Be sure to balance whitespace when laying out your elements and adding
margin/padding. If you have 20px of whitespace to the left of the element you
should probably have 20px to the right as well. Make sure things are centered
correctly (horizontally and vertically) and be consistent! I.E. If you have a
row of buttons in the header they should all be aligned vertically with
consistent margin and padding.

Use a [color palette] to determine your website's themes and avoid color
clashes. You should have a primary color, a secondary color, and 1 or 2 accent
colors. Your primary color is going to be the most abundant on the site followed
by your secondary color. The accent color is used for things like buttons,
tools, and other areas that you want to draw the user's eye to.  Use it
sparingly!

Use [Google Font Pairing] recommendations to find good fonts. In general, you
should not have more than 2 fonts in a web app and you should avoid mixing serif
and sans-serif fonts.

Pay attention to font-size and weight! You should use [textual hierarchies] to
break up your text and make it easier to read. Prefer multiple short lines to
fewer long lines of text when displaying info to the user. Your headers should
be large and paragraphs should be slightly smaller font size. Having widely
varying and inconsistent font sizes is one of the surest signs that a website
was designed by a beginner.  When in doubt, simplify.

Make sure your color and text choices pass [contrast requirements].

Most modern websites slightly round the corners of buttons and background
cards/modals. [You should, too]. Also, take advantage of advanced CSS features
like transitions and shadows to make your site pop. Make sure you let your user
know what parts of the site are alive through affordances.

## Additional requirements

In addition to the above recommendations, App Academy also expects your projects
to include the following:

* **Seed Data**: Make sure your seeds are plentiful and appropriate. Even an
  excellently designed site will fail to impress if you don't have a good seed
  data.
* **Favicon**: Make sure your website has a [favicon].
* **Demo Login**: Make sure your website has a demo login. Most recruiters will
  not sign up for your website with their own email address as the chance for
  misuse of said email address is too high.
* **Console output**: Be sure that your console is free of logs and error
  messages. Nothing screams amateur more than seeing a ton of console.logs when
  visiting a potential candidate's website.
* **Personal Links**: Any links to your GitHub, LinkedIn, or Angel List should
  open in a new tab.
* **Scorecard**: After you graduate, you'll stop using Progress Tracker and
  start using InterviewDB, another one of our applications. When you go to turn
  in your project on InterviewDB, be sure to include the scorecard so that your
  advisor can grade your work. Note that you'll need to make your own copy and
  save it to your google drive before adding the link to InterviewDB.

## Avoid these things

We have collected a lot of feedback from recruiters and hiring managers over the
years. These are the tips and tricks that they tell us will turn them off to
reviewing a student's project.

* Avoid fonts that look like handwriting
* Avoid over using accent colors
* Avoid themes that relate to specific holidays (ie. don't make a Christmas
  themed app)
* Dead Links. If you didn't implement a feature then don't put a link to it. If
  you do, then you're forcing recruiters to find the needle of implemented
  features in a haystack of unimplemented features.  Your site will be perceived
  as incomplete or broken
* Avoid linking to the actual site that you are cloning
* Avoid neon, bright, or crazy colors
* Avoid having too many different colors in your app.
* Avoid putting affordances on things that can't be clicked or interacted with
* Avoid blinking, spinning or flashing images
* Avoid busy tiled background images with any color text
* Avoid having everything centered.  When in doubt, do not center.  Do not
  center more than three lines of text
* Avoid too many images or huge images.  Minify all images that are not of a
  product and do not need to be examined closely
* Avoid long lists of links
* Avoid too many headlines
* Do not use blinking or flashing text, images, or transitions


## Exercise
Select three sites from [Product Hunt].  For each site, list the:

* Fonts Used
* Colors in Palette
* Contrast ratio of the main text and it's background ([Use the contrast
  checker])
* The size of padding/margins compared to a lowercase 'a'
* The maximum number of lines in a row center-justified anywhere on the site
* Load Time
* Theme or style based on (Bootstrap, Material, etc.)
* Number of broken or under construction pages


[color palette]: https://99designs.com/blog/tips/the-7-step-guide-to-understanding-color-theory/
[Google Font Pairing]: https://fonts.google.com/
[textual hierarchies]: https://blog.designcrowd.com/article/867/understanding-the-hierarchy-of-text
[You should, too]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
[affordances]: https://uxplanet.org/ux-design-glossary-how-to-use-affordances-in-user-interfaces-393c8e9686e4
[favicon]: https://www.abeautifulsite.net/what-are-favicons
[12 Essential Web Interview Questions]: https://www.toptal.com/designers/web/interview-questions
[Product Hunt]: https://www.producthunt.com/
[contrast requirements]: https://webaim.org/resources/contrastchecker/
[Use the contrast checker]: https://webaim.org/resources/contrastchecker/
