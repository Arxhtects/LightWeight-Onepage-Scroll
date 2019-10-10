# Archtects
Requires Jquery Library!
View Working Concept On [Codepen](https://codepen.io/Archtects/pen/BVBomg)

### Todos

 - Make it even Lighter
 - ~Add Script to recognise how many divs are added for better customisation~
 - Add A better way to add pauses between swipes, scrolls and key presses

### The Good Stuff

Compiled Javascript : 

```sh
(function() {
  var dOne, down, iswiped, moved, moved11, moved12, moved13, myfunction, up, numdiv;
  $(document).ready(function() {
    $(".wrapper_div_onepage:first-child").attr("id", "div1");
  });

  moved = '1';
  dOne = document.getElementById('div1');

  iswiped = function(el, func) {
    var d_s, dir, ele, maxX, maxY, minX, minY;
    d_s = new Object;
    d_s.sX = 0;
    d_s.sY = 0;
    d_s.eX = 0;
    d_s.eY = 0;
    minX = 20;
    maxX = 40;
    minY = 40;
    maxY = 50;
    dir = '';
    ele = document.getElementById(el);
    if(ele) {
      ele.addEventListener('touchstart', (function(e) {
        var t;
        t = e.touches[0];
        d_s.sX = t.screenX;
        d_s.sY = t.screenY;
      }), false);
      ele.addEventListener('touchmove', (function(e) {
        var t;
        e.preventDefault();
        t = e.touches[0];
        d_s.eX = t.screenX;
        d_s.eY = t.screenY;
      }), false);
      ele.addEventListener('touchend', (function(e) {
        if ((d_s.eX - minX > d_s.sX || d_s.eX + minX < d_s.sX) && d_s.eY < d_s.sY + maxY && d_s.sY > d_s.eY - maxY) {
          if (d_s.eX > d_s.sX) {
            dir = 'r';
          } else {
            dir = 'l';
          }
        }
        if ((d_s.eY - minY > d_s.sY || d_s.eY + minY < d_s.sY) && d_s.eX < d_s.sX + maxX && d_s.sX > d_s.eX - maxX) {
          if (d_s.eY > d_s.sY) {
            dir = 'd';
          } else {
            dir = 'u';
          }
        }
        if (dir !== '') {
          if (typeof func === 'function') {
            func(el, dir);
          }
        }
        dir = '';
      }), false);
    }
  };

  myfunction = function(el, d) {
    var dir, elm;
    elm = el;
    dir = d;
    if (dir === 'u' || dir === 'r') {
      up();
    } else {
      down();
    }
  };

  iswiped('swipeme', myfunction);

  window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
      down();
    }
    if (e.deltaY > 0) {
      up();
    }
  });

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38:
        down();
        break;
      case 40:
        up();
    }
  };

  var value = 0;
  up = function() {
    numdiv = $("#swipeme > div").length;
    if(numdiv > 0) {
      numdiv = "-"+numdiv * 100;
      numdiv = parseInt(numdiv, 10);
      numdiv = numdiv + 100;
      if(numdiv != value) {
        value = isNaN(value) ? 0 : value;
        value-=100;
        document.getElementById("div1").style.marginTop = value + "vh";
      }
    }
  };

  down = function() {
    numdiv = $("#swipeme > div").length;
    if(numdiv > 0) {
      if(value < 0) {
        value = isNaN(value) ? 0 : value;
        value+=100;
        document.getElementById("div1").style.marginTop = value + "vh";
      }
    }
  };

}).call(this);


```

### I Wanna Help

Feel Free to Fork and Play

All of the code here is written by me. The swipe direction if statment was helped by a awnser on stackoverflow which I now can't find. If I find It or Someone else points me to it I will add a link to it here.


#### Visit My Website 

Go To [Archtects.co.uk](https://archtects.co.uk)

License
----

MIT


**Free CODE Is The Best**

