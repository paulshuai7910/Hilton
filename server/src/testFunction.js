export const testEventLoop = () => {
  console.log("startApolloServer")

  setTimeout(() => {
    console.log("setTimeout")
  }, 0)

  setImmediate(() => {
    console.log("setImmediate")
  })

  process.nextTick(() => {
    console.log("nextTick")
  })
}
