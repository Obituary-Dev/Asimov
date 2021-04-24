const express = require("express");
const router = require('./routes/router');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

//fun
// accessible from ejs and js (everywhere)
app.locals.disciplines = {
    1: 'mathematics',
    2: 'french',
    3: 'biology',
    4: 'science',
    5: 'english'
}

app.use(express.static('views'));
app.set('view engine', 'ejs');

// activate middleware and launch app on :3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// session creation
app.use(session({secret: 'todotopsecret'}));
app.use(function(request, result, next){
    // checks if a list already exists
    if (typeof(request.session.marks) == 'undefined') {
        request.session.marks = []
    }
    next()
});
app.use('/', router);
app.listen(3000, console.log("running on :3000"));

