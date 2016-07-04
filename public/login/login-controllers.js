// controllers
app.controller('LoginCtrl',function($scope,$location,LoginServices){
	
	$scope.page_title="Login";
	$scope.submit=function(user){
		LoginServices.submit(user);
	};

});