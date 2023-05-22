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

  return (
    <Stack direction='column' spacing={10} className={classes.attribBorder}>
      <Points />
      <AtribComp
        name='strength'
        total={totalStrength}
        increment={incrementStrength} />
      <AtribComp
        name='dexterity'
        total={totalDexterity}
        increment={incrementDexterity} />
      <AtribComp
        name='vitality'
        total={totalVitality}
        increment={incrementVitality} />
      <AtribComp
        name='energy'
        total={totalEnergy}
        increment={incrementEnergy} />
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