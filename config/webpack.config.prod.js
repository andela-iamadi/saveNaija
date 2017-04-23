import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import loaders from './loaders';

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, '../dist');
const entryPath = path.resolve(__dirname, '../src', 'js', 'index.js');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: entryPath,
  target: 'web', // bundle app the way web browsers can understand
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: '../dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether'
    })
  ],
  module: {
    loaders
  }
};
