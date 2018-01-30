/*
﻿const express = require('express');

const app   = express(),
    port    = process.env.port || 1337;

app.get('/', function (req, res) {
    res.send('Hello Ionic App!');
});

const server = app.listen(port, function () {
    let host = server.address().address,
        port = server.address().port;

    console.log(`Application listening at => ${host}:${port}`);
});
*/

const http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Ionic! To beat shit out someone');

}).listen(process.env.PORT || 8080);