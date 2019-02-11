const allCharacters = require('../db/characters.json');

const questRH = (req, res) => {

  const charactersPerPage = 3;
  const page = req.query.p || 1;

  const startIndex = page * charactersPerPage - charactersPerPage;
  let characters = allCharacters.slice(startIndex, startIndex + charactersPerPage);  
  
  return res.render('quest.pug', {characters, page});
};

module.exports = { questRH };
