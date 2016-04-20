angular.module('fe').controller('HomeController', ['$scope', 'liveEventService', function ($scope, liveEventService) {
	$scope.error = '';
	$scope.gameEnded = false;
	$scope.gameTime = '';
	$scope.topTeam = '';
	$scope.bottomTeam = '';
	$scope.topTeamScore = 0;
	$scope.bottomTeamScore = 0;
	$scope.actionName = '';
	$scope.actionTeamName = 0;
	$scope.liveEventTeam = '';
	$scope.liveEventAction = '';
	$scope.odds = {};
	$scope.betslip = [];

	liveEventService.getEventDetails().then(function(eventDetailsData){
		$scope.gameEnded = eventDetailsData.ended;

		//Stopping variable defining if game have ended and we don't need to display the field
		if ($scope.gameEnded === true) {
			return false;
		}

		//Populating variables
		$scope.gameTime = eventDetailsData.matchtime;
		$scope.topTeam = eventDetailsData.team1;
		$scope.bottomTeam = eventDetailsData.team2;
		$scope.topTeamScore = eventDetailsData.livescore.team1;
		$scope.bottomTeamScore = eventDetailsData.livescore.team2;

		//Last actions
		$scope.actionName = eventDetailsData.lastAction.actionType;
		$scope.actionTeamName = (eventDetailsData.lastAction.team == 1 ? eventDetailsData.team1 : eventDetailsData.team2);

		//Live events
		$scope.liveEventTeam = eventDetailsData.liveevent.team;
		$scope.liveEventAction = eventDetailsData.liveevent.action;

		$scope.odds = eventDetailsData.odds;
	});

	//Re-run action every 4 seconds
	setInterval(function() {
		liveEventService.getEventLastAction().then(function(lastAction) {
			$scope.actionName = lastAction.actionType;
			$scope.actionTeamName = (lastAction.team == 1 ? $scope.topTeam : $scope.bottomTeam);

			$scope.liveEventTeam = lastAction.team;
			$scope.liveEventAction = convertAction(lastAction.actionType);
		});
	}, 4000);

	$scope.addBetslip = function(id) {
		angular.forEach($scope.odds, function(odd) {
			angular.forEach(odd.results, function(value) {
				//If found, add to betslip array and break the loop with return
				if (value.id == id) {
					$scope.parentObject.betslips.push({
						id: value.id,
						displayName: odd.displayName,
						name: value.name,
						value: value.value,
						teams: $scope.topTeam+' - '+$scope.bottomTeam
					});

					$scope.parentObject.error = '';
					$scope.parentObject.submitted = 0;

					$scope.calculateGain();

					return true;
				}
			});
		});

		return false;
	}

	//Converting action from readable to key-oriented
	function convertAction(action) {
		switch(action) {
			case 'Free Kick':
				return 'freekick';
			break;
			case 'Goal Kick':
				return 'goalkick';
			break;
			case 'On Goal':
				return 'ongoal';
			break;
			case 'Penalty':
				return 'penalty';
			break;
			default:
				return false;
			break;
		}
	}
}]);