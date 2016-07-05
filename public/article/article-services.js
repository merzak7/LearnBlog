// services
app.service('ArticleServices',function($resource){
		var article={};
		this.getArticle=function(){
			return article;
		};
		this.setArticle=function(art){
			article=art;
		};
		this.getArticles=function(){
			return $resource("/posts");
		}
});