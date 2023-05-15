import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { useDispatch, useSelector } from "react-redux"
import { disableButton, incrementDexterity } from "../../../../../Redux/actions"


const Dexterity = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const dexterity = useSelector(state => state.attributeReducer.dexterity)
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const addDexterity = () => {
    dispatch(incrementDexterity())

    if (points === 1 ){
      dispatch(disableButton())
    }
  }

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Dexterity
      </div>
      <div className={classes.attribCont}>
        {dexterity}
      </div>
      <AttributeButton onClick={() => addDexterity()} disabled={isButtonDisabled}>
        <IconsAttribute />
      </AttributeButton>
    </Stack>
  )
}

export default Dexterity