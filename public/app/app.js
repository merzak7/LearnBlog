var app=angular.module('app',['ngRoute','Login']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		template:'<a href="#login">login</a>'
	})
	.when('/login',{
		templateUrl:'../login/login.html',
		controller:'LoginCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});