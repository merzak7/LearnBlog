/// <reference path="../../typings/tsd.d.ts"/>

import {Router} from 'express'
import {normalize, join} from 'path'
import {readFile} from 'fs'


let router = Router()


interface User {
  id:number
  username:string
  password:string
  bio:string
  url:string
  role:ROLE
}

type ROLE = 'admin' | 'user'


// get static data
let f:string = normalize(join(process.cwd(), './raw/users.json'))
let users:User[] = []
readFile(f, 'utf8', (err, data) => {
  if(err) {
    console.log(err)
    throw "Cannot read users from db!";
  } else users = JSON.parse(data)
})

router.all('/', (req, res) => {
  res.json({msg: "This is still not implemented"})
})

export = router
