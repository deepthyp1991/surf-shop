const express = require('express');
const router = express.Router();
const {postRegister} = require('../controllers/index')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'surf shop - Home' });
});

/* GET /register. */
router.get('/', (req, res, next) => {
  res.send('GET /register')
});

/* POST /register. */
router.post('/register', postRegister);

/* GET /login. */
router.get('/login', (req, res, next) => {
  res.send('GET /login')
});

/* POST /login. */
router.post('/login', (req, res, next) => {
  res.send('POST /login')
});

/* GET /profile. */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile')
});

/* PUT /profile/:user_id. */
router.get('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id')
});

/* GET /forget */
router.get('/forget-password', (req, res, next) => {
  res.send('GET /forget-password')
});

/* PUT /forget */
router.get('/forget-password', (req, res, next) => {
  res.send('PUT /forget-password')
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token')
});

/* PUT /reset/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token')
});
module.exports = router;
