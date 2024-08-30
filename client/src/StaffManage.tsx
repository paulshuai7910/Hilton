// Import everything needed to use the `useQuery` hook
import AppointList from "./components/AppointList"

// import { useQuery } from "@apollo/client"
// import { GET_LOCATIONS } from "../apollo/queries"

// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS)

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error : {error.message}</p>
//   console.log(data)

//   return <div>1212121</div>
// }

export default function MyAppointment() {
  return (
    <div>
      <h2>My first Apollo app </h2>
      <AppointList />
      {/* <DisplayLocations /> */}
    </div>
  )
}
