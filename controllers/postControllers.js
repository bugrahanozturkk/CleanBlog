const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const post = await Post.find({});
  res.render('index', {
    post,
  });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById({ _id: req.params.id });
  res.render('post', {
    post: post,
  });
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.details = req.body.details;
  post.save();

  res.redirect(`/post/${req.params.id}`);
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};
