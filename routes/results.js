const characters = require('../db/characters.json');

const resultsRH = (req, res) => {
  const results = characters.reduce((acc, char) => {
    console.log(char.idName);
    console.log(req.query[`status-${char.idName}`]);

    acc[req.query[`status-${char.idName}`]].push({id: char.idName, nameToDisplay: char.name });
    return acc;

  }, {alive: [], dead: []});
  console.log(results);

  res.render('forecastResults.pug', { dead: results.dead, alive: results.alive });
};

module.exports = {
  resultsRH
}
