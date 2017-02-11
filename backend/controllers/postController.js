var posts = require ('../dummydata');

module.exports = {
  getPosts: (req,res, next) => {
     res.status(200).json(posts.post)
  },

  getPost: (req,res,next) => {
    for (var i = 0; i < posts.post.length; i++){
      if (posts.post[i].id == req.query.id){
        // console.log('posts[i] is ',posts[i].id);
        var wantedPost = posts.post[i]
      }
    }
    // console.log(currentPost);
    res.status(200).send(wantedPost)
  }
}
