angular.module('blog')
  .directive('archiveDir', function(){
    return {
      restrict: 'EA',
      // scope: {
      //
      // },
      templateUrl: '../views/archiveTemplate.html',
    }
  })
