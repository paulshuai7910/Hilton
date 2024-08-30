import {
  getAllDocumentsFromCollection,
  getFilterDocumentsFromCollection,
} from "../../src/database/index.js"

const resolvers = {
  Query: {
    getMyAppointments: async (_parent, args, { db }) => {
      const allDocuments = await getFilterDocumentsFromCollection(
        db,
        "order_collection",
        args.name
      )
      return allDocuments
    },

    getAllAppointments: async (_parent, _args, { db }) => {
      const allDocuments = await getAllDocumentsFromCollection(
        db,
        "order_collection"
      )
      return allDocuments
    },
  },
  Mutation: {
    addAppointment: async (_parent, args, contextValue, _info) => {
      const collection = contextValue.db.collection("order_collection")
      const newDoc = {
        ...args,
        status: "success",
      }
      const result = await collection.save(newDoc, { returnNew: true })
      return result.new
    },
    updateAppointment: async (_parent, args, contextValue, _info) => {
      const collection = contextValue.db.collection("order_collection")
      const oldDoc = await collection.document(args._key)
      const newDoc = await collection.update(
        args._key,
        { ...oldDoc, ...args },
        { returnNew: true }
      )
      return newDoc.new
    },
  },
}

export default resolvers
