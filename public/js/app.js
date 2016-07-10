var benjamin=angular.module('benjamin',['ngRoute', 'ngMessages']);
benjamin.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider)
	{	$routeProvider
		.when("/",{templateUrl:'/partials/about_me.html',controller:'mainCtrl'})
		.when("/gallery",{templateUrl:'/partials/Gallery.html',controller:'mainCtrl'})
		.when("/projects",{templateUrl:'/partials/projects.html',controller:'mainCtrl'})
		.when("/test",{templateUrl:'/partials/templateId.html',controller:'mainCtrl'})
		.otherwise({redirectTo:"/"});$locationProvider.html5Mode(true);}
		]);
benjamin.controller('mainCtrl',['$scope','$location','$http', '$templateCache',
	function($scope,$location,$http,$templateCache) 
	{	$scope.isActive=function(viewLocation){return viewLocation===$location.path();};
		var today=new Date();$scope.year=today.getFullYear();
		$templateCache.put('templateId.html', 'This is the content of the template');
	}		
]);
