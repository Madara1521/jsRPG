import React from "react"
import { useStyles } from "../../../Styles"
import { Stack } from '@mui/material'
import Points from "./Points"
import AttributeComp from "./AttributeComp"
import {
  setPhysicalDamage,
  setAttackRating,
  setDefense,
  setBlocking,
  setHealthAndStamina,
  setMana,
} from "../../../../Redux/actions"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const Attributes = (props) => {
  const classes = useStyles()
  const {
    setPhysicalDamage,
    startPhyBonus,
    finalPhyBonus,
    attackRatingBonus,
    blockingBonus,
    defenseBonus,
    setDefense,
    setBlocking,
    setAttackRating,
    setHealthAndStamina,
    setMana
  } = props

  const attributesFields = [
    {
      statName: 'strength',
      totalStatName: 'totalStrength',
      action: [() => setPhysicalDamage(startPhyBonus, finalPhyBonus)]
    },
    {
      statName: 'dexterity',
      totalStatName: 'totalDexterity',
      action: [
        () => setDefense(defenseBonus),
        () => setBlocking(blockingBonus),
        () => setAttackRating(attackRatingBonus)]
    },
    {
      statName: 'vitality',
      totalStatName: 'totalVitality',
      action: [() => setHealthAndStamina()]
    },
    {
      statName: 'energy',
      totalStatName: 'totalEnergy',
      action: [() => setMana()]
    },
  ]

  return (
    <Stack direction='column' spacing={10} className={classes.attribBorder}>
      <Points />
      {attributesFields.map((field, index) => {
        return (
          <AttributeComp
            statName={field.statName}
            totalStatName={field.totalStatName}
            action={field.action}
            key={index}
          />
        )
      })}
    </Stack>
  )
}

Attributes.propTypes = {
  startPhyBonus: PropTypes.number,
  finalPhyBonus: PropTypes.number,
  setPhysicalDamage: PropTypes.func.isRequired,
  setAttackRating: PropTypes.func.isRequired,
  setDefense: PropTypes.func.isRequired,
  setBlocking: PropTypes.func.isRequired,
  setHealthAndStamina: PropTypes.func.isRequired,
  setMana: PropTypes.func.isRequired,
  attackRatingBonus: PropTypes.number,
  defenseBonus: PropTypes.number,
  blockingBonus: PropTypes.number,
}

export default connect(store => {
  return {
    startPhyBonus: store.bonusReducer.weaponBonus.startPhyBonus,
    finalPhyBonus: store.bonusReducer.weaponBonus.finalPhyBonus,
    attackRatingBonus: store.bonusReducer.weaponBonus.attackRatingBonus,
    blockingBonus: store.bonusReducer.shieldBonus.blockingBonus,
    defenseBonus: store.bonusReducer.armorBonus.defenseBonus,
  }
}, {
  setPhysicalDamage,
  setAttackRating,
  setDefense,
  setBlocking,
  setHealthAndStamina,
  setMana,
})(Attributes)