/// <reference path="../typings/tsd.d.ts"/>

import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import {join} from 'path'

// setup
const PORT = process.env.PORT || 8000
let app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', express.static(join(__dirname, './public')))

// TODO ~ rm this!
// only used for browserSync
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})


// routes
import * as routes from './routes/init'
app.use('/', routes)

// server
app.listen(PORT, ()=>{
    console.log('listening on ', PORT)
})