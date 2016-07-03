/// <reference path="../../typings/tsd.d.ts"/>

import {normalize, join} from 'path'
import {readFile, writeFile} from 'fs'


// user contract
interface User {
  id:number
  username:string
  password:string
  bio:string
  url:string
  role:ROLE
}

type ROLE = 'admin' | 'user'


// database setup
let f:string = normalize(join(process.cwd(), './raw/users.json'))
let users:User[] =  []
readFile(f, 'utf8', (err, data)=>{
  if(err) {
    console.log(err)
    throw "Cannot read users from db!";
  } else users = JSON.parse(data)
})



