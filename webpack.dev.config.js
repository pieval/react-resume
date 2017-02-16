/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: [
    `webpack-hot-middleware/client?path=http://localhost:4000/__webpack_hmr`, // eslint-disable-line
    'react-hot-loader/patch',
    './src/index.js',
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'static/bundle.js',
    publicPath: '/',
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.template.ejs',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') },
    }),
  ],
};
