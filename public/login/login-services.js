// services
app.service('LoginServices',function($resource, $location){

	this.submit=function(user){
		var login=$resource("http://localhost:8000/auth/login");
		login.save({username:user.username,password:user.password},
              function ok(){
                $location.path('/home')
              },function notOk() {
                // todo ~ make some notification..
              });
	};

});