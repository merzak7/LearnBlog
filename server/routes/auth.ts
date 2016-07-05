/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'
import * as passport from 'passport'

import {Core, Auth} from '../utils/errors'
import * as User from '../models/User'


let router = Router()


router.all('/', (req, res) => {
  res.status(404).json({code: Core.Codes.NotImplemented, message: Core.Messages.NotImplemented})
})

router.post('/signup', (req, res, next) => {
  let user = {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    role: req.body.role,
    bio: req.body.bio,
    url: req.body.url
  }
  if (!user.username || !user.password)
    next(new Error(Auth.Messages.PasswordUsernameNotInPayload))
  User.save(user, (err) => {
    if (err)
      res.json({message: err.message})
    else
      res.json({code: Core.Codes.OK, message: Core.Messages.OK})
  })
})

router.post('/login',
    passport.authenticate('local', {successRedirect: '/'}))


export = router
