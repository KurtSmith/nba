import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { ApiProvider } from '@reduxjs/toolkit/query/react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={store}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
