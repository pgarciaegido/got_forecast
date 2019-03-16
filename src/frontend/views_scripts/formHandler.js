const formSerialize = require('form-serialize');

const formValuesHelper = require('../../helpers/formValuesHelper');

const localStorageName = 'gotForecast';

const storeAnswers = (form, pageTo) => {
  event.preventDefault();
  var obj = formSerialize(form, { hash: true });

  // pageTo 2 means that we are currently on page 1.
  pageTo === 2 ? setLocalStorageItem(obj) : setLocalStorageItem(Object.assign(getLocalStorageItem(), obj));

  redirectToNextPage(pageTo)
}

const submitForm = (form) => {
  event.preventDefault();
  var obj = formSerialize(form, { hash: true });
  const formAnswers = Object.assign(getLocalStorageItem() , obj);
  setLocalStorageItem(formAnswers);
  var newForm = createForm();

  Object.keys(formAnswers).forEach((key) => newForm.appendChild(createInput(formAnswers, key)));

  document.body.appendChild(newForm);
  
  newForm.submit();
};

const getLocalStorageItem = () => JSON.parse(localStorage.getItem(localStorageName));

const setLocalStorageItem = (obj) => localStorage.setItem(localStorageName, JSON.stringify(obj));

const redirectToNextPage = (pageTo) => window.location.href = `/quest?p=${pageTo}`;

const createForm = () => {
  const form = document.createElement("form");

  form.method = "POST";
  form.action = "/submit"
  return form;
};

const createInput = (formAnswers, key) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = key;
  input.value = formAnswers[key];
  input.checked = "checked";
  input.style.display = 'none';
  return input;
};

const enableButton = (form, numberOfCharactersOnPage) => {
  const button = document.getElementById('button');
  if (button.hasAttribute('disabled')) {
    const formattedForm = formSerialize(form, { hash: true });
    const regex = new RegExp(formValuesHelper.formats.state.vitalStatus.prefix);

    const numberOfStatusChecked = Object.keys(formattedForm).reduce((acc, key) => {
      if (regex.test(key)) acc++;
      return acc;
    }, 0);

    if (numberOfStatusChecked === numberOfCharactersOnPage) {
      button.removeAttribute('disabled');
    }
  }
}

module.exports = { storeAnswers, submitForm, enableButton, getLocalStorageItem };
