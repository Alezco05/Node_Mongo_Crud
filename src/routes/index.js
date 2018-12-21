const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Index');
})

router.get('/about', (req, res) => {
    res.send('abaout');
})

module.exports = router;