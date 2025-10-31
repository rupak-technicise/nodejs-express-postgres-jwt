const db = require("../models");
const Post = db.post;

exports.createPost = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({ message: "Content cannot be empty!" });
  }

  Post.create({
    content: req.body.content,
    userId: req.userId
  })
  .then(data => res.send(data))
  .catch(err => res.status(500).send({ message: err.message }));
};