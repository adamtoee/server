//create as server obhect
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`You requested: ${pathname}`);
  res.end();
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

