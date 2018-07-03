// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Setting up PORT
var PORT = process.env.PORT || 3000;

// Set up Espress router
var app = express();

var router = express.Router();

// Require our routes to pass touer object
require("./config/routes")(router);

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

// Connect handlebars to our express app
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Have every request go through our router middleware
app.use(router);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mondodb://localhost/mongoHeadlines";

// Connect mongoose to our database
mongoose.connect(db, function(error){
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Listen to the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});