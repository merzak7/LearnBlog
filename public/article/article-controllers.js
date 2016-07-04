// controllers
app.controller('ArticleCtrl',function($scope,$location,ArticleServices){


	$scope.date=new Date();
	var res=ArticleServices.getArticles();
	$scope.articles=res.query();

	 $scope.setArticle=function(article){
	 	ArticleServices.setArticle(article);
	 };

	 $scope.addArticle=function(){
	 	var article={
	 				 "title":$scope.title,
	 				 "author":"yahia",
	 				 "text":$scope.text,
	 				 "video":$scope.video,
	 				 "audio":$scope.audio
	 				};
	 	res.save(article);
	 	$scope.articles=res.query();
	 	
	 };
});

app.controller('Article_detailCtrl',function($scope,ArticleServices){
	$scope.article=ArticleServices.getArticle();
});