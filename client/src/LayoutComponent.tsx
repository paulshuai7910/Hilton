import React, { useState } from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button, Layout, Menu, theme } from "antd"
import type { MenuProps } from "antd"
import { Outlet, useNavigate } from "react-router-dom"

import "./LayoutComponent.scss"

const { Header, Sider, Content } = Layout

const getItems = () => {
  let loginData = localStorage.getItem("loginData")
  let loginType = loginData ? JSON.parse(loginData).loginType : ""
  if (loginType === "customer") {
    return [
      {
        key: "/",
        label: "预定申请",
      },
      {
        key: "/my-appointment",
        label: "我的预定 ",
      },
    ]
  } else {
    return [
      {
        key: "/staff",
        label: "员工查询",
      },
    ]
  }
}
const LayoutComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [current, setCurrent] = useState("mail")
  const navigate = useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key)
    navigate(e.key)
  }

  const items = getItems()
  return (
    <Layout className="layout_root">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={onClick}
          defaultSelectedKeys={["/"]}
          selectedKeys={[current]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <h3>Welcome to Hilton Dining Reservation System</h3>
          <Button
            type="default"
            size="small"
            onClick={() => {
              localStorage.removeItem("loginData")
              navigate("/")
              window.location.reload()
            }}
            danger
            style={{
              fontSize: "12px",
              marginRight: 16,
            }}
          >
            退出登录
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
