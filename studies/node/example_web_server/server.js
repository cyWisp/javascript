"use strict";

const {createServer} = require('node:http')
const hostname = '127.0.0.1'
const port = 9999;

const server = createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hi there...');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}.`);
});
