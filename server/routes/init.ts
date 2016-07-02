/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'
import * as posts from './posts'

let router = Router()


// posts
router.use('/posts', posts)


export = router
