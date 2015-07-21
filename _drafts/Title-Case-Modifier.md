---
layout: post
title: "Reproducing the 'How Long to Watch' Infographic with D3 PART.01/03"
date:   2015-07-20 17:52:03
categories: javascript
tags: [css]
---


# Title Case Modifier TCM

Described here is a method of working with HTML and class names in an organised way. The goal is similar to that of the [BEM Syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) but goes about the problem in a different way.

## TCM Starts off with ordinary classes

```css
.block{
    display:block;
    margin:0 auto 1rem;
    background-color:blue;
    width:400px;
    padding:1rem;
}
```

```html
<div class="block">
    <h1>Not Highlihted</h1>
</div>
<div class="block">
    <h1>Not Highlihted</h1>
</div>
<div class="block">
    <h1>Not Highlihted</h1>
</div>
```

<div class="block">
    <span>Normal State</span>
</div>
<div class="block">
    <span>Normal State</span>
</div>
<div class="block">
    <span>Normal State</span>
</div>

Let's now say that we want one of those blocks to be highlighted, to do this we'll add a 'modifying' class to the `.block` class. The rule goes that any class that _modifies_ another should be in Title Case (hence __T__itle __C__ase __M__odifiers).

In this instance we'll add a __Highlight__ modifier to the block.

```html
<div class="block">
    <h1>Not Highlihted</h1>
</div>
<div class="block">
    <h1>Not Highlihted</h1>
</div>
<div class="block Highlight">
    <h1>Highlihted</h1>
</div>
```

```css
.block{
    display:block;
    margin:0 auto 1rem;
    background-color:gray;
    width:400px;
    padding:1rem;
}
.block.Highlight{
    background-color: LightGray;
    outline:2px solid green;
    font-weight:bold;
}
```
<div class="block">
    <span>Normal State</span>
</div>
<div class="block">
    <span>Normal State</span>
</div>
<div class="block Highlight">
    <span>Highlighted</span>
</div>

Let's assume that once highlighted a block may go on to be __Completed__. In this instance we'll add `super-modifier`, and to indicate this we'll be adding hyphen `-` to the end of the class name. Our new code looks like this:

```html
<div class="block">
    <h1>Not Highlihted</h1>
</div>
<div class="block Highlight">
    <h1>Not Highlihted</h1>
</div>
<div class="block Complete- Highlight">
    <h1>Highlihted + Complete</h1>
</div>
```

```css
.block{
    display:block;
    margin:0 auto 1rem;
    background-color:gray;
    width:400px;
    padding:1rem;
}
.block.Highlight{
    background-color: LightGray;
    outline:2px solid gray;
    font-weight:bold;
}
.block.Complete-.Highlight{
    background-color: white;
    outline:2px solid LightGreen;
}
```

<div class="block">
    <span>Normal State</span>
</div>
<div class="block Highlight">
    <span>Highlighted</span>
</div>
<div class="block Complete- Highlight">
    <span>Highlighted + Complete</span>
</div>

- The very most perceptive amongst you might have asked why within the HTML class declaration you used the order `class super-modifier modifier` instead of `class modifier super-modifier`. If that seems too much like an American date format to you, for me at least the `-` adds legibility. The base class (`block`) must be at the start of the declaration to save us having to read to the end of the line.

In rare instances you might even have a need for an __ultra-modifier__. It's not worth another example but for example if the Complete went on into an __Archived__ state then the CSS declaration would look like this:

```
.block.Archived--.Complete-.Highlight
```

Of-course to keep going down this route would only require only the addition of another `-` but I don't have a superlative for `ultra` so I'm not sure what you'd call it though you see the point.

The syntax is ideally suited for use with SASS, with which the previous code block would look like this:
```scss
.block{
    display:block;
    margin:0 auto 1rem;
    background-color:gray;
    width:400px;
    padding:1rem;
    &.Highlight{
        background-color: LightGray;
        outline:2px solid gray;
        font-weight:bold;
        &.Complete-{
            background-color: white;
            outline:2px solid LightGreen;
        }
    }
}
```

I find this approach extremely useful, it prevents the addition of unnecessary classes and has brought a level of discipline to how I name classes.

If you're interested in some of the other ways I deal with HTML and CSS naming conventions please see my other posts.


<style type="text/css">
    .block{
        display:block;
        margin:0 auto 1rem;
        background-color:gray;
        width:400px;
        padding:1rem;
    }
    .block.Highlight{
        background-color: LightGray;
        outline:2px solid gray;
        font-weight:bold;
    }
    .block.Complete-.Highlight{
        background-color: white;
        outline:2px solid LightGreen;
    }
</style>