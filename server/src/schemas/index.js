import { gql } from "apollo-server"

const typeDefs = gql`
  type Locations {
    id: String
    name: String
    description: String
    photo: String
  }
  type Appointment {
    id: String
    name: String
    phone: String
    appointmentTime: String!
    tableSize: String
    status: String
  }

  type Query {
    locations: Locations
  }

  type Mutation {
    addAppointment(
      name: String
      phone: String
      tableSize: String
      appointmentTime: String!
    ): Appointment
  }
`

export default typeDefs
