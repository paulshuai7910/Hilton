import { gql } from "apollo-server"

const typeDefs = gql`
  type Appointment {
    _key: String
    name: String
    phone: String
    appointmentTime: String
    tableSize: String
    status: String
  }

  type Query {
    getMyAppointments(name: String): [Appointment]
    getAllAppointments: [Appointment]
  }

  type Mutation {
    addAppointment(
      name: String
      phone: String
      tableSize: String
      appointmentTime: String!
    ): Appointment
    updateAppointment(
      _key: String!
      name: String
      phone: String
      tableSize: String
      appointmentTime: String
      status: String
    ): Appointment
    deleteAppointment(_key: String!): Appointment
  }
`

export default typeDefs
