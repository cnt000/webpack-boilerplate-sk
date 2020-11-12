const path = require('path');

module.exports = {
  // Source files
  jsSrc: path.join(__dirname, '../static', 'js'),
  tsSrc: path.join(__dirname, '../static', 'ts'),

  // Production build files
  build: path.resolve(__dirname, '../static/dist'),
};
