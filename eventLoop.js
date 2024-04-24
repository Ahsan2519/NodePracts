// phases of event loop
// process.nextTick(cb)
// 1. timer 
// 2. pending callbacks (related to networks)
// 3. idle, prepare 
// 4. poll ( incoming connection like file read data)
// 5. check (special timer setImmidiate timer)
// 6. close callback 


// normal call stack
// const first = ()=> console.log('first');
// const second = ()=> console.log('second');
// const third = ()=> console.log('third');

// const first = ()=> {
//     console.log('first');
//     second()
// };
// const second = ()=> {
//     console.log('second');
//     third();
//     console.trace()
// };
// const third = ()=> console.log('third');

// first();

// IIFE
// (()=>{
//     const first = ()=> {
//         console.log('first');
//         second()
//     };
//     const second = ()=> {
//         console.log('second');
//         third();
//     };
//     const third = ()=> {
//         console.log('third');
//         console.trace()
//     };
//     first()
// })()

// adding asyn
// (()=>{
//     const first = ()=> {
//         process.nextTick(()=> console.log('tick'))
//         setTimeout(() => {
//             console.log('timer')
//         }, 0);
//         setImmediate(()=>console.log('immidiate'))
//         console.log('first');
//         second()
//     };
//     const second = ()=> {
//         console.log('second');
//         third();
//     };
//     const third = ()=> {
//         console.log('third');
//         console.trace()
//     };
//     first()
// })()
// here following event loop phases but in some cases setImmidiate are called 1st  like below
const fs = require("fs");

(()=>{
    const first = ()=> {
        // micro task que always run 1st in event loop
        process.nextTick(()=> console.log('tick'))
        Promise.resolve().then(()=>console.log('promise resolved '))
        setTimeout(() => {
            console.log('timer')
        }, 100);
        setImmediate(()=>console.log('immidiate'))
        console.log('first');
        second()
    };
    const second = ()=> {
        console.log('second');
        third();
    };
    const third = ()=> {
        console.log('third');
        setTimeout(() => {
            console.log('timer2')
        }, 0);
        console.trace()
    };
    fs.readFile('sample.txt',first)
})()





