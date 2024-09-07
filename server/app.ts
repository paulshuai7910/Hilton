import typeDefs from "./src/schemas/index.js"
import resolvers from "./src/resolvers/index.js"
import { connectToArangoDB } from "./src/database/connectToArangoDB.js"
import { ApolloServer } from "apollo-server"

const startApolloServer = async () => {
  const db = await connectToArangoDB()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }: { req: any }) => ({
      token: req.headers.token,
      db,
    }),
  })

  const { url } = await server.listen()
  console.log(`Server ready at ${url}`)
}

startApolloServer()
