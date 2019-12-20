var express = require("express");
var router = express.Router();
// Import the model(burger.js) to use its database function
var burger = require("../models/burger.js");

// get route --> index
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

    // express callback response by calling burger.selectAllBurger
    burger.all(function(data) {
        var bgrObject = {
            burgers : data
        };
        console.log(bgrObject);
        res.render("index", bgrObject);
    });
});

    // burger.all(function(burgerData) {
    //     // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    //     res.render("index", { burger_data: burgerData });
    // })


module.exports = router;