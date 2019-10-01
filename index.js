var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var port = process.env.PORT || 2040;
// var mqtt = require('mqtt');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
 });

app.use(express.static('public'));

http.listen(port, function(){
  console.log('listening on *: ' + port);
});