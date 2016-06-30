/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'
import {normalize, join} from 'path'
import {readFileSync, writeFileSync} from 'fs'

let router = Router()

// Post contract
interface Post {
    id: Number
    author: string
    date: string
    text: string
    video: string
    audio: string
}

// get static data
let f:string = normalize(join(process.cwd(), './raw/posts.json'))
let posts:Post[] = JSON.parse(readFileSync(f, 'utf8'))

// get all posts
router.get('/', (req,res)=>{
    res.json(posts)
})

// get post by id
router.get('/:id', (req,res, next)=>{
    for (let post of posts)
        if (post.id == parseInt(req.params.id, 10))
            res.json(post)
    next(new Error('Cannot find post with id:' + req.params.id))
})

// post a new article
// TODO ~ validations
router.post('/', (req, res, next)=>{
    let post:Post = req.body
    if (!post)
        next(new Error('Empty payload!'))
    post.id = posts.length
    posts.push(post)
    writeFileSync(f, JSON.stringify(posts), 'utf8')
    res.json(post)
})

router.use((err:Error, req, res, next) => {
    if (err){
        console.error(err.message)
        res.status(404).json({msg: err.message})
    } 
    else next()
})

export = router