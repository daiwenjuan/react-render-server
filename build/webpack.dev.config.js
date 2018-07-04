/**
 *  Created by daiwenjuan on 2018/6/20 下午2:13.
 */
const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    bundle: [
      './client',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'superagent'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.(jpg|png|gif|webp)$/,
        use: 'url?limit=8000'
      }, {
        test: /\.json$/,
        use: 'json'
      }, {
        test: /\.html$/,
        use: 'html-loader?minimize=false'
      }
    ]
  },
  resolve: { extensions: ['.js', '.json'] },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      filename: '[name].js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    new HtmlWebpackPlugin({
      filename: '../views/dev/index.html',
      template: './views/tpl/index.tpl.html'
    }),
    new ProgressBarPlugin({ summary: false })
  ]
}
