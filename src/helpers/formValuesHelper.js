// SOURCE OF TRUTH FOR HANDLING FORM RESULTS
const formats = {
  state: {
    whiteWalker: {
      prefix: 'ww',
      field: 'id'
    },
    vitalStatus: {
      prefix: 'vs',
      field: 'id'
    }
  },
  separator: '-'
};

const values = {
  vitalStatus: {
    alive: '1',
    dead: '0'
  }
}

// METHOD TO FORMAT UPPER VALUES WHEN PASSED EITHER BY PAYLOAD OR BY QUERY PARAMS
const formatResults = ({allCharacters, results}) => {
  
  return allCharacters.reduce((acc, char) => {

    acc[results[char[formats.state.vitalStatus.field]]]
      .push({id: char.idName, nameToDisplay: char.name, status: char.status === values.vitalStatus.alive ? 'alive' : 'dead' });
    return acc;

  }, {[values.vitalStatus.alive]: [], [values.vitalStatus.dead]: []});
};

const getCurrentScore = ({allCharacters, results}) => {
  const correctResults = allCharacters.reduce((acc, char) => {
    const result = results[`${char[formats.state.vitalStatus.field]}`];
    if (char.status === result) acc++;
    return acc;
  }, 0);

  return {
    cssWidth: Math.round((correctResults * 100) / allCharacters.length),
    score: correctResults
  }
};

module.exports = { formats, values, formatResults, getCurrentScore };
