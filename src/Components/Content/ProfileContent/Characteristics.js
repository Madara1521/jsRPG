import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../Styles"
import { useSelector } from "react-redux"

const Characteristics = () => {
  const classes = useStyles()
  const dexterity = useSelector(state => state.attributeReducer.dexterity)
  const strength = useSelector(state => state.attributeReducer.strength)
  const vitality = useSelector(state => state.attributeReducer.vitality)
  const energy = useSelector(state => state.attributeReducer.energy)

  return(
    <Stack direction='row'  flex={2}>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <div>Strength: {strength}</div>
        <div>Dexterity: {dexterity}</div>
        <div>Vitality: {vitality}</div>
        <div>Energy: {energy}</div>
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

export default Characteristics