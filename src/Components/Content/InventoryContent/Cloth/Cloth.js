import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"


const Cloth = () => {
  const classes = useStyles()

  return (
    <Stack direction='row' flex={2}>
      <Stack className={classes.invertoryCloth} flex={1} direction='column'>
        <h1>nickname</h1>
      </Stack>
      <Stack className={classes.invertoryCloth} flex={1} direction='column'>
        <h1>nickname</h1>
      </Stack>
    </Stack>
  )
}

export default Cloth