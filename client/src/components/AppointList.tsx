import React from "react"
import { Table } from "antd"
import type { TableProps } from "antd"
import { AppointmentProps } from "../utils/type"
import { timestampToDateStr } from "../utils/util"
import DetailModal from "./DetailModal"
import StatusModal from "./StatusModal"
import ChangeModal from "./ChangeModal"

const AppointList: React.FC<{
  data: Array<AppointmentProps>
}> = ({ data }) => {
  const [dataSource, setDataSource] = React.useState(data)
  const columns: TableProps<AppointmentProps>["columns"] = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "联系方式",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "到达时间",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        parseFloat(a.appointmentTime) - parseFloat(b.appointmentTime),
      render: (timestamp) => <>{timestampToDateStr(parseFloat(timestamp))}</>,
    },
    {
      title: "餐桌标准",
      dataIndex: "tableSize",
      key: "tableSize",
      render: (size) => <>{size === "1" ? "单人桌" : size + "人桌"}</>,
    },
    {
      title: "预定状态",
      key: "status",
      filters: [
        {
          text: "预定成功",
          value: "success",
        },
        {
          text: "已取消",
          value: "cancel",
        },
        {
          text: "已完成",
          value: "complete",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
      render: (_, record) => (
        <StatusModal
          dataSource={dataSource}
          setDataSource={setDataSource}
          btnTitle="修改状态"
          detail={record}
        />
      ),
    },
    {
      title: "详情",
      dataIndex: "detail",
      key: "detail",
      render: (_, record) => (
        <DetailModal btnTitle="查看详情" detail={record} />
      ),
    },
    {
      title: "修改",
      dataIndex: "change",
      key: "change",
      render: (_, record) => (
        <ChangeModal
          btnTitle="修改信息"
          dataSource={dataSource}
          setDataSource={setDataSource}
          detail={record}
        />
      ),
    },
  ]

  return <Table columns={columns} dataSource={dataSource} />
}

export default AppointList
