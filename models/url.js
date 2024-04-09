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
    users: {
        type: mongoose.Schema.Types.UUID,
        ref: 'users',
    }
});

const url = mongoose.model('url', urlSchema)

module.exports = {
    url
}