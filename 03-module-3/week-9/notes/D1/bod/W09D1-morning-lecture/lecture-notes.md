# W09D1 Lecture Notes

## General

### Week Overview

1. M, T, W: Paired, CSS Material
2. Thursday: Paired, AJAX Material
3. Friday: Solo, optional projects, study hall, study guide and practice assessment will be released.

### Tips for this Week

1. Learn by Doing
2. Use Chrome Dev Tools (pesticide)
3. Declarative vs Imperative programming -- no control flow with CSS; Top to Bottom

## Lecture Material

### HTML Setup

1. in VSCode, type `html:5` in the page and hit enter to setup boiler plate
2. inside the head, add a ```<link>``` tag with attributes rel, type, and href

### CSS Basics

1. Selector, Declaration Blocks, Property, Value
2. Semi-Colons b/w rules
3. Look out for conflicting rules
4. lots of short-hand (e.g. 'border' === 'border-left', 'border-right', etc...)
5. not a lot of 'errors' like in JS -- your CSS will just silently not be applied

### Selectors

1. Type Selectors (aka Tag Selectors)
2. Class Selectors (.className)
3. ID Selectors (#idName)
4. Universal Selectors (*)
5. Attribute Slectors (a[...])

### Compound Classes

1. space-separated in HTML
2. dot-separated in CSS

### Type

1. font-family
2. font-size: absolute (px, cm); relative (em, rem)
3. font-weight
4. text-align  (left, center, right, etc)
5. text-decoration (underline, none, etc)
6. text-transform (uppercase, lowecase, capitalize, etc)

### Background

1. background-color
2. background-image

### Box-Shadows

offset-x | offset-y | blur | spread | color
anything ommitted is 0.
must end with color
must be in this order
