const express = require('express')
const router = express.Router()
const {generateShortUrl, redirectToPage} = require('../controllers/url')

router.post('/', generateShortUrl);


module.exports = router;