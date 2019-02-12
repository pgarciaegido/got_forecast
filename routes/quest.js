const allCharacters = require('../db/characters.json');

const questRH = (req, res) => {

  const charactersPerPage = 3;
  const page = req.query.p || 1;

  const startIndex = page * charactersPerPage - charactersPerPage;
  let characters = allCharacters.slice(startIndex, startIndex + charactersPerPage);  
  let lastPage = (page * charactersPerPage) >= allCharacters.length;

  console.log(lastPage);
  
  return res.render('quest.pug', {characters, page, lastPage});
};

module.exports = { questRH };
