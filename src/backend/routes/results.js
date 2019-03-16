const allCharacters = require('../../../db/characters.json');
const formValuesHelper = require('../../helpers/formValuesHelper');

const resultsRH = (req, res) => {
  const userName = req.query.name;

  const results = formValuesHelper.formatResults({ allCharacters, results: req.query });
  res.render('forecastResults.pug', {
    userName,
    dead: results[formValuesHelper.values.vitalStatus.dead],
    alive: results[formValuesHelper.values.vitalStatus.alive],
    selfResults: false 
  });
};

module.exports = {
  resultsRH
}
