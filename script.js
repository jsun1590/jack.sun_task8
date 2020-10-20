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
    url = $form.attr("action");

   // cors proxy
  var corsProxy = "https://jack-task8-cors.herokuapp.com/"
  // Send the data using post with element id
  var posting = $.post(corsProxy+url, {
    fname: $("#fname").val(),
    lname: $("#lname").val(),
    email: $("#email").val(),
    subject: $("#subject").val(),
    content: $("#msgcontent").val(),
    submit: $("#submit").val()
  });

  // Alerts the results
  posting.done(function(data) {
    $("#result").text("success");
  });

  posting.fail(function() {
    $("#result").text("failed");
  });
});


function append_json(data) {
  //Set Up the template
  var s = $("#template")[0].innerHTML.trim();
  var holder = document.createElement("div");
  holder.innerHTML = s;
  var template = holder.childNodes;

  data.forEach(function(object) {

    //Clone Template
    var newItem = $(template).clone();

    //Populate it
    $(newItem).find(".name").html("Product Name: " + object.name);
    $(newItem).find(".company").html("Company: " + object.company);
    $(newItem).find(".price").html("Price: $" + object.price.toFixed(2));
    $(newItem).find(".description").html("Description: " + object.description);
    $(newItem).find(".thumb").attr("src", "assets/images/" + object.imageSrc).attr("alt", object.alt);

    //Append it
    $(".store").append(newItem);
  });
}

$(document).ready(() => {
  $("#brands .slick").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 200,
    slidesToShow: 4,
    swipeToSlide: true,
  });
  append_json(products);
});

function storeUpdate() {
  document.getElementById("amount").innerHTML = "$" + cartLS.total().toFixed(2) + " ";
  document.getElementById("quantity").innerHTML = + cartLS. + "item(s)";
}

storeUpdate()
window.addEventListener("resize", landingMargin);
