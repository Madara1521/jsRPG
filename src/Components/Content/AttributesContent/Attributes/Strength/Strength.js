import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { useDispatch, useSelector } from "react-redux"
import { activeButton, disableButton, incrementStrength } from '../../../../../Redux/actions'

const Strength = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const strength = useSelector(state => state.attributeReducer.strength)
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const addStrength = () => {
    dispatch(incrementStrength())
    
    if (points === 1 ){
      dispatch(disableButton())
      console.log('disable button')
    }
  }

  useEffect(() => {
    if (points > 0 ){
      dispatch(activeButton())
      console.log('active button')
    }
  },[dispatch,points])


  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Strength
      </div>
      <div className={classes.attribCont}>
        {strength}
      </div>
      <div>
        <AttributeButton onClick={() => addStrength()} disabled={isButtonDisabled}>
          <IconsAttribute />
        </AttributeButton>
      </div>
    </Stack>
  )
}

export default Strength