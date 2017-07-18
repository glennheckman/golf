angular
	.module("GST")
	.controller('golferProfileController',[
		'$scope',
		'$stateParams',
		'GolferFactory',
		function(
			$scope,
			$stateParams,
			GolferFactory
		){

	$scope.golfer = null;

	GolferFactory.get_golfer_by_id($stateParams.id).then(function(response){
		$scope.golfer = response;
	});

}]);
