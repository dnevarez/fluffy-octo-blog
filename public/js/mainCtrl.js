angular.module('blog')
.controller('mainCtrl', function($scope, service){

  service.getPost().then(function(response){
    console.log(response);
    $scope.post = response
  })
})
