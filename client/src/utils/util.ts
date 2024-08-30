export const validatePhone = (_: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error("The phone number cannot be empty!"))
  }
  if (!/^1[3-9]\d{9}$/.test(value)) {
    return Promise.reject(new Error("The phone number format is incorrect!"))
  }
  return Promise.resolve()
}
export function timestampToDateStr(timestamp: number) {
  // 创建一个Date对象
  let date = new Date(timestamp)

  // 获取年、月、日、时、分
  let year = date.getFullYear() // 年
  let month = (date.getMonth() + 1).toString().padStart(2, "0") // 月，月份是从0开始的，所以要+1，并用padStart补全两位
  let day = date.getDate().toString().padStart(2, "0") // 日
  let hours = date.getHours().toString().padStart(2, "0") // 时
  let minutes = date.getMinutes().toString().padStart(2, "0") // 分

  // 拼接成字符串
  let dateStr = `${year}-${month}-${day} ${hours}:${minutes}`

  return dateStr
}

export const getStatus = (status: string) => {
  if (status === "success") {
    return "预定成功"
  } else if (status === "cancel") {
    return "已取消"
  } else if (status === "complete") {
    return "已完成"
  }
}
