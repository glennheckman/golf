angular
	.module("GST")
	.controller('golfersController',[
		'$scope',
		'GolferFactory',
		'golfers',
		function(
			$scope,
			GolferFactory,
			golfers
		){

			$scope.golfers = golfers;

}]);
