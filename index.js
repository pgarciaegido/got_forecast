const express = require('express');
const bodyParser = require('body-parser');
const { questRH } = require('./routes/quest'); 

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => res.render('landing.pug'));
app.get('/quest', questRH);
app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
