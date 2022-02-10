import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './utils/i18n/i18n'

import { HelmetProvider } from 'react-helmet-async'

ReactDOM.render(
  <React.Suspense fallback={<>Loading...</>}>
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
)
