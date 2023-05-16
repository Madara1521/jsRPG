import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { useSelector } from "react-redux"


const Points = () => {
  const classes = useStyles()
  const points = useSelector(state => state.attributeReducer.points)

  return (
    <Stack direction='column'>
      <div>
        <div className={classes.pointsCont}>
          Points
        </div>
        <div className={classes.pointsCont}>
          {points}
        </div>
      </div>
    </Stack>
  )
}

export default Points