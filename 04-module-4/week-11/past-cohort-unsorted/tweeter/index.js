const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const { User, Tweet } = require('./models');
const app = express();

const csrfProtection = csrf({ cookie: true });

app.set('view engine', 'pug');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res, next) => {
  const tweets = await Tweet.findAll({ include: User, order: [['createdAt', 'DESC']] });
  res.render('index', { tweets });
});

app.get('/tweets/new', csrfProtection, async (req, res) => {
  const users = await User.findAll({});
  res.render('create-tweet', { users, csrfToken: req.csrfToken() });
});

app.post('/tweets', csrfProtection, async (req, res) => {
  const { body, userId } = req.body;
  await Tweet.create({ body, userId });
  res.redirect('/');
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
