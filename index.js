const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { questRH, submitRH } = require('./src/backend/routes/quest'); 
const { resultsRH } = require('./src/backend/routes/results');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './src/frontend/views'));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => res.render('landing.pug'));

app.get('/quest', questRH);
app.post('/submit', submitRH);
app.get('/results', resultsRH);

app.use((req, res) => res.status(404).redirect('/'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
