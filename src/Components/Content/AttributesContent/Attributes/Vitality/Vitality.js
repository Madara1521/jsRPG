import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { connect, useSelector } from "react-redux"
import { disableButton, incrementVitality, totalVitality } from "../../../../../Redux/actions"

const Vitality = ({ incrementVitality, disableButton, totalVitality }) => {
  const classes = useStyles()
  const vitality = useSelector(state => state.attributeReducer.vitality)
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const vitalityArmor = useSelector(state => state.bonusReducer.armorBonus.vitality)
  const allVitality = vitality + vitalityArmor
  useEffect(() => {
    totalVitality(allVitality)
  }, [totalVitality, allVitality])

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

export default connect(null, { incrementVitality, disableButton, totalVitality })(Vitality)