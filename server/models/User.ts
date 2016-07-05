/// <reference path="../../typings/tsd.d.ts"/>

import {normalize, join} from 'path'
import {readFile, writeFile} from 'fs'

import {Auth} from '../utils/errors'


// user contract
export interface User {
  id?:number
  username:string
  password:string
  name?:string
  surname?:string
  bio?:string
  url?:string
  role?:ROLE
}

export type ROLE = 'admin' | 'user'


// database setup
let f:string = normalize(join(process.cwd(), './raw/users.json'))
let users:User[] =  []
readFile(f, 'utf8', (err, data)=>{
  if(err) {
    console.log(err)
    throw Auth.Messages.CantReadUsersDb;
  } else users = JSON.parse(data)
})



export function findOneByUsername(username:string, callback:(err:Error, data:User)=>void) {
  let u:User
  for (let user of users) {
    if (user.username === username)
      u = user
  }
  u? callback(null, u) : callback(new Error(Auth.Messages.UserDoesNotExists +'id:'+username), null)
}

export function save(user:User, callback:(err:Error) => void) {
  user.id = users.length
  let x = users.filter((u, index, users) => {
    return u.username === user.username
  })
  if (x.length > 0)
    callback(new Error(Auth.Messages.UserExistsAlready))
  else {
    users.push(user)
    writeFile(f, JSON.stringify(users), (err) => {
      if(err) {
        console.log(err.message)
      }
    })
  }
}
