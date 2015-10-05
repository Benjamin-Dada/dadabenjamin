//contains all the routes to the API calls 
var express = require('express');
var app = express();

var mongoose = require('mongoose');

var Detail = require('./model/details.js');

 app.post('/submit', function(req, res){
 	var name = req.body.name;
	var email = req.body.email;
 		
 		res.send(name+' '+email);

 	/*Detail.save({"name": req.body.name, "email": req.body.email}, function(err,data){
 		if (err) {
 			res.send(err);
 		}
 		res.json(data);
 	});*/



 });