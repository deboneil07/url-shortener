const mongoose = require('mongoose');

connectDB = async (url) => {
    return mongoose.connect(url)
}

module.exports = {
    connectDB
}