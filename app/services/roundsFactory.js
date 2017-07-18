angular
	.module('GST')
	.factory('RoundsFactory', [
		'$http',
		'$mdToast',
		function(
			$http,
			$mdToast
		){

		var factory = {

			rounds: [],
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
		 		// add notification to notifications database, for appearance in messaging panel.
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

		  // When user stop the typing get_data() is called
			get_rounds: function(){
				return $http.get('/api/rounds');
			},

			get_rounds_for_golfer: function(req){
				console.log("Get rounds for GID: " + req.id);
				// $http.post('/api/rounds_for_golfer', req)
				// 	.success(function(response, status, headers, config){
				// 		console.log("received golfer rounds: " + response);
				// 		return response;
				// 	});
			},

			delete: function(id){
		    	var config = {
						method: 'delete',
						url: '/api/delete_round',
						data: {id:id},
						headers: {"Content-Type": "application/json;charset=utf-8"}
					};

				$http(config);

					/*
					.success(function (data, status, headers, config)
			        {

			        })

			        .error(function(data, status, header, config)
			        {

			        });
			       */
			}

		};

		return factory;

	}]);
