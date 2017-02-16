/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: [
    './src/index.js',
  ],

  output: {
    path: path.join(__dirname, '/dist'),
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
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIndentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('static/bundle.css'),
    new HtmlWebpackPlugin({
      template: 'public/index.template.ejs',
      inject: 'body',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
      compress: {
        warnings: true,
        screw_ie8: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};
