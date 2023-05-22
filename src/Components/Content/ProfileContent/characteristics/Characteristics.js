import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import CharComp from "./CharComp"
import { totalDexterity, totalEnergy, totalStrength, totalVitality } from "../../../../Redux/actions"
import { connect } from "react-redux"
import DamageComp from "./DamageComp"



const Characteristics = ({totalDexterity, totalEnergy, totalStrength, totalVitality}) => {
  const classes = useStyles()

  return (
    <Stack direction='row' flex={2}>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <CharComp name='strength' action={totalStrength}/>
        <CharComp name='dexterity' action={totalDexterity}/>
        <CharComp name='vitality' action={totalVitality}/>
        <CharComp name='energy' action={totalEnergy}/>
      </Stack>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <DamageComp />
        <div>magic damage: 8000-11000</div>
        <div>Mana: 1200</div>
        <div>health: 2500</div>
        <div>Stamina: 1000</div>
      </Stack>
    </Stack>
  )
}

export default connect(null, {totalDexterity, totalEnergy, totalStrength, totalVitality})(Characteristics)