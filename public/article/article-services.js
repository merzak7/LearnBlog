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
      // todo ~ remove http://localhost:8000 {kept for testing on 9000}
			return $resource("http://localhost:8000/posts");
		}
});
