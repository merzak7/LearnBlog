/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'
import * as passport from 'passport'
import {normalize, join} from 'path'
import {readFile, writeFile} from 'fs'

import {Core} from '../utils/errors'
import * as Post from '../models/Post'

let router = Router()

// post contract
interface Post {
  id:number
  author:string
  date:number
  text:string
  video:string
  audio:string
}


// get all posts
router.get('/', (req, res) => {
  res.json(Post.findAll())
})

// get post by id
router.get('/:id', (req, res, next) => {
  Post.findOneById(parseInt(req.params.id, 10), (err, post) => {
    if (err)
      next(err)
    else
      res.json(post)
  })
})

// post a new article
// todo ~ validations
router.post('/',
  passport.authenticate('local'),
  (req, res, next) => {
  let post:Post = req.body
  if (!post)
    next(new Error(Core.Messages.EmptyPayload))
  post.date = parseInt(req.body.date)
  Post.save(post, (err, postId) => {
    if(err)
      next(err)
    else
      res.json({id: postId})
  })
})

router.use((err:Error, req, res, next) => {
  if (err) {
    console.error(err.message)
    res.status(404).json({message: err.message})
  } else next()
})

export = router
