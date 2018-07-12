/**
 *  Created by daiwenjuan on 2018/6/20 下午2:28.
 */
require('babel-polyfill')
require('source-map-support').install()
require('babel-register')
const lessParser = require('postcss-less').parse
require('css-modules-require-hook')({
  extensions: ['.less'],
  processorOpts: { parser: lessParser },
  generateScopedName: '[local]__[hash:base64:5]'
})
require('css-modules-require-hook')({
  extensions: ['.css']
})
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp', 'woff', 'woff2', 'eot', 'ttf', 'otf']
})

const app = require('./app'),
  convert = require('koa-convert'),
  webpack = require('webpack'),
  fs = require('fs'),
  path = require('path'),
  devMiddleware = require('koa-webpack-dev-middleware'),
  hotMiddleware = require('koa-webpack-hot-middleware'),
  views = require('koa-views'),
  router = require('./routes')
clientRoute = require('./middlewares/clientRoute'),
  config = require('../build/webpack.dev.config'),
  port = process.env.port || 3000,
  compiler = webpack(config)
compiler.plugin('emit', (compilation, callback) => {
  const assets = compilation.assets
  let file, data

  Object.keys(assets).forEach(key => {
    if (key.match(/\.html$/)) {
      file = path.resolve(__dirname, key)
      data = assets[key].source()
      fs.writeFileSync(file, data)
    }
  })
  callback()
})
//这样就可以了，你可以在html文件中使用ejs语法<% %>了
app.use(views(path.resolve(__dirname, '../views/dev'), { map: { html: 'ejs' } }))
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
app.use(convert(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})))
app.use(convert(hotMiddleware(compiler)))
app.use(clientRoute)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(port)

