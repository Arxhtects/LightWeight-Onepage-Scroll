(function() {
  var down, iswiped, myfunction, up, numdiv, i, canScroll;
  var value = 0; //Value is set as 0. 0 = first div position.

  function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    

  docReady(function() {
    var swipeme = document.getElementById("swipeme").querySelectorAll(".wrapper_div_onepage");
    swipeme[0].id = "moving_div"; //Add id to first div in the swipme wrapper > trageting only the divs labled .wrapper_div_onepage
    document.getElementById("moving_div").style.marginTop = "-" + value + "vh"; //Set position of first div with new id to the current set value;

    numdiv = document.querySelectorAll('#swipeme [class$=wrapper_div_onepage]').length; //get total number of divs in main swipe wrapper with class name wrapper_div_onepage
    var toAdd = document.createDocumentFragment(); //set up dots Fragment
    for(i = 0; i < numdiv; ++i) { 
      //Create dots
      var newDiv = document.createElement('div');
      newDiv.id = i;
      newDiv.className = "dots_";
      newDiv.setAttribute("onclick", "dotClicked(this)");
      toAdd.appendChild(newDiv);
    }
    document.getElementById('dot_wrapper').appendChild(toAdd); //Add dots to dot_wrapper
    document.getElementById("0").classList.add("active"); //Add active class to the first dot.

    dotClicked = function(e) { //If a dot has been pressed this function will be activated. "e" = this.
      var moveTo = e.getAttribute("id"); //Ready the moveTo variable with this id
      moveTo = parseInt(moveTo); //Maths
      moveTo = moveTo * 100; //More maths to make the current ID X 100 to move the div up.
      var removeID = value; //current value before its changed
      removeID = removeID / 100; //Maths
      removeID = removeID.toString().replace(/-/g, ""); //Remove Dash
      document.getElementById(removeID).classList.remove("active"); //Remove active class from last known dot
      e.classList.add("active"); //Add this dot the active class
      document.getElementById("moving_div").style.marginTop = "-" + moveTo + "vh"; //Move to div using the first div as a anchor.
      var currentMargin = document.getElementById("moving_div").style.getPropertyValue('margin-top'); //Use the current style "margin-top" as a value. 
      currentMargin = currentMargin.replace(/\D/g, ''); //Remove extra text
      value = "-"+currentMargin; //Set value current position for scroll from dot compatibilty 
    }
  });

  //the swipe for mobile function ... Dont ask
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
      up(); //Up actually means scrolling down.
    } else {
      down(); //Down actually means scrolling up.
    }
  };

  iswiped('swipeme', myfunction);

  //mouse input
  window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
      down();
    }
    if (e.deltaY > 0) {
      up();
    }
  });

  //Keyboard input
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38:
        down();
        break;
      case 40:
        up();
    }
  };
  
  up = function() {  
    if(canScroll != false) {
      canScroll = false;
      numdiv = document.querySelectorAll('#swipeme [class$=wrapper_div_onepage]').length;
      var currentMargin = document.getElementById("moving_div").style.getPropertyValue('margin-top');
      currentMargin = currentMargin.replace(/\D/g, '');
      currentMargin = parseInt(currentMargin);
      var maxup = (numdiv * 100) - 100;
      if(currentMargin != maxup) {
        currentMargin = isNaN(currentMargin) ? 0 : currentMargin;
        currentMargin+=100;
      }
      if(numdiv > 0) {
        numdiv = "-"+numdiv * 100;
        numdiv = parseInt(numdiv, 10);
        numdiv = numdiv + 100;
        if(numdiv != value) {
          var dotid = (currentMargin / 100);      
          var removeID = value; //current value before its changed
          removeID = removeID / 100; //Maths
          removeID = removeID.toString().replace(/-/g, ""); //Remove Dash
          document.getElementById(removeID).classList.remove("active"); //Remove active class from last known dot
          document.getElementById(dotid).classList.add("active");
          value = isNaN(value) ? 0 : value;
          value-=100;
          document.getElementById("moving_div").style.marginTop = value + "vh";  
        }
      }
      setTimeout(function () {
        canScroll = true;
      }, 500);
    }
  };

  down = function() {
    if(canScroll != false) {
      canScroll = false;
      numdiv = document.querySelectorAll('#swipeme [class$=wrapper_div_onepage]').length;   
      var currentMargin = document.getElementById("moving_div").style.getPropertyValue('margin-top');
      currentMargin = currentMargin.replace(/\D/g, '');
      currentMargin = parseInt(currentMargin);
      if(currentMargin != 0) {
        currentMargin = isNaN(currentMargin) ? 0 : currentMargin;
        currentMargin-=100;
      }
      if(numdiv > 0) {
        if(value < 0) {
          var dotid = currentMargin / 100;      
          var removeID = value; //current value before its changed
          removeID = removeID / 100; //Maths
          removeID = removeID.toString().replace(/-/g, ""); //Remove Dash
          document.getElementById(removeID).classList.remove("active"); //Remove active class from last known dot
          document.getElementById(dotid).classList.add("active");
          value = isNaN(value) ? 0 : value;
          value = parseInt(value);
          value+=100;
          document.getElementById("moving_div").style.marginTop = value + "vh";
        }
      }
      setTimeout(function () {
        canScroll = true;
      }, 500);
    }
  };

}).call(this);
