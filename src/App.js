import React from "react"
import Header from './Components/Header/Header'
import { Box, Stack } from '@mui/material'
import ProfileContent from "./Components/Content/ProfileContent/ProfileContent"

const App = () => {

  return (
    <Box >
      <Header />
      <Stack direction='column' sx={{ marginTop: '102px' }}>
        <ProfileContent />
      </Stack>
    </Box>
  )
}

export default App
