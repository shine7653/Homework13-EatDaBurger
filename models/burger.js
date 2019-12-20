
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            // console.log(res);
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    
    create: function (cols, vals, cb) {

        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {

        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


// Export the database functions for the controller 
module.exports = burger;




// create: function(name, cb) {
//     orm.create("burgers", ["burger_name", "devoured" ], [name, false], cb);
//   },
  
// // objColVals would be the columns and values that you want to update.
// // an example of objColVals would be {name: panther, sleepy: true}
// update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {devoured: true}, condition, cb);
//   }