const _ = require('lodash')
const DB = require("../models")

const UsersController = {
  index: async (ctx) => {
    let user = await DB.User.findAll()
    ctx.body = {
      lists:user
    }
    // ctx.throw(412, ctx.Boom.preconditionFailed('抛出错误'))
    // ctx.throw(404, ctx.Boom.notFound('文章不存在'))
  }
}
module.exports = UsersController