/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'

let router = Router()


// posts
import * as posts from './posts'
router.use('/posts', posts)


export = router