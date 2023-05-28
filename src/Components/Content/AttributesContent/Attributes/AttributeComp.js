import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { connect } from "react-redux"
import { AttributeButton } from "../../../Header/StyledHeader"
import IconsAttribute from "./IconsAttribute"
import { setHealthAndStamina,
  setDefense, 
  disableButton, 
  incrementStat, 
  setTottalStat, 
  setPhysicalDamage, 
  setAttackRating, 
  setBlocking,
  setMana } from '../../../../Redux/actions'
import { useStyles } from "../../../Styles"
import { PropTypes } from 'prop-types'


const AttributeComp = (props) => {
  const classes = useStyles()
  const {
    totalStatName,
    statName,
    incrementStat,
    disableButton,
    setTottalStat,
    current,
    points,
    isButtonDisabled,
    bonusAttribute,
    setPhysicalDamage,
    startPhyBonus,
    finalPhyBonus,
    totalStrength,
    setAttackRating,
    attackRatingBonus, 
    totalDexterity,
    setDefense,
    defenseBonus,
    setBlocking,
    blockingBonus,
    setHealthAndStamina,
    totalVitality,
    setMana,
    totalEnergy } = props

  useEffect(() => {
    setTottalStat(totalStatName, current, bonusAttribute)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, bonusAttribute])  // counts all attributes and sends them to the store

  useEffect(() => {
    setPhysicalDamage(startPhyBonus, finalPhyBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalStrength, bonusAttribute]) // monitors strength attribute changes to change physical damage

  useEffect(() => {
    setDefense(defenseBonus)
    setBlocking(blockingBonus)
    setAttackRating(attackRatingBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalDexterity]) // tracks agility attribute changes to change defense, attack rating and blocking

  useEffect(() => {
    setHealthAndStamina()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalVitality])

  useEffect(() => {
    setMana()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalEnergy])

  const addAttribute = () => {
    incrementStat(statName)

    if (points === 1) {
      disableButton()
    }
  }



  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        {statName.charAt(0).toUpperCase() + statName.slice(1)}
      </div>
      <div className={classes.attribCont}>
        {current}
      </div>
      <div>
        <AttributeButton onClick={() => addAttribute()} disabled={isButtonDisabled}>
          <IconsAttribute />
        </AttributeButton>
      </div>
    </Stack>
  )
}

AttributeComp.propTypes = {
  current: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  startPhyBonus: PropTypes.number.isRequired,
  finalPhyBonus: PropTypes.number.isRequired,
  isButtonDisabled: PropTypes.bool,
  bonusAttribute: PropTypes.number.isRequired,
  totalStatName: PropTypes.string.isRequired,
  statName: PropTypes.string.isRequired,
  incrementStat: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
  setTottalStat: PropTypes.func.isRequired,
  setPhysicalDamage: PropTypes.func.isRequired,
  setAttackRating: PropTypes.func.isRequired,
  setDefense: PropTypes.func.isRequired,
  setBlocking: PropTypes.func.isRequired,
  setHealthAndStamina: PropTypes.func.isRequired,
  setMana: PropTypes.func.isRequired,
  totalStrength: PropTypes.number.isRequired,
  totalDexterity: PropTypes.number.isRequired,
  totalVitality: PropTypes.number.isRequired,
  totalEnergy: PropTypes.number.isRequired,
  attackRatingBonus: PropTypes.number.isRequired,
  defenseBonus: PropTypes.number.isRequired,
  blockingBonus: PropTypes.number.isRequired,
}

export default connect((store, ownProps) => {
  return {
    bonusAttribute: store.bonusReducer.armorBonus[ownProps.statName],
    current: store.attributeReducer[ownProps.statName],
    points: store.attributeReducer.points,
    isButtonDisabled: store.attributeReducer.isButtonDisabled,
    startPhyBonus: store.bonusReducer.weaponBonus.startPhyBonus,
    finalPhyBonus: store.bonusReducer.weaponBonus.finalPhyBonus,
    attackRatingBonus: store.bonusReducer.weaponBonus.attackRatingBonus,
    blockingBonus: store.bonusReducer.shieldBonus.blockingBonus,
    defenseBonus: store.bonusReducer.armorBonus.defenseBonus,
    totalStrength: store.characteristicsReducer.totalStrength,
    totalDexterity: store.characteristicsReducer.totalDexterity,
    totalVitality: store.characteristicsReducer.totalVitality,
    totalEnergy: store.characteristicsReducer.totalEnergy,
  }
}, {
  disableButton,
  incrementStat,
  setTottalStat,
  setPhysicalDamage,
  setAttackRating,
  setDefense,
  setBlocking,
  setHealthAndStamina,
  setMana
})(AttributeComp)