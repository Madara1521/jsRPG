import {
  SET_ATTACK_RATING,
  SET_PHYSICAL_DAMAGE,
  SET_TOTAL_STAT,
} from "../types"


const initialState = {
  totalStrength: 0,
  totalDexterity: 0,
  totalVitality: 0,
  totalEnergy: 0,

  startPhyDamage: 0, // strength
  finalPhyDamage: 0,

  attackRating: 0, // dexterity
  defense: 0,
  blocking: 0, 

  stamina: 0,// vitality
  health: 0,

  mana: 100// energy

}

export const characteristicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_STAT:
      return {
        ...state,
        [action.totalStatName]: action.attributeCurrent + action.bonusAttribute
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
        attackRating: (state.totalDexterity * 8 ) + action.attackRatingBonus
      }
    default:
      return state
  }
}