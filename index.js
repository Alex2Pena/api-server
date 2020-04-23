'use strict';

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const server = require('./lib/server');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect(MONGODB_URI, mongoOptions);

server.start();