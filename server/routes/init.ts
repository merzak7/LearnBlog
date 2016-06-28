/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'

let router = Router()

// root
router.get('/', (req,res)=>{
    res.end('Hello, World!\n')
})

// posts
import * as posts from './posts'
router.use('/posts', posts)


export = router