import arangojs from "arangojs"

export const connectToArangoDB = async () => {
  const db = arangojs("http://localhost:8529", "appointment_Database")
  db.useBasicAuth("root", "hilton")
  return db
}
