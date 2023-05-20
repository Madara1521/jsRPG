import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { connect, useSelector } from "react-redux"
import { disableButton, incrementVitality } from "../../../../../Redux/actions"

const Vitality = ({ incrementVitality, disableButton }) => {
  const classes = useStyles()
  const vitality = useSelector(state => state.attributeReducer.vitality)
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const addVitality = () => {
    incrementVitality()

    if (points === 1) {
      disableButton()
    }
  }

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Vitality
      </div>
      <div className={classes.attribCont}>
        {vitality}
      </div>
      <AttributeButton onClick={() => addVitality()} disabled={isButtonDisabled}>
        <IconsAttribute />
      </AttributeButton>
    </Stack>
  )
}

export default connect(null, { incrementVitality, disableButton })(Vitality)