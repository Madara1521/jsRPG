import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { disableButton, incrementEnergy } from "../../../../../Redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Energy = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const energy = useSelector(state => state.attributeReducer.energy)
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const addEnergy = () => {
    dispatch(incrementEnergy())

    if (points === 1 ){
      dispatch(disableButton())
    }
  }

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Energy
      </div>
      <div className={classes.attribCont}>
        {energy}
      </div>
      <AttributeButton onClick={() => addEnergy()} disabled={isButtonDisabled}>
        <IconsAttribute />
      </AttributeButton>
    </Stack>
  )
}

export default Energy