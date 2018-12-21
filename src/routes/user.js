const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, resp) => {
    resp.send('Ingresando a la aplicacion');
});

router.get('/users/signup', (req, resp) => {
    resp.send('Formulario de autentficacion');
});

module.exports = router;