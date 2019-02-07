var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

const characters = [
  {
    name: 'Jon Snow',
    id: 583,
    idName: 'jonSnow'
  },
  { 
    name:'Sansa Stark',
    id: 957,
    idName: 'sansaStark'
  },
  {
    name: 'Arya Stark',
    id: 148,
    idName: 'aryaStark'
  }
];

app.get('/', (req, res) => res.render('landing.pug'));
app.get('/quest', (req, res) => res.render('quest.pug', {characters}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
