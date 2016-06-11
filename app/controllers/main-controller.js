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
}]);