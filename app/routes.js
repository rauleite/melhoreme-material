var User = require('./models/User');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	/* GET /usuario listing. */
	app.get('/usuario', function(req, res, next) {
		User.find(function (err, usuarios) {
			if (err) return next(err);
			res.json(usuarios);
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};