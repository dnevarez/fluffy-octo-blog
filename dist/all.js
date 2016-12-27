'use strict';

angular.module('blog', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/landingView.html',
    controller: 'landingCtrl'
  });
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
});
'use strict';

angular.module('blog').controller('landingCtrl', function ($scope, service) {

  // $scope.test = "Hello World!"
  $scope.posts = service.getPosts();
});
'use strict';

angular.module('blog').controller('mainCtrl', function ($scope, service) {});
'use strict';

angular.module('blog').factory('service', function () {

  // Dummy data
  var posts = [{ title: 'ipsum lopsim', post: "Lucas ipsum dolor sit amet padmé dagobah tusken raider k-3po wedge ponda obi-wan padmé skywalker dooku. Kenobi lars moff moff hutt yoda anakin skywalker. Luke sith c-3p0 mandalorians c-3po jawa dooku. Qui-gonn chewbacca skywalker cade solo ahsoka darth. Qui-gonn ewok antilles vader. Calrissian skywalker naboo skywalker dooku moff watto. Moff c-3po jabba moff anakin ben. Fett amidala yavin twi'lek solo ventress binks. Maul hutt leia solo maul c-3p0 jinn kenobi darth. Coruscant maul windu solo mandalore moff. Darth moff hutt kenobi moff mustafar yavin. Antilles hoth padmé r2-d2 darth. Darth organa kessel moff organa calrissian k-3po. Kenobi utapau yavin alderaan. Windu darth leia qui-gon. Dagobah organa hutt solo sidious. Skywalker darth luuke skywalker. Solo maul ewok antilles tatooine thrawn skywalker amidala. Grievous ackbar skywalker darth coruscant fisto yoda. Ahsoka calamari skywalker moff. Baba dantooine jade luke fett. Wookiee hutt vader hutt wedge k-3po. Cade antilles baba jade. Leia darth ackbar vader wampa organa." }, { title: 'jedi master', post: "Lucas ipsum dolor sit amet snootles sunrider askajian ka kit naboo mon kessel hutt jubnuk. Raymus axmis tiin kessel falleen. Anakin nadon stele maximilian dash. Aruzan nien givin droid jin'ha tatooine md-5 lars droid. Danni rebo bardan ugnaught shaddaa massa kasan biggs mothma. Psadan cadavine corran evazan fortuna kel. Ki-adi-mundi vor artaru wat palpatine gungan. Ewok chirrpa gen'dai deliah derek dor. Moff darth dodonna quee muzzer secura fel sabé. Zev veknoid umbaran skywalker r5-d4 shistavanen. Mirialan vedder elom rex whill dooku palpatine raynar. Mirialan kessel tibor yoda anakin raymus. Joruus snivvian rishi luke saché cabasshite. Saesee keyan jarael wilhuff clawdite dat. Fel ackbar tof fisto quee mantell. Rune tatooine bel sy boss ev-9d9 fett dat. Dug jawa kenobi organa rugor kal bria kwa er'kit. Geonosian noghri moff sykes moddell. T88 haruun taung grizmallt. Ewok farlax grievous koon jarael. Meridian khai vaathkree fett crynyd. Dengar ig-88 drall gilad fel ken. Momaw argazdan jade nadon voxyn danni." }];

  return {
    getPosts: function getPosts() {
      return posts;
    }
  };
});