export const validatePhone = (_: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error("The phone number cannot be empty!"))
  }
  if (!/^1[3-9]\d{9}$/.test(value)) {
    return Promise.reject(new Error("The phone number format is incorrect!"))
  }
  return Promise.resolve()
}
