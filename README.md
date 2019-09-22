# Advanced-CSS3
In this final project, you’ll get to take everything you’ve learned and use it to build your own simple 12 column grid-based framework.

# (- PROJECT: Advanced-CSS3 - )
I recreated the Microsoft.com website using a custom built framework.

## Authors: 
### Aaron
Aaron's Github Profile: https://github.com/Aaron-RN


## Github Link
Github Link: https://github.com/Aaron-RN/Advacned-CSS3

## Live Link
Development Link: https://raw.githack.com/Aaron-RN/Advanced-CSS3/Development/index.html

Master Link: https://raw.githack.com/Aaron-RN/Advanced-CSS3/master/index.html

# Images
![](images/screenshot1.png)
![](images/screenshot2.png)
![](images/screenshot3.png)

# Features
A 12-column Grid based responsive system.
Breakpoints for Screen Sizes:
Small = 720px width and below,
Medium = 721px width to 1023px width
Large = 1024px width and above

## Simple Use

3 Main classes: .container, .row and .col-*-m*-*

The .container class sets the element at a specified max width with 5% paddings on the left and right sides. It also removes wrapping and hides overflown content.

The .row class which is placed as a child of a container returns wrapping, is a relative positioned element and takes up 100% of the view width space.
There are two variations of the .row class: .row-flex and .row-flex-auto
The .row-flex class turns the element into a flex-box that spans the entire width of its parent element
The .row-flex-auto class turns the element into a flex-box that has an auto expanding width(width of element is relative to its children's width). 

The .col-*-m*-* class has a few variations to: .col-*, .col-*-md, .col-*-sm.
The .col-* variant sets the column size for the element to one value for all screen sizes. The * is replaced with one of the numbers from 1 - 12.
The .col-*-md variant sets the column size for the element to the given value (ranging from 1-12) as the column size for medium screens.
The .col-*-sm variant sets the column size for the element to the given value (ranging from 1-12) as the column size for small screens.
Example combining the 3 variants : <div class="col-2 col-3-md col-4-sm"></div>

The .col-*-m*-* variant takes all three variables into one class-name as .col-lg-m(md)-sm. The first variable addresses the column size for large screens, the second variable addresses the column size for medium screens and the last variable addresses the column size for the small screens.
Example : <div class="col-2-3m-12"></div>

### Animations
Includes 5 pre-made animations: grow, grow:hover, slideUp, slideLeft, slideLeft:hover

animate-grow - selected element grows and shrinks in a pulsating fashion
animate-grow-hover - selected element grows on hover and shrinks when not hovered over
animate-slideUp - element slides up from bottom of screen
animate-slideLeft - element slides from the right to left
animate-slideLeft-hover - element slides from the righ to left on hover

### Display Features
For screen size references refer to Features section above on section related to Breakpoints.

.hide - element is hidden
.hide-sm - block element is hidden on small screens
.hide-sm-inline - inline-block element is hidden on small screens 
.hide-sm-flex - flex-box element is hidden on small screens
.hide-md - block element is hidden on medium screens
.hide-md-inline - inline-block element is hidden on medium screens
.hide-md-flex - flex-box element is hidden on medium screens
.hide-lg - block element is hidden on large screens
.hide-lg-inline - inline-block element is hidden on large screens
.hide-lg-flex - flex-box element is hidden on large screens
.show-sm-only - element is hidden on both large and medium screens
.show-sm-only-inline - inline-block element is hidden on both large and medium screens
.show-sm-only-flex - flex-box element is hidden on both large and medium screens

.inline-block { display: inline-block; }
.row { display: block; width: 100%; white-space: normal; position: relative; }
.row-flex { display: flex; width: 100%; flex-wrap: wrap; }
.row-flex-auto { display: flex; width: auto; flex-wrap: wrap; }

### TEXT DECORATIONS and TRANSFORMS
.underline { text-decoration: underline; }
.uppercase { text-transform: uppercase; }
.smallcaps { font-variant: small-caps; }
.text-strikeout { text-decoration: line-through; }
.bold { font-weight: 700; }
.bold-100 { font-weight: 100; }
.bold-200 { font-weight: 200; }
.bold-300 { font-weight: 300; }
.bold-400 { font-weight: 400; }
.bold-500 { font-weight: 500; }
.bold-600 { font-weight: 600; }
.bold-800 { font-weight: 800; }
.bold-900 { font-weight: 900; }
.italic { font-style: italic; }

### FONT SIZES
.size-6 { font-size: 0.375em; }
.size-8 { font-size: 0.5em; }
.size-10 { font-size: 0.625em; }
.size-12 { font-size: 0.75em; }
.size-13 { font-size: 0.8125em; }
.size-14 { font-size: 0.875em; }
.size-15 { font-size: 0.9em; }
.size-16 { font-size: 1em; }
.size-18 { font-size: 1.125em; }
.size-20 { font-size: 1.25em; }
.size-22 { font-size: 1.375em; }
.size-24 { font-size: 1.5em; }
.size-26 { font-size: 1.625em; }
.size-28 { font-size: 1.75em; }
.size-30 { font-size: 1.875em; }
.size-32 { font-size: 2em; }
.size-34 { font-size: 2.125em; }
.size-36 { font-size: 2.25em; }
.size-38 { font-size: 2.375em; }
.size-40 { font-size: 2.5em; }
.size-46 { font-size: 2.875em; }
.size-50 { font-size: 3.125em; }

### LINE HEIGHTS
.lineH-1-2 { line-height: 1.2; }
.lineH-1-3 { line-height: 1.3; }
.lineH-1-4 { line-height: 1.4; }
.lineH-20 { line-height: 20px; }
.lineH-30 { line-height: 30px; }
.lineH-70 { line-height: 70px; }

### Text Colors
.text-black { color: #000; }
.text-white { color: #fff; }
.text-mute { color: #aaa; }
.text-gray { color: #6f6f6f; }
.text-dark { color: #555; }
.text-red { color: #ff4d4d; }
.text-blue { color: #0073e6; }
.text-green { color: #11af11; }
.text-yellow { color: #efa611; }
.text-orange { color: #f71; }

### BACKGROUNDS
.bg-none { background: transparent; }
.bg-white { background-color: #fff; }
.bg-black { background-color: #000; }
.bg-gray { background-color: #aaa; }
.bg-darkgray { background-color: #333; }
.bg-red { background-color: #a11; }
.bg-lightgray { background-color: #f2f2f2; }
.bg-jumbo - non-repeating background image, that covers the entire element width and height while centered which resizes depending on the view width of the browser.

### WIDTH AND HEIGHT
.width-max { width: 100%; }
.height-30 { min-height: 30px; }
.height-50 { min-height: 50px; }
.height-100 { min-height: 100px; }
.height-250 { min-height: 250px; }
.height-300 { min-height: 300px; }
.height-500 { min-height: 500px; }
.height-max { height: 100%; }

### BORDERS
.border { border: 1px gray solid; }
.border-2 { border: 2px gray solid; }
.border-3 { border: 3px gray solid; }
.border-r-0 { border-right: none; }
.border-l-0 { border-left: none; }
.border-t-0 { border-top: none; }
.border-b-0 { border-bottom: none; }
.border-circle { border-radius: 50%; }
.border-rad-10 { border-radius: 10px; }
.border-white { border-color: #fff; }
.border-black { border-color: #000; }
.border-red { border-color: #c00; }

### MARGINS
.m-t-1 { margin-top: 1em; }
.m-t-2 { margin-top: 2em; }
.m-t-3 { margin-top: 3em; }
.m-t-4 { margin-top: 4em; }
.m-t-10 { margin-top: 10px; }
.m-t-15 { margin-top: 15px; }
.m-t-20 { margin-top: 20px; }

.m-b-1 { margin-bottom: 1em; }
.m-b-2 { margin-bottom: 2em; }
.m-b-3 { margin-bottom: 3em; }
.m-b-10 { margin-bottom: 10px; }

.m-l-1 { margin-left: 1em; }
.m-l-2 { margin-left: 2em; }
.m-l-3 { margin-left: 3em; }
.m-l-20 { margin-left: 20px; }

.m-r-1 { margin-right: 1em; }
.m-r-2 { margin-right: 2em; }
.m-r-3 { margin-right: 3em; }

.margin-l-auto { margin-left: auto; }
.margin-r-auto { margin-right: auto; }

### PADDINGS
.p-0 { padding: 0 !important; }
.p-5 { padding: 5px; }
.p-10 { padding: 10px; }
.p-15 { padding: 15px; }
.p-20 { padding: 20px; }
.p-5-child div { padding: 5px; }
.p-5-child-md div { padding: 5px; }
.p-10-child div { padding: 10px; }
.p-15-child div { padding: 15px; }

.p-l-1 { padding-left: 1em; }
.p-l-2 { padding-left: 2em; }
.p-l-3 { padding-left: 3em; }
.p-l-5 { padding-left: 5px !important; }

.p-r-1 { padding-right: 1em; }
.p-r-2 { padding-right: 2em; }
.p-r-3 { padding-right: 3em; }

.p-t-1 { padding-top: 1em; }
.p-t-2 { padding-top: 2em; }
.p-t-3 { padding-top: 3em; }
.p-t-10 { padding-top: 10px; }
.p-t-15 { padding-top: 15px; }
.p-t-20 { padding-top: 20px; }

.p-b-1 { padding-bottom: 3em; }
.p-b-2 { padding-bottom: 3em; }
.p-b-3 { padding-bottom: 3em; }
.p-b-3px { padding-bottom: 3px !important; }
.p-b-10 { padding-bottom: 10px; }
.p-b-15 { padding-bottom: 15px; }
.p-b-20 { padding-bottom: 20px; }

### POSITIONINGS
.pos-relative { position: relative; }
.pos-absolute { position: absolute; }
.container { max-width: calc(1600px + 10%); padding-left: 5%; padding-right: 5%; overflow: hidden; white-space: nowrap; }
.width-auto { width: auto; }
.center { margin: auto; }
.center-text { text-align: center; }
.vert-mid,
.vert-mid * { vertical-align: middle; align-self: center; }
.vert-top,
.vert-top * { vertical-align: top; align-self: flex-start; }
.vert-btm,
.vert-btm * { vertical-align: bottom; align-self: flex-end; }
.vert-stretch,
.vert-stretch * { vertical-align: middle; align-self: stretch; height: 100%; }
.vert-middle { top: 50%; transform: translateY(-50%); }

### LINE HEIGHTS
.lineH-1-2 { line-height: 1.2; }
.lineH-1-3 { line-height: 1.3; }
.lineH-1-4 { line-height: 1.4; }
.lineH-20 { line-height: 20px; }
.lineH-30 { line-height: 30px; }
.lineH-70 { line-height: 70px; }

### FONT SIZES
.size-6 { font-size: 0.375em; }
.size-8 { font-size: 0.5em; }
.size-10 { font-size: 0.625em; }
.size-12 { font-size: 0.75em; }
.size-13 { font-size: 0.8125em; }
.size-14 { font-size: 0.875em; }
.size-15 { font-size: 0.9em; }
.size-16 { font-size: 1em; }
.size-18 { font-size: 1.125em; }
.size-20 { font-size: 1.25em; }
.size-22 { font-size: 1.375em; }
.size-24 { font-size: 1.5em; }
.size-26 { font-size: 1.625em; }
.size-28 { font-size: 1.75em; }
.size-30 { font-size: 1.875em; }
.size-32 { font-size: 2em; }
.size-34 { font-size: 2.125em; }
.size-36 { font-size: 2.25em; }
.size-38 { font-size: 2.375em; }
.size-40 { font-size: 2.5em; }
.size-46 { font-size: 2.875em; }
.size-50 { font-size: 3.125em; }

### TEXT DECORATIONS and TRANSFORMS
strong { font-weight: bold; }
.underline { text-decoration: underline; }
.uppercase { text-transform: uppercase; }
.smallcaps { font-variant: small-caps; }
.text-strikeout { text-decoration: line-through; }
.bold { font-weight: 700; }
.bold-100 { font-weight: 100; }
.bold-200 { font-weight: 200; }
.bold-300 { font-weight: 300; }
.bold-400 { font-weight: 400; }
.bold-500 { font-weight: 500; }
.bold-600 { font-weight: 600; }
.bold-800 { font-weight: 800; }
.bold-900 { font-weight: 900; }
.italic { font-style: italic; }
