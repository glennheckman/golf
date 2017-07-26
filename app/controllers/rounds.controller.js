angular
	.module("GST")
	.controller('roundsController',[
		'$scope',
		'rounds',
		function(
			$scope,
			rounds
		){
			console.log("roundsController: ", rounds);
			$scope.rounds = rounds;
}]);
