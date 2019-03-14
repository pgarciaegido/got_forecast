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


module.exports = { formats, values };
