'use strict';

// 3rd party npm packages
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// application constant
const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());



module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 2222
        app.listen(PORT, () => {
            console.log(`listening on port # ${PORT}`);
        });
    }
};