function responsive_nav() {
  var nav = document.getElementById("topnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

window.addEventListener('resize', function() {
  document.getElementById("container").clientHeight =
  document.getElementById("landing").clientHeight;
  console.log(document.getElementById("landing").clientHeight)
});
