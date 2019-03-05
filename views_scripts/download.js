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
  location.hash = `#${hash}`;
}

const closeModal = () => location.hash = "";

const fillName = (username) => {
  const results = getLocalStorageItem();
  const linkInput = document.getElementById('sharelink');
  linkInput.value = `/results?${queryString.stringify(results)}&name=${username}`;
  document.getElementById('link-container').style.display = "flex";
}

const copyLink = () => {
  const linkInput = document.getElementById('sharelink');
  linkInput.select();
  document.execCommand("copy");
};

module.exports = { passWholePage, shareLink, openModal, closeModal, fillName, copyLink };
