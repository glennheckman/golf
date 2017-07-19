angular
	.module("GST")
	.controller('mainController',[
		'$scope',
		'GolferFactory',
		function(
			$scope,
			GolferFactory
		){

			$scope.golfers;
			GolferFactory.get_golfers().then(function(response){
				$scope.golfers = response;
				console.log("Response", response);
			});

}]);
