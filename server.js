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
