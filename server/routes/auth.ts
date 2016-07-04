/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'
import * as passport from 'passport'

import * as User from '../models/User'


let router = Router()


router.all('/', (req, res) => {
  res.status(404).json({msg: "This is still not implemented"})
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
    next(new Error('Password and Username are required'))
  User.save(user, (err) => {
    if (err)
      res.status(200).json({msg: err.message})
    else
      res.status(200).json({msg: "Ok"})
  })
})

router.post('/login',
    passport.authenticate('local', {successRedirect: '/'}),
    (req, res) => {
      res.redirect('/')
    })


export = router
