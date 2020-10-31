function responsiveNav() {
  var nav = $("#topnav");
  if (nav.attr("class") === "topnav") {
    nav.addClass("responsive");
  } else {
    nav.removeClass("responsive");
  }
}

$(".icon").click(function(){
  var nav = $(".icon");
  if (nav.attr("class") === "hamburger hamburger--collapse icon") {
    nav.addClass("is-active");
  } else {
    nav.removeClass("is-active");
  }
})

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
