import React from "react"
import Header from './Components/Header/Header'
import { Box, Stack } from '@mui/material'

const App = () => {

  return (
    <Box >
      <Header />
      <Stack direction='column' sx={{ marginTop: '100px' }}>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </Stack>
    </Box>
  )
}

export default App
