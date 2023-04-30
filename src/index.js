import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'
// import { createStore } from 'redux'

// const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider stoe={store}> */}
      <App />
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
)

