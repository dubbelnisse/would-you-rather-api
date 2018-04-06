const config = require('nconf-camel-cased')({
  file: {
    file: 'config.json',
    dir: '../',
  },
})

config.defaults = {
  port: 8000,
  postgres: {
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
  },
}

module.exports = {
  port: config.get('port'),
  postgres: config.get('postgres'),
}
