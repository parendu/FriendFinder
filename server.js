//need npm pkg - path
//need npm pkg - express
//need npm pkg - body-parser

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Include the routes file
var apiRoutes = require('./routing/apiRoutes');
var htmlRoutes = require('./routing/htmlRoutes');


//set up express

var app = express();
var PORT = 3000;

	//set up the express to parse the data

	app.use(bodyParser.json);
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//static content
app.use(express.static("./app/public"));

//route
apiRoutes(app);
htmlRoutes(app);



//start listener
app.listen(PORT, function() {
	console.log("Server is listening PORT: "+ PORT);
});