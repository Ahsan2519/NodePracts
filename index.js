const fs = require("fs");
// custom module example
/* 1. local modules
2. built in module which provides node 
3. third party modules 
*/
// example of local modules
// const math = require('./math') or
const {add , subtract} = require('./math')

// by default thereads are 4 but we can set it machine by machine

const os = require('os');
// console.log(os.cpus());
// console.log(os.cpus().length);

// blocking or synchronus operations
// console.log('before file read')
// const result = fs.readFileSync('test.js', 'utf-8');
// console.log(result)
// console.log('after file read')

// non blocking and asynchronus operations
console.log("before file read");
fs.readFile("test.js", "utf-8", (err, result) => {
  console.log(result);
});
setTimeout(()=>{console.log('inside settimeout')},0)
console.log("after file read");

// console.log(math.add(5,8))
console.log(add(5,9));
console.log(subtract(6,8))
