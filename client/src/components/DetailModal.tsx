import React, { useState } from "react"
import { Button, Modal, Space } from "antd"
import { AppointmentProps } from "../utils/type"
import { timestampToDateStr, getStatus } from "../utils/util"

const DetailModal: React.FC<{ btnTitle: string; detail: AppointmentProps }> = ({
  btnTitle,
  detail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleChangeInfo = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Space size="middle">
        <Button type="primary" size="small" onClick={showModal}>
          {btnTitle}
        </Button>
        <Button onClick={handleChangeInfo} type="default">
          修改信息
        </Button>
      </Space>

      <Modal
        title="详情"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>姓名：{detail.name}</p>
        <p>手机号：{detail.phone}</p>
        <p>
          餐桌：
          {detail.tableSize === "1" ? "单人桌" : detail.tableSize + "人桌"}
        </p>
        <p>
          到达时间：{timestampToDateStr(parseFloat(detail.appointmentTime))}
        </p>
        <p>状态：{getStatus(detail.status)}</p>
      </Modal>
    </>
  )
}

export default DetailModal
