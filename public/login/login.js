var login=angular.module('Login',[]);





// services
// controllers
login.controller('LoginCtrl',function($scope){
	$scope.page_title="Login";
	$scope.submit=function(){
		$scope.user.email="logged";
	}
	
});
//directives
