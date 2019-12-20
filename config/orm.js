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
// Object for all our SQL statement functions.
var orm = {

    all: function (tableInput, cb) {

        var queryString = "SELECT * FROM " + tableInput + ";"; //concatenation
        let qString = `SELECT * FROM ${tableInput};`; //interpolating
        console.log(queryString);

        connection.query(qString, function (err, result) {
            if (err) { throw err; }

            console.log("ORM " ,result);
            cb(result);
        });
    },

    // insertOne()
    // val is an array of values that we want to save to cols
    // cols are the columns we want to insert the values into
    create: function (table, cols, vals, cb) {

        var queryString = "INSERT INTO" + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) { throw err; }

            cb(result);
        });
    },

    // updateOne()
    // objColVals would be the columns and values that you want to update.
    // an example of objColVals would be {name: panther, sleepy: true}
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {throw err; }

            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;





// Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique 
// for converting data between incompatible type systems using object-oriented programming languages. 
//This creates, in effect, a "virtual object database" 
// that can be used from within the programming language. 