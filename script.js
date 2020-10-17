function responsiveNav() {
  var nav = document.getElementById("topnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

function landingMargin() {
  var landingHeight = (document.getElementById("container").clientHeight - 220).toString()+"px";
  document.getElementById("main").style.marginTop = landingHeight;
}

// attach a submit handler to the form
$("#contact").submit(function(event) {

  // stop form from submitting normally
  event.preventDefault();

  // get the action attribute from the <form action=""> element
  var $form = $(this),
    url = $form.attr('action');

   // cors proxy
  var corsProxy = "https://jack-task8-cors.herokuapp.com/"
  // Send the data using post with element id
  var posting = $.post(corsProxy+url, {
    fname: $('#fname').val(),
    lname: $('#lname').val(),
    email: $('#email').val(),
    subject: $('#subject').val(),
    content: $('#msgcontent').val(),
    submit: $('#submit').val()
  });

  // Alerts the results
  posting.done(function(data) {
    $('#result').text('success');
  });

  posting.fail(function() {
    $('#result').text('failed');
  });
});


$(document).ready(() => {
  $('#brands .slick').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 200,

slidesToShow: 4,

    swipeToSlide: true,
  });
});

window.addEventListener('resize', landingMargin);
