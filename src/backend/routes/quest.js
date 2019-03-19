const allCharacters = require('../../../db/characters.json');
const formValuesHelper = require('../../helpers/formValuesHelper');

const questRH = (req, res) => {

  const charactersPerPage = 3;
  const page = req.query.p || 1;

  const startIndex = page * charactersPerPage - charactersPerPage;
  let characters = allCharacters.slice(startIndex, startIndex + charactersPerPage);  
  let lastPage = (page * charactersPerPage) >= allCharacters.length;
  
  return res.render('quest.pug', {characters, page, lastPage, formValuesHelper});
};

const submitRH = (req, res) => {

  if (Object.keys(req.body).length !== allCharacters.length) {
    return res.redirect('/quest');
  }

  const { alive, dead } = formValuesHelper.values.vitalStatus;

  const formResults = formValuesHelper.formatResults({ allCharacters, results: req.body });
  const currentScore = formValuesHelper.getCurrentScore({ allCharacters, results: req.body });

  res.render('forecastResults.pug', {
    dead:formResults[dead],
    alive: formResults[alive],
    selfResults: true,
    currentScore
  });
};

module.exports = { questRH, submitRH };
