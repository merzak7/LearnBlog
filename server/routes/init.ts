/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'
import * as posts from './posts'
import * as auth from './auth'

let router = Router()


// posts
router.use('/auth', auth)
router.use('/posts', posts)


export = router
