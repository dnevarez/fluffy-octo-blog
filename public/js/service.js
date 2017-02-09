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
  ($stateParams)
  return $http({
    method: 'GET',
    url: 'myserver',
    params: {id: $stateParams.id}
  }).then(function(res){
    for (var i = 0; i < res.data.length; i++){
      if (res.data[i].id === $stateParams.id){
        (res.data[i])
        return res.data[i]
      }
    }
  })
}
}

})
