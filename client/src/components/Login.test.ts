import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LoginForm } from "./Login"

describe("LoginForm", () => {
  test("should render the form correctly", () => {
    render(<LoginForm />)

    const usernameInput = screen.getByLabelText("用户名")
    const phoneInput = screen.getByLabelText("手机号")
    const customerButton = screen.getByText("Sign in")
    const staffButton = screen.getByText("Sign in (staff only)")

    expect(usernameInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
    expect(customerButton).toBeInTheDocument()
    expect(staffButton).toBeInTheDocument()
  })

  test("should handle form submission with valid data successfully", async () => {
    render(<LoginForm />)

    const form = screen.getByRole("form")
    const usernameInput = screen.getByLabelText("用户名")
    const phoneInput = screen.getByLabelText("手机号")
    const customerButton = screen.getByText("Sign in")

    userEvent.type(usernameInput, "testUser")
    userEvent.type(phoneInput, "13812345678")

    userEvent.click(customerButton)

    await waitFor(() => {
      const loginData = JSON.parse(localStorage.getItem("loginData")!)
      expect(loginData.name).toEqual("testUser")
      expect(loginData.phone).toEqual("13812345678")
    })
  })

  test("should handle form submission with invalid data", async () => {
    render(<LoginForm />)

    const form = screen.getByRole("form")
    const usernameInput = screen.getByLabelText("用户名")
    const phoneInput = screen.getByLabelText("手机号")
    const customerButton = screen.getByText("Sign in")

    userEvent.type(usernameInput, "")
    userEvent.type(phoneInput, "123")

    userEvent.click(customerButton)

    await waitFor(() => {
      expect(screen.getByText("please enter user name!")).toBeInTheDocument()
      expect(
        screen.getByText("The phone number format is incorrect!")
      ).toBeInTheDocument()
    })
  })

  test("should handle staff login click", async () => {
    render(<LoginForm />)

    const form = screen.getByRole("form")
    const staffButton = screen.getByText("Sign in (staff only)")

    userEvent.click(staffButton)

    await waitFor(() => {
      expect(form.getFieldValue("loginType")).toEqual("staff")
      expect(form.submit).toHaveBeenCalledTimes(1)
    })
  })
})
