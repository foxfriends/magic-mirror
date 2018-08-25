const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = env => ({
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve('.', 'public_html'),
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|svg|gif|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' },
      { test: /\.ttf$/, loader: 'file-loader?name=fonts/[hash].[ext]' },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules=true&minimize=true!postcss-loader',
      },
    ],
  },
  plugins: env === 'production' ? [new UglifyJSPlugin()] : []
});
