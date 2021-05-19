const express = require('express');
const router = express.Router();

/*  Get post index/posts */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});

/*  Get post new /posts/new */
router.get('/new', (req, res, next) => {
  res.send('NEW /posts/new');
});

/*  POST post create/posts */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts');
});

/*  Get post show /posts/:id */
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id');
}); 

/*  Get post edit /posts/:id/edit  */
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/edit');
});

/*  PUT posts UPDTE /posts/:id  */    
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id ');
});

/*  Delete posts destroy /posts/:id  */
router.delete('/:id', (req, res, next) => {
  res.send('DELETE /posts/:id');
});

module.exports = router;