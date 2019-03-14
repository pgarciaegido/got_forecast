const characters = require('../db/characters.json');
const formValuesHelper = require('../helpers/formValuesHelper');

const resultsRH = (req, res) => {
  const userName = req.query.name;
  const results = characters.reduce((acc, char) => {
    acc[req.query[`${formValuesHelper.formats.state.vitalStatus.prefix}${formValuesHelper.formats.separator}${char[formValuesHelper.formats.state.vitalStatus.field]}`]]
      .push({id: char.idName, nameToDisplay: char.name });
    return acc;

  }, {[formValuesHelper.values.vitalStatus.alive]: [], [formValuesHelper.values.vitalStatus.dead]: []});

  console.log(results);

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
