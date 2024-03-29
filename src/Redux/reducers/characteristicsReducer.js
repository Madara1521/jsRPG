import update from 'immutability-helper'

import {
  RESET_REGENERATION,
  SET_ATTACK_RATING,
  SET_BLOCKING,
  SET_DEFENSE,
  SET_HEALTH_AND_STAMINA,
  SET_MANA,
  SET_PHYSICAL_DAMAGE,
  SET_REGENERATION,
  SET_TOTAL_STAT,
} from "../types"

const initialState = {
  totalStrength: 0,
  totalDexterity: 0,
  totalVitality: 0,
  totalEnergy: 0,

  startPhyDamage: 0, // this indicator is affected by the strength
  finalPhyDamage: 0,

  attackRating: 0, // this indicator is affected by the dexterity
  defense: 0,
  blocking: 0,

  maxHealth: 20, // this indicator is affected by the vitality
  currentHealth: 1,
  healthRegeneration: 0.5,
  maxStamina: 20,
  currentStamina: 1,
  staminaRegeneration: 0.8,

  maxMana: 30,// this indicator is affected by the energy
  currentMana: 1,
  manaRegeneration: 0.3
}

export const characteristicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_STAT:
      return update(state, {
        [action.totalStatName]: { $set: action.attributeCurrent + action.bonus }
      })
    case SET_PHYSICAL_DAMAGE:
      return update(state, {
        startPhyDamage: { $set: (state.totalStrength * 4) + action.startPhyBonus },
        finalPhyDamage: { $set: (state.totalStrength * 6) + action.finalPhyBonus }
      })
    case SET_ATTACK_RATING:
      return update(state, {
        attackRating: { $set: (state.totalDexterity * 8) + action.attackRatingBonus }
      })
    case SET_DEFENSE:
      return update(state, {
        defense: { $set: (state.totalDexterity * 4) + action.defenseBonus }
      })
    case SET_BLOCKING:
      return update(state, {
        blocking: { $set: (state.totalDexterity * 2) + action.blockingBonus }
      })
    case SET_HEALTH_AND_STAMINA:
      return update(state, {
        maxHealth: { $set: (state.totalVitality * 4) },
        maxStamina: { $set: (state.totalVitality * 4) }
      })
    case SET_MANA:
      return update(state, {
        maxMana: { $set: state.totalEnergy * 6 }
      })
    case SET_REGENERATION:
      return update(state, {
        [action.element]: { $set: action.currentAttribute }
      })
    case RESET_REGENERATION:
      return update(state, {
        [action.element]: { $set: action.maxAttribute }
      })
    default:
      return state
  }
}