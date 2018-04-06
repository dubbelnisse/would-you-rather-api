const reqdir = require('require-dir')
const { GraphQLServer } = require('graphql-yoga')
const Query = reqdir('./queries')
const config = require('./config')

const serverOptions = {
  port: config.port,
}

const resolvers = {
  Query,
}

const server = new GraphQLServer({
  typeDefs: './lib/schema.graphql',
  resolvers,
})

server.start(serverOptions, () =>
  console.log(`Server is running on localhost:${config.port}`)
)
