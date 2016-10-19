(function(){
	
	var appName = "GST";
	angular.module(appName, [
		'ngMaterial',
		'ngMessages',
		'ngAnimate',
		'ui.router',
		'angularMoment',
		'btford.socket-io'])
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

 	angular.module(appName).controller('mainController', ['$scope', '$mdToast', '$http', '$location', function($scope, $mdToast, $http, $location)
	{
		$scope.test = [
            {name:"Glenn"},
            {name:"Shant"},
            {name:"Raffi"}
            ];
	}]);
})();