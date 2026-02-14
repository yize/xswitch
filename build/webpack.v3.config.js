/**
 * Webpack Config for Manifest V3
 * 
 * This configuration generates a service worker instead of persistent background script.
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Entry point for background script
  entry: {
    background: './src/background.ts',
  },
  
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'background.min.js',
    libraryTarget: 'this',
  },
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  
  plugins: [
    // Define environment for V3
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'MANIFEST_VERSION': 3,
    }),
  ],
  
  // Mode
  mode: 'production',
  
  // Optimization
  optimization: {
    minimize: true,
  },
  
  // Service worker specific
  devtool: false,
  
  // External - don't bundle chrome API
  externals: {
    chrome: 'chrome',
  },
};
