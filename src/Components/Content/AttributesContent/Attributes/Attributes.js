import React from "react"
import Points from "./Points"
import AttributeComp from "./AttributeComp"
import {
  setPhysicalDamage,
  setBlocking,
  setHealthAndStamina,
  setMana,
} from "../../../../Redux/actions"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px ridge #a3a3a3',
    height: '100vh',
    backdropFilter: 'blur(3px)',
  }
}))

const Attributes = (props) => {
  const classes = useStyles()

  const {
    setPhysicalDamage,
    startPhyBonus,
    finalPhyBonus,
    blockingBonus,
    setBlocking,
    setHealthAndStamina,
    setMana
  } = props

  const attributesFields = [
    {
      statName: 'strength',
      totalStatName: 'totalStrength',
      allStatBonus: 'allStrengthBonus',
      action: [() => setPhysicalDamage(startPhyBonus, finalPhyBonus)]
    },
    {
      statName: 'dexterity',
      totalStatName: 'totalDexterity',
      allStatBonus: 'allDexterityBonus',
      action: [() => setBlocking(blockingBonus)]
    },
    {
      statName: 'vitality',
      totalStatName: 'totalVitality',
      allStatBonus: 'allVitalityBonus',
      action: [() => setHealthAndStamina()]
    },
    {
      statName: 'energy',
      totalStatName: 'totalEnergy',
      allStatBonus: 'allEnergyBonus',
      action: [() => setMana()]
    },
  ]

  return (
    <div className={classes.placing}>
      <Points />
      {attributesFields.map((field, index) => {
        return (
          <AttributeComp
            statName={field.statName}
            totalStatName={field.totalStatName}
            allStatBonus={field.allStatBonus}
            action={field.action}
            key={index}
          />
        )
      })}
    </div>
  )
}

Attributes.propTypes = {
  startPhyBonus: PropTypes.number,
  finalPhyBonus: PropTypes.number,
  setPhysicalDamage: PropTypes.func.isRequired,
  setBlocking: PropTypes.func.isRequired,
  setHealthAndStamina: PropTypes.func.isRequired,
  setMana: PropTypes.func.isRequired,
  blockingBonus: PropTypes.number,
}

export default connect(store => {
  return {
    startPhyBonus: store.bonusReducer.allStartPhyBonus,
    finalPhyBonus: store.bonusReducer.allFinalPhyBonus,
    blockingBonus: store.bonusReducer.shieldBonus.info.blockingBonus,
  }
}, {
  setPhysicalDamage,
  setBlocking,
  setHealthAndStamina,
  setMana,
})(Attributes)