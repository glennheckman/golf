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

	$scope.golfer;
	$scope.rounds;

	GolferFactory.get_golfer_by_id($stateParams.gid).then(function(response){
		console.log("GOLFER: ",response)
		$scope.golfer = response;
	});

	GolferFactory.get_golfer_rounds($stateParams.gid).then(function(response){
		console.log("GOLFER: ",response)
		$scope.rounds = response;
	});

}]);
