var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 3000; 
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var morgan = require('morgan');
var mongoose = require('mongoose');
var router = express.Router();
var config = require('./config/config');

var databaseURL = process.env.MONGOLAB_URI || 'mongodb://localhost/forestroad';
mongoose.connect(databaseURL); 