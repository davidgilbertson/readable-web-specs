# Readable web specs
An extension that loads some CSS on W3C, WHATWG and ECMAScript pages to make them more readable.

## Why?
On some W3C pages, there is no maximum width, meaning on large screens text becomes difficult to read.

The font used is the default sans-serif - not pretty. And the default font size is 16px.
A bit too small for my eyes. 

## What does it change?
It sets what I consider the right default for readable text:
- A generous 20px font size
- Dark gray text, not black
- Nice fonts, with a native font stack
- A comfortable column width, about 14 words per row for body text

Also, a few pretty things:
- Breakouts (for examples, notes, etc) are 1000px wide and stand out
- Decent line height in the navigation menus for easier click targets

## Where does it change styles?
- w3.org
- ecma-international.org/ecma-262
- drafts.csswg.org
- test.csswg.org
- html.spec.whatwg.org
- drafts.fxtf.org
- w3c.github.io

## About this repo
PRs and issues welcome. The CSS for W3C sites seems quite ad hoc in places. Most
classes are shared across all w3.org pages, some are not. So this CSS will
_probably_ break things occasionally. whatwg.org and ecma-international.org should be fine 

If you want to change something significantly, raise an issue first. You can paste
screenshots straight into GitHub. If you do a PR, please paste before and after images and
a link to the page where the change takes effect. 

## Where do you see yourself in five years?
I'd be quite pleased if some of the people in charge of these sites took the lead from
this repo and incorporated some readability improvements.

## Thanks
<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
