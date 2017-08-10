import * as angular from 'angular';

angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'dist/html/about.html',
			controller: 'AboutController'
		})
		.when('/work', {
			templateUrl: 'dist/html/work.html',
			controller: 'WorkController'
		})
		.when('/pet-projects', {
			templateUrl: 'dist/html/pet-projects.html',
			controller: 'PetProjectsController'
		})
		.otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
}]);