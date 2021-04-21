const express = require("express");
const marksController = require("./controllers/marksController");
const router = require('./routes/router');
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
var app = express();
var session = require('cookie-session');
var bodyParser = require('body-parser');
const db = require("./models");

//fun
// accessible from ejs and js (everywhere)
app.locals.disciplines = {
    1: 'mathematics',
    2: 'french',
    3: 'biology',
    4: 'science',
    5: 'english'
}
// database
const Role = db.role;
db.sequelize.sync();

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

