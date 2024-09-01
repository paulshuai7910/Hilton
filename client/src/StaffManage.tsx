import AppointList from "./components/AppointList"

import { useQuery } from "@apollo/client"
import { GET_ALL_APPOINTMENTS } from "../apollo/queries"

export default function MyAppointment() {
  const { loading, error, data } = useQuery(GET_ALL_APPOINTMENTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  return (
    <div>
      <AppointList data={data.getAllAppointments ?? []} />
    </div>
  )
}
