// var express = require('express');
// var app = express();

// app.set('port', (process.env.PORT || 5000));

// app.use('/', express.static(__dirname));

// // views is directory for all template files
// app.set('views', __dirname + '/views');


// app.get('/', function(request, response) {
//   response.render('index.html');
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

var express = require('express');
var app = express();
 
 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('views/index.html')
 });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile( __dirname + req.params[0]); 
 });
 
 var port = process.env.PORT || 5001;
 app.listen(port, function() {
   console.log("Listening on " + port);
 })
