import { Form, Input, DatePicker, Select, Button, message } from "antd"
import { useMutation } from "@apollo/client"
import { ADDAPPOINTMENT } from "../apollo/mutations"
import { validatePhone } from "./utils/util"

const ReservationForm = () => {
  const [addAppointment] = useMutation(ADDAPPOINTMENT)

  const onFinish = (values: any) => {
    let appointmentTime = values.appointmentTime.valueOf().toString()

    addAppointment({
      variables: { ...values, appointmentTime },
    })
    message.success("预定成功！")
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <Form
      name="reservation_form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="layout_form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label="客人姓名"
        name="name"
        rules={[{ required: true, message: "请输入客人姓名！" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="phone number"
        name="phone"
        rules={[{ validator: validatePhone }]}
      >
        <Input placeholder="请输入手机号" />
      </Form.Item>

      <Form.Item
        label="预计到达时间"
        name="appointmentTime"
        rules={[{ required: true, message: "请选择预计到达时间！" }]}
      >
        <DatePicker showTime format="YYYY-MM-DD HH:mm" />
      </Form.Item>

      <Form.Item
        label="预定桌位大小"
        name="tableSize"
        rules={[
          { required: true, message: "请选择预定桌位大小（即用餐人数）！" },
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

      <Form.Item className="from_btns">
        <Button type="primary" htmlType="submit">
          提交预定
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ReservationForm
