import { ApolloServer } from "apollo-server"
import typeDefs from "./src/schemas/index.js"
import resolvers from "./src/resolvers/index.js"
import { connectToArangoDB } from "./src/database/connectToArangoDB.js"

import { testEventLoop } from "./src/testFunction.js"
testEventLoop()

const startApolloServer = async () => {
  const db = await connectToArangoDB()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => ({
      token: req.headers.token,
      db,
    }),
  })

  const { url } = await server.listen()
  console.log(`Server ready at ${url}`)
}

startApolloServer()
