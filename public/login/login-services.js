// services
app.service('LoginServices',function($resource, $location,$cookies,$rootScope){

	this.submit=function(user){
		// todo ~ remove http://localhost:8000 {kept for testing on 9000}
    var login=$resource("http://localhost:8000/auth/login");
		login.save({username:user.username,password:user.password},
              function ok(){
              		$rootScope.logged=true;
                	$location.path('/home');
              },function notOk() {
                	$rootScope.logged=false;
              });
	};

});
