var connection = require("../config/connection.js");

// Here is the ORM where you write functions that takes inputs and conditions

// loops through and creates an array of question marks
function printQuestionMarks(num) {

    // - ["?", "?", "?"] - and turns it into a string.
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    // ["?", "?", "?"].toString() => "?,?,?";
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {    
    var arr = [];

    // column1 = value1, column2 = value2,...
    for (var key in ob) {
        arr.push(key + "=" + value);
    }
    return arr.toString();
}

//===========================================================

// and returns them into database commands like SQL
var orm = {

    all: function(tableInput, cb) {

        var queryString = "SELECT * FROM" + tableInput + ";";
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if(err) throw err;

            console.log(result);
            cb(result);
        });
    },


    // insertOne()


    // updateOne()

};

module.exports = orm;