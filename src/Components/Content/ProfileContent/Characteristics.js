import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../Styles"

const Characteristics = () => {
  const classes = useStyles()

  return(
    <Stack direction='row'  flex={2}>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <div>Strength: 250</div>
        <div>Dexterity: 250</div>
        <div>Vitality: 250</div>
        <div>Energy: 250</div>
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