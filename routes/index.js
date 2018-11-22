const fs = require('fs')
const path = require('path')
const basename = path.basename(module.filename)
const Router = require('koa-router')
const router = new Router({
    prefix: '/api/v1' // 设置公共前缀
})

// 遍历加载所有路由配置
fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) &&
    (file !== basename) && 
    (file.slice(-3) === '.js')
}).forEach(file => {
  let route = require(path.join(__dirname, file))
  router.use(route.routes(), route.allowedMethods({throw: true}))
});

module.exports = router