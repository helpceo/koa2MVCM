let dbHost = process.env.DB_HOST || '127.0.0.1'
let dbPort = process.env.DB_PORT || '3306'

module.exports = {
  "development": {
    "username": "root",
    "password": "123456",
    "database": "development",
    "host": dbHost,
    "port": dbPort,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "test",
    "host": dbHost,
    "port": dbPort,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql"
  }
}