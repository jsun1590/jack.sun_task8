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
  document.getElementById("index").style.marginTop = landingHeight;
}

// attach a submit handler to the form
$("#c-form").submit(function(event) {

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
  posting.done(function() {
    $("#result").text("success");
  });

  posting.fail(function() {
    $("#result").text("failed");
  });
});


function append_json() {
  //Set Up the template
  var s = $("#template")[0].innerHTML.trim();
  var holder = document.createElement("div");
  holder.innerHTML = s;
  var template = holder.childNodes;

  products.forEach(function(object) {

    //Clone Template
    var newItem = $(template).clone();

    //Populate it
    $(newItem).find(".name").html(object.name);
    $(newItem).find(".company").html(object.company);
    $(newItem).find(".price").html("$" + object.price.toFixed(2));
    $(newItem).find(".description").html(object.description);
    $(newItem).find(".thumb").attr("src", "assets/images/" + object.imageSrc).attr("alt", object.alt);
    $(newItem).find(".add").attr("onclick", "addBtnCallback("+(object.id-1).toString()+")");

    //Append it
    $("#store-container").append(newItem);
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
  storeUpdate();


});

function addBtnCallback(index) {
  cartLS.add(products[index]);
  storeUpdate();
}

function storeUpdate() {
  var quantity = 0;
  cartLS.list().forEach(function(object) {
    quantity += object["quantity"];
  });

  document.getElementById("quantity").innerHTML = quantity.toString() + " item(s) ";
  document.getElementById("amount").innerHTML = "$" + cartLS.total().toFixed(2);
}

window.addEventListener("resize", landingMargin);
