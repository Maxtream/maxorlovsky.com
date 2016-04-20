angular.module('fe', ['ngResource', 'ngRoute', 'live.event.service'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', { templateUrl: 'app/views/home.html', controller: 'HomeController' }).
		otherwise({ redirectTo: '/' });
}]);