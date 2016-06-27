/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'


let router = Router()

router.get('/', (req,res)=>{
    res.end('Hello, World!\n')
})

export = router