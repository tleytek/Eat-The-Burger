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
			"INSERT INTO burgers (burger_name, devoured) VALUES (?, '0');";

		connection.query(queryString, [burger_name], function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},

	updateOne: function(burger_name, callback) {
		var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
		connection.query(queryString, [burger_name], function(err, result) {
			if (err) throw err;
			callback(result);
		});
	}
};

module.exports = orm;
