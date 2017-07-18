angular
	.module("GST")
	.controller('roundController',[
		'$scope',
		'RoundsFactory',
		function(
			$scope,
			RoundsFactory
		){
			
	$scope.rounds = [];

	var get_all_rounds = function(){
		RoundsFactory.get_rounds().then(function(response){
			$scope.rounds = response.data;
		});
	};

	var get_rounds_for_golfer = function(gid){
		var req = {id:gid};
		RoundsFactory.get_rounds_for_golfer(req).then(function(response){
			$scope.rounds = response.data;
		});
	};

}]);
