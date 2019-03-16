const Jimp = require('jimp');
const Fs = require('fs');

Fs.readdirSync('./assets/images')
  .forEach(picture => {
    Jimp.read(`./assets/images/${picture}`)
      .then(pic => {
        const picWidth = pic.bitmap.width;
        const picHeight = pic.bitmap.height;

        const param = picWidth > picHeight ? picHeight : picWidth;

        return pic
          .crop(0, 0, param, param)
          .write(`./imagesCropped/${picture}`);
      });
});

