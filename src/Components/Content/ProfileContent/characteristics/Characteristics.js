import React from "react"
import DamageComp from "./DamageComp"
import CharacteristicsComp from "./CharacteristicsComp"
import AttackRaitingAndDefenseComp from "./AttackRaitingAndDefenseComp"
import HealthAndStaminaComp from "./HealthAndStaminaComp"
import ManaComp from "./ManaComp"
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
    }
  },
  characteristicsBorder: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: 'black 1px solid',
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
      name: 'strength',
      totalStatName: 'totalStrength',
      allStatBonus: 'allStrengthBonus'
    },
    {
      name: 'dexterity',
      totalStatName: 'totalDexterity',
      allStatBonus: 'allDexterityBonus'
    },
    {
      name: 'vitality',
      totalStatName: 'totalVitality',
      allStatBonus: 'allVitalityBonus'
    },
    {
      name: 'energy',
      totalStatName: 'totalEnergy',
      allStatBonus: 'allEnergyBonus'
    },

  ]

  return (
    <div className={classes.placing}>
      <div className={classes.characteristicsBorder}>
        {characteristicsFields.map((field, index) => {
          return (
            <CharacteristicsComp
              name={field.name}
              totalStatName={field.totalStatName}
              allStatBonus={field.allStatBonus}
              key={index}
            />
          )
        })}
      </div>
      <div className={classes.characteristicsBorder}>
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