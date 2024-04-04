const path = require('path');

module.exports = {
  mode: 'development', // ou 'production'
  entry: './frontend/assets/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
