
var express = require('express');
var app = express();
 
 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('views/index.html')
 });

  /* serves about page */
 app.get("/about", function(req, res) {
    res.sendfile('views/about.html')
 });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile( __dirname + '/public/' + req.params[0]); 
 });
 
 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 })
