angular
	.module('GST')
	.factory('GolferFactory', [
		'$http',
		'$q',
		function(
			$http,
			$q
		){


	var golfers = [
		{name:"Glenn", hdcp:20, id:1},
		{name:"Shant", hdcp:28, id:2},
		{name:"Raffi", hdcp:22, id:3}
	];


	var factory = {
		get_golfer_by_id: function (id){
			var defer = $q.defer()

			console.log("Get golfer id: " + id);
			for(var i=0; i<golfers.length;i++){
				if(golfers[i].id == id){
					//return golfers[i];
					defer.resolve(golfers[i]);
				}
			}


    	return defer.promise;
		},

		get_golfers: function get_golfers(){
			return golfers;
		}
	};
	return factory;
}]);
