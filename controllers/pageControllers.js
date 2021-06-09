const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getEditPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
};

exports.getIndex = async (req, res) => {
  res.render('index');
};

exports.getPost = async (req, res) => {
  res.render('post');
};
