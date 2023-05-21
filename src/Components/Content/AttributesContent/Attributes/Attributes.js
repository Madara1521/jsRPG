import React from "react"
import { useStyles } from "../../../Styles"
import { Stack } from '@mui/material'
import Points from "./Points"
import AtribComp from "./AtribComp"
import {
  incrementDexterity,
  incrementEnergy,
  incrementStrength,
  incrementVitality,
  totalStrength,
  totalDexterity,
  totalVitality,
  totalEnergy
} from "../../../../Redux/actions"
import { connect } from "react-redux"

const Attributes = ({ incrementDexterity,
  incrementEnergy,
  incrementStrength,
  incrementVitality,
  totalStrength,
  totalDexterity,
  totalVitality,
  totalEnergy }) => {

  const classes = useStyles()

  const attribute = {
    strength: {
      name: 'strength',
      total: totalStrength,
      increment: incrementStrength
    },
    dexterity: {
      name: 'dexterity',
      total: totalDexterity,
      increment: incrementDexterity
    },
    vitality: {
      name: 'vitality',
      total: totalVitality,
      increment: incrementVitality
    },
    energy: {
      name: 'energy',
      total: totalEnergy,
      increment: incrementEnergy
    }
  }

  return (
    <Stack direction='column' spacing={10} className={classes.attribBorder}>
      <Points />
      <AtribComp
        name={attribute.strength.name}
        total={attribute.strength.total}
        increment={attribute.strength.increment} />
      <AtribComp
        name={attribute.dexterity.name}
        total={attribute.dexterity.total}
        increment={attribute.dexterity.increment} />
      <AtribComp
        name={attribute.vitality.name}
        total={attribute.vitality.total}
        increment={attribute.vitality.increment} />
      <AtribComp
        name={attribute.energy.name}
        total={attribute.energy.total}
        increment={attribute.energy.increment} />
    </Stack>
  )
}

export default connect(null, {
  incrementDexterity,
  incrementEnergy,
  incrementStrength,
  incrementVitality,
  totalStrength,
  totalDexterity,
  totalVitality,
  totalEnergy
})(Attributes)