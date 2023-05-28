import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import DamageComp from "./DamageComp"
import uniqid from 'uniqid'
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
      id: uniqid()
    },
    {
      name: 'dexterity',
      totalStatName: 'totalDexterity',
      id: uniqid()
    },
    {
      name: 'vitality',
      totalStatName: 'totalVitality',
      id: uniqid()
    },
    {
      name: 'energy',
      totalStatName: 'totalEnergy',
      id: uniqid()
    }
  ]

  return (
    <Stack direction='row' flex={2}>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        {characteristicsFields.map(field => {
          return (
            <CharacteristicsComp
              name={field.name}
              totalStatName={field.totalStatName}
              key={field.id}
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