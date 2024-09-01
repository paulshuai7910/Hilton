import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { useQuery } from "@apollo/client"
import MyAppointment from "./MyAppointment"
import { GET_ALL_APPOINTMENTS } from "../apollo/queries"

// Mock the useQuery hook from Apollo Client
jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: jest.fn(),
}))

// Mock the AppointList component
jest.mock("./components/AppointList", () =>
  jest.fn(() => <div>Mocked AppointList</div>)
)

describe("MyAppointment Component", () => {
  it("should render loading state", () => {
    // Mock useQuery to return loading state
    useQuery.mockReturnValue({ loading: true })

    render(<MyAppointment />)

    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("should render error state", () => {
    // Mock useQuery to return error state
    useQuery.mockReturnValue({
      loading: false,
      error: { message: "Something went wrong" },
    })

    render(<MyAppointment />)

    expect(screen.getByText("Error : Something went wrong")).toBeInTheDocument()
  })

  it("should render AppointList when data is fetched successfully", () => {
    // Mock useQuery to return successful data
    const appointments = [
      { id: 1, name: "Appointment 1" },
      { id: 2, name: "Appointment 2" },
    ]
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: { getAllAppointments: appointments },
    })

    render(<MyAppointment />)

    expect(screen.getByText("Mocked AppointList")).toBeInTheDocument()
  })
})
