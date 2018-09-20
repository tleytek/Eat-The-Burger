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
  burger.addBurger(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var burger = "id = " + req.params.id;
  burger.devour(
    {
      devour: req.body.devour
    },
    burger,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
