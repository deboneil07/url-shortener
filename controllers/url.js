const {url} = require("../models/url")
const shortid = require("shortid")



const generateUrl = async (req, res) => {
    try{
        const body = req.body
        if (!body.url){
            return res.status(400).json({message: "Invalid or missing parameters"})
        }
        const newUrl = shortid()
        await url.create({
            shortid: newUrl,
            realUrl: body.url,
        });
        return res.render("home", {
            id: newUrl,
        })
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    generateUrl
}