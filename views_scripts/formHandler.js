const formSerialize = require('form-serialize');

const storeAnswers = (form) => {
  var obj = formSerialize(form, { hash: true });
  console.log(obj);
}

module.exports = { storeAnswers };
