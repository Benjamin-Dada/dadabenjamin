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

		//MY ERROR BEGINS HERE
		$scope.name = "xx";
		$scope.email = "yy";
		$scope.submit=function(){
				
//console.log($scope.name);
				//console.log($scope.email);
				var data = {name: $scope.name};
				//console.log(data.name);
				//console.log(data);
				//console.log($scope.name);
		$http.post('http://localhost:8080/hello', name)
			.success(function(data){alert("name entered.");})
			.error(function(data){alert("error.")});

	}
}		

]);
