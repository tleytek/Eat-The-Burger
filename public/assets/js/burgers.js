$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    var devour = $(this).data("devoured");

    var newBurgerState = {
      devour: devour
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(function() {
      console.log("devoured");
      location.reload();
    });
  });
});
