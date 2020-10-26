# Learning Blog
> A simple project to learn [TypeScript](https://www.typescriptlang.org/).
> (deprecated)

### Initialize
```bash
npm i -g express gulp tsd typescript nodemon bower
npm install
bower install
tsd install
gulp build
```

### Usage

__Start `node` server and watch for file changes__  
*input:* `./build/server/go.js`  
```bash
gulp serve
# or
npm start
```
- - -
__Compile `*.ts` to `*.js`__  
*input:* `./server`  
*output:* `./build/server`  
```bash
gulp build
# or
gulp tsc
```
- - -
__Watch for `*.ts` file chages and compile to `*.js`__  
*input:* `./server` or `./public`  
*output:* `./build/server`  
```bash
gulp watch:server #watch for server .ts changes
gulp watch:public #watch for ./public
```
- - -
__Build files for distribution__  
*input:* `./server`  
*output:* `./dist/server`  
```bash
gulp dist
```
- - -
__Cleanup__  
```bash
gulp clean:build   # cleanup ./build
gulp clean:dist    # cleanup ./dist
gulp clean         # cleanup both
```
