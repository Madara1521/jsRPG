import {
  SET_ATTACK_RATING,
  SET_BLOCKING,
  SET_DEFENSE,
  SET_HEALTH_AND_STAMINA,
  SET_MANA,
  SET_PHYSICAL_DAMAGE,
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

  health: 0, // this indicator is affected by the vitality
  stamina: 0,



  mana: 0// this indicator is affected by the energy

}

export const characteristicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_STAT:
      return {
        ...state,
        [action.totalStatName]: action.attributeCurrent + action.bonus
      }
    case SET_PHYSICAL_DAMAGE:
      return {
        ...state,
        startPhyDamage: (state.totalStrength * 4) + action.startPhyBonus,
        finalPhyDamage: (state.totalStrength * 6) + action.finalPhyBonus,
      }
    case SET_ATTACK_RATING:
      return {
        ...state,
        attackRating: (state.totalDexterity * 8) + action.attackRatingBonus
      }
    case SET_DEFENSE:
      return {
        ...state,
        defense: (state.totalDexterity * 4) + action.defenseBonus
      }
    case SET_BLOCKING:
      return {
        ...state,
        blocking: (state.totalDexterity * 2) + action.blockingBonus
      }
    case SET_HEALTH_AND_STAMINA:
      return {
        ...state,
        health: (state.totalVitality * 4),
        stamina: (state.totalVitality * 4)

      }
    case SET_MANA:
      return {
        ...state,
        mana: (state.totalEnergy * 6),
      }
    default:
      return state
  }
}