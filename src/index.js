import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/rootReducer'
import { ThemeProvider } from '@mui/styles'
import { theme } from './theme'


ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
)
