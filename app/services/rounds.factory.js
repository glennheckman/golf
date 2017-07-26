angular
	.module('GST')
	.factory('RoundsFactory', [
		'$http',
		'$mdToast',
		'$q',
		function(
			$http,
			$mdToast,
			$q
		){

		var factory = {

			add_course_hole: function(hole){
				console.log("add hole: " + hole.holeNumber);
        $http.post('/api/course_holes', hole)
	        .success(function (data, status, headers, config){
		        console.log("hole " + hole.holeNumber + " saved")
	        })
	        .error(function(data, status, header, config){
						console.log("roundFacty -> round not saved");
	        });
	  	},

			addRound: function(score){
		 		var round = {
	        	id: null,
	        	score: score
	        };
	        console.log("add round: " + round.title);
	        $http.post('/api/add_round', round)
		        .success(function (data, status, headers, config){
     			 		console.log("round saved and displaying: " + data);
		        	factory.showSimpleToast(message);
		        })
		        .error(function(data, status, header, config){
							console.log("roundFacty -> round not saved");
		        });
			},

		 	showSimpleToast: function(message)
		 	{
			    $mdToast.show(
			      $mdToast.simple()
			        .textContent(message)
			        .position('top right')
			        .hideDelay(3000)
			    );
		  },

		  showErrorToast: function(message)
		 	{
			    $mdToast.show(
			      $mdToast.simple()
			        .textContent(message)
			        .position('top right')
			        .hideDelay(3000)
			    );
		  },

			get_rounds: function(){
				return $http.get('/api/rounds');
			},

			get_rounds_for_golfer: function(gid){
				console.log("Get rounds for GID: " + gid);
				// $http.post('/api/rounds_for_golfer', req)
				// 	.success(function(response, status, headers, config){
				// 		console.log("received golfer rounds: " + response);
				// 		return response;
				// 	});
			},

			get_holes_for_round: function(roundID){
				var defer = $q.defer();
				$http.get('/api/get_holes_for_round',{
					params: {
						id: roundID
					}
				})
				.then(function (response){
					defer.resolve(response.data);
				},
				function (error){
					defer.reject(error);
	 			});
				return defer.promise;
			},

			delete: function(id){
		    	var config = {
						method: 'delete',
						url: '/api/delete_round',
						data: {id:id},
						headers: {"Content-Type": "application/json;charset=utf-8"}
					};

				$http(config);
			}

		};

		return factory;

	}]);
