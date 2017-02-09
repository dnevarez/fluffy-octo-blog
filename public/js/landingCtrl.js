angular.module('blog')
.controller('landingCtrl', function($scope, service){

  // $scope.test = "Hello World!"
  service.getPosts().then(function(res){
    $scope.posts = res;
  })

})
