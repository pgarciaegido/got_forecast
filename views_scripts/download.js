const passWholePage = () => {
  console.log(document.documentElement.innerHTML);
  window.open(`/download-image?html=${document.documentElement.innerHTML}`);
}

module.exports = { passWholePage };
