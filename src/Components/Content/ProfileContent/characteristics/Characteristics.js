import React from "react"
import DamageComp from "./DamageComp"
import CharacteristicsComp from "./CharacteristicsComp"
import AttackRaitingAndDefenseComp from "./AttackRaitingAndDefenseComp"
import HealthAndStaminaComp from "./HealthAndStaminaComp"
import ManaComp from "./ManaComp"
import { makeStyles } from "@mui/styles"
import divImg from '../../img/divBackground.png'
import uniqid from 'uniqid'

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    backgroundImage: `url(${divImg})`,
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
    }
  },
  characteristics: {
    display: 'flex',
    flex: 1,
    backdropFilter: 'blur(3px)',
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      marginTop: '4px',
      marginBottom: '4px',
      padding: '1px'
    }
  }
}))


const Characteristics = () => {
  const classes = useStyles()

  const characteristicsFields = [
    {
      name: 'Strength',
      totalStatName: 'totalStrength',
      id: uniqid()
    },
    {
      name: 'Dexterity',
      totalStatName: 'totalDexterity',
      id: uniqid()
    },
    {
      name: 'Vitality',
      totalStatName: 'totalVitality',
      id: uniqid()
    },
    {
      name: 'Energy',
      totalStatName: 'totalEnergy',
      id: uniqid()
    },

  ]

  return (
    <div className={classes.placing}>
      <div className={classes.characteristics}>
        {characteristicsFields.map((field) => {
          return (
            <CharacteristicsComp
              name={field.name}
              totalStatName={field.totalStatName}
              key={field.id}
            />
          )
        })}
      </div>
      <div className={classes.characteristics}>
        <DamageComp />
        {/* <div>Magic damage: 1000-3000</div> */}
        <AttackRaitingAndDefenseComp />
        <HealthAndStaminaComp />
        <ManaComp />
      </div>
    </div>
  )
}

export default Characteristics