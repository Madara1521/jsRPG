import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import DamageComp from "./DamageComp"
import uniqid from 'uniqid'
import CharacteristicsComp from "./CharacteristicsComp"
import AttackRaitingAndDefenseComp from "./AttackRaitingAndDefenseComp"



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
        <div>Mana: 1200</div>
        <div>Health: 2500</div>
        <div>Stamina: 1000</div>
      </Stack>
    </Stack>
  )
}

export default Characteristics