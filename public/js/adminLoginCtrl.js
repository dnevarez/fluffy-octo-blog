angular.module('blog')
.controller('adminLoginCtrl', function($scope, service){
  $scope.adminLogin = function(user, password){
    // service.adminLogin(user,password)
    console.log(user,password)
  }
})
