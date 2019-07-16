const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

const staticFolder = '../public'

app.set('view engine', 'pug');

app.use(express.static(staticFolder));

app.use('/api', routes)

app.listen(port, () => console.log(`Listening on port ${port}!`))
