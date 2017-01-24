angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/about', {
			templateUrl: 'app/views/about.html',
			controller: 'AboutController'
		})
		.when('/work', {
			templateUrl: 'app/views/work.html',
			controller: 'WorkController'
		})
		.when('/pet-projects', {
			templateUrl: 'app/views/pet-projects.html',
			controller: 'PetProjectsController'
		})
		.otherwise({ redirectTo: '/about' });

	$locationProvider.html5Mode(true);
}]);