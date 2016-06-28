var article=angular.module('Article',[]);


article.controller('ArticleCtrl',function($scope,$resource){
	
	//$scope.article="first article";

	var res=$resource("http://localhost:8000/posts");//:id",{id:'@id'},{action:{method :"GET"}});
	  $scope.article=res.query();
});