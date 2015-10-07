var express = require("express");
var app =express();
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var compress = require('compression');
var path = require('path');
var bodyParser = require('body-parser');

//var favicon = require('serve-favicon');
//var logger = require("morgan");

mongoose.connect('mongodb://localhost:27017/contact', function(err){
  if(err){console.log("Connection failed: ", err);}
  else{console.log('Connection to db successful');}
});


var Details = mongoose.model('Details', { 
				name : String,
				email: String,
				updated_at: {type: Date, default: Date.now}
});

//var details = require('./model/details.js');

//var contact = require("./app/routes.js");
//app.use(favicon(__dirname + '/public/favicon.ico'));

var port = process.env.PORT || 8080;

//app.use(express.logger('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
//app.use('/api', contact);

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

app.post('/hello', function(req,res){

	var details = new Details(req.body);

	details.save(function(err,data){
 		if (err) {
 			res.send(err);
 		}
 		res.json(data);
 	});
console.log(req.body);



});

app.use(compress());
app.use(express.static(path.join(__dirname + '/public')));

module.exports = app;