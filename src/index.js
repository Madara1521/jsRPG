import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/rootReducer'
import { ThemeProvider } from '@mui/styles'
import { theme } from './theme'
import UpdateInfo from './UpdateInfo'


ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <UpdateInfo />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
)
