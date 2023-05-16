import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { useDispatch, useSelector } from "react-redux"
import { AttributeButton } from "../../../Header/StyledHeader"
import IconsAttribute from "./IconsAttribute"
import { incrementPoints } from "../../../../Redux/actions"



const Points = () => {
  const classes = useStyles()
  const points = useSelector(state => state.attributeReducer.points)
  const dispatch = useDispatch()

  const addPoints = () => {
    dispatch(incrementPoints())
  }

  return (
    <Stack direction='column'>
      <div>
        <div className={classes.pointsCont}>
          Points
        </div>
        <div className={classes.pointsCont}>
          {points}
        </div>
        <AttributeButton onClick={() => addPoints()} >
          <IconsAttribute />
        </AttributeButton>
      </div>
    </Stack>
  )
}

export default Points