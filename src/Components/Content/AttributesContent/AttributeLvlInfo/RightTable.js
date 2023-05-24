import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { connect } from "react-redux"

const RigthTable = ({ nextLevel }) => {
  const classes = useStyles()

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

export default connect(store => {
  return {
    nextLevel: store.levelReducer.nextLevel
  }
})(RigthTable)