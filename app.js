var express = require('express'),
    app     = express(),
    con     = require('./db');

//app.use(express.logger());
app.use(express.static(__dirname+'/static'));
app.use(express.bodyParser());

app.param('instId', function(req, res, next, instId){
  req.instId = instId;
  return next();
}) 

console.log("Listening on 8080");
app.listen(8080);
