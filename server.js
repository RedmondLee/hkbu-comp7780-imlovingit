var http = require('http');
var fs = require('fs');
var path = require('path');

http
  .createServer(function (request, response) {
    if (request.url === '/') {
      fs.readFile('./comp7780_home.html', function (err, data) {
        if (err) {
          throw err;
        } else {
          response.setHeader('Content-Type', 'text/html');
          response.end(data);
        }
      });
    } else if (request.url === '/comp7780_home.html') {
      fs.readFile('./comp7780_home.html', function (err, data) {
        if (err) {
          throw err;
        } else {
          response.setHeader('Content-Type', 'text/html');
          response.end(data);
        }
      });
    } else if (request.url === '/comp7780_product.html') {
      fs.readFile('./comp7780_product.html', function (err, data) {
        if (err) {
          throw err;
        } else {
          response.setHeader('Content-Type', 'text/html');
          response.end(data);
        }
      });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('No Data\n');
    }
  })
  .listen(7700, '0.0.0.0', function () {
    console.log('OK,访问：localhost:7700');
  });