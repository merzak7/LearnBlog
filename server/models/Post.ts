/// <reference path="../../typings/tsd.d.ts"/>

import {normalize, join} from 'path'
import {readFile, writeFile} from 'fs'


// post contract
export interface Post {
  id:number
  author:string
  date:string
  text:string
  video:string
  audio:string
}


// database setup
let f:string = normalize(join(process.cwd(), './raw/posts.json'))
let posts:Post[] =  []
readFile(f, 'utf8', (err, data)=>{
  if(err) {
    console.log(err)
    throw "Cannot read posts from db!";
  } else posts = JSON.parse(data)
})



export function findAll():Post[] {
  return posts
}


export function findOneById(id:number, callback:(err:Error, data:Post) => void ) {
  for (let post of posts) {
    if (post.id === id)
      callback(null, post)
    else
      callback(new Error('Cannot find post with id:' + id), null)
  }
}

export function save(post:Post, callback:(err:Error, postId:number) => void) {
  post.id = posts.length
  posts.push(post)
  writeFile(f, JSON.stringify(posts), (err) => {
    if (err)
      callback(err, null)
    else
      callback(null, post.id)
  })
}
