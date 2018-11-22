const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  // 加载 pug模板引擎
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router
