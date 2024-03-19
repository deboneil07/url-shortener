const express = require('express')
const app = express()
const path = require('path')
const { url } = require("./models/url")
const urlRoute = require("./routes/url")
const { connectToDb } = require("./connection")

const PORT = 200
connectToDb("mongodb://127.0.0.1:27017/shorturl")
.then(() => {
    console.log("Connection successful")
})

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use("/url", urlRoute);

app.get("/url/:link", async (req, res) => {
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

app.get("/", async (req, res) => {
    const allUrl = await url.find({});
    return res.render('home', {
        urls: allUrl,
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})