import { arangojs } from "arangojs"

// ArangoDB connect info
const url = "http://localhost:8529" // ArangoDB server address
const database = "_system"
const username = "root"
const password = "hilton"

// create ArangoDB connect
const db = arangojs("http://localhost:8529", "_system")
db.useBasicAuth("root", "hilton")

const newDatabaseName = "appointment_Database"

const newCollectionName = "order_collection"

async function createDatabase() {
  try {
    await db.createDatabase(newDatabaseName)
    console.log(`Database ${newDatabaseName} created successfully.`)
  } catch (err) {
    console.error(`Failed to create database: ${err.message}`)
    return
  }

  const newDb = db.database(newDatabaseName)

  try {
    const collection = newDb.collection(newCollectionName)
    await collection.create()
    console.log(`Collection ${newCollectionName} created successfully.`)
  } catch (err) {
    console.error(`Failed to create collection: ${err.message}`)
  }
}
createDatabase()
