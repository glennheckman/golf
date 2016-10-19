angular.module("GST").controller('roundController', ['$scope', 'RoundsFactory', '$location', function($scope, RoundsFactory, $location)
{
	$scope.rounds = [];


	var get_all_rounds = function()
	{
		RoundsFactory.get_rounds().then(function(response){
			$scope.rounds = response.data;
		});
	};

	var get_rounds_for_golfer = function(gid)
	{
		var req = {id:gid};
		RoundsFactory.get_rounds_for_golfer(req).then(function(response){
			$scope.rounds = response.data;
		});
	};

	
	get_rounds_for_golfer(1);



	var addCourseHoles = function()
	{
		console.log("add course holes");
		var holes = [
			{
				id:null,
				courseID:1,
				holeNumber:5,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:6,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:7,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:8,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:9,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:10,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:11,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:12,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:13,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:14,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:15,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:16,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:17,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
			{
				id:null,
				courseID:1,
				holeNumber:18,
				tee_front_yardage:111,
				tee_middle_yardage:222,
				tee_back_yardage:333,
				tee_tips_yardage:444,
				par:5,
				handicap:5
			},
		];


		for(var i = 0; i < holes.length; i++)
		{
			console.log("add course hole " + holes[i].holeNumber);
			RoundsFactory.add_course_hole(holes[i]);
		}

	}

	// shortcut to populate DB b/c I'm lazy :)
	//addCourseHoles();

}]);