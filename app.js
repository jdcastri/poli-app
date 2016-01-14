"use strict";

var express = require('express');
var path = require('path');
var engine = require('ejs-locals');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

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

app.route('/newEmail')
    .post(function(req, res) {
        if (req.body.email) {
            // send email
            console.log(req.body.email);
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    })

app.listen(process.env.PORT || 8000);
console.log("Server Started");