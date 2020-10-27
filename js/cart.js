function append_json() {
  //Set Up the template
  var s = $("#template")[0].innerHTML.trim();
  var holder = document.createElement("div");
  holder.innerHTML = s;
  var template = holder.childNodes;
  cartLS.list().forEach(function(object, i) {

  //Clone Template
  var item = $(template).clone();

  console.log(cartLS.list());

  //Populate it
  console.log(item);
  $(item).attr("id", i.toString());
  $(item).find(".name").html(object.name);
  $(item).find(".price").html("$" + object.price.toFixed(2));
  $(item).find(".thumb").attr("src", "assets/images/" + object.imageSrc).attr("alt", object.alt);


  $(item).find(".quantity").val(object.quantity.toString());
  $("#c-container").append(item);
});
};

function cartUpdate() {
  cartLS.list().forEach(function(object) {
  // $(".quantity").val(object["quantity"].toString());
});
};

$(document).ready(() => {
  append_json(products);
  cartUpdate();
});
