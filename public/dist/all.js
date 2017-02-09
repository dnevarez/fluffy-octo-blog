'use strict';

angular.module('blog', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/landingView.html',
    controller: 'landingCtrl'
  })
  // .state('travel', {
  //   url: '/travel',
  //   templateUrl: 'views/travelView.html',
  //   controller: 'travelCtrl'
  // })
  // .state('people', {
  //   url: '/people',
  //   templateUrl: 'views/peopleView.html',
  //   controller: 'peopleCtrl'
  // })
  // .state('events', {
  //   url: '/events',
  //   templateUrl: 'views/eventsView.html',
  //   controller: 'eventsCtrl'
  // })
  // .state('about', {
  //   url: '/about',
  //   templateUrl: 'views/aboutView.html',
  //   controller: 'aboutCtrl'
  // })
  // .state('contact', {
  //   url: '/contact',
  //   templateUrl: 'views/contactView.html'
  // })
  .state('post', {
    url: '/post/:id',
    templateUrl: './views/readPost.html',
    controller: 'postCtrl',
    controllerAs: 'vm',
    resolve: {
      getPost: function getPost(service) {
        return service.getPost().then(function (res) {
          res;
          return res;
        });
      }
    }
  });
});
'use strict';

angular.module('blog').controller('landingCtrl', function ($scope, service) {

  // $scope.test = "Hello World!"
  service.getPosts().then(function (res) {
    $scope.posts = res;
  });
});
'use strict';

angular.module('blog').controller('mainCtrl', function ($scope, service) {});
'use strict';

angular.module('blog').directive('readPost', function () {
  return {
    restrict: 'EA',
    // scope: {
    //
    // },
    templateUrl: '../views/readPost.html'
  };
});
'use strict';

angular.module('blog').factory('service', function ($http, $stateParams) {

  return {
    getPosts: function getPosts() {
      return $http({
        method: 'GET',
        url: 'http://127.0.0.1:3000/posts'
      }).then(function (res) {
        // console.log(res.data)

        return res.data;
      });
    },

    getPost: function getPost() {
      $stateParams;
      return $http({
        method: 'GET',
        url: 'myserver',
        params: { id: $stateParams.id }
      }).then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].id === $stateParams.id) {
            res.data[i];
            return res.data[i];
          }
        }
      });
    }
  };
});