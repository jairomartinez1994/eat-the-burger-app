var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/:id", routes);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});