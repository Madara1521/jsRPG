import React from "react"
import Points from "./Points"
import AttributeComp from "./AttributeComp"
import { makeStyles } from "@mui/styles"
import divImg from '../../img/divBackground.png'

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    border: '3px ridge #a3a3a3',
    height: '100vh',
    backgroundImage: `url(${divImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '536px'
  },
  attributes: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backdropFilter: 'blur(5px)',
    minHeight: '536px'
  }
}))

const Attributes = () => {
  const classes = useStyles()

  const attributesFields = [
    {
      statName: 'strength',
    },
    {
      statName: 'dexterity',
    },
    {
      statName: 'vitality',
    },
    {
      statName: 'energy',
    },
  ]

  return (
    <div className={classes.placing}>
      <div className={classes.attributes}>
        <Points />
        {attributesFields.map((field, index) => {
          return (
            <AttributeComp
              statName={field.statName}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Attributes