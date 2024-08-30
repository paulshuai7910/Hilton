import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LayoutComponent from "./LayoutComponent"
import LoginLayout from "./components/Login"
import ReservationForm from "./ReservationForm"
import StaffManage from "./StaffManage"
import MyAppointment from "./MyAppointment"

const RouterComponent = () => {
  const loginData = localStorage.getItem("loginData")

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={loginData ? <LayoutComponent /> : <LoginLayout />}
        >
          <Route index element={<ReservationForm />} />
          <Route path="/my-appointment" element={<MyAppointment />} />
          <Route path="/staff" element={<StaffManage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RouterComponent
