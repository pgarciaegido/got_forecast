const openPicture = (character) => {
  console.log(character);
  document.getElementById('dialog').classList.add('opened');
  document.getElementById('dialog-content-image-img').src = `/images/${character}.jpg`;
};

const closePicture = () => {

  document.getElementById('dialog').classList.remove('opened');
  document.getElementById('dialog-content-image-img').src = '';
};

module.exports = { openPicture, closePicture };
