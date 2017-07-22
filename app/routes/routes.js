angular.module('GST').config(function(
    $stateProvider,
    $urlRouterProvider
  ){

  $urlRouterProvider.otherwise('/');

	$stateProvider

    .state('/', {
      url:'/',
      templateUrl: 'app/views/home.html',
      controller: 'mainController'
    })
    .state('rounds', {
      url:'/rounds',
      templateUrl : 'app/views/rounds.html',
      controller: 'roundController'
    })
    .state('scorecard', {
      url:'/scorecard/:roundID',
      templateUrl : 'app/views/scorecard.html',
      controller  : 'scorecardController',
      resolve: {
        scorecard: function($stateParams, RoundsFactory) {
          return RoundsFactory.get_holes_for_round($stateParams.roundID);
        }
      }
    })
    .state('golfer', {
      url:'/golfer/:gid',
      templateUrl : 'app/views/golfer.profile.html',
      controller  : 'golferProfileController'
    })
  	.state('admin', {
      url:'/admin',
      templateUrl : 'app/views/admin.html',
      controller  : 'adminController'
    });
});
