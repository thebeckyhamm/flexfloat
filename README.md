##FlexFloat

####A tiny grid system that uses flexbox in browsers that support it
Some nice things it does:
- makes your grid boxes even height
- wraps your grid boxes on smaller screens when you hit a configurable minimum width

###Dependencies

FlexFloat requires [modernizr](http://modernizr.com/download/).  Add your preferred flavor of modernizr to the `<head>` of your file (make sure you check off Flexible Box Model in the options):

```
<script src="modernizr.min.js"></script>
```

###How to install
Copy the `.scss` code out of `flexfloat.scss` into your own SASS project and compile.

Or go old school and copy the straight up CSS from `flexfloat.css`.


###How it works

Modernizr adds a `flexbox` class to your html tag if it's supported. The CSS will adjust the properties on your class.

**Standard Classes**

```css
.col-5    // 5% wide (minus any gutter margin)
.col-10   // 10% wide
.col-15   // 15% wide

//...etc., plus:

.col-33 // for thirds
.col-66 
```

**Other Classes**

```css
.col-equal // use for an unknown number of columns where you want them to all be an even width

.col-spaced // use for an unknown number of columns where you want them all spaced evenly with their own relative widths.
```


####To Dos
- test in IE10
- minify css
- add extra classes to take advantage of flexbox's abilities




