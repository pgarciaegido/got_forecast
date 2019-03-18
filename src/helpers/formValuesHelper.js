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

    acc[results[`${formats.state.vitalStatus.prefix}${formats.separator}${char[formats.state.vitalStatus.field]}`]]
      .push({id: char.idName, nameToDisplay: char.name });
    return acc;

  }, {[values.vitalStatus.alive]: [], [values.vitalStatus.dead]: []});
};

module.exports = { formats, values, formatResults };
