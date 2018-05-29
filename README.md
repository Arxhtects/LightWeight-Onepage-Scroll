# Archtects

### The Good Stuff

Coffee Script :

```sh

#variables
moved = '1'
#if its moved anywhere
dOne = document.getElementById('div1')
#swipe manipulation

iswiped = (el, func) ->
  d_s = new Object
  d_s.sX = 0
  d_s.sY = 0
  d_s.eX = 0
  d_s.eY = 0
  minX = 20
  #min x swipe for horizontal swipe
  maxX = 40
  #max x difference for vertical swipe
  minY = 40
  #min y swipe for vertical swipe
  maxY = 50
  #max y difference for horizontal swipe
  dir = ''
  ele = document.getElementById(el)
  ele.addEventListener 'touchstart', ((e) ->
    t = e.touches[0]
    d_s.sX = t.screenX
    d_s.sY = t.screenY
    return
  ), false
  ele.addEventListener 'touchmove', ((e) ->
    e.preventDefault()
    t = e.touches[0]
    d_s.eX = t.screenX
    d_s.eY = t.screenY
    return
  ), false
  ele.addEventListener 'touchend', ((e) ->
    #horizontal detection needed in order to work
    if (d_s.eX - minX > d_s.sX or d_s.eX + minX < d_s.sX) and d_s.eY < d_s.sY + maxY and d_s.sY > d_s.eY - maxY
      if d_s.eX > d_s.sX
        dir = 'r'
      else
        dir = 'l'
    #vertical detection
    if (d_s.eY - minY > d_s.sY or d_s.eY + minY < d_s.sY) and d_s.eX < d_s.sX + maxX and d_s.sX > d_s.eX - maxX
      if d_s.eY > d_s.sY
        dir = 'd'
      else
        dir = 'u'
    if dir != ''
      if typeof func == 'function'
        func el, dir
    dir = ''
    return
  ), false
  return

myfunction = (el, d) ->
  elm = el
  dir = d
  if dir == 'u' or dir == 'r' #up
    up()
  else #down
    down()
  return 

iswiped 'swipeme', myfunction 

#scroll wheel manipulation

window.addEventListener 'wheel', (e) ->
    #TODO add delay
  if e.deltaY < 0
    #scroll wheel up
    down()
  if e.deltaY > 0
    #scroll wheel down
    up()
  return

#arrow key manipulation

document.onkeydown = (e) ->
  switch e.keyCode #keyCode is depreciated idc tho
    when 38 #up
      down() #this makes sence in my head
    when 40 #down
      up() #this makes sence in my head
  return



#up and down functions

up = ->
  if moved == '1'
    dOne.style.marginTop = '-100vh'
    moved = '12'
    setTimeout(moved12, 1000)
  else if moved == '2'
    dOne.style.marginTop = '-200vh'
    moved = '13'
    setTimeout(moved13, 1000)
  return

down = ->
  if moved == '3'
    dOne.style.marginTop = '-100vh'
    moved = '12'
    setTimeout(moved12, 1000)
  else if moved == '2'
    dOne.style.marginTop = '0vh'
    moved = '11'
    setTimeout(moved11, 1000)
  return

moved11 = ->
  moved = '1'
  
moved12 = ->
  moved = '2'
  
moved13 = ->
  moved = '3'

```

Compiled Javascript : 

```sh
(function() {
  //variables
  var dOne, down, iswiped, moved, moved11, moved12, moved13, myfunction, up;

  moved = '1';

  //if its moved anywhere
  dOne = document.getElementById('div1');

  //swipe manipulation
  iswiped = function(el, func) {
    var d_s, dir, ele, maxX, maxY, minX, minY;
    d_s = new Object;
    d_s.sX = 0;
    d_s.sY = 0;
    d_s.eX = 0;
    d_s.eY = 0;
    minX = 20;
    //min x swipe for horizontal swipe
    maxX = 40;
    //max x difference for vertical swipe
    minY = 40;
    //min y swipe for vertical swipe
    maxY = 50;
    //max y difference for horizontal swipe
    dir = '';
    ele = document.getElementById(el);
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
      //horizontal detection needed in order to work
      if ((d_s.eX - minX > d_s.sX || d_s.eX + minX < d_s.sX) && d_s.eY < d_s.sY + maxY && d_s.sY > d_s.eY - maxY) {
        if (d_s.eX > d_s.sX) {
          dir = 'r';
        } else {
          dir = 'l';
        }
      }
      //vertical detection
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
  };

  myfunction = function(el, d) {
    var dir, elm;
    elm = el;
    dir = d;
    if (dir === 'u' || dir === 'r') { //up
      up(); //down
    } else {
      down();
    }
  };

  iswiped('swipeme', myfunction);

  
  //scroll wheel manipulation
  window.addEventListener('wheel', function(e) {
    //TODO add delay
    if (e.deltaY < 0) {
      //scroll wheel up
      down();
    }
    if (e.deltaY > 0) {
      //scroll wheel down
      up();
    }
  });

  //arrow key manipulation
  document.onkeydown = function(e) {
    switch (e.keyCode) { //keyCode is depreciated idc tho
      case 38: //up
        down(); //this makes sence in my head
        break;
      case 40: //down
        up(); //this makes sence in my head
    }
  };

  //up and down functions
  up = function() {
    if (moved === '1') {
      dOne.style.marginTop = '-100vh';
      moved = '12';
      setTimeout(moved12, 1000);
    } else if (moved === '2') {
      dOne.style.marginTop = '-200vh';
      moved = '13';
      setTimeout(moved13, 1000);
    }
  };

  down = function() {
    if (moved === '3') {
      dOne.style.marginTop = '-100vh';
      moved = '12';
      setTimeout(moved12, 1000);
    } else if (moved === '2') {
      dOne.style.marginTop = '0vh';
      moved = '11';
      setTimeout(moved11, 1000);
    }
  };

  moved11 = function() {
    return moved = '1';
  };

  moved12 = function() {
    return moved = '2';
  };

  moved13 = function() {
    return moved = '3';
  };

}).call(this);

```

### I Wanna Help

Feel Free to Fork and Play

All of the code here is written by me. The swipe direction if statment was helped by a awnser on stackoverflow which I now can't find. If I find It or Someone else points me to it I will add a link to it here.


#### Visit My Website 

Go To [Archtects.co.uk](https://archtects.co.uk)


### Todos

 - Make it even Lighter

License
----

MIT


**Free CODE Is The Best**

