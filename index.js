const express = require('express')
const app = express()
const { url } = require("./models/url")
const urlRoute = require("./routes/url")
const { connectToDb } = require("./connection")

const PORT = 200
connectToDb("mongodb://127.0.0.1:27017/shorturl")

app.use(express.json())

app.use("/url", urlRoute)

app.get("/:link", async (req, res) => {
    try {
        const link = req.params.link
        const entry = await url.findOne({ shortid: link })
        if (!entry.realUrl) {
            return res.status(404).json({ message: "Link not found" })
        }
        res.redirect(entry.realUrl)
    }
    catch(err){
        res.status(500).json({ message: err})
    }
});

app.listen(200, () => {
    console.log(`listening on port ${PORT}`)
})