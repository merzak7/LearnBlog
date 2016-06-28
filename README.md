# Learning Blog
Lorem ipsum Velit esse dolor pariatur dolor adipisicing exercitation.

## Usage

__start node server and watch for file changes__  
*input:* `./build/server/go.js`  
```bash
gulp serve
# or
npm start
```
=======================================================
__compile *.ts to *.js__  
*input:* `./server`  
*output:* `./build/server`  
```bash
gulp build
# or
gulp tsc
```
=======================================================
__watch for *.ts file chages and compile to *.js__  
*input:* `./server`  
*output:* `./build/server`  
```bash
gulp watch
```
=======================================================
__build files for distribution__  
*input:* `./server`  
*output:* `./dist/server`  
```bash
gulp dist
```
=======================================================
__cleanup__  
```bash
gulp clean:build   # cleanup ./build
gulp clean:dist    # cleanup ./dist
gulp clean         # cleanup both
```
