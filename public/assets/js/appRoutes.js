angular.module('appRoutes', [])
	.config(function($routeProvider, $locationProvider) {

	$routeProvider

        //.when('/', {
        //    redirectTo: '../../index.ejs',
        //    //controller: 'HomeController'
        //})
		.when('/', {
            templateUrl: '../../views/partials/home.ejs',
			controller: 'HomeController'
		})
        .when('/register', {
			templateUrl: '../../views/partials/register.ejs',
            controller: 'RegisterController'
        })

		.when('/example', {
			templateUrl: '../../views/example.ejs',
			controller: 'ExampleController'
		});

	$locationProvider.html5Mode(true);
    });

console.log("foi");
