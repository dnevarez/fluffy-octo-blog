angular.module('blog', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider
  .otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/landingView.html',
    controller: 'landingCtrl'
  })
  .state('adminLogin', {
    url: '/letintheadmin',
    templateUrl: 'views/adminLogin.html'
    // controller: 'travelCtrl'
  })
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
          getPost: function(service){
            return service.getPost()
            .then(function(res){
              (res)
              return res;
            })
          }
        }
      })
})
