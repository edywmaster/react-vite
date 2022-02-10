import React from 'react'
import ReactDOM from 'react-dom'
import { globalStyles, css, theme } from '../stitches.config'
import App from './App'
import './utils/i18n/i18n'

import { HelmetProvider } from 'react-helmet-async'
import { Box, Text } from './components'

globalStyles()

function Loading() {

  return (
    <Box css={{
      py: '$9',
      background: '#ccc',
    }}>
      <Box css={{
        py: '$9',
      }}>
        <Text css={{
          color: '#000',
          ta: 'center',
          height: '100vw',
          py: '$9',
        }}>
          Loading...
        </Text>
      </Box>
    </Box >
  )
}

ReactDOM.render(
  <React.Suspense fallback={Loading()}>
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
)
