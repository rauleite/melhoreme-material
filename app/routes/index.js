//var User = require('./../models/User');
var Account = require('../models/account');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// Get Register
	//app.get('/register', function(req, res) {
	//	res.render('./views/register', { });
	//});

	// Post Register
	app.post('/register', function(req, res) {
		// Function register comes from passport-local-mongoose
		Account.register(new Account ({username: req.body.username}), req.body.password, function(err, account){
			if(err) {
				return res.render('register', {info: "Ops! Alguém já escolheu este username. Tente outro."})
			}
			passport.authenticate('local')(req, res, function () {
				res.redirect('/');
			});
		});
	});




	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.render('./index.ejs', {user: req.user});
	});

};

/* GET /usuario listing. */
//app.get('/usuario', function(req, res, next) {
//	User.find(function (err, usuarios) {
//		if (err) return next(err);
//		res.json(usuarios);
//	});
//});