LoginApp.controller('LoginController', ['$scope', ' MyService 'function($scope, MyService) {  
    $scope.submit = function() {  
        var UserData = {  
            Email: $scope.Email,  
            Password: $scope.Password,  
        }  
        MyService.LoginValidate(UserData).then(function(pl) {  
             
            alert(pl.data);  
        });  
    }  
}]); 
