angular
	.module('GST')
	.factory('GolferFactory', [
		'$http',
		'$q',
		function(
			$http,
			$q
		){

	return {
		get_golfer_by_id: get_golfer_by_id,
		get_golfers: get_golfers,
		get_golfer_rounds: get_golfer_rounds
	};

	function get_golfers(){
		var defer = $q.defer();
		$http.get('/api/get_golfers')
			.then(function (response){
				defer.resolve(response.data);
			},function (error){
				defer.reject(error);
 			});
		return defer.promise;
	}

	function get_golfer_by_id(id){
		var defer = $q.defer();
		$http.get('/api/get_golfer',{params: {id: id}})
			.then(function (response){
				defer.resolve(response.data[0]);
			},function (error){
				defer.reject(error);
 			});
		return defer.promise;
	}

	function get_golfer_rounds(id){
		var defer = $q.defer();
		$http.get('/api/rounds_for_golfer',{params: {id: id}})
			.then(function (response){
				defer.resolve(response.data);
			},function (error){
				defer.reject(error);
 			});
		return defer.promise;
	}
}]);
