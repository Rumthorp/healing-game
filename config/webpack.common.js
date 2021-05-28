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
  resolve: {
    extensions: [ '.jsx', '.js', '.scss', '.png', '.jpeg', '.jpg', '.pvr', '.mp3' ]
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ico|pvr|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[ext]',
                publicPath: '../'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
