var benjamin = angular.module('benjamin', ['ngRoute']);

benjamin.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

	$routeProvider.when("/",{templateUrl: '/partials/about_me.html', controller: 'mainCtrl'})
	.when("/about",{templateUrl: '/partials/about.html', controller: 'mainCtrl'})
	.when("/about_site",{templateUrl: '/partials/about_site.html', controller: 'mainCtrl'})
	.otherwise({ redirectTo: "/" });
	$locationProvider.html5Mode(true);
}]);

benjamin.controller('mainCtrl',['$scope','$location',function($scope,$location){
	$scope.isActive = function(viewLocation) { 
		return viewLocation === $location.path();
	};
	var today = new Date();
	$scope.year = today.getFullYear();
}]);
