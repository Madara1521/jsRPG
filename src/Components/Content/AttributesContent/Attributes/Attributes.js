import React from "react"
import { useStyles } from "../../../Styles"
import { Stack } from '@mui/material'
import Points from "./Points"
import uniqid from 'uniqid'
import AttributeComp from "./AttributeComp"

const Attributes = () => {
  const classes = useStyles()

  const attributesFields = [
    {
      statName: 'strength',
      totalStatName: 'totalStrength',
    },
    {
      statName: 'dexterity',
      totalStatName: 'totalDexterity',
    },
    {
      statName: 'vitality',
      totalStatName: 'totalVitality',
    },
    {
      statName: 'energy',
      totalStatName: 'totalEnergy',
    },
  ]
  
  return (
    <Stack direction='column' spacing={10} className={classes.attribBorder}>
      <Points />
      {attributesFields.map(field => {
        return (
          <AttributeComp
            statName={field.statName}
            totalStatName={field.totalStatName}
            key={uniqid()}
          />
        )
      })}
    </Stack>
  )
}

Attributes.propTypes = {

}

export default Attributes