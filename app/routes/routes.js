angular.module('GST').config(function($stateProvider, $urlRouterProvider)
{
  //, $locationProvider
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
    .state('scores', {
      url:'/scores',
      templateUrl : 'app/views/scores.html',
      controller  : 'scoreController'
    })
    .state('golfer', {
      url:'/golfer/:id',
      templateUrl : 'app/views/golfer.profile.html',
      controller  : 'golferProfileController'
    })
  	.state('admin', {
      url:'/admin',
      templateUrl : 'app/views/admin.html',
      controller  : 'adminController'
    });
});
