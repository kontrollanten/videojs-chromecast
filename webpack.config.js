const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/standalone.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs', 'demo'),
    port: 9000,
    https: false,
    host: '0.0.0.0',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'docs/demo/index.html',
    })
  ],
};
