var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.selectAllBurgers(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.addBurger([req.body.burgerName], function(result) {
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var burger_id = req.params.id;
	burger.updateOne(burger_id, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
