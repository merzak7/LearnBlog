/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'
import * as posts from './posts'
import * as users from './users'

let router = Router()


// posts
router.use('/posts', posts)
router.use('/users', users)


export = router
