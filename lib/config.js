const config = require('nconf-camel-cased')({
  file: {
    file: 'config.json',
    dir: '../',
  },
})

config.defaults = {
  port: 8000,
}

module.exports = {
  port: config.get('port'),
}
