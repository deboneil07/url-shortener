const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortid: {
        type: String,
        required: true,
        unique: true,
    },
    realUrl: {
        type: String,
        required: true,
    },
});

const url = mongoose.model('url', urlSchema)

module.exports = {
    url
}