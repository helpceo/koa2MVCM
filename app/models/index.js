'use strict'

const fs        = require('fs')
const path      = require('path')
const Sequelize = require('sequelize')
var basename  = path.basename(module.filename)
var env       = process.env.NODE_ENV || 'development'
const config    = require(__dirname + '/../../config/database')[env]
var db        = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

// 数据库的状态
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功!')
  })
  .catch(err => {
    console.error('数据库连接失败', err)
  })

// 同步所有已定义的模型到数据库中

// db.syncModels = function () {
//   sequelize.sync({ force: false });
// }

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports= db
