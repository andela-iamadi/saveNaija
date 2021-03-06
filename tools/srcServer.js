import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../config/webpack.config.dev';
import favicon from 'serve-favicon';
import open from 'open';

/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(favicon(path.join(__dirname, '..', 'src', 'img', 'favicon.png')));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log(`Server running on port: ${port}`)
  }
});
