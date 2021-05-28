const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ico|pvr|mp3)$/,
        type: 'asset/resource'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
