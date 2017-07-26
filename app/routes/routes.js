angular.module('GST').config(function(
    $stateProvider,
    $urlRouterProvider
  ){

  $urlRouterProvider.otherwise('/');

	$stateProvider

    .state('/', {
      url:'/',
      views:{
        'main_content':{
          templateUrl: 'app/views/home.html',
          controller: 'mainController',
        }
      }
    })
    .state('golfers', {
      url:'/golfers',
      views:{
        'main_content':{
          templateUrl: 'app/views/golfers.html',
          controller: 'golfersController',
        }
      },
      resolve: {
        golfers: function(GolferFactory){
          return GolferFactory.get_golfers()
        }
      }
    })
    .state('golfer', {
      url:'/golfer/:gid',
      views: {
        'main_content':{
          templateUrl : 'app/views/golfer.profile.html',
          controller  : 'golferProfileController'
        },
        'main_content.golfer_content': {
          templateUrl : 'app/views/rounds.html',
          controller: 'roundsController'
        }
      },
      resolve: {
        rounds: function($stateParams, GolferFactory) {
          return GolferFactory.get_golfer_rounds($stateParams.gid);
        }
      }
    })
    .state('golfer.round', {
      url:'/round/:roundID',
      views : {
        'golfer_content' : {
          templateUrl : 'app/views/round.html',
          controller  : 'roundController'
        }
      },
      resolve: {
        scorecard: function($stateParams, RoundsFactory) {
          return RoundsFactory.get_holes_for_round($stateParams.roundID);
        }
      }
    });
    /*
  	.state('admin', {
      url:'/admin',
      templateUrl : 'app/views/admin.html',
      controller  : 'adminController'
    })*/
});
