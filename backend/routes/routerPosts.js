const express = require('express')
const {getPostBySearch, getPost, createPost, updatePost, deletePost} = require('../controllers/controllPost')

const router = express.Router();

router.get('/search',getPostBySearch)

router.get('/',getPost)

router.post('/',createPost)

router.patch('/:id',updatePost)

router.delete('/:id',deletePost)


module.exports = router 