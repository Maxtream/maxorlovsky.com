angular.module('app').controller('MainController', ['$scope', '$anchorScroll', function ($scope, $anchorScroll) {
	$scope.links = [
		{url: 'about', value: 'About'},
		{url: 'work', value: 'Work'},
		//{url: 'pet-projects', value: 'Pet projects'},
	];

	$scope.loaded = 0;

	$scope.year = new Date().getFullYear();

	$scope.parentObject = {
		sidebar: 0
	};
	
	$scope.$on('$viewContentLoaded', function(){
	    $scope.loaded = 1;
	});

	$scope.gotoContent = function() {
		$anchorScroll('container');
	}
}]);