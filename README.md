# weboptimizeproject
Website Optimization
This Project is For Udacity Coursework Udacity Front-End Project

Instructions For Use

1.Download this Project or clone repository through Git.
2.Open Index.html in a Web Browser

USing grunt to resize images and minify css
1.install grunt with npm install -g grunt-cli to run it from any directory.
2.install dependencies with npm install.
3.Run grunt (functions and tasks for resizing and minifying css are already defined in gruntfile.js)


Optimizations for pizza.html,style.css,main.jss

1.minified Css using:
  grunt cssmin
2.added will-change property to .mover class
3.minified js using:
  grunt uglify

Optimizations for main.js, and style.css
1.resizePizzas()
    declared a new variable for pizzasize DOM search and used it in switch to avoid writing it again and again.
2. changePizzaSize()
made a reference to randomPizzaContainer and utilized that instead of querying the DOM every time.
Removed Dx and instead used switch statements that returns percentage width required according to changes in size sliding bar.
This avoid calculating pixel values again and again.
Removed determinDX function as it was rather pointless.

3.UpdatePositions()

pulled document.body reference and calculation out of for loop and used window.scrollY / 1250 as const
made phase for sin wave an array to do 5 calculations once and then reference in for loop.

scroll event listener

originally found snippet on html5 rocks and found it to be used by another fellow fend student
we are using this to make sure the updatePositions function isn't firing unnecessarily.

var last_known_scroll_position = 0;
var ticking = false;

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      updatePositions();
      ticking = false;
    });
  }
  ticking = true;
});


DOM Content Loaded
reduced pizzas from 200 to 30
pulled querySelector out of for loop
had to set the original left position of each element becuase without it translateX will translate from 0 px and will range only from 0 to 100 because of sine function

Index.html
used web font loader
This prevents the font from Google from blocking page rendering
Changed GA script tag to defer ( is relied upon by another script which is at the bottom page so it will be executed when they appear in the document) placed script utilizing GA at end of page
Made all CSS Inline
Optimized all images
used ImageMagick and grunt to automate  resizing of all images.