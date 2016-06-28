var login=angular.module('Login',[]);





// services
// controllers
login.controller('LoginCtrl',function($scope){

	$scope.submit=function(){
		$scope.user.email="logged";
	}
	
});
//directives
