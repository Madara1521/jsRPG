import React from "react"
import { useStyles } from "../../Styles"
import { Stack } from '@mui/material'

const MapContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <Stack direction='column'>
        <div className={classes.titleComp}>
          <h1>Map</h1>
        </div>
      </Stack>
    </div>
  )
}

export default MapContent