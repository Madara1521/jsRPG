import React from "react"
import { useStyles } from "../../Styles"
import { Stack } from '@mui/material'

const InvertoryContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <Stack direction='column'>
        <div className={classes.titleComp}>
          <h1>Invertoty</h1>
        </div>
      </Stack>
    </div>
  )
}

export default InvertoryContent