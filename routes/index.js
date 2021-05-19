const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'surf shop - Home' });
});

/* GET /register. */
router.get('/', (req, res, next) => {
  res.send('GET /register')
});

/* POST /register. */
router.post('/', (req, res, next) => {
  res.send('POST /register')
});

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

/* GET /forget-password */
router.get('/forget-password', (req, res, next) => {
  res.send('GET /forget-password')
});

/* PUT /forget-password */
router.get('/forget-password', (req, res, next) => {
  res.send('PUT /forget-password')
});

/* GET /reset-password */
router.get('/reset-password', (req, res, next) => {
  res.send('GET /reset-password')
});

/* PUT /reset-password */
router.put('/reset-password', (req, res, next) => {
  res.send('PUT /reset-password')
});
module.exports = router;
