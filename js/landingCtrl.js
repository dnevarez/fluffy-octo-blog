angular.module('blog')
.controller('landingCtrl', function($scope, service){

  // $scope.test = "Hello World!"
$scope.posts = service.getPosts();

})
