# Learning Blog
A simple project to learn [TypeScript](https://www.typescriptlang.org/).

### init
```bash
npm i -g express gulp tsd typescript nodemon bower
npm install
bower install
tsd install
gulp build
```

### Usage

__start node server and watch for file changes__  
*input:* `./build/server/go.js`  
```bash
gulp serve
# or
npm start
```
- - -
__compile *.ts to *.js__  
*input:* `./server`  
*output:* `./build/server`  
```bash
gulp build
# or
gulp tsc
```
- - -
__watch for *.ts file chages and compile to *.js__  
*input:* `./server` or `./public`  
*output:* `./build/server`  
```bash
gulp watch:server #watch for server .ts changes
gulp watch:public #watch for ./public
```
- - -
__build files for distribution__  
*input:* `./server`  
*output:* `./dist/server`  
```bash
gulp dist
```
- - -
__cleanup__  
```bash
gulp clean:build   # cleanup ./build
gulp clean:dist    # cleanup ./dist
gulp clean         # cleanup both
```
