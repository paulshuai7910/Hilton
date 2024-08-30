import React, { useState } from "react"
import { Button, Modal, Space, Tag, Select } from "antd"
import { AppointmentProps } from "../utils/type"
import { getStatus } from "../utils/util"
import { useMutation } from "@apollo/client"
import { UPDATEAPPOINTMENT } from "../../apollo/mutations"

const StatusModal: React.FC<{
  btnTitle: string
  detail: AppointmentProps
  setDataSource: (newState: any) => void
  dataSource: AppointmentProps[]
}> = ({ btnTitle, detail, setDataSource, dataSource }) => {
  const [updateAppointment, { loading }] = useMutation(UPDATEAPPOINTMENT)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [statusVal, setStatusVal] = useState("")
  let loginData = localStorage.getItem("loginData")
  let loginType = loginData ? JSON.parse(loginData).loginType : ""
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    updateAppointment({
      variables: { status: statusVal, _key: detail._key },
      onCompleted: (data) => {
        let newDoc = dataSource.map((item) => {
          if (item._key === data.updateAppointment._key) {
            return data.updateAppointment
          }
          return item
        })
        setDataSource(newDoc)
      },
    })
    if (loading) return "Submitting..."

    setIsModalOpen(false)
  }
  const handleBttonCancel = () => {
    updateAppointment({
      variables: { status: "cancel", _key: detail._key },
      onCompleted: (data) => {
        let newDoc = dataSource.map((item) => {
          if (item._key === data.updateAppointment._key) {
            return data.updateAppointment
          }
          return item
        })
        setDataSource(newDoc)
      },
    })
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
    setStatusVal(value)
  }
  const selectOptions = [
    { value: "success", label: "预定成功" },
    { value: "cancel", label: "已取消" },
  ]
  if (loginType === "staff") {
    selectOptions.push({ value: "complete", label: "已完成" })
  }

  return (
    <>
      <Space size="middle">
        <Tag color={"green"}>{getStatus(detail.status)}</Tag>
        {loginType === "staff" && (
          <Button size="small" onClick={showModal} type="primary">
            {btnTitle}
          </Button>
        )}
        {loginType === "customer" && detail.status === "success" && (
          <Button
            size="small"
            onClick={() => {
              handleBttonCancel()
            }}
            type="primary"
          >
            取消预定
          </Button>
        )}
      </Space>
      <Modal
        title="详情"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select
          defaultValue={detail.status}
          style={{ width: 120 }}
          onChange={handleChange}
          options={selectOptions}
        />
        <p>状态：{getStatus(detail.status)}</p>
      </Modal>
    </>
  )
}

export default StatusModal
