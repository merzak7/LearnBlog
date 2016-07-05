// services
app.service('LoginServices',function($resource, $location,$cookies,$rootScope){

	this.submit=function(user){
		var login=$resource("/auth/login");
		login.save({username:user.username,password:user.password},
              function ok(){
              		$rootScope.logged=true;
                	$location.path('/home');
              },function notOk() {
                	$rootScope.logged=false;
              });
	};

});