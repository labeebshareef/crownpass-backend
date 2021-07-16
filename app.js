'use strict';

const express = require('express');
const http = require('http');

// create express app
const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

require('./loaders')(app);

server.listen(port, error => {
  if (error)
    console.error(`Server error - ${error}`);
  else
    console.log(`Server listening at port ${port}`);
});
