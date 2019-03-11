const allCharacters = require('../db/characters.json');
const downloadReport = require('../downloadReport');

const questRH = (req, res) => {

  const charactersPerPage = 3;
  const page = req.query.p || 1;

  const startIndex = page * charactersPerPage - charactersPerPage;
  let characters = allCharacters.slice(startIndex, startIndex + charactersPerPage);  
  let lastPage = (page * charactersPerPage) >= allCharacters.length;
  
  return res.render('quest.pug', {characters, page, lastPage});
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

    const reply = field.split('-')[0];
    const characterNameId = field.split('-')[1];
    
    if (payload[field] === 'alive') {
      acc.numberOfCharacters++;
      acc.alive.push({ id: characterNameId, [reply]: payload[field], nameToDisplay: getCharacterFromNameId(characterNameId).name});
    } else if (payload[field] === 'dead') {
      acc.numberOfCharacters++;
      acc.dead.push({ id: characterNameId, [reply]: payload[field], nameToDisplay: getCharacterFromNameId(characterNameId).name});
    }

    return acc;
    
  }, { dead: [], alive: [], numberOfCharacters: 0 });
};

const getCharacterFromNameId = nameId => allCharacters.find(char => char.idName === nameId);

module.exports = { questRH, submitRH };
