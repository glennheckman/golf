angular
	.module("GST")
	.controller('roundController',[
		'$scope',
		'scorecard',
		function(
			$scope,
			scorecard
		){
			$scope.scorecard = scorecard;

}]);
