const fs = require("fs");

// by default thereads are 4 but we can set it machine by machine

const os = require('os');
console.log(os.cpus());
console.log(os.cpus().length);

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
console.log("after file read");
