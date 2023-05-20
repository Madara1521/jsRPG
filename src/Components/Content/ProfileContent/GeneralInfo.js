import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../Styles"

const GeneralInfo = () => {
  const classes = useStyles()

  return (
    <Stack direction='row' flex={2}>
      <Stack className={classes.genBorder} flex={1} spacing={1}>
        <div>Gold bonus: 100%</div>
        <div>Magic items bonus: 250%</div>
        <div>Posion damage: 250-300</div>
        <div>Cold damage: 150-300</div>
        <div>Lightning damage: 50-300</div>
        <div>Fire damage: 350-500</div>
        <div>Experience bonus: 10%</div>
      </Stack>
      <Stack className={classes.genBorder} flex={1} spacing={1}>
        <div>Defense: 3000</div>
        <div>Fire Resistance: 25%</div>
        <div>Cold Resistance: 25%</div>
        <div>Lightning Resistance: 25%</div>
        <div>Posion Resistance: 25%</div>
        <div>Magic Resistance: 25%</div>
      </Stack>
    </Stack>
  )
}

export default GeneralInfo