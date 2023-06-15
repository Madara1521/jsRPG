import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import DamageComp from "./DamageComp"
import CharacteristicsComp from "./CharacteristicsComp"
import AttackRaitingAndDefenseComp from "./AttackRaitingAndDefenseComp"
import HealthAndStaminaComp from "./HealthAndStaminaComp"
import ManaComp from "./ManaComp"



const Characteristics = () => {
  const classes = useStyles()

  const characteristicsFields = [
    {
      name: 'strength',
      totalStatName: 'totalStrength',
    },
    {
      name: 'dexterity',
      totalStatName: 'totalDexterity',
    },
    {
      name: 'vitality',
      totalStatName: 'totalVitality',
    },
    {
      name: 'energy',
      totalStatName: 'totalEnergy',
    }
  ]

  return (
    <Stack direction='row' flex={2}>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        {characteristicsFields.map((field,index) => {
          return (
            <CharacteristicsComp
              name={field.name}
              totalStatName={field.totalStatName}
              key={index}
            />
          )
        })}
      </Stack>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <DamageComp />
        <div>Magic damage: 1000-3000</div>
        <AttackRaitingAndDefenseComp />
        <HealthAndStaminaComp />
        <ManaComp />
      </Stack>
    </Stack>
  )
}

export default Characteristics