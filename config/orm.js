var connection = require("./connection.js");

var orm = {
  selectAll: function(callback) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function(burger_name, callback) {
    var queryString =
      "INSERT INTO burgers (burger_name, devoured) VALUES (??, '0');";
    connection.query(queryString, [burger_name], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  updateOne: function(devoured, burger_name, callback) {
    var queryString = "UPDATE burgers SET ?? WHERE ??";
    connection.query(queryString, [devoured, burger_name], function(
      err,
      result
    ) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;
