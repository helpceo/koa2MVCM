const _ = require('lodash')
const DB = require("../models")

const UsersController = {
  index: async (ctx) => {
    let user = await DB.User.findAll()
    ctx.body = {
      name:user
    }
  }
}
module.exports = UsersController