(function(){

	var appName = "GST";
	angular.module(appName, [
		'ngMaterial',
		'ngMessages',
		'ngAnimate',
		'ui.router',
		'angularMoment'])

	.config(function($mdThemingProvider, $mdIconProvider)
	{
	  	$mdThemingProvider
		  	.theme('default')
				.primaryPalette('light-green')
	    	.accentPalette('blue')
				//.dark();
  });

})();
