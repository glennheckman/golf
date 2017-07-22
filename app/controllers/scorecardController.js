angular
	.module("GST")
	.controller('scorecardController',[
		'$scope',
		'scorecard',
		function(
			$scope,
			scorecard
		){

	$scope.holes = scorecard;


}]);
