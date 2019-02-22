const express = require('express');
const bodyParser = require('body-parser');
const { questRH, submitRH, downloadPicture } = require('./routes/quest'); 

const app = express();

app.set('view engine', 'pug');
app.use(express.static('/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => res.render('landing.pug'));

app.get('/quest', questRH);
app.post('/submit', submitRH);
app.get('/download-image', downloadPicture);

console.log(__dirname);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
