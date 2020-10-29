// form handler
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
    self: $("#self-send").prop("checked")
  });

  // Alerts the results
  posting.done(function() {
    $("#result").text("success");
  });

  posting.fail(function() {
    $("#result").text("failed");
  });
});
