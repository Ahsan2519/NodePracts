// const http = require('http');
// const server = http.createServer();
// const events = require('events');
// const eventEmitter = new events.EventEmitter

// server.on('request',(req, res)=> {
//     res.end('first server created')
// }).listen(5000, () => {
//     console.log('Server is listening on port 5000');
// });

// const connectionStablish = ()=> {
//     console.log('Connection established.');
//     eventEmitter.emit('dataRecived')
// }

// eventEmitter.on('connection',connectionStablish);

// eventEmitter.on('dataRecived',()=>console.log('Data Transfer Successful.'));

// eventEmitter.emit('connection');
// console.log('finished')


// blocking and none blocking

const fs = require('fs');
// example of blocking or synchronus 
console.log('before blocking')
const txt = fs.readFileSync('sample.txt',{encoding:'utf-8'});
console.log(txt);
console.log('after blocking');


// example of non-blocking or synchronus 
console.log('before blocking')
fs.readFile('sample.txt', {encoding:'utf-8'} ,(error, res) => console.log(res));
console.log('after blocking')