import React, { useEffect } from "react"
import App from './App'
import { PropTypes } from 'prop-types'
import { regeneration } from "./helpers/updateInfoHelper"
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
  setRegeneration,
  resetRegeneration
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
    manaRegeneration,

    actionHappened,
    resetRegeneration
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
  }, [actionHappened])
  useEffect(() => {
    setAllPhyBonus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionHappened])
  useEffect(() => {
    setAllDefense()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionHappened])
  useEffect(() => {
    setAllAttackRating()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionHappened])
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

    if (currentHealth > maxHealth) {
      resetRegeneration('currentHealth', maxHealth)
    }
    if (currentStamina > maxStamina) {
      resetRegeneration('currentStamina', maxStamina)
    }
    if (currentMana > maxMana) {
      resetRegeneration('currentMana', maxMana)
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
  strength: PropTypes.number.isRequired,
  dexterity: PropTypes.number.isRequired,
  vitality: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,

  allStrengthBonus: PropTypes.number.isRequired,
  allDexterityBonus: PropTypes.number.isRequired,
  allVitalityBonus: PropTypes.number.isRequired,
  allEnergyBonus: PropTypes.number.isRequired,

  actionHappened: PropTypes.string.isRequired,
  attackRatingBonus: PropTypes.number.isRequired,
  defenseBonus: PropTypes.number.isRequired,
  totalDexterity: PropTypes.number.isRequired,
  totalStrength: PropTypes.number.isRequired,
  totalVitality: PropTypes.number.isRequired,
  totalEnergy: PropTypes.number.isRequired,

  startPhyBonus: PropTypes.number.isRequired,
  finalPhyBonus: PropTypes.number.isRequired,
  blockingBonus: PropTypes.number,

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

  setTottalStat: PropTypes.func.isRequired,
  setAllDefense: PropTypes.func.isRequired,
  setAllAttackRating: PropTypes.func.isRequired,
  setAllPhyBonus: PropTypes.func.isRequired,
  setAllBonusStat: PropTypes.func.isRequired,
  setHealthAndStamina: PropTypes.func.isRequired,
  setMana: PropTypes.func.isRequired,
  setAttackRating: PropTypes.func.isRequired,
  setDefense: PropTypes.func.isRequired,
  setPhysicalDamage: PropTypes.func.isRequired,
  setBlocking: PropTypes.func.isRequired
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
  setRegeneration,
  resetRegeneration
})(UpdateInfo)