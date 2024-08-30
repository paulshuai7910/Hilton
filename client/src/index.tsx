import ReactDOM from "react-dom/client"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import App from "./App"
import "./App.scss"

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
} else {
  console.error('Element with id "root" not found')
}
