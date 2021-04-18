const express = require('express')

const router = express.Router()

const Post = require('../models/Post')

// get all post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json(err.message)
  }
})

// create a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  })
  try {
    const createdpost = await post.save()
    res.json(createdpost)
  } catch (err) {
    res.json(err.message)
  }
})

// get post by id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.json(post)
  } catch (err) {
    res.json(err.message)
  }
})

// delete post by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.id })
    res.json(deletedPost)
  } catch (err) {
    res.json(err.message)
  }
})

// update post by id
router.patch('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    )
    res.json(updatedPost)
  } catch (err) {
    res.json(err.message)
  }
})

module.exports = router
