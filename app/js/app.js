angular.module('App', ['ngRoute', 'ngResource'])
	.config(function($routeProvider) {
			$routeProvider.when('/', 
				{
					templateUrl: '../views/main.html'
				});
			$routeProvider.when('/goods', 
				{
					templateUrl: '../views/goods.html',
					controller: 'ctrl'
				});
			$routeProvider.when('/services', 
				{
					templateUrl: '../views/services.html',
					controller: 'services-ctrl'
				});
		}
	);