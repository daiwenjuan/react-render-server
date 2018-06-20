/**
 *  Created by daiwenjuan on 2018/6/20 下午2:38.
 */
import fs from 'fs'
import path from 'path'
import Router from 'koa-router'

const router = new Router({ prefix: '/api' })
let subRouter

fs.readdirSync(__dirname)
  .filter(filename =>
    filename !== path.basename(__filename)
  )
  .forEach(filename => {
    subRouter = require(`./${filename}`)
    router.use(subRouter.routes(), subRouter.allowedMethods())
  })

export default router