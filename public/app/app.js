var app=angular.module('app',['ngRoute','ngResource','Login','Article']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		template:'<a href="#login">login</a>'
	})
	.when('/login',{
		templateUrl:'../login/login.html',
		controller:'LoginCtrl'
	})
	.when('/article',{
		templateUrl:'../article/article-form.html',
		controller:'ArticleCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});