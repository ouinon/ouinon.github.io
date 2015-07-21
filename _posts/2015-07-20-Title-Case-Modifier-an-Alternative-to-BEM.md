---
layout: post
title: "title-case Modifier an Alternative to BEM"
date:   2015-07-20 17:52:03
categories: css
tags: [css]
---

Described here is a method of working with HTML and CSS class names in an organised way. The goal is similar to that of the [BEM Syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) but goes about the problem in a different way.

### TCM Starts off with ordinary classes

There's nothing here particularly radical here, for the most part we're going to be implementing our classes as per usual.

{% highlight css linenos=table %}
/* CSS */
.block{
    display:block;
    margin:0 auto 1rem;
    background-color:blue;
    width:400px;
    padding:1rem;
}
{% endhighlight %}
{% highlight html linenos=table %}
<!-- HTML -->
<div class="block">
    <span>Normal State</span>
</div>
<div class="block">
    <span>Normal State</span>
</div>
<div class="block">
    <span>Normal State</span>
</div>
{% endhighlight %}
<div class="demoblock">
    <div class="block">
        <span>Not Assigned</span>
    </div>
    <div class="block">
        <span>Not Assigned</span>
    </div>
    <div class="block">
        <span>Not Assigned</span>
    </div>
</div>
Let's now say that we now want one of those blocks to be assigned somehow, to do this we'll add a _modifying_ class called __Assigned__ to the `.block` class.

The rule goes that any class that _modifies_ another should be in title-case (hence <b>T</b>itle <b>C</b>ase <b>M</b>odifiers).

In this instance we'll add an __Assigned__ modifier to the block.

{% highlight css linenos=table %}
/* CSS */
.block{
    display:block;
    margin:0 auto 1rem;
    background-color:gray;
    width:400px;
    padding:1rem;
}
.block.Assigned{
    background-color: LightGray;
    outline:2px solid green;
    font-weight:bold;
}
{% endhighlight %}
{% highlight html linenos=table %}
<!-- HTML -->
<div class="demoblock">
    <div class="block">…</div>
    <div class="block">…</div>
    <div class="block Assigned">
        <h1>Assigned</h1>
    </div>
</div>
{% endhighlight %}
<div class="demoblock">
    <div class="block">
        <span>Normal State</span>
    </div>
    <div class="block">
        <span>Normal State</span>
    </div>
    <div class="block Assigned">
        <span>Assigned</span>
    </div>
</div>

Let's assume that once assigned a block may go-on to be __Complete__. In this instance we would add a __super-modifier__. To indicate it's superiority the class will be suffixed it with `-`, our new code looks like this:

{% highlight css linenos=table %}
/* CSS */
.block{
    display:block;
    margin:0 auto 1rem;
    background-color:gray;
    width:400px;
    padding:1rem;
}
.block.Assigned{
    background-color: LightGray;
    outline:2px solid gray;
    font-weight:bold;
}
.block.Complete-.Assigned{
    background-color: white;
    outline:2px solid LightGreen;
}
{% endhighlight %}
{% highlight html linenos=table %}
<!-- HTML -->
<div class="block">…</div>
<div class="block Assigned">
    <h1>Not Assigned</h1>
</div>
<div class="block Complete- Assigned">
    <h1>Assigned + Complete</h1>
</div>
{% endhighlight %}

<div class="demoblock">
    <div class="block">
        <span>Normal State</span>
    </div>
    <div class="block Assigned">
        <span>Assigned</span>
    </div>
    <div class="block Complete- Assigned">
        <span>Assigned + Complete</span>
    </div>
</div>

Looking at the code you might have asked why, within both the HTML and CSS class declarations, you used the order:

- <b>class</b>, <b class="tdUnd">super-modifier</b>, <b>modifier</b>
- `.block.Complete-.Assigned`

instead of

- <b>class</b>, <b>modifier</b>, <b class="tdUnd">super-modifier</b>
- `.block.Assigned.Complete-`

If may seem a little too much like an American date format at first, but the the `-` adds legibility as it points nicely to our modified class. More importantly the __super-modifier__ also has a higher [specificity](https://css-tricks.com/specifics-on-css-specificity/) rank (_3,1 vs 2,1_). The base class `block` stays at the start of the declaration to allow us to reference the original class we're dealing with.

### Infinite Depth

In rare instances you might even have a need for an __ultra-modifier__. It's not worth another example but if say the __Complete__ element went on into an __Archived__ state then the CSS declaration would look like this:

{% highlight css linenos=table %}
.block.Archived--.Complete-.Assigned{…}
{% endhighlight %}

Of-course to keep going down this route would only require only the addition of another `-` but I don't have a superlative for __ultra__ so I'm not sure what you'd call it, though you see the point.

These __ultra__ modifiers are really just an example, for the most part your states won't become this complex, if two states can belong to one element it's worth considering a __sibling modifier__ which would look something like this, where `.Complete-` and `.Modified-` are siblings:

{% highlight css linenos=table %}
.block.Complete-.Assigned{…}
.block.Modified-.Assigned{…}
.block.Complete-.Modified-.Assigned{…}
{% endhighlight %}

### SASS

The syntax is ideally suited for use with SASS, with which the previous code block would look like this:
{% highlight scss linenos=table %}
.block{
    display:block;
    margin:0 auto 1rem;
    background-color:gray;
    width:400px;
    padding:1rem;
    &.Assigned{
        background-color: LightGray;
        outline:2px solid gray;
        font-weight:bold;
        &.Complete-{
            background-color: white;
            outline:2px solid LightGreen;
            &.Archived--{…}
        }
    }
}
{% endhighlight %}

### Summary

I find this approach extremely useful, it prevents the addition of unnecessary classes and has brought discipline to how I name classes.

Ids and Classes are of-course case-sensitive and most of the posts you'll read dogmatically advise against upper-case letters simply for fear of typos, for my money though it's time that capitals found an application in CSS just as they have in JavaScript.

Sadly, TCM doesn't play well with a lot of code out there. Bootstrap for example uses classes like: `.active` by default in the JavaScript as well as CSS making it hard to implement when using these libraries.

To get around this I simply list these classes as aliases at the top of my file to serve as a reference.

{% highlight scss linenos=table %}
// TCM Aliases
// .active = .Active
{% endhighlight %}

This serves only to remind myself that I don't have a typo in my code (lower-case in place of title-case).

{% highlight css linenos=table %}
.block.Complete-.active{…}
{% endhighlight %}

### Further Reading

- [http://primercss.io/guidelines/#class-naming-conventions](http://primercss.io/guidelines/#class-naming-conventions)

<style type="text/css">
    .block{
        display:block;
        margin:0 auto 1rem;
        background-color:gray;
        width:400px;
        padding:1rem;
    }
    .block.Assigned{
        background-color: LightGray;
        outline:2px solid gray;
        font-weight:bold;
    }
    .block.Complete-.Assigned{
        background-color: white;
        outline:2px solid LightGreen;
    }
</style>