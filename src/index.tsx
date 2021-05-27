import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyles'
import LogRocket from 'logrocket'

LogRocket.init('pnpjrs/pocket-collection')

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
