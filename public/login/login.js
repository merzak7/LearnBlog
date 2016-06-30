
// services
app.service('LoginServices',function(){
	var isLogged=false;

	this.submit=function(user){
		var user1={"email":"admin","password":"admin"}
		if(angular.equals(user,user1)){
			isLogged=true;
		}
	};

	this.isLogged=function(){
		return isLogged;
	};
});
// controllers
app.controller('LoginCtrl',function($scope,$location,LoginServices){
	$scope.page_title="Login";
	$scope.submit=function(user){
		LoginServices.submit(user);
		var isLogged=LoginServices.isLogged();
		if(isLogged){
			$location.path('/article');
		}
	};
	
});
//directives
