var express = require("express");
var app = express();
var morgan = require("morgan");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ecommercefinal", function(err) {
  if (err) console.log(err);
  else console.log("Connected to the database");
});

//This is a middleware
app.use(morgan("dev"));

app.get("/", function(req, res) {
  res.json({
    name: "lakshya"
  });
});

app.listen(3000, function(err) {
  if (err) throw err;
  console.log("Server is running on port 3000");
});
