angular.module('fe').controller('MainController', ['$scope', function ($scope) {
	$scope.parentObject = {};
	$scope.parentObject.betslips = [];
	$scope.parentObject.wager = '5,00';
	$scope.parentObject.gain = '0,00';
	$scope.parentObject.submitted = 0;
	$scope.parentObject.error = '';
	$scope.showBetslip = 0;
	$scope.loaded = 0;

	$scope.$on('$viewContentLoaded', function(){
	    $scope.loaded = 1;
	});

	$scope.removeBetslip = function(id) {
		$scope.parentObject.betslips.splice(id, 1);
		$scope.calculateGain();
	}

	$scope.calculateGain = function() {
		var result = $scope.parentObject.betslips.length * parseFloat($scope.parentObject.wager.replace(',', '.'));

		result = parseFloat(result);
		if (isNaN(result) || result == 0 || !result) {
			result = parseFloat('0,00');
		}

		$scope.parentObject.gain = result.toFixed(2).replace('.', ',');
	}

	$scope.cleanBets = function() {
		$scope.parentObject.error = '';
		$scope.parentObject.submitted = 0;
		$scope.parentObject.betslips = [];
		$scope.calculateGain();
	}

	$scope.placeBet = function() {
		$scope.parentObject.submitted = 0;
		$scope.parentObject.error = '';

		var wager = parseFloat($scope.parentObject.wager);

		if ($scope.parentObject.betslips.length <= 0) {
			$scope.parentObject.error = 'Betslip is empty, please add bets first';
		}
		else if (isNaN(wager) || wager == 0 || !wager) {
			$scope.parentObject.error = 'Wager can not be 0, please set proper wager';
		}
		else {
			$scope.parentObject.submitted = 1;
			$scope.parentObject.betslips = [];
			$scope.calculateGain();
		}
	}
}]);