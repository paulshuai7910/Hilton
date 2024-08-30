import { gql } from "@apollo/client"

export const GET_ALL_APPOINTMENTS = gql`
  query GetAllAppointments {
    getAllAppointments {
      _key
      name
      status
      phone
      tableSize
      appointmentTime
    }
  }
`

export const GET_MY_APPOINTMENTS = gql`
  query GetMyAppointments($name: String) {
    getMyAppointments(name: $name) {
      _key
      name
      status
      phone
      tableSize
      appointmentTime
    }
  }
`
