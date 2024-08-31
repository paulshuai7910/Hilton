import React, { useState } from "react"
import { Button, Modal, Select, Form, Input, DatePicker, message } from "antd"
import { AppointmentProps } from "../utils/type"
import { validatePhone } from "../utils/util"
import { useMutation } from "@apollo/client"
import { UPDATEAPPOINTMENT } from "../../apollo/mutations"
import dayjs from "dayjs"

const ChangeModal: React.FC<{
  btnTitle: string
  detail: AppointmentProps
  setDataSource: (newState: any) => void
  dataSource: AppointmentProps[]
}> = ({ btnTitle, detail, setDataSource, dataSource }) => {
  const [form] = Form.useForm()
  const [updateAppointment, { loading }] = useMutation(UPDATEAPPOINTMENT)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    form.submit()
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const onFinish = (values: any) => {
    updateAppointment({
      variables: { _key: detail._key, ...values, status: "success" },
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
    message.success("修改成功！")
    setIsModalOpen(false)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <>
      <Button size="small" onClick={showModal} type="primary">
        {btnTitle}
      </Button>
      <Modal
        title="修改信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          initialValues={detail}
          name="reservation_form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="layout_form"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 12 }}
        >
          <Form.Item
            label="客人姓名"
            name="name"
            rules={[{ required: true, message: "请输入客人姓名！" }]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="手机号码"
            name="phone"
            rules={[{ validator: validatePhone }]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            label="到达时间"
            name="appointmentTime"
            rules={[{ required: true, message: "请选择预计到达时间！" }]}
            getValueProps={(value) => ({
              value: value && dayjs(Number(value)),
            })}
            normalize={(value) => value && `${dayjs(value).valueOf()}`}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>

          <Form.Item
            label="桌位标准"
            name="tableSize"
            rules={[
              { required: true, message: "请选择预定桌位标准（即用餐人数）！" },
            ]}
          >
            <Select placeholder="请选择">
              <Select.Option value="1">单人桌</Select.Option>
              <Select.Option value="2">2人桌</Select.Option>
              <Select.Option value="4">4人桌</Select.Option>
              <Select.Option value="6">6人桌</Select.Option>
              <Select.Option value="8">8人桌</Select.Option>
              <Select.Option value="10">10人桌</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ChangeModal
