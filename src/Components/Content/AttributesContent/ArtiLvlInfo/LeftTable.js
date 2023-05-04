import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"

const LeftTable = () => {
  const classes = useStyles()

  return (
    <Stack direction='column' flex={1} className={classes.lvlHeight}>
      <div className={classes.expLvlBor}>
        Nikname
      </div>
      <Stack direction='row' flex={6}>
        <Stack direction='column' flex={2} className={classes.expLvlBor}>
          <div>Level</div>
          <div>99</div>
        </Stack>
        <Stack direction='column' flex={4} className={classes.expLvlBor}>
          <div>Experiance</div>
          <div>1000</div>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default LeftTable