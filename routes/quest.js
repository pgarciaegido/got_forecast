const allCharacters = require('../db/characters.json');
const formValuesHelper = require('../helpers/formValuesHelper');

const questRH = (req, res) => {

  const charactersPerPage = 3;
  const page = req.query.p || 1;

  const startIndex = page * charactersPerPage - charactersPerPage;
  let characters = allCharacters.slice(startIndex, startIndex + charactersPerPage);  
  let lastPage = (page * charactersPerPage) >= allCharacters.length;
  
  return res.render('quest.pug', {characters, page, lastPage, formValuesHelper});
};

const submitRH = (req, res) => {
  const formResults = formatForm(req.body);
  if (formResults.numberOfCharacters !== allCharacters.length) {
    return res.redirect('/quest');
  }

  res.render('forecastResults.pug', { dead:formResults.dead, alive: formResults.alive, selfResults: true });
};

const formatForm = (payload) => {

  return Object.keys(payload).reduce((acc, field) => {

    const characterId = field.split(formValuesHelper.formats.separator)[1];
    
    if (payload[field] === formValuesHelper.values.vitalStatus.alive) {
      acc.numberOfCharacters++;
      acc.alive.push({ id: getCharacterFromId(characterId).idName, nameToDisplay: getCharacterFromId(characterId).name});
    } else if (payload[field] === formValuesHelper.values.vitalStatus.dead) {
      acc.numberOfCharacters++;
      acc.dead.push({ id: getCharacterFromId(characterId).idName, nameToDisplay: getCharacterFromId(characterId).name });
    }

    return acc;
    
  }, { dead: [], alive: [], numberOfCharacters: 0 });
};

const getCharacterFromId = id => allCharacters.find(char => char[formValuesHelper.formats.state.vitalStatus.field] === id);

module.exports = { questRH, submitRH };
