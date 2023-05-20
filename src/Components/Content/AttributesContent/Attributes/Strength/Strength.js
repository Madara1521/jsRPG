import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { connect, useSelector } from "react-redux"
import { disableButton, incrementStrength } from '../../../../../Redux/actions'



const Strength = ({ disableButton, activeButton, incrementStrength }) => {
  const classes = useStyles()
  const strength = useSelector(state => state.attributeReducer.strength)
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const addStrength = () => {
    incrementStrength()

    if (points === 1) {
      disableButton()
    }
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
        <AttributeButton onClick={() => addStrength()} disabled={isButtonDisabled}>
          <IconsAttribute />
        </AttributeButton>
      </div>
    </Stack>
  )
}

export default connect(null, { disableButton, incrementStrength })(Strength)