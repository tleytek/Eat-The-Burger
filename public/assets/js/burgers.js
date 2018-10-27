$(function() {
	// Devour the burger
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

	$("#submitButton").on("click", function(event) {
		event.preventDefault();

		var newBurger = {
			burgerName: $("#burgerName")
				.val()
				.trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function() {
			console.log("created new Burger!");
			//Reload the pade to get the updated list
			location.reload();
		});
	});
});
