var app = angular.module('App');

app.controller('nav-ctrl', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(path) {
		return $location.url() === path;
	};
}]);

app.controller('ctrl',['$scope', '$resource', function($scope, $resource) {
	var goodsEnries = $resource('/goods');
	$scope.goods = goodsEnries.query();
}]);

app.controller('services-ctrl', ['$scope', '$resource', function($scope, $resource) {
	var servicesEnries = $resource('/services');
	$scope.services = servicesEnries.query();

}]);