const { Client } = require('pg')
const config = require('../config')

const client = new Client({
  user: config.postgres.user,
  host: config.postgres.host,
  database: config.postgres.database,
  password: config.postgres.password,
  port: config.postgres.port,
})


client.connect()

module.exports = client
