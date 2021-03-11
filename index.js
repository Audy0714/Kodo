require('dotenv').config();

const express = require('express');

const pg = require('pg');

const app = express();

const session = require('express-session');

app.locals.appName = 'projet-la-transition-ecologique-back';

const cors = require('cors');

const bodyParser = require('body-parser');

const port = process.env.PORT || 5478;

const router = require('./app/router');

app.use(cors());


// mise en place et configuration de la session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'odok',
    cookie: {
        secure: false,
        maxAge: 60 * 60 * 1000 // une heure
    }
}));

// rendre disponible dans toutes les vues, l'éventuel utilisateur connecté
app.use((req, res, next) => {
    // si un utilisateur est connecté
    if (req.session.user) {
        // on le rend disponible dans les views
        res.locals.user = req.session.user;
    }

    next();
});

// le parser JSON qui récupère le payload quand il y en a un et le transforme en objet JS disponible sous request.body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/v1', router);

app.listen(port, () => { console.log(`Listening on http://localhost:${port}`) });