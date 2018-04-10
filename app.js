//Basic required imports for NodeJS
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//Create an instance of express for our app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());




app.listen(3000, function(){
    console.log('Working');
});