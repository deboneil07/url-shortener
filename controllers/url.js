const shortid = require("shortid")
const {url} = require("../models/url");
const mongoose = require("mongoose")


generateShortUrl = async (req, res) => {
    const body = req.body
    if (!body.url){
        return res.status(400).json({message: "Link not found"})
    }
    const shortID = shortid();
    await url.create({
        shortid: shortID,
        redirectUrl: body.url,
        totalClicks: [],
    })
    return res.json({id: shortID});
}


module.exports = {
    generateShortUrl,
}