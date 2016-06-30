
// services
app.service('LoginServices',function(){
	var isLogged=false;

	this.submit=function(email,password){
		if(email=="admin" && password=="admin"){
			logged=true;
			return logged;
		}
	};
});
// controllers
app.controller('LoginCtrl',function($scope,$location,LoginServices){
	$scope.page_title="Login";
	$scope.submit=function(){
		var isLogged=LoginServices.submit($scope.user.email,$scope.user.password);
		if(isLogged){
			$location.path('/article');
		}
	};
	
});
//directives
