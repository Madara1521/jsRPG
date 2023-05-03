import React from "react"
import Header from './Components/Header/Header'
import ProfileContent from "./Components/Content/ProfileContent/ProfileContent"
import AppBar from '@mui/material/AppBar'


const App = () => {

  return (
    <AppBar position='fixed' style={{ height: '100vh' }} color="inherit">
      <Header />
      <ProfileContent />
    </AppBar >
  )
}

export default App
