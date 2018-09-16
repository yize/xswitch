const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function newWebpackPlugin(name) {
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `src/${name}.html`,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
    },
    inject: false,
  })
}


module.exports = {
  entry: {
    'options.js': path.join(__dirname, '../src/options.ts'),
    'editor.js': path.join(__dirname, '../src/editor.ts'),
    'background.js': path.join(__dirname, '../src/background.ts'),
    'forward.js': path.join(__dirname, '../src/forward.ts')
  },
  output: {
    path: path.join(__dirname, '../dist/output'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    newWebpackPlugin('XSwitch'),
    newWebpackPlugin('options'),
  ]
};

