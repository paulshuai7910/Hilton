import { useQuery } from "@apollo/client"
import { GET_MY_APPOINTMENTS } from "../apollo/queries"
import AppointList from "./components/AppointList"

export default function MyAppointment() {
  let loginData = localStorage.getItem("loginData")
  let name = loginData ? JSON.parse(loginData).name : ""
  const { data, loading, error } = useQuery(GET_MY_APPOINTMENTS, {
    variables: { name },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  return (
    <div>
      <AppointList data={data.getMyAppointments ?? []} />
    </div>
  )
}
