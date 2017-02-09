var posts = require ('../dummydata');

module.exports = {
  getPosts: (req,res, next) => {
     res.status(200).json(posts.post)
  }
}
