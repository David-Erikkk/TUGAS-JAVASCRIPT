const mongoose = require('mongoose');

const ItemSchema = mongoose.schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}) 

module.exports = mongoose.model('item, itemSchema');