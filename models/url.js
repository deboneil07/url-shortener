const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortid: {
        type: String,
        unique: true,
        required: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    totalClicks : [{
        timestamp: {
            type: Number,
        }
    }]
})

const url = mongoose.model("url", urlSchema)

module.exports = {
    url
}