const queryString = require('query-string');
const { getLocalStorageItem } = require('./formHandler');

const passWholePage = () => {
  console.log(document.documentElement.innerHTML);
  window.open(`/download-image?html=${document.documentElement.innerHTML}`);
}

const shareLink = () => {
  const results = getLocalStorageItem();

  window.open(`/results?${queryString.stringify(results)}`);
}

const openModal = (hash) => {
  const results = getLocalStorageItem();
  const linkInput = document.getElementById('sharelink');
  linkInput.value = `/results?${queryString.stringify(results)}`;
  linkInput.disabled = true;
  location.hash = `#${hash}`;
}

const closeModal = () => location.hash = "";

module.exports = { passWholePage, shareLink, openModal, closeModal };
