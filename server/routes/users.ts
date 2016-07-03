/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'

import * as User from '../models/User'


let router = Router()


router.all('/', (req, res) => {
  res.json({msg: "This is still not implemented"})
})


export = router
