const express = require("express");
const db = require('./db/models');
const { User, Question, Answer, Vote } = db;
const morgan = require("morgan");
const { environment } = require('./config');
const app = express();
const usersRouter = require("./routes/api/users");
// const indexRouter = require("./routes/api/index");

const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { searchRouter }  = require('./routes/api/search');
const { questionsRouter } = require('./routes/questions');


app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/search', searchRouter);
app.use("/users", usersRouter);
app.use('/questions', questionsRouter);

app.get('/', (req, res) => {
  res.render('site-layout');
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/signup', (req, res) => {
  res.render('signup');
})

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// Custom error handlers.

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
