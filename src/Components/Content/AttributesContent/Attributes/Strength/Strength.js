import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { useDispatch, useSelector } from "react-redux"
import { incrementStrength } from '../../../../../Redux/actions'

const Strength = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const strength = useSelector(state => state.attributeReducer.strength)

  const addStrength = () => {
    dispatch(incrementStrength())
  }

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Strength
      </div>
      <div className={classes.attribCont}>
        {strength}
      </div>
      <div>
        <AttributeButton onClick={() => addStrength()}>
          <IconsAttribute />
        </AttributeButton>
      </div>
    </Stack>
  )
}

export default Strength