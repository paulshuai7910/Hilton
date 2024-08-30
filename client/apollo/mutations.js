import { gql } from "@apollo/client"

export const ADDAPPOINTMENT = gql`
  mutation AddAppointment(
    $name: String!
    $phone: String!
    $appointmentTime: String!
    $tableSize: String!
  ) {
    addAppointment(
      name: $name
      phone: $phone
      appointmentTime: $appointmentTime
      tableSize: $tableSize
    ) {
      name
      phone
      appointmentTime
      tableSize
      status
      id
    }
  }
`
