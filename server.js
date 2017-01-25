/* eslint no-console: 0 */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]*/
/* eslint prefer-arrow-callback: 0 */

const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.dev.config');
const express = require('express');

const app = express();
const port = 4000;

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { colors: true },
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/build', express.static(path.join(__dirname, '/build')));

app.get('*', function send(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎 Listening at http://localhost:%s', port);
  }
});
