angular.module('GST').config(function($stateProvider, $urlRouterProvider)
{
  //, $locationProvider
	$urlRouterProvider.otherwise('rounds');


	$stateProvider

    .state('/', {
      url:'/',
      templateUrl: 'app/views/home.html'
    })
    .state('rounds', {
          url:'/rounds',
      templateUrl : 'app/views/rounds.html'
    })
    .state('scores', {
          url:'/scores',
      templateUrl : 'app/views/scores.html',
      controller  : 'scoreController'
    })
  	.state('admin', {
          url:'/admin',
      templateUrl : 'app/views/admin.html',
      controller  : 'adminController'
    });
});
