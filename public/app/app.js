var app=angular.module('app',['ngRoute','ngResource','ngMaterial','Article']);

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
		templateUrl:'../article/articles.html',
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