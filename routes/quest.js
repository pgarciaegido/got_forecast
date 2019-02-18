const pug = require('pug');

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

const submitRH = (req, res) => res.render('forecastResults.pug', { results: formatForm(req.body) });

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

    acc.hasOwnProperty(characterNameId) 
      ? acc[characterNameId][reply] = payload[field]
      : acc[characterNameId] = { [reply]: payload[field], nameToDisplay: getCharacterFromNameId(characterNameId).name};
    return acc;
  }, {});
};

const getCharacterFromNameId = nameId => allCharacters.find(char => char.idName === nameId);

module.exports = { questRH, submitRH, downloadPicture };
