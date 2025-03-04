//create as server object - this is importing the required modules
// const http = require('http'); - creates a server
// const url = require('url'); - lets the URL do incoming request

// const server = http.createServer((req, res) => { // this creates the server
//   const parsedUrl = url.parse(req.url, true); - contains the full URL and htne the URL parse breask the URL into useful parts
//   const pathname = parsedUrl.pathname;

//   res.writeHead(200, { 'Content-Type': 'text/plain' }); // this sets the HTTP status code to 200 OK
//   res.write(`You requested: ${pathname}`); // text plain meaning the response will be in plain text
//   res.end();
// });

// const PORT = 5001;

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// step to push git add .
//git commit -m "Initial commit" - change the message everytime
//git push -origin main


// new code

// const http = require('http');
// const url = require('url');
// const fs = require('fs'); // this is new, this added module read files from the file system

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;
// maps URLS to HTML files inside ht epublic direcetorry
//   let filePath = '.' + pathname;
//   if (filePath === './') {
//     filePath = './public/index.html';
//   } else {
//     filePath = './public' + pathname + '.html';
//   }
// treis to read the the file, ifit exist it server it, if not theres an error

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/html' });
//       res.write('<h1>404 Not Found</h1>');
//       res.end();
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data);
//       res.end();
//     }
//   });
// });

// const PORT = 5002;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// newer code

// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const path = require('path'); - helps construct file paths in a cross platform way, so it work on both windoes and linux

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;

//   let filePath = path.join(__dirname, 'public', pathname === '/' ? 'index.html' : pathname + '.html');

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/html' });
//       res.write('<h1>404 Not Found</h1>');
//       res.end();
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data);
//       res.end();
//     }
//   });
// });

// const PORT = 5004;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// neweeeererrr code

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  let filePath = path.join(__dirname, 'public', pathname === '/' ? 'index.html' : pathname + '.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(data, 'utf8');
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data, 'utf8');
    }
  });
});

const PORT = 5008;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

