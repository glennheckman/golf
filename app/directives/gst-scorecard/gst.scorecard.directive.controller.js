angular
	.module("GST")
	.controller('gstScorecardController',[
		'$scope',
		'holes',
		function(
			$scope,
			holes
		){

			$scope.holes = holes;
			console.log("SC DIR holeS:", $scope.holes);

}]);
