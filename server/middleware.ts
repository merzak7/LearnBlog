/// <reference path="../typings/tsd.d.ts"/>

import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import {Strategy} from 'passport-local'
import {join} from 'path'



let app = express()

// logger
app.use(morgan('dev'))
// parse request payloads
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// expose ./public to /
app.use('/', express.static(join(__dirname, './public')))
