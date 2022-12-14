const env = process.env.NODE_ENV || "development"

if (env === 'development' || env === 'test') require('dotenv').config()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE
const host = process.env.DB_HOST
const dialect = process.env.DB_DIALECT


module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect,
  },
  test: {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  production: {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
