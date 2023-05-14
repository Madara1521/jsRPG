import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { useDispatch, useSelector } from "react-redux"
import { incrementDexterity } from "../../../../../Redux/actions"


const Dexterity = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const dexterity = useSelector(state => state.attributeReducer.dexterity)

  const addDexterity = () => {
    dispatch(incrementDexterity())
  }

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Dexterity
      </div>
      <div className={classes.attribCont}>
        {dexterity}
      </div>
      <AttributeButton onClick={() => addDexterity()}>
        <IconsAttribute />
      </AttributeButton>
    </Stack>
  )
}

export default Dexterity