function landingMargin() {
  var landingHeight = (document.getElementById("container").clientHeight - 220).toString()+"px";
  document.getElementById("index").style.marginTop = landingHeight;
}

$(document).ready(() => {
  $('#owl-brands').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
});

window.addEventListener("resize", landingMargin);
