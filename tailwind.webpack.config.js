'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const isWatch = process.argv.filter(a => a === '--watch').length

module.exports = {
  entry: './webpack/tailwind-index.js',
  output: {
    path: path.resolve(__dirname, 'static/dist' + (isWatch && '/tailwind')),
    filename: 'styles.css',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}