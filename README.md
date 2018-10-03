# Readable web specs
An extension that loads some CSS on W3C, WHATWG and ECMAScript pages to make them more readable.

## Why?
On some W3C pages, there is no maximum width, meaning on large screens text becomes difficult to read.

The font used is the default sans-serif - not pretty. And the default font size is 16px.
A bit too small for my eyes. 

## What does it change?
It sets what I consider the right default for readable text:
- A generous font size
- Dark text, not black
- Light background, not white (the contrast ratio is 10, not 20)
- Nice fonts, with a native font stack
- A comfortable column width, about 14 words per row for body text

Also, a few pretty things:
- Breakouts (for examples, notes, etc) are wider and stand out
- Decent line height in the navigation menus for easier click targets
- GitHub style `<code>` highlighting

## Where does it change styles?
- w3.org/TR
- w3c.github.io
- csswg.org
- html.spec.whatwg.org
- drafts.fxtf.org
- ecma-international.org/ecma-262

## What does it do on other pages?
Nuthin'

## About this project
This is for me. The CSS is a shitfight. It probably breaks the layout of every spec I've never been to.
But if you like it and want to help, your PRs and issues are quite welcome.

If you want to change something significantly, raise an issue first. You can paste
screenshots straight into GitHub. If you do a PR, please paste before and after images and
a link to the page where the change takes effect. 

### Tech
It uses [StandardJS](https://standardjs.com/)

### Testing
All testing is manual. It's a bit tricky, because class names are shared between sites.

Some pages I've looked at in more details than others:
- https://www.w3.org/TR/css-grid-1/
- https://html.spec.whatwg.org/
- http://www.ecma-international.org/ecma-262
- https://drafts.csswg.org/css-variables
- https://www.w3.org/TR/css-2015/
- https://www.w3.org/TR/css-2017/ (note the different nav behavior to 2015)

## Where do you see yourself in five years?
I'd be quite pleased if the people in charge of these sites took the lead from
this repo and incorporated some readability improvements.

## Thanks
<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
