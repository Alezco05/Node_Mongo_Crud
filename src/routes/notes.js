const express = require('express');
const router = express.Router();

router.get('/notes', (req, resp) => {
    resp.send('Notas del usuario');
})

module.exports = router;