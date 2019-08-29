import express from "express"
import {ApolloServer} from 'apollo-server-express'

const app = express()

const server = new ApolloServer({
  typeDefs: "",
  resolvers: {},
})

server.applyMiddleware({app})

app.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
