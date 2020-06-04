'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, uppercase: true}
});

module.export = mongoose.model('product', product);