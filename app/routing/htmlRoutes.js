// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default USE route that leads to `home.html` which displays 
//    the home page.

// DEPENDENCIES
// ===============================================================================
var path = require("path");


//===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  

    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
    console.log(res);
  });


  app.get(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
    console.log(res);
  });
};