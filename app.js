var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var morgan = require('morgan');
var mongoose = require('mongoose');
var router = express.Router();
var nodemailer = require('nodemailer');
var favicon = require('serve-favicon');
var Beer = require('./models/beer');

var port = process.env.PORT || 3000; 


var databaseURL = process.env.MONGOLAB_URI || 'mongodb://localhost/forestroad';
mongoose.connect(databaseURL); 

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(favicon(path.join(__dirname,'public','img','favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', function(req,res){
  res.render('index')
});


app.listen(port, function(){
  console.log('listening on port 3000')
});