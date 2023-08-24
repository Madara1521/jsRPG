import React from "react"
import { makeStyles } from "@mui/styles"
import divImg from '../../img/divBackground.png'
import uniqid from 'uniqid'
import SideBonus from "./SideBonus"
import DamageBonus from "./DamageBonus"
import Resistance from "./Resistance"

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
  info: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
    backdropFilter: 'blur(3px)',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      marginTop: '2px',
      marginBottom: '2px',
      padding: '1px'
    }
  }
}))

const GeneralInfo = () => {
  const classes = useStyles()

  const sideBonusFields = [
    {
      name: 'Gold bonus',
      bonusName: 'goldBonus',
      id: uniqid()
    },
    {
      name: 'Magic items bonus',
      bonusName: 'magicItemsBonus',
      id: uniqid()
    },
    {
      name: 'Experience bonus',
      bonusName: 'experienceBonus',
      id: uniqid()
    }
  ]

  const resistanceFields = [
    {
      name: 'Fire Resistance',
      resistName: 'fireResistance',
      id: uniqid()
    },
    {
      name: 'Cold Resistance',
      resistName: 'coldResistance',
      id: uniqid()
    },
    {
      name: 'Lightning Resistance',
      resistName: 'lightiningResistance',
      id: uniqid()
    },
    {
      name: 'Posion Resistance',
      resistName: 'posionResistance',
      id: uniqid()
    },
    {
      name: 'Magic Resistance',
      resistName: 'magicResistance',
      id: uniqid()
    },
  ]

  const damageBonusFields = [
    {
      name: 'Posion damage',
      startDamageBonus: 'startPosionDamage',
      finalDamageBonus: 'finalPosionDamage',
      id: uniqid()
    },
    {
      name: 'Cold damage',
      startDamageBonus: 'startColdDamage',
      finalDamageBonus: 'finalColdDamage',
      id: uniqid()
    },
    {
      name: 'Lightning damage',
      startDamageBonus: 'startLightningDamage',
      finalDamageBonus: 'finalLightningDamage',
      id: uniqid()
    },
    {
      name: 'Fire damage',
      startDamageBonus: 'startFireDamage',
      finalDamageBonus: 'finalFireDamage',
      id: uniqid()
    },
  ]

  return (
    <div className={classes.placing}>
      <div className={classes.info}>
        {sideBonusFields.map((field) => {
          return (
            <SideBonus
              name={field.name}
              bonusName={field.bonusName}
              key={field.id}
            />
          )
        })}
        {damageBonusFields.map((field) => {
          return (
            <DamageBonus
              name={field.name}
              startDamageBonus={field.startDamageBonus}
              finalDamageBonus={field.finalDamageBonus}
              key={field.id}
            />
          )
        })}
      </div>
      <div className={classes.info}>
        {resistanceFields.map((field) => {
          return (
            <Resistance
              name={field.name}
              resistName={field.resistName}
              key={field.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default GeneralInfo