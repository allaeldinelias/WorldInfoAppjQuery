var express = require('express');
var http = require('http');
var isFirstTime = true;
var app = express();
var port = process.env.PORT || 5000;
var router = express.Router();

http.createServer(app).listen(port, function(){
    console.log("Listening on Port %d", port);
});

 app.use(express.static(__dirname + '/www/'));
 app.use('/',router);
