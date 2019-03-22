const queryString = require('query-string');
const { getLocalStorageItem } = require('./formHandler');

const openModal = (hash) => {
  location.hash = `#${hash}`;
}

const closeModal = () => location.hash = "";

const fillName = (username) => {
  const results = getLocalStorageItem();
  const linkInput = document.getElementById('sharelink');
  linkInput.value = `${document.location.origin}/results?${queryString.stringify(results)}&name=${username.split(' ').join('-')}`;
  document.getElementById('link-container').style.display = "flex";
}

const copyLink = (self) => {
  self.classList.remove('animate');
  const linkInput = document.getElementById('sharelink');
  linkInput.select();
  document.execCommand("copy");
};

const goToMyResults = () => {
  const results = getLocalStorageItem();
  window.location = `${document.location.origin}/results?${queryString.stringify(results)}`;
};

module.exports = { openModal, closeModal, fillName, copyLink, goToMyResults };
