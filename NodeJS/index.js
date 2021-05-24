const express = require("express");
const router = require('./routes/router');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

// app.locals allows to create data accessible from everywhere
app.use(express.static('views'));
app.set('view engine', 'ejs');

// activate middleware and launch app on :3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// session creation
app.use(session({secret: 'todotopsecret'}));

app.use('/', router);
app.listen(3000, console.log("running on :3000"));

