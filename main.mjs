// example of es module

// Importing the fs module using ESM syntax
// import * as fs from 'fs';
import  fs from 'fs';

import {add , subtract}  from './math.mjs'

// Importing specific methods from the fs module using ESM syntax
const { readFile, writeFile,appendFile } = fs;
const contentToAppend = '\nSome additional content!\n';

// readFile('sample.txt','utf-8',(err,res)=>console.log(res))
appendFile('sample.txt',contentToAppend, err => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
      }
      console.log('Content appended to file successfully.');
})

console.log(add(5,5));
console.log(subtract(5,5))



// console.log(readFile)


