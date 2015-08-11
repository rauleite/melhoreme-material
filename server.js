// MODULES =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// auth
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// utils
var path = require('path');


// CONFIGURATION ==========================================

var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port

mongoose.connect(db.url, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT




// auth -------------------

app.use(require('express-session') ({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// -------------------------




app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');

// routes ==================================================
require('./app/routes/index')(app); // pass our application into our routes




// UPDATE: passport config ------------
var Account = require('./app/models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());




// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); // shoutout to the user
// expose app
exports = module.exports = app;