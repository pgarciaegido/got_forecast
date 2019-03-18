const allCharacters = require('../../../db/characters.json');
const formValuesHelper = require('../../helpers/formValuesHelper');

const resultsRH = (req, res) => {
  
  let results;
  try {
    results = formValuesHelper.formatResults({ allCharacters, results: req.query });
  }
  catch(err) {
    console.log('RESULTS NOT PROPERLY FORMATED. REDIRECTING TO /');
    return res.redirect('/');
  }

  const userName = req.query.name;

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
