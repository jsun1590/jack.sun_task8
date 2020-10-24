function responsiveNav() {
  var nav = document.getElementById("topnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

jQuery(document.documentElement).keyup(function (event) {

  var owl = jQuery(".owl-carousel");
  // handle cursor keys
  if (event.keyCode == 37) {
     // go left
     owl.trigger('prev.owl');
  } else if (event.keyCode == 39) {
     // go right
     owl.trigger('next.owl');
  }

});
