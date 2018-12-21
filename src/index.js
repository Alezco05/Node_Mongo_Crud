const express = require('express');
const path = require('path');
const exphs = require('express-handlebars');
const override = require('method-override');
const session = require('express-session');
//Inicializaciones
const app = express();
require('./database');

//Settings
//Puerto 300
app.set('port', process.env.PORT || 3000);
//Setiar las vistas
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphs({
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'layouts'),
    layoutsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(override('_method'));
app.use(session({
    secret: 'pequeño',
    resave: true,
    saveUninitialized: true
}))


//Variables globlales

//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/user'));


//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});