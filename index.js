'use strict';

const server = require('.lib/server.js');
server.start();

//global middleware

applicationCache.use(express.json());
