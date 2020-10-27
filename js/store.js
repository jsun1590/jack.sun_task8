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
    $(newItem).find(".thumb").attr("src", "assets/images/" + object.imageSrc).attr("alt", object.alt);

    var percent = (object.rating/5)*100
    $(newItem).find(".rating").css("background",
    "linear-gradient(90deg, #fc0 " +
    percent.toString() + "%, #fff " + percent.toString() + "%)");
    $(newItem).find(".add").attr("onclick", "addBtnCallback("+(object.id-1).toString()+")");

    $("#s-container").append(newItem);
  });
}

function addBtnCallback(index) {
  cartLS.add(products[index]);
  storeUpdate();
};

function storeUpdate() {
  var quantity = 0;
  cartLS.list().forEach(function(object) {
    quantity += object.quantity;
  });
  $("#quantity").html(quantity.toString() + " item(s) ");
  $("#amount").html("$" + cartLS.total().toFixed(2).toString());
};

$(document).ready(() => {
  append_json(products);
  storeUpdate();
});
