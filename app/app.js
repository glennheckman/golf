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
				.primaryPalette('green')
	    	.accentPalette('light-blue');

	    $mdThemingProvider
	    	.theme('notification')
	    	.backgroundPalette('grey').dark();
  });

})();
