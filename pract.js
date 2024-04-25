// http module
// http (hyperText Transfer Protocol)
const http = require("http");
const fs = require("fs");

// without query param

// const server = http.createServer((req, res) => {
//   const currentDate = new Date();
//   const log = `${currentDate.toLocaleString()}: New Request Received\n `;
//   if (req.url === "/favicon.ico") return res.end();
//   fs.appendFile("log.txt", log, (err, result) => {
//     if (err) {
//       console.error(err);
//     } else {
//       switch (req.url) {
//         case "/":
//           res.end("Home Page");
//           break;
//         case "/about":
//           res.end("About Page");
//           break;
//         default:
//           res.end("404 page not found");
//       }
//     }
//   });
// });

// server.listen(8000, () => console.log("server is listening at 3000 port"));

// with queryParam and parsing url using url package

const url = require("url");

const server = http.createServer((req, res) => {
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  const currentDate = new Date();
  const log = `${currentDate.toLocaleString()}: New Request Received\n `;
  if (req.url === "/favicon.ico") return res.end();
  fs.appendFile("log.txt", log, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      switch (myUrl.pathname) {
        case "/":
          res.end("Home Page");
          break;
        case "/about":
          res.end(`Hey, ${myUrl.query.username}`);
          break;
        default:
          res.end("404 page not found");
      }
    }
  });
});

server.listen(8000, () => console.log("server is listening at 3000 port"));
