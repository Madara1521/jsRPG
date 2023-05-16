import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { useSelector } from "react-redux"

const RigthTable = () => {
  const classes = useStyles()
  const nextLevel = useSelector(state => state.levelReducer.nextLevel)

  return (
    <Stack direction='column' flex={1} className={classes.lvlHeight}>
      <div className={classes.expLvlBor}>
        Barbarian
      </div>
      <Stack direction='column' flex={4} className={classes.expLvlBor}>
        <div>Next Level</div>
        <div>{nextLevel}</div>
      </Stack>
    </Stack>
  )
}

export default RigthTable