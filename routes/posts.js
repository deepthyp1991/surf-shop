const express = require('express');
const router = express.Router();
const {asyncErrorHandler} = require('../middleware')
const {
  postIndex, 
  postNew, 
  postCreate, 
  postShow, 
  postEdit,
  postUpdate,
  postDestroy
} = require('../controllers/posts')

/*  Get post index/posts */
router.get('/',asyncErrorHandler(postIndex) );

/*  Get post new /posts/new */
router.get('/new', postNew);

/*  POST post create/posts */
router.post('/', asyncErrorHandler(postCreate));

/*  Get post show /posts/:id */
router.get('/:id', asyncErrorHandler(postShow)); 

/*  Get post edit /posts/:id/edit  */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/*  PUT posts UPDTE /posts/:id  */    
router.put('/:id', asyncErrorHandler(postUpdate));

/*  Delete posts destroy /posts/:id  */
router.delete('/:id', asyncErrorHandler(postDestroy));

module.exports = router;