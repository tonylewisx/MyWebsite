/*******************************
 *  Module: My own website
 *  Date : 30/6/2021
 *  Author: LJA
 *  Version: v1.26
 * 
 * 
 ********************************/

var express = require("express");

var app = express();

app.use(express.static('mywebsite'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("MyWebsite server started at http://localhost:%s", port);
    console.log("Home Page  http://localhost:%s//home.html");
});