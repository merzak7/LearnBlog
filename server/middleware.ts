/// <reference path="../typings/tsd.d.ts"/>

import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import * as session from 'express-session'
import * as passport from 'passport'
import {Strategy} from 'passport-local'
import {join} from 'path'

import * as User from './models/User'


let app = express()

// logger
app.use(morgan('dev'))
// parse request payloads
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// expose ./public to /
app.use('/', express.static(join(__dirname, './public')))
app.use(session({
  secret: 'selbabnelghabetneffeghanzouret',
  name: 'iosession',
  saveUninitialized: false,
  cookie: {
    maxAge: 1000*60*30,  // 30mn
    // secure: true,    // requires https
    httpOnly: true
  }
}))
// passport init
app.use(passport.initialize())
// cuz I use sessions
app.use(passport.session())

// setup strategy
passport.use(new Strategy((username, password, done) => {
  User.findOneByUsername(username, (err, user) => {
    if (err || !user)
      return done(err, null, {message: 'Not such user!'})
    else
      return done(null, user)
  })
}))
