angular
	.module('GST')
	.factory('ChatSocket', ['$timeout', 'socketFactory', function($timeout, $rootScope)
	{
		//return socketFactory();
		var socket = io.connect();
		
		return {
			on: function (eventName, callback)
			{
				socket.on(eventName, function ()
				{
					var args = arguments;
					
					$timeout(function () {
					  callback.apply(socket,args);
					});

					/*$rootScope.$apply(function()
					{
						callback.apply(socket,args);
					});*/
				});
			},
			
			emit: function (eventName, data, callback)
			{
				socket.emit(eventName, data, function ()
				{
					var args = arguments;

					$timeout(function () {
						if (callback)
						{
							callback.apply(socket, args);
						}
					});

					/*$rootScope.$apply(function ()
					{
						if (callback)
						{
							callback.apply(socket, args);
						}
					});*/
				});
			}
		};
	}]);