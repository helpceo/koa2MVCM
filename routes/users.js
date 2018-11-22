const Router = require('koa-router')
const UsersController = require('../app/controllers/usersController')

const router = new Router({
    prefix: '/users' // 设置公共前缀
})

router.get('/', UsersController.index)

module.exports = router
