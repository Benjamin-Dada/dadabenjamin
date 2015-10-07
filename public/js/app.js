var benjamin=angular.module('benjamin',['ngRoute', 'ngMessages']);
benjamin.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider)
	{	$routeProvider
		.when("/",{templateUrl:'/partials/about_me.html',controller:'mainCtrl'})
		.when("/contact",{templateUrl:'/partials/form.html',controller:'mainCtrl'})
		.when("/about_site",{templateUrl:'/partials/about_site.html',controller:'mainCtrl'})
		.otherwise({redirectTo:"/"});$locationProvider.html5Mode(true);}
		]);
benjamin.controller('mainCtrl',['$scope','$location','$http', '$templateCache',
	function($scope,$location,$http,$templateCache) 
	{	$scope.isActive=function(viewLocation)
		{return viewLocation===$location.path();};
		var today=new Date();$scope.year=today.getFullYear();

		$scope.name = "";
		$scope.email = "";
		$scope.submit=function(){
				
//console.log($scope.name);
				//console.log($scope.email);
				var data = {name: $scope.name, email: $scope.email};
				//console.log(data.name);
				//console.log(data);
				//console.log($scope.name);
		$http.post('http://localhost:8080/hello', data)
			.success(function(data){alert("submitted.");})
			.error(function(data){alert("error.")});

	}
}		

]);
