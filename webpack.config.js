const path = require('path');

module.exports = {
  entry: './src/main/js/index.js',
  output: {
    path: path.resolve(__dirname, 'target'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};