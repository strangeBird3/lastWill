var http         = require('http');
var fs           = require('fs');
var path         = require('path');
var bootstrap 	 = require('bootstrap');

// npm dependencies 
var express = require('express');
var app = express();
var handlebars = require('express-handlebars');

// server config
var server_port = process.env.PORT || 8080;



// app settings
app.set('views', __dirname + '/views');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.render('index.handlebars');
});

app.get('/bobBooks', function(req, res){
	res.render('bobBooks')
});

app.get('/buyBob', function(req, res){
	res.render('buyBob')
});

app.listen(server_port, function(){
  console.log("Listening on port " + server_port);
});
