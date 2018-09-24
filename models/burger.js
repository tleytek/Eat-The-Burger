var orm = require("../config/orm.js");

var burger = {
  selectAllBurgers: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },

  addBurger: function(burger_name, callback) {
    orm.insertOne(burger_name, function(res) {
      callback(res);
    });
  },
  updateOne: function(burger_name, callback) {
    orm.updateOne(burger_name, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;
