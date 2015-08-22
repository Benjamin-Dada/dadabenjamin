var express = require("express");
var app =express();
var path = require('path');
//var favicon = require('serve-favicon');
//var bodyParser = require('body-parser');

//app.use(favicon(__dirname + '/public/favicon.ico'));

var port = process.env.PORT || 8088;

app.listen(port, function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("App listening on port: "+port);
	}
});

app.get('/', function(req, res){
	res.sendfile('./public/index.html');
	//res.sendFile("C:\\Users\\Benjamin\\workspace\\JS-Workspace\\dadabenjamin\\public\\index.html");
});

app.use(express.static(path.join(__dirname + '/public')));

module.exports = app;