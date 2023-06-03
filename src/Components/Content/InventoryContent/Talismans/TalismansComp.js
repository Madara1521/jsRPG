import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"


const TalismansComp = () => {
  const classes = useStyles()

  return (
    <Stack direction='row'>
      <Stack direction='column'>
        <div className={classes.talismansCont}>

        </div>
        <div className={classes.talismansCont}>

        </div>
      </Stack>
    </Stack>
  )
}

export default TalismansComp