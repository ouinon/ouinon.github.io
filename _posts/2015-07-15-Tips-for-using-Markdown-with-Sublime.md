---
layout: post
title: "How to use Sublime to edit Markdown files!"
date:   2015-07-07 15:56:03
categories: jekyll update
tags: [sublime, markdown, blogging]
dqheader: Do you have any Sublime-Markdown tips you'd like to share? Cos I'd love to here them.
---

#### 1. Set-up

A beginning is a very delicate time, let's get everything set-up as we want it before we crack on.

The begin the two plugins you'll need to install through __Sublime Package Manager__ are: [MarkdownEditing](http://sublimetext-markdown.github.io/MarkdownEditing/#installation) and [OmniMarkupPreview](https://github.com/timonwong/OmniMarkupPreviewer#installation).

##### Configuring the Editor

To have your content spell-checked by default you'll need to configure it in your __.preferences__ file. Go to your __Command Palette__ __`CTRL` + `⌘` + `P`__, type __mduser__ the menu item will read: __Preferences: MarkdownEditing Settings - User__ copy and paste the following into the file. My set-up includes line-numbers which I find useful.

{% highlight json linenos=table %}
{
    "spell_check": true,
    "line_numbers": true   
}
{% endhighlight %}

Line Numbers, Spell-Check, Preview Window

#### 2. Open up a link

One of the big advantages of Markdown over traditional word processing is the ability to edit links without the need for a pop-up window. __Noah Coad__ has built great little plug-in for opening urls from Sublime without copying and pasting them. Install [Open-URL](https://github.com/noahcoad/open-url) through the package manager.

Hitting __`CTRL` + `U`__ will now bring up any URL that your cursor resides within, if it's not a URL it will Google the word for you. Nailed it.

#### 3. Look up a word

![Grandiloquent](http://imagizer.imageshack.us/v2/1280xq90/540/7gBhAD.png "Grandiloquent")

Not everyone knows what the word __grandiloquent__ means, should you need a reminder, hover over the word and hit __`CTRL` + `⌘` + `D`__ to bring up the definition of a word. 

It's worth noting that this works in right across OSX and not just in Sublime. 

#### 4. Search and Replace Tips

Any Sublime developer worth their salt knows about:

- __Quick Add Next `CTRL` + `D`__ 
- __Quick Add All `CTRL` + `⌘` + `G`__. 

Multi-pointers are a flagship feature of Sublime, I certainly however have forgotten the value of good, old fashioned Search and Replace which work superbly in Sublime. 

First let's bring up the __Replace…__ window.

- __Replace… `⌥` + `⌘` + `F`__

You can still search from the replace menu which is why I'm using it here. Click your cursor between any word and hit:

- __Use selection for Find `⌘` + `E`__

You'll see that the contents of __Find What:__ is immediately replaced by the whatever the cursor sits within, this works for spans as well. The obvious companion command is:

- __Use selection for Replace `⇧` + `⌘` + `E`__

You can see how useful their application can be. __Use selection for Find__ is especially useful and can be used within Find in Files as well as when the search dialogue isn't even visible.

- Try __Use selection for Find `⌘` + `E`__ then __Find Next `⌘` + `G`__ the result will satisfy.

#### 5. Markdown Specific Shortcuts

http://sublimetext-markdown.github.io/MarkdownEditing/#commands is really where you'd expect to find a list of short-cuts, as of _14/07/2015_ it's marked TODO. Luckily these commands are available as a __README__. Available through the following menu options.

- `Sublime Text` ► `Preferences` ► `Package Settings` ► `Markdown Editing` ► `README`

Headers work with caveats:

- __Header 1 `CTRL` + `⌘` + `1`__
- __Header 2 `CTRL` + `⌘` + `2`__
- __Header 3 `CTRL` + `⌘` + `3`__
- __Header 4 `CTRL` + `⌘` + `4`__
- __Header 5 `CTRL` + `⌘` + `5`__
- __Header 6 `CTRL` + `⌘` + `6`__

Provisos being: __a)__ The cursor must be on a blank line _or_ __b)__ Text must be highlighted. Bold and Italics are achievable with:

