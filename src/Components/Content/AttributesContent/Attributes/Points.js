import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { connect, useSelector } from "react-redux"
import { activeButton } from "../../../../Redux/actions"


const Points = ({ activeButton }) => {
  const classes = useStyles()
  const points = useSelector(state => state.attributeReducer.points)

  useEffect(() => {
    if (points > 0) {
      activeButton()
    }
  }, [points, activeButton])

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

export default connect(null, { activeButton })(Points)