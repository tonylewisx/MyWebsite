var express = require("express");

var app = express();

app.use(express.static('mywebsite'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("MyWebsite server started at http://localhost:%s", port);
});