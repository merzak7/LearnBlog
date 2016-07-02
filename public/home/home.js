app.controller('HomeCtrl',function($scope,$location,ArticleServices){
	$scope.page_title="Home Page";

	var articles=ArticleServices.getArticles();
	$scope.articles=articles.query();

	$scope.setArticle=function(article){
	 	ArticleServices.setArticle(article);
	 };
});