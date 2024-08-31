import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LayoutComponent from "./LayoutComponent"
import { LoginLayout } from "./components/Login"
import ReservationForm from "./ReservationForm"
import StaffManage from "./StaffManage"
import MyAppointment from "./MyAppointment"

const RouterComponent = () => {
  const loginData = localStorage.getItem("loginData")
  let loginType = loginData ? JSON.parse(loginData).loginType : ""
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={loginData ? <LayoutComponent /> : <LoginLayout />}
        >
          {loginType === "customer" && (
            <Route index element={<ReservationForm />} />
          )}
          {loginType === "customer" && (
            <Route path="/my-appointment" element={<MyAppointment />} />
          )}
          {loginType === "staff" && <Route index element={<StaffManage />} />}
        </Route>
      </Routes>
    </Router>
  )
}

export default RouterComponent
