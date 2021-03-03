require('dotenv').config();

const express = require('express');

const pg = require('pg');

const app = express();

const cors = require('cors');

const port = process.env.PORT || 5478;

const router = require('./app/router');

app.use(cors());

// le parser JSON qui récupère le payload quand il y en a un et le transforme en objet JS disponible sous request.body
app.use(express.json());

app.use('/v1', router);

// ici, on pourrait aussi écrire notre 404

app.listen(port, () => { console.log(`Listening on http://localhost:${port}`) });