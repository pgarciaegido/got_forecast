const characters = require('../db/characters.json');

const resultsRH = (req, res) => {
  const userName = req.query.name;
  const results = characters.reduce((acc, char) => {
    acc[req.query[`status-${char.idName}`]].push({id: char.idName, nameToDisplay: char.name });
    return acc;

  }, {alive: [], dead: []});

  res.render('forecastResults.pug', { userName, dead: results.dead, alive: results.alive, selfResults: false });
};

module.exports = {
  resultsRH
}
