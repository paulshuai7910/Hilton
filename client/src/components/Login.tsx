import React from "react"
import { Form, Input, Button, Space } from "antd"
import "./login.scss"
import { Layout, theme } from "antd"

const { Header, Content } = Layout

const LoginForm: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: { name: string; phone: string }) => {
    console.log("Received values of form:", values)

    localStorage.setItem("loginData", JSON.stringify(values))
    window.location.reload()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }
  const handleStaffLogin = (type: string) => {
    form.setFieldValue("loginType", type)
    form.submit()
  }
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{}}
    >
      <Form.Item
        label="用户名"
        name="name"
        rules={[{ required: true, message: "please enter user name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="loginType" className="form_type"></Form.Item>
      <Form.Item
        label="手机号"
        name="phone"
        rules={[
          { required: true, message: "please enter phone number!" },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "The phone number format is incorrect!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Space align="center" direction="horizontal">
          <Button
            type="primary"
            htmlType="button"
            onClick={() => {
              handleStaffLogin("customer")
            }}
          >
            Sign in
          </Button>
          <Button
            type="default"
            htmlType="button"
            onClick={() => {
              handleStaffLogin("staff")
            }}
          >
            Sign in (staff only)
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
const LoginLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ color: "#fff" }}>
          Welcome to Hilton Dining Reservation System
        </h3>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            height: "100%",
            padding: 24,
            borderRadius: borderRadiusLG,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginForm />
        </div>
      </Content>
    </Layout>
  )
}

export default LoginLayout
