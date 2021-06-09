const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const app = express();
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');

//Connect Database
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//ROUTES

app.get('/', postController.getAllPosts);
app.get('/post/:id', postController.getPost);
app.get('/posts/edit/:id', pageController.getEditPage);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.get('/posts/delete/:id', postController.deletePost);
app.get('/about', pageController.getAboutPage);
app.get('/index', pageController.getIndex);
app.get('/add_post', pageController.getAddPage);
app.get('/post', pageController.getPost);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
