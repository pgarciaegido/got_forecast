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

  res.render('forecastResults.pug', { dead:formResults.dead, alive: formResults.alive, selfResults: true });
};

const downloadPicture = async (req, res) => {
  await downloadReport(req.query.html);
  res.setHeader('Content-disposition', 'attachment; filename=hola.png');
  res.setHeader('Content-type', 'image/png');
  res.download(__dirname + '/../hola.png');
};

const formatForm = (payload) => {

  return Object.keys(payload).reduce((acc, field) => {
    const reply = field.split('-')[0];
    const characterNameId = field.split('-')[1];

    console.log(payload[field]);

    if (payload[field] === 'alive') {
      acc.alive.push({ id: characterNameId, [reply]: payload[field], nameToDisplay: getCharacterFromNameId(characterNameId).name});
    } else if (payload[field] === 'dead') {
      acc.dead.push({ id: characterNameId, [reply]: payload[field], nameToDisplay: getCharacterFromNameId(characterNameId).name});
    }

    return acc;
    
  }, { dead: [], alive: [] });
};

const getCharacterFromNameId = nameId => allCharacters.find(char => char.idName === nameId);

module.exports = { questRH, submitRH, downloadPicture };
