function append_json() {
  //Set Up the template
  var s = $("#template")[0].innerHTML.trim();
  var holder = document.createElement("div");
  holder.innerHTML = s;
  var template = holder.childNodes;
  cartLS.list().forEach(function(object, i) {

  //Clone Template
  var item = $(template).clone();
  $(item).attr("id", (object.id-1).toString());
  $(item).find(".name").html(object.name);
  $(item).find(".price").html("$" + object.price.toFixed(2));
  $(item).find(".thumb").attr("src", "assets/images/" + object.imageSrc).attr("alt", object.alt);

  $(item).find(".add").attr("onclick", "addBtnCallback("+(object.id-1).toString()+")");
  $(item).find(".remove").attr("onclick", "removeBtnCallback("+(object.id-1).toString()+")");

  $(item).find(".quantity").html(object.quantity.toString());
  $("#c-container").append(item);
});
};

function addBtnCallback(index) {
  var quantity = parseInt($("#"+index).find(".quantity").html()) + 1;
  $("#"+index).find(".quantity").html((quantity).toString());
  cartLS.quantity(index+1, 1);
  cartUpdate();
};

function removeBtnCallback(index) {
  var quantity = parseInt($("#"+index).find(".quantity").html()) - 1;
  check(quantity, index);
  cartUpdate();
};

function check(quantity, index) {
  if(quantity == 0) {
    $("#"+index).css("display", "none");
    cartLS.remove(index+1);
  }
  else {
    $("#"+index).find(".quantity").html((quantity).toString());
    cartLS.quantity(index+1,-1);
  }

};

function cartUpdate() {
  empty();
  var quantity = 0;
  cartLS.list().forEach(function(object) {
    quantity += object.quantity;
  });

  $("#total-quantity").html(quantity.toString());
  $("#total-amount").html("$" + cartLS.total().toFixed(2).toString());
};

function empty() {
  if(!Array.isArray(cartLS.list()) || !cartLS.list().length) {
    $("#empty").css("display", "block");
  }
}
$(document).ready(() => {
  append_json(products);
  cartUpdate();
});
