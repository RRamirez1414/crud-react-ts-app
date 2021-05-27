import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyles'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

LogRocket.init('pnpjrs/pocket-collection')
setupLogRocketReact(LogRocket)

//import mocks/browser.ts file conditionally
if (window.Cypress) {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
