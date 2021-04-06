angular.module('LoginApp').service('LoginService', function($http) {  
    this.LoginValidate = function(UserData) {  
        var result = $http({  
            method: "Post",  
            url: --XXXXXXXXXXXXXXXXXXX’ //pass UserData values to class file  
            data: save  
        });  
        return result;  
    }  
}); 