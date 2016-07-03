/// <reference path="../typings/tsd.d.ts"/>

import * as express from 'express'

import * as middleware from './middleware'
import * as routes from './routes/init'


// setup
const PORT = process.env.PORT || 8000
let app = express()


// todo ~ rm this!
// only used for browserSync
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})


// routes
app.use('/', routes)

// server
app.listen(PORT, () => {
  console.log('listening on ', PORT)
})
