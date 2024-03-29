import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import "./index.css"
import "spinkit/spinkit.css"
import {store} from './state/store'
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
   <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </Provider>
  </React.Fragment>,
)
