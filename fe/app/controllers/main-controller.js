angular.module('app').controller('MainController', ['$scope', '$anchorScroll', function ($scope, $anchorScroll) {
	$scope.links = [
		{url: 'about', value: 'About'},
		{url: 'work', value: 'Work'},
		//{url: 'pet-projects', value: 'Pet projects'},
	];

	$scope.loaded = 0;

	$scope.year = new Date().getFullYear();

	$scope.parentObject = {
		sidebar: 0,
		night: false
	};
	
	$scope.$on('$viewContentLoaded', function(){
	    $scope.loaded = 1;
	});

	$scope.gotoContent = function() {
		$anchorScroll('container');
	}

	//Enable/disable night mood
	hours = new Date().getHours();
	if (hours <= 7 || hours >= 20) {
		$scope.parentObject.night = true;
	}

	month = new Date().getMonth();
	if (month == 11 || month <= 1) {
		$scope.parentObject.mood = 'winter';
		// BG is dark, so night always required
		$scope.parentObject.night = true;
	}
}]);