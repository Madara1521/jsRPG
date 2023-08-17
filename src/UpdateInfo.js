import React, { useEffect } from "react"
import App from './App'
import { PropTypes } from 'prop-types'
import { regeneration } from "./helpers/profileHelper"
import { connect } from "react-redux"
import {
  setTottalStat,
  setAllDefense,
  setAllAttackRating,
  setAllPhyBonus,
  setAllBonusStat,
  setHealthAndStamina,
  setMana,
  setAttackRating,
  setDefense,
  setPhysicalDamage,
  setBlocking,
  setRegeneration
} from "./Redux/actions"


const UpdateInfo = (props) => {
  const {
    setTottalStat,
    setAllDefense,
    setAllAttackRating,
    setAllPhyBonus,
    setAllBonusStat,
    setHealthAndStamina,
    setMana,

    strength,
    dexterity,
    vitality,
    energy,

    totalDexterity,
    totalStrength,
    totalVitality,
    totalEnergy,

    allStrengthBonus,
    allDexterityBonus,
    allVitalityBonus,
    allEnergyBonus,

    setAttackRating,
    setDefense,
    setPhysicalDamage,
    setBlocking,
    attackRatingBonus,
    defenseBonus,
    startPhyBonus,
    finalPhyBonus,
    blockingBonus,

    currentHealth,
    maxHealth,
    healthRegeneration,
    setRegeneration,
    currentStamina,
    maxStamina,
    staminaRegeneration,
    currentMana,
    maxMana,
    manaRegeneration
  } = props


  //CHARACTERISTICS REDUCER calculation
  //
  //totalStat
  useEffect(() => {
    setTottalStat('totalStrength', strength, allStrengthBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strength, allStrengthBonus])
  useEffect(() => {
    setTottalStat('totalDexterity', dexterity, allDexterityBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dexterity, allDexterityBonus])
  useEffect(() => {
    setTottalStat('totalVitality', vitality, allVitalityBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vitality, allVitalityBonus])
  useEffect(() => {
    setTottalStat('totalEnergy', energy, allEnergyBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [energy, allEnergyBonus])
  //tottalStat
  //
  //effectsStat
  useEffect(() => {
    setPhysicalDamage(startPhyBonus, finalPhyBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPhyBonus, finalPhyBonus, totalStrength])
  useEffect(() => {
    setAttackRating(attackRatingBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attackRatingBonus, totalDexterity])
  useEffect(() => {
    setBlocking(blockingBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockingBonus, totalDexterity])
  useEffect(() => {
    setDefense(defenseBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defenseBonus, totalDexterity])
  useEffect(() => {
    setHealthAndStamina()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalVitality])
  useEffect(() => {
    setMana()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalEnergy])
  //effectsStat
  //
  //CHARACTERISTICS REDUCER calculation


  //BONUS REDUCER calculation
  useEffect(() => {
    setAllBonusStat()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allStrengthBonus,
    allDexterityBonus,
    allVitalityBonus,
    allEnergyBonus])
  useEffect(() => {
    setAllPhyBonus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPhyBonus,
    finalPhyBonus])
  useEffect(() => {
    setAllDefense()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defenseBonus])
  useEffect(() => {
    setAllAttackRating()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attackRatingBonus])
  //BONUS REDUCER calculation


  //REGENERATION MANA AND HEALTH
  const regenProps = {
    health: {
      element: 'currentHealth',
      current: currentHealth,
      maxCharacteristics: maxHealth,
      coefficient: healthRegeneration,
      regenFunc: setRegeneration
    },
    stamina: {
      element: 'currentStamina',
      current: currentStamina,
      maxCharacteristics: maxStamina,
      coefficient: staminaRegeneration,
      regenFunc: setRegeneration
    },
    mana: {
      element: 'currentMana',
      current: currentMana,
      maxCharacteristics: maxMana,
      coefficient: manaRegeneration,
      regenFunc: setRegeneration
    }
  }
  useEffect(() => {
    if (currentHealth < maxHealth) {
      regeneration(regenProps.health)
    }
    if (currentStamina < maxStamina) {
      regeneration(regenProps.stamina)
    }
    if (currentMana < maxMana) {
      regeneration(regenProps.mana)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxHealth, maxMana, maxStamina])
  //REGENERATION MANA AND HEALTH

  return (
    <div>
      <App />
    </div>
  )
}

UpdateInfo.propTypes = {


  currentHealth: PropTypes.number.isRequired,
  maxHealth: PropTypes.number.isRequired,
  healthRegeneration: PropTypes.number.isRequired,
  currentStamina: PropTypes.number.isRequired,
  maxStamina: PropTypes.number.isRequired,
  staminaRegeneration: PropTypes.number.isRequired,
  currentMana: PropTypes.number.isRequired,
  maxMana: PropTypes.number.isRequired,
  manaRegeneration: PropTypes.number.isRequired,
  setRegeneration: PropTypes.func.isRequired,
}


export default connect(store => {
  return {
    strength: store.attributeReducer.strength,
    dexterity: store.attributeReducer.dexterity,
    vitality: store.attributeReducer.vitality,
    energy: store.attributeReducer.energy,

    allStrengthBonus: store.bonusReducer.allStrengthBonus,
    allDexterityBonus: store.bonusReducer.allDexterityBonus,
    allVitalityBonus: store.bonusReducer.allVitalityBonus,
    allEnergyBonus: store.bonusReducer.allEnergyBonus,

    actionHappened: store.bonusReducer.actionHappened,
    attackRatingBonus: store.bonusReducer.allAttackRatingBonus,
    defenseBonus: store.bonusReducer.allDefenseBonus,
    totalDexterity: store.characteristicsReducer.totalDexterity,
    totalStrength: store.characteristicsReducer.totalStrength,
    totalVitality: store.characteristicsReducer.totalVitality,
    totalEnergy: store.characteristicsReducer.totalEnergy,

    startPhyBonus: store.bonusReducer.allStartPhyBonus,
    finalPhyBonus: store.bonusReducer.allFinalPhyBonus,
    blockingBonus: store.bonusReducer.shieldBonus.info.blockingBonus,

    currentHealth: store.characteristicsReducer.currentHealth,
    maxHealth: store.characteristicsReducer.maxHealth,
    healthRegeneration: store.characteristicsReducer.healthRegeneration,
    currentStamina: store.characteristicsReducer.currentStamina,
    maxStamina: store.characteristicsReducer.maxStamina,
    staminaRegeneration: store.characteristicsReducer.staminaRegeneration,
    currentMana: store.characteristicsReducer.currentMana,
    maxMana: store.characteristicsReducer.maxMana,
    manaRegeneration: store.characteristicsReducer.manaRegeneration,
  }
}, {
  setTottalStat,
  setAllDefense,
  setAllAttackRating,
  setAllPhyBonus,
  setAllBonusStat,
  setHealthAndStamina,
  setMana,
  setAttackRating,
  setDefense,
  setPhysicalDamage,
  setBlocking,
  setRegeneration
})(UpdateInfo)