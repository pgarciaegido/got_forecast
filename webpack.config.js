const path = require('path');

module.exports = {
  entry: './views_scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'public/script'),
    filename: 'index.js',
    library: 'gotForecast'
  },
  mode: "production"
};
