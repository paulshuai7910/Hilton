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
      _key
      name
      phone
      appointmentTime
      tableSize
      status
    }
  }
`
// updateAppointment
export const UPDATEAPPOINTMENT = gql`
  mutation UpdateAppointment(
    $_key: String!
    $name: String
    $phone: String
    $appointmentTime: String
    $tableSize: String
    $status: String
  ) {
    updateAppointment(
      _key: $_key
      name: $name
      phone: $phone
      appointmentTime: $appointmentTime
      tableSize: $tableSize
      status: $status
    ) {
      name
      phone
      appointmentTime
      tableSize
      status
      _key
    }
  }
`
// deleteAppointment
export const DELETEAPPOINTMENT = gql`
  mutation DeleteAppointment($id: String!) {
    deleteAppointment(id: $id) {
      name
      phone
      appointmentTime
      tableSize
      status
      id
    }
  }
`
