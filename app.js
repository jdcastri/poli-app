"use strict";

var express = require('express');
var path = require('path');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var engine = require('ejs-locals');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

var dbpath = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost';
var db = mongoose.connect(dbpath, function(err) {
    if (err) {
        console.log("Error connecting to " + dbpath);
        console.log(err);
    } else {
        console.log("Connected to DB");
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/')
    .get(function(req, res) {
        res.render('index');
    });

var EmailSchema = mongoose.Schema({
    email: String
});
var Email = mongoose.model('Email', EmailSchema);

app.route('/newEmail')
    .post(function(req, res) {
        if (req.body.email) {
            var newEmail = new Email({email: req.body.email});
            Email.findOne({email: req.body.email}, function(err, duplicate) {
                if (duplicate) {
                    res.sendStatus(200);
                } else {
                    newEmail.save(function(err, email) {
                        if (email) {
                            console.log(email);
                            res.sendStatus(200);        
                        } else {
                            res.sendStatus(400);        
                        }
                    });    
                }
            })
                
        }
    });

app.listen(process.env.PORT || 8000);
console.log("Server Started");