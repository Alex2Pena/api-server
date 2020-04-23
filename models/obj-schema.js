'use strict';

const mongoose = require('mongoose');

const item = mongoose.Schema({
    category: {type: String, required: true},
    product: {type: String, required: true},
    type: {type: String, uppercase: true, enum: ['School', 'Work', 'Personal']}
});

module.export = mongoose.model('item', item);