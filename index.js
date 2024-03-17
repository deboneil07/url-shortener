const express = require('express');
const urlRoute = require('./routes/url')
const {connectDB} = require('./connect')
const {url} = require("./models/url")


const app = express();
const PORT = 200;

connectDB('mongodb://127.0.0.1:27017/miniurl')
.then(() => {
    console.log('connection established');
});

app.use(express.json())

app.use("/url", urlRoute);

app.get("/:shortId", async(req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await url.findOne({ shortid:shortId });
        if (!entry.redirectUrl) {
            return res.status(500).send("Redirect URL is not defined for this entry");
        }
        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error("Error while fetching and redirecting:", error);
        res.status(500).send("Internal server error");
    }
});


app.listen(PORT, () => {
    console.log(`Started at PORT:${PORT}`)
});