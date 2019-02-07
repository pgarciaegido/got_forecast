const openPicture = (character) => {
  console.log(character);
  document.getElementById('dialog').classList.add('opened');
  document.getElementById('dialog-content-image').src = `/images/${character}.jpeg`;
};

const closePicture = () => {
  document.getElementById('dialog').classList.remove('opened');
  document.getElementById('dialog-content-image').src = '';
}
