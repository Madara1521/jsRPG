import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import CharComp from "./CharComp"
import { totalDexterity, totalEnergy, totalStrength, totalVitality } from "../../../../Redux/actions"
import { connect } from "react-redux"



const Characteristics = ({totalDexterity, totalEnergy, totalStrength, totalVitality}) => {
  const classes = useStyles()

  const attribute = {
    strength: {name:'strength', action: totalStrength },
    dexterity: {name:'dexterity', action: totalDexterity },
    vitality: {name:'vitality', action: totalVitality },
    energy: {name:'energy', action: totalEnergy }
  }

  return (
    <Stack direction='row' flex={2}>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <CharComp name={attribute.strength.name} action={attribute.strength.action}/>
        <CharComp name={attribute.dexterity.name} action={attribute.dexterity.action}/>
        <CharComp name={attribute.vitality.name} action={attribute.vitality.action}/>
        <CharComp name={attribute.energy.name} action={attribute.energy.action}/>
      </Stack>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <div>physical damage: 3000-1500</div>
        <div>magic damage: 8000-11000</div>
        <div>Mana: 1200</div>
        <div>health: 2500</div>
        <div>Stamina: 1000</div>
      </Stack>
    </Stack>
  )
}

export default connect(null, {totalDexterity, totalEnergy, totalStrength, totalVitality})(Characteristics)