/*angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/about', {
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
		.otherwise({ redirectTo: '/about' });

	$locationProvider.html5Mode(true);
}]);*/

import React from 'react';
import render from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

/*ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
    	<Route path="/about" component={Home} />
    	<Route path="/work" component={Home} />
	</Route>
	<Route path="*" component={Home} />
  </Router>
), document.getElementById('container'));

class Home extends React.Component {
	render() {
		return (
			<h1>1</h1>
		);
  }
}*/