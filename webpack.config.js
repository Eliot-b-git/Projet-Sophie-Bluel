const path = require('path');

module.exports = {
  mode: 'development', // ou 'production'
  entry: './FrontEnd/assets/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
