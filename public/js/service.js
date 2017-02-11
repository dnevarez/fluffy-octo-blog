angular.module('blog')
.factory('service', function($http, $stateParams){



return {
  getPosts: function(){
    return $http({
      method: 'GET',
      url: 'http://127.0.0.1:3000/posts'
    }).then(function(res){
      // console.log(res.data)
      
      return res.data

    })
  },

  getPost: function() {

    return $http({
      method: 'GET',
      url: 'http://127.0.0.1:3000/post',
      params: {id: $stateParams.id}
    })
    .then(function(res){
      console.log('service: ', res);
      return res.data
    })
  }
}

})
