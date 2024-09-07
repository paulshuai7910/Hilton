import debug from "debug"
const myDebug = debug("my-app:module1")

myDebug("This is a debug message from module 1.")
export const testEventLoop = () => {
  debug("This is a debug message")
  console.log("start-ApolloServer")

  setTimeout(() => {
    console.log("setTimeout")
  }, 0)

  setImmediate(() => {
    console.log("setImmediate")
  })

  process.nextTick(() => {
    console.log("nextTick")
  })
  console.log("endApolloServer")
}
