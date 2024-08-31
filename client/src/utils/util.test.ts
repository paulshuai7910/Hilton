import { timestampToDateStr, validatePhone } from "./util"

describe("timestampToDateStr", () => {
  test("should return the correct date string", () => {
    const timestamp = 1622505800000
    const expectedDateStr = "2021-06-01 08:03"
    const actualDateStr = timestampToDateStr(timestamp)
    expect(actualDateStr).toEqual(expectedDateStr)
  })
  it("should reject with error when value is empty", () => {
    return validatePhone(null, "").catch((error) => {
      expect(error.message).toEqual("The phone number cannot be empty!")
    })
  })

  it("should reject with error when value format is incorrect", () => {
    return validatePhone(null, "1234567890").catch((error) => {
      expect(error.message).toEqual("The phone number format is incorrect!")
    })
  })

  it("should resolve when value is valid", () => {
    return validatePhone(null, "13812345678").then(() => {
      expect(true).toEqual(true)
    })
  })
})