- Bold __`⌥` +  `⌘` + `B`__
- Italics __`⌥` +  `⌘` + `I`__

Provided as well are a few nice snippets for __links__. Type out the following and hit the __`TAB`__ key.

- `mdl` __Pastes the contents of the clipboard into a link__ 
- `mdi` __Pastes the contents of the clipboard into an image link__

And speaking of snippets…

#### 6. Snippets in Alfred || Launchpad _PAID SOFTWARE_

![Alfred Action](https://www.dropbox.com/s/ljmohhhqqrd752y/albertsnippet.gif?dl=0&raw=1 "Alfred Action")

[Alfred](http://www.alfredapp.com/powerpack/) along with [Launchpad](https://www.obdev.at/products/launchbar/index.html) provide really nice means to integrate work-flows on your mac. I haven't scratched the surface of what can be done with either but I find snippets are particularly useful.

For example if I want to paste today's date, I just hit.

- __`⌥` + `⌘` + `C`__ To bring up the snippet menu;
- __`D`__ To search for my __DateTime__ snippet then hit return to paste it.

Results in __14/07/2015 18:47__. Or whatever date it might happen to be.

This is only an amuse-bouche of what can be done with with this software, this is really only to dilate your awareness to the possibilities.

#### 7. Abbreviations with Emmet

Emmet is a keystone plugin for Sublime, definitely one to get installed (especially before continuing this point).

Abbreviations are a form of shorthand which allow you to include large portions of code normally HTML. In this example though we'll use it for plain text, say for example you would like a list of numbers __1.__ to __100.__ with line-breaks, you would bring up the Abbreviation panel:

- __Enter Abbreviation `CTRL` + `⌥` + `↵`__

And type (paste) in the following:

{% highlight text %}
{$.
}*100
{% endhighlight %}

You'll see numbers 1…100 listed before you. Normally Emmet deals with HTML tags, which is why the curly brackets are included in the example. Without them using:

{% highlight text %}
$.*3

{% endhighlight %}

Results in:

{% highlight text %}
<1 class=""></1>
<2 class=""></2>
<3 class=""></3>
{% endhighlight %}

Not what we want but useful to know.

#### 8. Selecting Text Skills.

Here are some shortcuts to select and navigate text in our markdown files.

- __Expand Selection to Scope `⇧` + `⌘` + `SPACE`__

Have a play around with this, it may or may not prove useful depending on how you work. The __Scope__ obviously depends on where your cursor sits. It's great for highlighting URLs or text within a #header.

- __Expand Selection to Paragraph__

> No keyboard short-cut is built in for this command, to add one there's a really great tutorial by __Brendan Kemp__ [here](http://brendankemp.com/essays/how-to-add-a-shortcut-for-any-command-in-sublime-text/).

The command highlights everything until it finds two line-breaks above and below the cursor, forming a paragraph (makes sense).

- __Expand Selection to Line `⇧` + `⌘` + `L`__

![Expand to Line](https://www.dropbox.com/s/s24e6nhpnhiim1l/expandtoline640.gif?dl=0&raw=1 "Expand to Line")

This is a sweet little command I've only just begun to use, put simply it inserts a cursor wherever it finds a line-break. So for example if you wanted to add a hyphen at the start of a series of lines you could do it simply by selecting the lines you want to affect, now enter the above command.

You can see our selection is now split into individual cursors. If we take each cursor to the start of the selection, we can add our hyphen and there we have our list. At this stage, we could also use an __Emmet__ abbreviation (previous point) and include simply:

{% highlight text %}
{$}
{% endhighlight %}

Expecto Patronum Harry!, You've only gone and bloody done it! That's had the effect of prefixing each of rows with a number. 

<aside class="fin">Fin</aside>