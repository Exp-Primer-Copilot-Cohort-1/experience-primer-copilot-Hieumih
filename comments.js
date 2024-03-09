// create web server 
// create a web server that listens on port 3000
// and serves the comments.html file
// and comments.json file

// 1. Load the http module
const http = require('http');
const fs = require('fs');
const path = require('path');

// 2. Create a server with a request listener 
const server = http.createServer((req, res) => {
  // 3. Serve the comments.html file if the request url is /comments.html
  if (req.url === '/comments.html') {
    fs.readFile(path.join(__dirname, 'comments.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading comments.html');
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(data);
      }
    });
  }
  // 4. Serve the comments.json file if the request url is /comments.json
  else if (req.url === '/comments.json') {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading comments.json');
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(data);
      }
    });
  }
  // 5. Serve a 404 error if the request url is not /comments.html or /comments.json
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

// 6. Make the server listen on port 3000
server.listen(3000);

// 7. Log a message to the console when the server is running
console.log('Server is running on http://localhost:3000');

// 8. Test the server by visiting http://localhost:3000/comments.html in your browser
// 9. Test the server by visiting http://localhost:3000/comments.json in your browser

// 10. Make the server respond with the comments.json file when the request url is /comments.json
// 11. Make the server respond with the comments.html file when the request url is /comments.html
// 12. Make the server respond with a 404 error when the request url is not /comments.html or /