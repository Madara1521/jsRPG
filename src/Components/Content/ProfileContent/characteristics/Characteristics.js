import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import StrengthChar from "./StrengthChar"
import DexterityChar from "./DexterityChar"
import VitalityChar from "./VitalityChar"
import EnergyChar from "./EnergyChar"


const Characteristics = () => {
  const classes = useStyles()

  return (
    <Stack direction='row' flex={2}>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <StrengthChar />
        <DexterityChar />
        <VitalityChar />
        <EnergyChar />
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