import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { disableButton, incrementEnergy, totalEnergy } from "../../../../../Redux/actions"
import { connect, useSelector } from "react-redux"

const Energy = ({ incrementEnergy, disableButton, totalEnergy }) => {
  const classes = useStyles()
  const energy = useSelector(state => state.attributeReducer.energy)
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const energyArmor = useSelector(state => state.bonusReducer.armorBonus.energy)
  const allEnergy = energy + energyArmor
  useEffect(() => {
    totalEnergy(allEnergy)
  }, [totalEnergy, allEnergy])

  const addEnergy = () => {
    incrementEnergy()

    if (points === 1) {
      disableButton()
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

export default connect(null, { incrementEnergy, disableButton, totalEnergy })(Energy)