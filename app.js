const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/user');
const session = require('express-session')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

//require routes
const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews');
const postsRouter = require('./routes/posts')

const app = express();

//connect to the database
mongoose.connect('mongodb+srv://deepthy:surf-shop@cluster0.bsycu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true , useCreateIndex:true,  useUnifiedTopology: true }).then(()=> {
  console.log("Connected to DB")
}).catch(err => {
  console.log('ERROR:', err.message)
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected!')
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))



//Configure passport and sessions
app.use(session({
  secret: 'Happy dudue',
  resave: false,
  saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//mount routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
