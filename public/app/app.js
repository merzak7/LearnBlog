var app=angular.module('app',['ngRoute','ngResource','ngMaterial']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home',{
		templateUrl:'../home/home.html',
		controller:'HomeCtrl'
	})
	.when('/login',{
		templateUrl:'../login/login.html',
		controller:'LoginCtrl'
	})
	.when('/article',{
		templateUrl:'../article/article-form.html',
		controller:'ArticleCtrl'
	})
	.when('/article_detail',{
		templateUrl:'../article/article-detail.html',
		controller:'Article_detailCtrl'
	})
	.otherwise({
		redirectTo:'/home'
	})
});