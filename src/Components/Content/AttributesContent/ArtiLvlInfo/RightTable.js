import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"

const RigthTable = () => {
  const classes = useStyles()

  return (
    <Stack direction='column' flex={1} className={classes.lvlHeight}>
      <div className={classes.expLvlBor}>
        Barbarian
      </div>
      <Stack direction='column' flex={4} className={classes.expLvlBor}>
        <div>Next Level</div>
        <div>1500</div>
      </Stack>
    </Stack>
  )
}

export default RigthTable